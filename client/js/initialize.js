const state = {
    depots: [],
    comments: []
}

fetch('/api/depots')
    .then(res => res.json())
    .then(depots => {
        state.depots = depots
        renderDepotList()
    })

    fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
      }
  })

// fetch('/api/users')
//   .then(res => res.json())
//   .then(users => {
//     state.users = users
//     console.log(state.users)
//   })

fetch('/api/comments')
  .then(res => res.json())
  .then(comments => {
    state.comments = comments
    console.log(state.comments)
})

fetch('/api/coordinates')
  .then(res => res.json())
  .then(coordinates => {
    state.coordinates = coordinates
    console.log(state.coordinates)
})