let ListRow = function (dna) {

    // Seed
    let RNA = this
    let row = {
        rowid: 0,
        order: 0,
        label: '',
        child: false, // another list attached to this row
    }

    // Workers
    RNA.UpdateLabel = label => RNA.label = label
    RNA.UpdateOrder = order => RNA.order = order
    RNA.AttachChild = child => RNA.child = child
    RNA.RemoveChild = child => RNA.child = false

    // Polymerase
    RNA = Object.assign( RNA, row, dna )

}


let EditableList = function (dna) {

    // Seed
    let RNA  = this
    RNA.rows = []

    // API
    RNA.getList    = f => RNA.GetOrderedList(f)
    RNA.createItem = label => RNA.Row_CreateNew(label)
    RNA.updateItem = item  => RNA.Row_UpdateLabel(item)
    RNA.deleteItem = item  => RNA.Row_Delete(item)

    // Workers
    RNA.GetNewValue = v => RNA.GetMaxValue(v) *1 +1;
    RNA.GetMaxValue = v => {
        let extract = RNA.rows.map(row=>row[v])
        let maximum = Math.max(...extract, 0)
        return maximum
    }
    RNA.GetIndexById = id => {
        let extract = RNA.rows.map(row=>row.rowid)
        let indexof = extract.indexOf(id)
        return indexof
    }
    RNA.Row_CreateNew = label => {
        let rowid = RNA.GetNewValue('rowid')
        let order = RNA.GetNewValue('order')
        const row = new ListRow({ rowid, order, label })
        RNA.rows.push(row)
        return row
    }
    RNA.Row_Delete  = row => {
        let {rowid} = row
        let index = RNA.GetIndexById(rowid)
        if (index===false) return false // nothing to delete
        RNA.rows.splice(index,1)
        return true
    }
    RNA.Row_UpdateLabel = row => {
        let {rowid, label} = row
        let index = RNA.GetIndexById(rowid)
        if (index===false) return false // nothing to update
        RNA.rows[index].UpdateLabel(label)
    }
    RNA.GetOrderedList = f => {
        let rule = (a,b) => a.order > b.order
        let list = [...RNA.rows].sort(rule)
        return list
    }

    // Polymerase
    Object.assign(RNA, dna)

}

export default EditableList
