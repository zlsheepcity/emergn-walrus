let RowModel = function (protein) {

    // Seed
    let RNA = this
    let row = {
        rowid: 0,
        order: 0,
        label: '',
        child: false, // sub-level list
    }

    // Workers
    RNA.UpdateLabel = label => RNA.label = label
    RNA.UpdateOrder = order => RNA.order = order
    RNA.AttachChild = child => RNA.child = child
    RNA.RemoveChild = child => RNA.child = false

    // Transcription
    RNA = Object.assign( RNA, row, protein )

}
let EditableList = function (protein) {

// ---------------------------- // Seed

    let RNA  = this
    RNA.mRna = RowModel
    RNA.rows = []

// ---------------------------- // API

    RNA.getList    = f  => RNA.GetOrderedList(f)
    RNA.getItem    = id => RNA.Row_Extract({rowid:id})
    RNA.addLabel   = label => RNA.Row_Create({label}) // shortcut
    RNA.createItem = item  => RNA.Row_Create(item)
    RNA.updateItem = item  => RNA.Row_UpdateLabel(item)
    RNA.deleteItem = item  => RNA.Row_Delete(item)

// ---------------------------- // Workers

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
    RNA.Row_Create = item => {
        let  rowid = RNA.wGetNewValue('rowid')
        let  order = RNA.wGetNewValue('order')
        let  model = RNA.mRna
        const rows = RNA.rows
        let create = new model({ ...item, rowid, order })
        rows.push(create)
        return create
    }
    RNA.Row_Delete    = item => {
        let { rowid } = item
        const rows    = RNA.rows
        const index   = RNA.wGetIndexById(rowid)
        if  ( index === false ) return false
        else  rows.splice( index, 1 )
    }
    RNA.Row_Extract = item => {
        let   {rowid} = item
        const  index  = RNA.wGetIndexById(rowid)
        return index!== false ? RNA.rows[index] : {empty:true}
    }
    RNA.Row_UpdateLabel = item => {
        let { rowid, label } = item
        const xrows = RNA.rows.filter( o => o.rowid===rowid )
        xrows.forEach( row => row.UpdateLabel(label) )
    }
    RNA.GetOrderedList = f => {
        let rule = (a,b) => a.order > b.order
        let list = [...RNA.rows].sort(rule)
        return list
    }

// ---------------------------- // Transcription

    let DNA = {
        list: [], // initial values
    }

    RNA = Object.assign( RNA, DNA, protein )
    RNA.list.forEach( item => RNA.createItem(item) )

}

// ---------------------------- // export ready

export default EditableList
