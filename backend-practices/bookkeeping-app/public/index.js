getAllInfo();

function getAllInfo() {
  fetch('./setting.json')
    .then((res) => res.json())
    .then(({bookkeeping}) => {
      const list = document.querySelector('ul');
      
      bookkeeping.forEach((el, i) => {
        const li = document.createElement('li');
        li.setAttribute('class','card');

        if(el.type === 'income') {
          li.innerHTML = `
        <h5 class="card-header bg-success-subtle">${el.time}</h5>
        <div class="row card-body">
          <div class="col-4">
            <p class="card-text">${el.name}</p>
          </div>
          <div class="col-4">
            <p class="card-text">${el.note}</p>
          </div>
          <div class="col-2">
            <p class="badge text-bg-success m-0">${el.type}</p>
          </div>
          <div class="col-1">
            <p class="card-text">${el.amount}</p>
          </div>
          <div class="col-1">
          <button  class="removeBtn btn btn-link reveal-button btn-light" data-id="${i+1}">remove</button>
          </div>
        </div>
        `;
        } else {
          li.innerHTML = `
          <h5 class="card-header bg-danger-subtle">${el.time}</h5>
          <div class="row card-body">
            <div class="col-4">
              <p class="card-text">${el.name}</p>
            </div>
            <div class="col-4">
            <p class="card-text">${el.note}</p>
            </div>
            <div class="col-2">
              <p class="badge text-bg-danger m-0">${el.type}</p>
            </div>
            <div class="col-1">
              <p class="card-text">${el.amount}</p>
            </div>
            <div class="col-1">
          <button  class="removeBtn btn btn-link reveal-button btn-light" data-id="${i+1}">remove</button>
          </div>
          </div>
          `;
        }

        list.appendChild(li);
        const removeBtn = document.querySelectorAll('.reveal-button');
        removeBtn.forEach((button) => {
          button.onclick = function () {
          const itemId = button.dataset.id;
          console.log(itemId)
          fetch(`/account/remove/${itemId}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              setTimeout(() => {
                location.reload(); // Reload the page
              }, 100);
              return response.json();
            })
            .then((data) => {
              console.log('Item removed:', data);
            })
            .catch((error) => {
              console.error('Error removing item:', error);
            });
            
        }
      })
      });
    });
};

const creatBtn = document.querySelector('#addBtn');
const body = document.querySelector('body');
creatBtn.addEventListener('click', () => {
  window.location.href = '/account/create';
})



