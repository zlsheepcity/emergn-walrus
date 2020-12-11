// Load data

// *issue temporary solution
import connected_data  from "@/models/ExampleList"

// Create API

let bazaar_content_model = function (protein) {

// ---------------------------- // Seed

    let RNA = this
    let DNA = {}

// ---------------------------- // API

    RNA.IndustryList = f=>RNA.getDataRow('YourIndustry')
    RNA.FocusLOBList = f=>RNA.getDataRow('PrimaryFocusLOB')

// ---------------------------- // Workers

    RNA.getDataRow = rowid => {
        return { ...connected_data[rowid] }
    }

// ---------------------------- // Transcription


    RNA = Object.assign( RNA, DNA, protein )

}

// ---------------------------- // export ready

let content = new bazaar_content_model()
export default content
