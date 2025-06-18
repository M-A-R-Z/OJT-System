const input = document.getElementById('memberInput');
const addBtn = document.getElementById('addMemberBtn');
const memberList = document.getElementById('memberList');
const hiddenInput = document.getElementById('membersInput');

let members = [];

// Update the hidden input with the current members
function updateHiddenInput() {
  hiddenInput.value = members.join(',');
}

// Function to create a member list item
function createMemberElement(name) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = name;
  span.classList.add('member-name');

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', () => {
    const newName = prompt('Edit member name:', span.textContent);
    if (newName !== null && newName.trim() !== '') {
      const trimmedNewName = newName.trim();
      if (members.includes(trimmedNewName)) {
        alert('This member already exists.');
        return;
      }
      const index = members.indexOf(span.textContent);
      if (index !== -1) {
        members[index] = trimmedNewName;
        span.textContent = trimmedNewName;
        updateHiddenInput();
      }
    }
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    const index = members.indexOf(span.textContent);
    if (index !== -1) {
      members.splice(index, 1); // Remove from array
      li.remove(); // Remove from DOM
      updateHiddenInput();
    }
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}

// Add a new member
function addMember() {
  const name = input.value.trim();
  if (name === '') return;

  if (members.includes(name)) {
    alert('This member is already added.');
    return;
  }

  members.push(name);
  const li = createMemberElement(name);
  memberList.appendChild(li);

  input.value = '';
  updateHiddenInput();
}

// Event listeners
addBtn.addEventListener('click', addMember);

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addMember();
  }
});
