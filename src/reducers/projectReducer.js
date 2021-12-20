import {FETCH_DATA_ERROR,FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST} from '../reducers/dataTypes'

export const initialState={
  "id": "",
  "category_title": [
      "Web GIS and Data Visualization"
  ],
  "category_description": [
      "<p>We provide digital solutions that contribute to data collection, management and visualization. We positively discourage the use of paper based data collection methods and provide tablet based solutions for geo-tagged data collection. For organizations that have data already, we provide solutions to digitize them, import into databases and make better use of the data via web systems. We build applications which enables the users to visualize the data in web maps and charts.</p>"
  ],
  "focus_area": [],
  "photo": "https://admin.naxa.com.np/media/pics/DVSPhaseI_3Kg7NY2.png",
  "title": "Web-based dynamic Data Visualization System (DVS)",
  "subtitle": "A highly interactive data visualization dashboard consolidating information from all DFID Nepal programs.",
  "clients": "DFID (Department for International Development)",
  "start_date": "2019-05-09",
  "end_date": "2020-02-15",
  "description": "<p>The Data Visualization System (DVS) developed for DFID is a web-based map-centric visualization of DFID internal project data, demographic data and budget/spending data in Nepal. To get ahead from bulky data-tables and allow dynamic visualization of the data accessible to everyone, a web-based visualization system was developed for DFID. This platform allows graphical visualization of socio-economic, infrastructure-related and project output datasets over maps and charts.&nbsp;</p>\r\n\r\n<p>The objective of the DVS is to test a digital system that will help ensure that DFID Nepal&rsquo;s investment in data and evidence collection in Nepal is used and learned from as effectively as possible both internally and externally. The system aims to assist decision making in different cycles of program management, across different levels by providing an interactive, visual and analytical platform to answer development-related policy and research questions relevant to DFID, other DP&rsquo;s and GoN.&nbsp;The technical team at NAXA and Toggle Corps worked with the project team at DFID in 2019 to update the previously developed DVS platform with major analytical features under this contract.</p>\r\n\r\n<p>The technical team provided the following major services :</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Developed a data visualization tool, a working data visualization system using provincial and program data for early user engagement to gather user needs and requirements.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Developed system to catalogue identified data sets, including metadata, search tags and data/file formats.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Development of&nbsp; 10 dashboards consisting of different data visualizations/infographics.</p>\r\n\t</li>\r\n</ul>",
  "is_key_highlight": true,
  "project_order": 7,
  "created_at": "2020-12-16T12:19:56.356459+05:45",
  "updated_at": "2021-01-08T11:06:28.444640+05:45",
  "ongoing": false,
  "project_url": null,
  "is_international_projects": false,
  "category": [
      12
  ]

}
//Combine reducer middleware all are on index.js file.

export const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            console.log(initialState);
            return {
              ...initialState,
              loading: true,
            };
        case FETCH_DATA_SUCCESS:
           console.log(action.payload)
            return {
                ...initialState,
                data: action.payload,               
                loading: false,
              };
         case FETCH_DATA_ERROR:
                return {
                  ...initialState,
                  loading: false,
                  errorMessage: action.error,
                };
          default:
              return initialState;
              

    }


}
export default projectReducer
