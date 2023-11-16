// 會員
const mumberLoginArr = [
    "註冊會員",
    "忘記密碼",
    "會員登入/登出",
    "成為房東",
];

const mumberLoginLinksArr = [
    "registration.html",
    "login.html",
    "forgot_password.html",
    "profile.html",
    "favorites.html",
    "browse_history.html",
    "contract.html",
    "verification.html",
    "forum.html",
];

const mumberLoginLink = document.getElementById('mumberLogin');

// 存儲原始外觀
const originalContent = mumberLoginLink.innerHTML;

mumberLoginLink.addEventListener('mouseover', function () {
    addElementEvent(mumberLoginArr, mumberLoginLink, mumberLoginLinksArr);
});

mumberLoginLink.addEventListener('mouseout', function () {
    removeElements();
});

// 新增元素<a>事件
let elementsAdded = false;
function addElementEvent(arr, SuperFa, linksArr) {
    const existingElements = document.querySelectorAll('.added-element');
    const newSuperDiv = document.createElement('div');
    
    if (!elementsAdded) {
        newSuperDiv.classList.add('super-element');
        newSuperDiv.classList.add('dropdown-menu'); // 添加下拉菜单样式
        
        for (let i = 0; i < arr.length - 1; i++) {
            const newElement = document.createElement('a');
            newElement.textContent = arr[i];
            newElement.classList.add('added-element');
            newElement.href = `/link/${SuperFa.innerText}/${linksArr[i]}`;
            
            newSuperDiv.append(newElement);
            SuperFa.append(newSuperDiv);
            
            setTimeout(() => {
                newElement.style.opacity = 1;
            }, 10 * i);
        }
        
        elementsAdded = true;
    }
}

// 移除元素
function removeElements() {
    const existingElements = document.querySelectorAll('.added-element');
    const superElement = document.querySelector('.super-element');

    if (elementsAdded) {
        existingElements.forEach((element) => {
            element.style.opacity = 0;
            element.addEventListener('transitionend', () => {
                element.remove();
                superElement.remove();
            });
        });

        // 還原原始外觀
        mumberLoginLink.innerHTML = originalContent;

        elementsAdded = false;
    }
}
