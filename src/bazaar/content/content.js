// Load data

let static_data = {}

// *issue store and load content-lists
import ExampleList  from "@/models/ExampleList"
static_data = { ...static_data, ...ExampleList }

// Create API

let bazaar_content_model = function (protein) {

// ---------------------------- // Seed

    let RNA = this
    let DNA = {}

// ---------------------------- // API

    RNA.IndustryList = f=>RNA.getStaticDataRow('YourIndustry')
    RNA.FocusLOBList = f=>RNA.getStaticDataRow('PrimaryFocusLOB')

// ---------------------------- // Workers

    RNA.getStaticDataRow = rowid => {
        return { ...static_data[rowid] }
    }

// ---------------------------- // Transcription


    RNA = Object.assign( RNA, DNA, protein )

}

// ---------------------------- // export ready

let content = new bazaar_content_model()
export default content
