declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (

            <div class="container">
                <div>
                    <img src="https://trackcovidcount.netlify.app/static/media/image.d7265326.png" alt="TrackCorona" />
                </div>

                <div class="jumbotron">
                    <strong>Guidelines for international arrivals</strong>
i. Before boarding, all travelers shall give an undertaking that they would undergo mandatory quarantine for 14 days - 7 days paid institutional quarantine at their own cost, followed by 7 days isolation at home with self-monitoring of health.
ii. Only for exceptional and compelling reasons such as cases of human distress, pregnancy, death in the family, serious illness, and parent(s) accompanied by children below 10 years, as assessed by the receiving states, home quarantine may be permitted for 14 days. The use of the Aarogya Setu app shall be mandatory in such cases.
iii. Dos and Don'ts shall be provided along with tickets to the travelers by the agencies concerned.
iv. All passengers shall be advised to download the Arogya Setu app on their mobile devices.
v. At the time of boarding the flight/ ship, only asymptomatic travelers will be allowed to board after the thermal screening.
vi. Passengers arriving through the land borders will also have to undergo the same protocol as above, and only those who are asymptomatic will be enabled to cross the border into India.
vii. Self-declaration form in duplicate shall be filled by the person in the flight/ship and a copy of the same will be given to Health and Immigration officials present at the airport/ seaport/ Iandport. The form may also be made available on the Aarogya Setu app.
viii. Suitable precautionary measures such as environmental sanitation and disinfection shall be ensured at the airports as well as within the flights.
ix. During boarding and at the airports, all possible measures to ensure social distancing to be ensured.
x. Suitable announcement about COVID-19 including precautionary measures to be followed shall be made at airports/port and in flights/ships and during transit.
xi. While onboard the flight/ ship, required precautions such as wearing masks, environmental hygiene, respiratory hygiene, hand hygiene, etc. are to be observed by airline/ ship staff, crew, and all passengers.
xii. On arrival, thermal screening would be carried out in respect of all the passengers by the Health officials present at the airport/ seaport/ Iandport.
xiii. The passengers found to be symptomatic during screening shall be immediately isolated and taken to a medical facility as per health protocol.
xiv. The remaining passengers shall be taken to suitable institutional quarantine facilities, to be arranged by the respective State/ UT Governments.
xv. These passengers shall be kept under institutional quarantine for a minimum period of 7 days. They shall be tested as per ICMR protocol available at
https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf
If they test positive, they shall be assessed clinically.
a. If they are assessed as mild cases, they will be allowed home isolation or isolated in the COVID Care Centre (both public &amp; private facilities) as appropriate.
b. Those having moderate or severe symptoms will be admitted to dedicated COVID
Health facilities and managed accordingly.
If found negative, they shall be advised to further isolate themselves at home and self-monitor
their health for 7 days.
xvi. In case, any symptoms develop they shall inform the district surveillance officer or the
state/national call center (1075).
<strong>NOTE: States can also develop their own protocol with regards to quarantine and isolation</strong>
                    <strong>as per their assessment.</strong>
                </div>

                <div class="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dUyTvfNHZXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>


                <div class="jumbotron">
                    <p>
                        <strong>Guidelines for domestic travel (air/train/inter-state bus travel)</strong>
1) Dos and Don'ts shall be provided along with tickets to the travellers by the agencies concerned.
2) All passengers shall be advised to download Arogya Setu app on their mobile devices.
3) Suitable announcement about COVID-19 including precautionary measures to be followed shall be made at airports/railway station/bus terminals and in flights/trains/bus.
4) The States/UTs shall ensure that all passengers shall undergo thermal screening at the point of departure and only asymptomatic passengers are allowed to board the flight/train/bus.
5) During boarding and travel, all passengers shall use face covers/mask. They will also follow hand hygiene, respiratory hygiene and maintain environmental hygiene.
6) At airports/railway stations/ bus terminals required measures to ensure social distancing shall be taken.
7) Airports/railway stations/bus terminals should be regularly sanitized/disinfected and availability of soaps and sanitizers shall be ensured.
8) Thermal screening at exit point shall be arranged.
9) Asymptomatic passengers will be permitted to go with the advice that they shall self-monitor their health for 14 days. In case, they develop any symptoms, they shall inform the district surveillance officer or the state/national call center (1075).
10) Those found symptomatic will be isolated and taken to the nearest health facility. They will be assessed for clinical severity at the health facility.
11) Those having moderate or severe symptoms will be admitted to dedicated COVID Health facilities and managed accordingly.
12) Those having mild symptoms will be given the option of home isolation or isolated in the Covid Care Centre (both public &amp; private facilities) as appropriate and tested as per ICMR protocol available at https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf.
If positive, they will continue in COVID Care Centre and will be managed as per clinical protocol.
If negative, the passenger may be allowed to go home, isolate himself/herself and self-monitor his/her health for further 7 days. In case, any symptoms develop they shall inform the district surveillance officer or the state/national call center (1075).
NOTE: States can also develop their own protocol with regards to quarantine and isolation as per their assessment.
                    </p>
                </div>

                <div class="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XUMho8imL0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));