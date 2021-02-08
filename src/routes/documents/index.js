module.exports = ({ project_name, project_industry, country, city, client_name, client_code_name,
                      client_phone,client_email, project_start_date, project_end_date, problem_space,
                      approach, idea, impact}) => {

    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
       <style>
          body {
                overflow-x: hidden;
                font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            }
            
             .invoice-box {
             max-width: 80%;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             /*font-family: Algerian;*/
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: left;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #666565;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             
             .table-top-section{
             background-color: #6e6f70;
             }
             .item{
             text-align: left;
             }
             
             @media only screen and (max-width: 600px) {
             
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
       <div class="table-responsive">
          <div class="invoice-box">
<!--             <table cellpadding="0" cellspacing="0">-->
              <table class="table table-fixed">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr class="table-top-section">
                            <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table class="table table-hover table-fixed">
                         <tr>
                            <td>
                               Project name: ${project_name}
                            </td>
                            </tr>
                <tr class="item">
                            <td>
                               Client Name: ${client_name}
                            </td></tr>
                <tr class="item">
                             <td>
                               Industry: ${project_industry}
                            </td></tr>
                <tr class="item">
                             <td>
                               country: ${country}
                            </td> </tr>
                <tr class="item">
                            <td>
                               city: ${city}
                            </td> </tr>
                <tr class="item">
                            <td>
                               client_code_name: ${client_code_name}
                            </td></tr>
                <tr class="item">
                             <td>
                               client_code_name: ${client_code_name}
                            </td> </tr>
                <tr class="item">
                            <td>
                               client_phone: ${client_phone}
                            </td> </tr>
                <tr class="item">
                            <td>
                               client_email: ${client_email}
                            </td> </tr>
                <tr class="item">
                            <td>
                               project_start_date: ${project_start_date}
                            </td></tr>
                <tr class="item">
                            <td>
                               project_end_date: ${project_end_date}
                            </td>
                            
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="item">
                   <td>Problem Space:</td>
                   <td style="text-align:left">${problem_space}</td>
                </tr>
                <tr class="item">
                   <td>Approach:</td>
                   <td style="text-align:left">${approach}</td>
                </tr>
                 <tr class="item">
                   <td>Idea:</td>
                   <td style="text-align:left">${idea}</td>
                </tr>
                <tr class="item">
                   <td>Impact:</td>
                   <td style="text-align:left">${impact}</td>
                </tr>
             </table>
             <br />
            
          </div>
          </div>
    <!-- end od main table division-->
       </body>
    </html>
    `;
};
