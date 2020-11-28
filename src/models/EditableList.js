let ListRow = function (dna) {

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
    RNA = Object.assign( RNA, row, dna )

}


let EditableList = function (dna) {

// ---------------------------- // Seed

    let RNA  = this
    RNA.mRna = ListRow
    RNA.rows = []

// ---------------------------- // API

    RNA.getList    = f => RNA.GetOrderedList(f)
    RNA.addLabel   = label => RNA.Row_Create({label}) // shortcut
    RNA.createItem = item  => RNA.Row_Create(item)
    RNA.updateItem = item  => RNA.Row_UpdateLabel(item)
    RNA.deleteItem = item  => RNA.Row_Delete(item)

// ---------------------------- // Workers

    RNA.GetNewValue = v => RNA.GetMaxValue(v) *1 +1;
    RNA.GetMaxValue = v => {
        let extract = RNA.rows.map( row=>row[v] )
        let maximum = Math.max(...extract, 0)
        return maximum
    }
    RNA.GetIndexById = id => {
        let extract = RNA.rows.map( row=>row.rowid )
        let indexof = extract.indexOf(id)
        return indexof
    }
    RNA.Row_Create = item => {
        let  rowid = RNA.GetNewValue('rowid')
        let  order = RNA.GetNewValue('order')
        let  Model = RNA.mRna
        const rows = RNA.rows
        let create = new Model({ ...item, rowid, order })
        rows.push(create)
        return create
    }
    RNA.Row_Delete    = item => {
        let { rowid } = item
        const rows    = RNA.rows
        const index   = RNA.GetIndexById(rowid)
        if  ( index === false ) return false
        else  rows.splice( index, 1 )
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

    RNA = Object.assign( RNA, dna )

    if (dna && dna.list && dna.list.length) {
        dna.list.forEach(item=>RNA.createItem(item))
    }

}

// ---------------------------- // export ready

export default EditableList
