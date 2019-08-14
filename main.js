const progress = [
    {
        title: 'manchester',
        schemes: [
            {
                id: 'chorlton',
                name: 'Chorlton Cycleway',
                currentState: 3,
                worksStart: 'TBC',
                worksEnd: 'TBC'
            },
            {
                name: 'Piccadilly to Victoria Cycleway',
                currentState: 1,
                worksStart: 'TBC',
                worksEnd: 'TBC'
            },
            {
                name: 'Ancoats Cycleway',
                currentState: 1,
                worksStart: 'TBC',
                worksEnd: 'TBC'
            },
            {
                name: 'Princess Road Roundabout',
                currentState: 5,
                worksStart: 'Sept 2019',
                worksEnd: 'TBC'
            }
        ]
    },
    {
        title: 'trafford',
        schemes: [
            {
                name: 'Talbot Road/Chester Road Junction',
                worksStart: 'TBC',
                worksEnd: 'TBC'
            },
            {
                name: 'Urmston Active Neighbourhood',
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
        title: 'wigan'
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
]

function renderBorough(i) {
    borough = progress[i];
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
                            <div class="box statebox">
                                <span class="boxheader stateheader">Current State:</span>
                                <span class="boxcontent statecontent">${getStateText(scheme.currentState)}</span>
                                <div class="progressbarcontainer">
                                    <ul class="progressbar">
                                        ${[...Array(7).keys()].map((i)=>`
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
                            <button class="moreinfo" id="btn-${scheme.id}" onclick="toggleBtn('${scheme.id}')">
                            <span>+</span>
                            </button>
                        </div>
                        <div class="infobox" id="info-${scheme.id}">
                            <p>Info!</p>
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
            return 'Programme Entry'
            break;
        case 1:
            return 'Design, Awaiting Consultation'
            break;
        case 2:
            return 'Consultation [Link]'
            break;
        case 3:
            return 'Awaiting Consultation Report'
            break;
        case 4:
            return 'Awaiting Construction'
            break;
        case 5:
            return 'Construction'
            break;
        case 6:
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
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const boroughSelect = document.getElementById('borough-select');
    boroughSelect.addEventListener('change', (e) => renderBorough(e.target.value))
    
    renderBorough(0);
})