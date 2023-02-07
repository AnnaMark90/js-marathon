const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

item.addEventListener('dragstart', dragStart);

item.addEventListener('dragend', dragEnd);

function dragStart(e) {
    setTimeout(() => {
        e.target.classList.add('hold');
    }, 0);
}

function dragEnd(e) {
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classList.add('hovered');
}

function dragleave(e) {
    e.target.classList.remove('hovered');
}

function dragdrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
}