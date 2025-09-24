const renderBosses = async () => {
    
        const response = await fetch('/bosses')
        
        
        
        const data = await response.json()

        const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(boss => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            bottomContainer.style.backgroundImage = `url(${boss.image})`

            const name = document.createElement('h3')
            name.textContent = boss.name
            bottomContainer.appendChild(name)

            const health = document.createElement('p')
            health.textContent = 'HP points: ' + boss.health
            bottomContainer.appendChild(health)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/bosses/${boss.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Bosses Found 😞'
        mainContent.appendChild(message)
    }
   
}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
    renderBosses();
}


const renderBoss = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/bosses')
    const data = await response.json()

    const bossContent = document.getElementById('boss-content')

    let boss 

    if(data) {
        boss = data.find(boss => boss.id === requestedID)
        if(boss) {
            document.getElementById('image').src = boss.image
            document.getElementById('name').textContent = boss.name
            document.getElementById('health').textContent = 'Health: ' + boss.health
            document.title = `UnEarthed - ${boss.name}`
        }
        else {
            const message = document.createElement('h2')
            message.textContent = 'No Bosses Found 😞'
            bossContent.appendChild(message)
        }
    }
}

renderBoss();