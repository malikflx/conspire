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