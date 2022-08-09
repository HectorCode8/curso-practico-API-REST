window.addEventListener('DOMcontentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    console.log({location})

    if(location.hash.startsWith(' #trends ')) {
        console.log('trends')
    }else if (location.hash.startsWith(' #search=')) {
        console.log('search')
    } else if (location.hash.startsWith(' #movie=')) {
        console.log('profile')
    }else if (location.hash.startsWith(' #category=')) {
        console.log('category')
    }else {
        console.log('home')
    }
    location.hash
}

