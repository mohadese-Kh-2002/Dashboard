const $ = document;

// ////////////////*menuHamburger//////////////////////////////
const btnHam = $.querySelector(".hamberger");
const aside = $.querySelector(".aside");
const cover = $.querySelector(".cover");
let open = false;
const asideOpenOrClose = () => {
    if (!open) {
        aside.style.cssText = "transform: translateX(0); width:60%";
        cover.style.cssText = "display:block";
    } else {
        aside.style.cssText = "transform: translateX(-100%);";
        cover.style.cssText = "display:none";
    }
    open = !open;
};

btnHam.addEventListener("click", asideOpenOrClose);
cover.addEventListener("click", asideOpenOrClose);

// ////////////////////!theme////////////////////////////
const btnThemes = $.querySelector(".buttons");

const setTheme = (target) => {
    let theme = target.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};
const activeBtn = (target) => {
    document
        .querySelector(`.button--active`)
        ?.classList.remove("button--active");
    target?.classList.add("button--active");
};
const changeTheme = (event) => {
    const { target } = event;
    if (target.tagName == "DIV") {
        activeBtn(target);
        setTheme(target);
    } else if (target.tagName === "SPAN") {
        let parent = target.parentElement;
        if (parent.tagName == "DIV") {
            activeBtn(parent);
            setTheme(parent);
        }
    }
};
window.addEventListener("load", (e) => {
    let theme = localStorage.getItem("theme");
    if (theme) {
        document.documentElement.dataset.theme = theme;
        activeBtn(document.querySelector(`.${theme}`));
    } else {
        document.documentElement.dataset.theme = "light";
    }
});
btnThemes.addEventListener("click", changeTheme);

// //////////////////////?dropDownForNoti/////////////////////////
const notification = $.querySelector(".wrapper__ring");
const dropDownForNoti = $.querySelector(".dropDown");
let openDropDownNote = false;
const openDropDown = () => {
    if (!openDropDownNote) {
        dropDownForNoti.style.cssText = "display:flex";
    } else {
        dropDownForNoti.style.cssText = "display:none";
    }
    openDropDownNote = !openDropDownNote;
};
notification.addEventListener("click", openDropDown);

// //////////!dropdownAccount/////////////////////

const infoUser = $.querySelector(".wrapper__person");
const accountUser = $.querySelector(".account-user");

infoUser.addEventListener("click", () =>
    accountUser.classList.toggle("account-user--active")
);

///!section-chat___aside///////////////////////////
const inputFormFilterAccount = $.querySelector(".form-chat__input-aside");
const userChats = $.querySelectorAll(".chat-user__name");
const wrapperChatUsers = $.querySelector(".wrapper__chat-users");
const forms = $.querySelectorAll("form");
forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
if (inputFormFilterAccount) {
    const filterUser = (event, nodeList) => {
        let inputValue = event.value.trim().toLowerCase();
        let filterUsers = [...nodeList].filter((userChat) =>
            userChat.textContent.trim().toLowerCase().includes(inputValue)
        );

        if (filterUsers) {
            wrapperChatUsers.innerHTML = "";
            filterUsers.forEach((user) => {
                wrapperChatUsers.innerHTML += `<div class="chat-user chat-user--active">
                            <div class="wrapper__chat-user">
                                <img src="./images/accountUser1.jpg" alt="user" class="chat-user__img">
                                <span class="onlineOrOfline"></span>
                            </div>
                            <div class="chat-user__info">
                                <h6 class="chat-user__name">${user.innerHTML}</h6>
                                <span class="chat-user__status">I cam across your profile and...</span>
                            </div>
                        </div>`;
            });
        } else {
            wrapperChatUsers.innerHTML = "";
        }
    };
    inputFormFilterAccount.addEventListener("keyup", () => {
        filterUser(inputFormFilterAccount, userChats);
    });
    const chatMain = $.querySelector(".chat-main");
    window.addEventListener("load", (e) => {
        chatMain.scrollTo(0, chatMain.scrollHeight);
    });
}

////?sweetalarm///////////

window.addEventListener("load", () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
    });
});

///*richTextEditor////////////////

const txtEditor = document.getElementById("div_editor1");
if (txtEditor) {
    var editor1 = new RichTextEditor("#div_editor1");
    // editor1.setHTMLCode("Use inline HTML or setHTMLCode to init the default content.")
    console.log(editor1.getText());
}
//?loading///////////

const loadingPage = document.querySelector(".loading-page");
window.addEventListener("load", () => {
    if (loadingPage) {
        loadingPage.remove();
    }
});
// *activeMenuItem/////////////////
const menuItems = $.querySelectorAll(".menu__item");
const form = $.querySelector(".form");
const formMain = $.querySelector(".main__form");
const formInput = $.querySelector(".form__search-input");
window.addEventListener("load", (e) => {
    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            document
                .querySelector(".menu__item--active")
                .classList.remove("menu__item--active");
            item.classList.add("menu__item--active");
        });
    });
});

const submit = (e) => {
    e.preventDefault();
    e.currentTarget.search.value = "";
};
form.addEventListener("submit", submit);

formMain.addEventListener("submit", submit);

// chatpage/////////

const chatForm = $.querySelector(".form-chat__send");
const chatMain = $.querySelector(".chat-main");
const chatUsers = $.querySelectorAll(".chat-user");
const chatInfoUser=$.querySelector('.chat-info__wrapper')
let now ;
chatForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    now=new Date()
    let value = e.currentTarget.message.value;
    let message = ` <div class="chat-massageUser__you">
   <span class="chat-massageUser__massage">
       ${value}
   </span>
   <span class="chat-massageUser__date">${now.getHours()}:${now.getMinutes()}</span>
</div>`;
    chatMain.insertAdjacentHTML("beforeend", message);

    e.currentTarget.message.value = "";
});

chatUsers?.forEach(user => {
    user.addEventListener("click", (e) => {
        document
            .querySelector(".chat-user--active")
            .classList.remove("chat-user--active");
        user.classList.add("chat-user--active");
        
        chatInfoUser.innerHTML=`   <div class="wrapper__chat-user">
                        <img src="./images/accountUser1.jpg" alt="user" class="chat-user__img">
                        <span class="onlineOrOfline"></span>
                    </div>
                    <div class="chat-user__info">
                        <h6 class="chat-user__name">${user.lastElementChild.firstElementChild.innerHTML}</h6>
                        <span class="chat-user__status">I cam across your profile and...</span>
                    </div>`
    });
});


