function navigator() {
    console.log({location})

    if(location.hash.startsWith(' #trends ')) {
        console.log('trends')
    }else if (location.hash.startsWith(' #search= ')) {
        console.log('search')
    }
}