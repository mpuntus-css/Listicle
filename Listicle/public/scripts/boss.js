const renderBoss = async () => {
    
        
        const pathSegments = window.location.pathname.split('/')
        const bossId = pathSegments[pathSegments.length - 1]
        
        
        
     
        const response = await fetch('/bosses')
        
       
        
        const bosses = await response.json()
       
        
       
        const boss = bosses.find(b => b.id === bossId)
        
        
        if (boss) {
         
            const nameEl = document.getElementById('boss-name')
            const healthEl = document.getElementById('boss-health')
            const descEl = document.getElementById('boss-description')
            const imgEl = document.getElementById('boss-image')
            
            console.log('DOM elements:', { nameEl, healthEl, descEl, imgEl }) // Debug log
            
          
            if (nameEl) nameEl.textContent = boss.name
            if (healthEl) healthEl.textContent = `Health: ${boss.health}`
            if (descEl) descEl.textContent = boss.description
            if (imgEl) {
                imgEl.src = boss.image
                imgEl.alt = boss.name
            }
            document.title = `${boss.name} - Boss Details`
        } else {
            
            const mainContent = document.getElementById('boss-content')
            
        }
    }



renderBoss();
