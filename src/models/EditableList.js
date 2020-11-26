let ListRow = function (dna) {

    // Seed
    let RNA = this
    let row = {
        rowId: 0,
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

    // Workers
    RNA.GetNewValue = v => RNA.GetMaxValue(v) *1 +1;
    RNA.GetMaxValue = v => {
        let current = 0
        let search  = row => { if (current<row[v]) current=row[v] }
        RNA.rows.map(search)
        return current
    }
    RNA.CreateNewRow = label => {
        let rowId = RNA.GetNewValue('rowId')
        let order = RNA.GetNewValue('order')
        const row = new ListRow({ rowId, order, label })
        RNA.rows.push(row)
    }
    RNA.GetOrderedList = f => {
        let rule = (a,b) => a.order > b.order
        let list = [...RNA.rows].sort(rule)
        return list
    }
    RNA.GetRowIndexById = id => {
        let index  = false
        let search = (row, i) => { if (id===row.rowId) index=i }
        RNA.rows.map(search)
        return index
    }
    RNA.UpdateLabel = row => {
        let {rowId, label} = row
        let index = RNA.GetRowIndexById(rowId)
        if (index===false) return false // nothing to update
        RNA.rows[index].UpdateLabel(label)
    }
    RNA.DeleteRow = row => {
        let {rowId} = row
        let index = RNA.GetRowIndexById(rowId)
        if (index===false) return false // nothing to delete
        RNA.rows.splice(index,1)
    }

    // API

    RNA.getList    = RNA.GetOrderedList
    RNA.createItem = RNA.CreateNewRow
    RNA.updateItem = RNA.UpdateLabel
    RNA.deleteItem = RNA.DeleteRow

// ---------------------------- POLYMERASE

    Object.assign(RNA, dna)

}

export default EditableList
