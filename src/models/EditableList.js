/** walrus → EditableList

    ## 2020.12.1 установка по сортировке

    Получатели списков используют GetItems().
    Внутри функции описаны правила сортировки.

    Надо добавить функции для Item Reorder.

*/

let EditableList = function (protein) {

// ---------------------------- // Describe item

    let ItemModel = function (protein) {

        let RNA = this
        let DNA = {
            rowid: 0,
            order: 0,
            label: '',
            child: false,
        }

        RNA.UpdateLabel = label => RNA.label = label
        RNA.UpdateOrder = order => RNA.order = order
        RNA.CreateChild = child => RNA.child = child

        RNA = Object.assign( RNA, DNA, protein )
    }

// ---------------------------- // Seed

    let RNA = this
    let DNA = {
        mRna: ItemModel,
        list: [], // import rows
        rows: [], // export rows
    }

// ---------------------------- // API

    RNA.ExportList = f     => RNA.CurrentListExport(f)
    RNA.GetItems   = f     => RNA.GetOrderedList(f)
    RNA.GetItem    = id    => RNA.Item_Read({rowid:id})
    RNA.CreateList = list  => RNA.List_Create(list)
    RNA.CreateItem = item  => RNA.Item_Create(item)
    RNA.DeleteItem = item  => RNA.Item_Delete(item)
    RNA.UpdateItem = item  => RNA.Item_Update(item)
    RNA.MoveItemUp = item  => RNA.Item_MoveUp(item)
    RNA.MoveItemDown = item  => RNA.Item_MoveDown(item)

    // DB API

    RNA.DB = {
        UpdateList:  list => false,
        UpdateItem:  item => false,
        DeleteItem:  item => false,
        MoveItemUp:  item => false,
        MoveItemDown:  item => false,
    }

// ---------------------------- // Workers


    // helpers

    RNA.wGetNewValue = v => RNA.wGetMaxValue(v) *1 +1;
    RNA.wGetMaxValue = v => {
        let extract = RNA.rows.map( row=>row[v] )
        let maximum = Math.max(...extract, 0)
        return maximum
    }
    RNA.wGetIndexById = id => {
        let extract = RNA.rows.map( row=>row.rowid )
        let indexof = extract.indexOf(id)
        return indexof
    }

    // actions

    RNA.List_Create = datalist => {
        let { list = [], rows, ...tRna } = datalist
        let apply_source = Object.assign( RNA, DNA, tRna )
        let extract_list = [...list].map(RNA.CreateItem)

        RNA.DB.UpdateList(RNA)
    }

    RNA.Item_Create = item => {
        const rowid = RNA.wGetNewValue('rowid')
        const order = RNA.wGetNewValue('order')
        const model = RNA.mRna

        let create = new model({ ...item, rowid, order })
        let insert = RNA.rows.push(create)
        let update = RNA.UpdateItem({rowid})
    }

    RNA.Item_Read = item => {
        let   {rowid} = item
        const  index  = RNA.wGetIndexById(rowid)
        return index!== false ? RNA.rows[index] : {empty:true}
    }

    RNA.Item_Update = item => {
        let { rowid, label, list } = item
        let row     = RNA.GetItem(rowid)
        let sublist = list || row.list || []

        if (label) row.UpdateLabel(label)

        if (sublist.length && RNA.constructor) {
            let seed  = { list:sublist, caption:row.label }
            let child = new RNA.constructor(seed)
            row.CreateChild(child)
            row.list = [] // extracted
        }

        RNA.DB.UpdateItem(row)
    }

    RNA.Item_Delete   = item => {
        let { rowid } = item
        const index   = RNA.wGetIndexById(rowid)

        if  ( index === false ) return false

        RNA.rows.splice( index, 1 ) // no more

        RNA.DB.DeleteItem( {rowid} )
    }

    RNA.Item_MoveUp = item => {
        let { rowid } = item
        const index   = RNA.wGetIndexById(rowid)

        if  ( index === false ) return false
        
        const previousItemLabel = RNA.rows[index - 1].label
        RNA.rows[index - 1].label = RNA.rows[index].label
        RNA.rows[index].label = previousItemLabel

        RNA.DB.MoveItemUp( {rowid} )
    }

    RNA.Item_MoveDown = item => {
        let { rowid } = item;
        const index   = RNA.wGetIndexById(rowid);

        if  ( index === false ) return false;
        
        const nextItemLabel = RNA.rows[index + 1].label;
        RNA.rows[index + 1].label = RNA.rows[index].label;
        RNA.rows[index].label = nextItemLabel;

        RNA.DB.MoveItemDown( {rowid} )
    }
    
    // export

    RNA.GetOrderedList = f => {
        let rule = (a,b) => a.order > b.order
        let list = [...RNA.rows].sort(rule)
        return list
    }

    RNA.CurrentListExport = f => {
        let caption = RNA.caption
        let additem = item => { return {
            id:    item.rowid || '',
            label: item.label || '',
        }}
        let addlist = item => {
            let list = item.child ? item.child.rows.map(additem) : []
            if (list.length) return { ...additem(item), list }
            else             return { ...additem(item) }
        }
        let list = RNA.rows.map(addlist)
        return {
            caption,
            list,
        }
    }


// ---------------------------- // Transcription


    RNA = Object.assign( RNA, DNA, protein )
    RNA.CreateList(RNA)

}

// ---------------------------- // export ready

export default EditableList
