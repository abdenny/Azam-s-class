let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  let date = document.getElementById('date');
  console.log(e);
  console.log(title.value);
  console.log(description.value);
  console.log(date.value);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      date: date.value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      let task = document.createElement('li');
      task.innerText = res;
      let message = document.getElementById('message');
      message.appendChild(task);
    })
    .catch(() => {
      let message = document.getElementById('message');
      message.textContent = 'There was an error submitting your form';
    });
});
