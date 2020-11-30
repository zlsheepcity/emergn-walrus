let RowModel = function (protein) {
    let RNA = this
    let DNA = {
        rowid: 0,
        order: 0,
        label: '',
        child: false,
    }

    RNA.UpdateLabel = label => RNA.label = label
    RNA.UpdateOrder = order => RNA.order = order
    RNA.AttachChild = child => RNA.child = child
    RNA.RemoveChild = child => RNA.child = false

    RNA = Object.assign( RNA, DNA, protein )
}
let EditableList = function (protein) {

// ---------------------------- // Seed

    let RNA = this
    let DNA = {
        mRna: RowModel,
        list: [], // import rows
        rows: [], // export rows
    }

// ---------------------------- // API

    RNA.GetList    = f     => RNA.GetOrderedList(f)
    RNA.GetItem    = id    => RNA.Item_Read({rowid:id})
    RNA.CreateList = list  => RNA.List_Create(list)
    RNA.CreateItem = item  => RNA.Item_Create(item)
    RNA.DeleteItem = item  => RNA.Item_Delete(item)
    RNA.UpdateItem = item  => RNA.Item_Update(item)
    RNA.DB = {
        UpdateList:  list => false,
        UpdateItem:  item => false,
        DeleteItem:  item => false,
    }

// ---------------------------- // Workers

    RNA.List_Create = datalist => {
        let { list = [], rows, ...tRna } = datalist
        let apply_source = Object.assign( RNA, DNA, tRna )
        let extract_list = [...list].map(RNA.CreateItem)
        RNA.DB.UpdateList(RNA)
    }

    RNA.Item_Create = item => {
        let  rowid = RNA.wGetNewValue('rowid')
        let  order = RNA.wGetNewValue('order')
        let  model = RNA.mRna
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
            row.AttachChild(child)
            row.list = [] // extracted
        }
        RNA.DB.UpdateItem(row)
    }

    RNA.Item_Delete   = item => {
        let { rowid } = item
        const index   = RNA.wGetIndexById(rowid)
        if  ( index === false ) return false
        RNA.rows.splice( index, 1 )
        RNA.DB.DeleteItem( {rowid} )
    }

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

    RNA.GetOrderedList = f => {
        let rule = (a,b) => a.order > b.order
        let list = [...RNA.rows].sort(rule)
        return list
    }


// ---------------------------- // Transcription


    RNA = Object.assign( RNA, DNA, protein )
    RNA.CreateList(RNA)

}

// ---------------------------- // export ready

export default EditableList
