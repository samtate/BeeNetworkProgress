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
                id: 'talbotrdjunctions',
                name: 'Talbot Road Junction Upgrades',
                cost: '£1.35m',
                type: 'Three Upgraded Junctions',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'To further enhance the cycle facilities currently under construction on Talbot Road, this project will significantly upgrade the junctions at Chester Road, White City Way, and Great Stone Road, including dedicated crossings for people travelling on foot and by bike.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
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
        title: 'salford',
        schemes: [
            {
                id: 'swintonwalkdenjunctions',
                name: 'Junctions in Swinton and Walkden',
                cost: '£1.1m',
                type: 'Two Upgraded Junctions',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'An extra £1.1 million from the Mayor’s Challenge Fund to existing proposed improvements as part of the Local Growth Deal Salford Bolton Improvement Programme at two key junctions.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            },
            {
                id: 'broadstfrederickrd',
                name: 'Broad St/Frederick Rd Junction',
                cost: '£0.6m',
                type: 'Upgraded Junction',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: ' An additional £600,000 for people travelling by bike or on foot at a major junction along the A6 that was already due to be upgraded as part of the Local Growth Deal Salford Bolton Network Improvement Programme.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            },
            {
                id: 'chapelste',
                name: 'Chapel Street East',
                cost: '£4.3m',
                type: '0.3km Superhighway and Public Realm',
                currentState: 2,
                worksStart: 'Late 2019',
                worksEnd: 'TBC',
                details: 'This scheme is the first stage of a complete transformation of Chapel Street East. It will provide protected 2 metre-wide cycle tracks in each direction and priority for pedestrians and cyclists at side roads.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    },
                    {
                        title: 'Consultation Page',
                        href: 'https://www.salford.gov.uk/chapelstreeteast?utm_source=Twitter&utm_medium=social&utm_campaign=SocialSignIn'
                    }
                ]
            }
        ]
    },
    {
        title: 'bolton',
        schemes: [
            {
                id: 'b6226',
                name: 'B6226 Parallel Quiet Route',
                cost: '£1.5m',
                type: '4.5km Quietway',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'A high quality walking and cycling route to the town centre, running parallel to the much busier Chorley Old Road. The project includes signed quiet routes, improved crossings and routes through parks and public spaces',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
            
        ]
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
            },
            {
                id: 'victoriastwarringtonrd',
                name: 'Victoria Street/Warrington Road Junction',
                cost: '£0.7m',
                type: 'Junction Upgrade',
                currentState: 1,
                worksStart: '2020',
                worksEnd: '2020',
                details: 'Extends the Saddle Junction cycle facility, which is under construction, to the southwest, adding more cycling and walking infrastructure connecting with Alexandra Park.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    },
                    {
                        title: 'Consultation',
                        href: 'https://www.wigan.gov.uk/Resident/Parking-Roads-Travel/Travel/Mayors-Challenge-Fund.aspx'
                    }
                ]
            }
        ]
    },
    {
        title: 'tameside',
        schemes: [
            {
                id: 'tamesidenewroutes',
                name: 'New Routes in Tameside',
                cost: '£0.5m',
                type: 'Traffic Free & Segregated Links',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'Includes filtered neighbourhoods where people are prioritised over cars. Upgrades will also be made to traffic free routes and segregated facilities will be provided for bikes on more major roads.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
        ]
    },
    {
        title: 'rochdale',
        schemes: [
            {
                id: 'castletoncycleway',
                name: 'Castleton to Rochdale Cycleway',
                cost: '£11.9m',
                type: '2.9km Superhighway',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'A major boost to the high street in the local centre in Castleton including high quality, dedicated facilities for walking and cycling, and improved access to Castleton station. Announced in two phases, has one entry here for simplicity.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
        ]
    },
    {
        title: 'oldham',
        schemes: [
            {
                id: 'kingstbridge',
                name: 'King Street Bridge',
                cost: '£0.65m',
                type: 'Bridge Refurbishment',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'Complete refurbishment of an existing pedestrian and cycle bridge, providing a key link into Oldham town centre from a number of residential areas to the south.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            },
            {
                id: 'unionstbridge',
                name: 'Union Street West Bridge',
                cost: '£0.2m',
                type: 'Bridge Refurbishment',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'Already partially refurbished, the bride The bridge has already been the subject of a partial refurbishment. This project will see the refurbishment completed, providing a replacement bridge deck surface to ensure the best possible level of service for users.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
        ]
    },
    {
        title: 'stockport',
        schemes: [
            {
                id: 'gilbentrd',
                name: 'Gilbent Road Crossing',
                cost: '£0.11m',
                type: 'Upgraded Crossing',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'An enhanced crossing for people travelling by bike and on foot in Cheadle Hulme. It will better connect residential areas, including access to Thorn Grove Primary School.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            },
            {
                id: 'brinnington',
                name: 'Brinnington to Stockport Centre',
                cost: '£0.11m',
                type: 'Upgaded Bridleway and Underpass',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'Linking to improvements taking place across Stockport through the Town Centre Access Plan (TCAP), this project will upgrade a footpath to bridleway status as well as the refurbishment of an existing M60 underpass with new lighting and resurfacing.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
        ]
    },
    {
        title: 'bury',
        schemes: [
            {
                id: 'metrolinkcycleparking',
                name: 'Metrolink Cycle Parking',
                cost: '£1.2m',
                type: 'Cycle parking',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: 'Cycle parking facilities on the Bury Metrolink line: Covered Sheffield stands with lighting and CCTV will be installed in highly visible and accessible locations at nine stops.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            },
            {
                id: 'upgradedcrossingsbury',
                name: 'New/Upgraded Crossings',
                cost: '£2.6m',
                type: 'Upgraded Crossings & Junctions',
                currentState: 0,
                worksStart: 'TBC',
                worksEnd: 'TBC',
                details: '16 new and upgraded crossings and junctions in Bury: A mix of new and upgraded junctions at key locations.',
                links: [
                    {
                        title: 'Announcement',
                        href: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/cycling-walking-masterplan-routes-chorlton-14930463'
                    }
                ]
            }
        ]
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
                                <span class="boxcontent statecontent">${getStateText(scheme.currentState, scheme.currentState===1 ? scheme.links[1].href : false)}</span>
                                <div class="progressbarcontainer">
                                    <ul class="progressbar">
                                        ${[...Array(6).keys()].map((i)=>`
                                            <li class="${scheme.currentState === i?'active':''}"></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="box">
                                <span class="boxheader worksheader">Works ${scheme.currentState === 5? `Started`:`Start`}:</span>
                                <span class="boxcontent workscontent">${scheme.worksStart}</span>
                            </div>
                            <div class="box">
                                <span class="boxheader worksheader">Works ${scheme.currentState === 5? `Ended`:`End`}:</span>
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
                                <h3>Scheme Links</h3>
                                ${scheme.links? scheme.links.map(link => `
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

function getStateText(currentState, consultationLink) {
    switch (currentState) {
        case 0:
            return 'Design, Awaiting Consultation'
            break;
        case 1:
            return `<a href="${consultationLink}">Consultation</a>`
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