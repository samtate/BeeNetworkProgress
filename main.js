const progress = [
    {
        title: 'manchester',
        schemes: [
            {
                id: 'chorlton',
                name: 'Chorlton Cycleway',
                cost: '£13.4m',
                type: '5km Superhighway',
                currentState: 2,
                worksStart: 'Late 2019',
                worksEnd: 'TBC',
                details: 'The 5km route will run along Barlow Moor Road, Manchester Road, Upper Chorlton Road and Chorlton Road, linking with existing routes and continuing to the city centre. Chorlton will be one of the first routes to be built and will provide a high-quality, segregated link between Chorlton and Manchester city centre, making it safer, more attractive and easier to get around.',
                links: [
                    {
                        title: 'Manchester City Council - Scheme Page',
                        href: 'https://secure.manchester.gov.uk/info/200024/consultations_and_surveys/7699/manchester_to_chorlton_cycling_and_walking_route_proposals'
                    }
                ]
            },
            {
                id: 'piccvic',
                name: 'Piccadilly to Victoria Cycleway',
                cost: '£11.6m',
                type: '1.6km Quietway + Public Realm',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'A new cycling and walking route creating a dedicated corridor between the two main Manchester railway stations - Manchester Piccadilly to Manchester Victoria - will be delivered with a host of public realm improvements for the city centre, including making Stevenson Square and Thomas Street more pedestrian and cycling-friendly.',
                links: [
                    {
                        title: 'Annoucement',
                        href: 'https://secure.manchester.gov.uk/news/article/8146/manchester_welcomes_bee_network_funding_boost_for_new_cycling_and_walking_schemes'
                    }
                ]
            },
            {
                id: 'ancoats',
                name: 'Ancoats Cycleway',
                cost: '£13.2m',
                type: '2.1km Quietway + Bridges',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'The Northern and Eastern Gateway will become the second city centre cycling and walking corridor to be funded by the Greater Manchester Mayor’s Challenge Fund.  The route will connect the neighbourhoods of Ancoats, New Islington, New Cross, New Town, Redbank and the Green Quarter by creating a high-quality, continuous east-west walking and cycling route for the north and east city centre fringe.',
                links: [
                    {
                        title: 'Annoucement',
                        href: 'https://secure.manchester.gov.uk/news/article/8190/manchester_welcomes_proposed_4m_bee_network_boost_for_cycling_and_walking_in_the_city_centre'
                    }
                ]
            },
            {
                id: 'princessrd',
                name: 'Princess Road Roundabout',
                cost: '£2.9m',
                type: 'Junction Upgrade',
                currentState: 4,
                worksStart: 'Sept 2019',
                worksEnd: 'TBC',
                details: 'This project involves a full upgrade of the junction of the Mancunian Way with Princess Road.  The existing subways will be removed and protected cycle tracks will be created, as well as pedestrian paths and a signalised crossing.',
                links: [
                    {
                        title: 'Annoucement',
                        href: 'https://secure.manchester.gov.uk/news/article/8146/manchester_welcomes_bee_network_funding_boost_for_new_cycling_and_walking_schemes'
                    }
                ]
            }
        ]
    },
    {
        title: 'trafford',
        schemes: [
            {
                name: 'Talbot Road/Chester Road Junction',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC'
            },
            {
                name: 'Urmston Active Neighbourhood',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC'
            }
        ]
    },
    {
        title: 'salford'
    },
    {
        title: 'bolton'
    },
    {
        title: 'wigan',
        schemes: [
            {
                id: 'muddymile',
                name: '\"Muddy Mile\" Canal Path',
                cost: '£0.2m',
                type: 'Canal Path',
                currentState: 5,
                worksStart: 'May 2019',
                worksEnd: 'Aug 2019',
                details: 'The £212,000 project will deliver the much-needed one mile stretch of surface improvements, as well as better access and signage, plugging a vital gap in the Bridgewater Way. The works will allow people to cycle on the canal path all the way from Wigan Pier, through Leigh and across the Salford boundary to Monton and Patricroft.',
                links: [
                    {
                        title: 'Completion',
                        href: 'https://twitter.com/martinkeyBC/status/1156535893114654720'
                    }
                ]
            }
        ]
    },
    {
        title: 'tameside'
    },
    {
        title: 'rochdale'
    },
    {
        title: 'oldham'
    },
    {
        title: 'stockport'
    },
    {
        title: 'bury'
    },
]

function renderBorough(i) {
    const borough = progress[i];
    let contentMarkup = `
            <div class="boroughheader">
                <img src="img/headers/${borough.title}.jpg" />
                <h1>${borough.title}</h1>
            </div>
            <div id="container">
                ${borough.schemes ? borough.schemes.map(scheme => `
                    <div class="schemebox" id="schemebox-${scheme.id}">
                        <div class="schemesummary">
                            <h2>${scheme.name}</h2>
                            <div class="box statsbox">
                                <h3 class="boxheader">Cost:</h3>
                                <p>${scheme.cost}</p>
                                ${scheme.type ? `
                                    <h3 class="boxheader">Type:</h3>
                                    <p>${scheme.type}</p>
                                `:''}
                            </div>
                            <div class="box statebox">
                                <span class="boxheader stateheader">Current State:</span>
                                <span class="boxcontent statecontent">${getStateText(scheme.currentState)}</span>
                                <div class="progressbarcontainer">
                                    <ul class="progressbar">
                                        ${[...Array(6).keys()].map((i)=>`
                                            <li class="${scheme.currentState === i?'active':''}"></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="box">
                                <span class="boxheader worksheader">Works Start:</span>
                                <span class="boxcontent workscontent">${scheme.worksStart}</span>
                            </div>
                            <div class="box">
                                <span class="boxheader worksheader">Works End:</span>
                                <span class="boxcontent workscontent">${scheme.worksEnd}</span>
                            </div>
                            <button class="moreinfo" id="btn-${scheme.id}" onclick="toggleBtn('${scheme.id}')"> </button>
                        </div>
                        <div class="infobox" id="info-${scheme.id}">
                            <div class="infodetails">
                                <h3>Scheme Details:</h3>
                                <p>${scheme.details}</p>
                            </div>
                            <div class="infolinks">
                                ${scheme.links? scheme.links.map(link => `
                                    <h3>Scheme Links</h3>
                                        <ul>
                                            <li><a href="${link.href}">${link.title}</a></li>
                                        </ul>
                                `).join(''):`
                                    <h3>No links yet!</h3>
                                `}
                            </div>
                        </div>
                    </div>
                `).join(''):''}
            </div>
    `

    document.getElementById('content').innerHTML = contentMarkup;
}

function getStateText(currentState) {
    switch (currentState) {
        case 0:
            return 'Design, Awaiting Consultation'
            break;
        case 1:
            return 'Consultation [Link]'
            break;
        case 2:
            return 'Awaiting Consultation Report'
            break;
        case 3:
            return 'Awaiting Construction'
            break;
        case 4:
            return 'Construction'
            break;
        case 5:
            return 'Built'
            break;
    }
}

function toggleBtn(id) {
    const btn = document.querySelector(`#btn-${id}`);
    const info = document.querySelector(`#info-${id}`);
    const schemebox = document.querySelector(`#schemebox-${id}`);
    
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        info.classList.remove('active');
        schemebox.classList.remove('active');
    }
    else {
        btn.classList.add('active');
        schemebox.classList.add('active');
        setTimeout(() => {       
            info.classList.add('active');
        }, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const boroughSelect = document.getElementById('borough-select');
    boroughSelect.addEventListener('change', (e) => renderBorough(e.target.value))
    
    renderBorough(0);
})