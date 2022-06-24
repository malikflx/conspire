const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
  // Send PUT Request here
  fetch('/tasks', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Codewars2',
      task: 'Complete 6kyu challenge'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    window.location.reload(true)
  })
})

const messageDiv = document.querySelector('#message')

const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click', _ => {
  // Send DELETE Request here
  fetch('/tasks', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Codewars2'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    if (response === 'No task to delete') {
      messageDiv.textContent = 'No project task to delete'
    } else {
      window.location.reload(true);
    }
  })
  // .then(data => {
  //   window.location.reload()
  // })
})

