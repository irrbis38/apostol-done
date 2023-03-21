document.addEventListener("DOMContentLoaded", function (event) {
    AOS.init();

    const header = document.querySelector(".header");
    const headerMenuBtn = document.querySelector(".header__menu");
    const headerNavbar = document.querySelector(".header__navbar");
    const headerLogo = document.querySelector(".header__logo");
    const headerDisk = document.querySelector(".header__disk");

    const menuOpenBtn = document.querySelector(".menu__open");
    const menuCloseBtn = document.querySelector(".menu__close");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    changeHeaderBG(header, headerNavbar);

    // mobile menu
    menuOpenBtn.addEventListener("click", () => {
        menu.classList.add("active");
        body.classList.add("lock");
    });

    menuCloseBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        body.classList.remove("lock");
    });

    // show / hide header by scroll
    toggleHeader([headerMenuBtn, headerNavbar]);

    // show / hide header menu
    headerMenuBtn.addEventListener("click", () => {
        toggleClassActive(headerNavbar);
        toggleClassActive(headerMenuBtn);
    });

    // hover effect for header logo
    headerLogo.addEventListener("mouseenter", () =>
        toggleClassActive(headerDisk)
    );
    headerLogo.addEventListener("mouseleave", () =>
        toggleClassActive(headerDisk)
    );

    // switch background color in header by scroll
    window.addEventListener("scroll", () =>
        changeHeaderBG(header, headerNavbar)
    );

    // add logic for index.html
    const introBlock = document.querySelector(".intro");
    if (introBlock) {
        indexPageLogic();
    }

    // add logic for index.html
    const categoriesIntroBlock = document.querySelector(".categories-intro");
    if (categoriesIntroBlock) {
        categoriesPageLogic();
        body.classList.add("black");
    }

    // add logic for category.html
    const categoryBlock = document.querySelector(".category");
    if (categoryBlock) {
        categoryPageLocig();
        body.classList.add("without_line");
    }

    // add logic for contacts.html
    const contactsBlock = document.querySelector(".contacts-page");
    if (contactsBlock) {
        body.classList.add("black");
    }

    // add logic for judges.html
    const judgesBlock = document.querySelector(".judges");
    if (judgesBlock) {
        body.classList.add("black");
    }

    // add logic for award.html
    const awardBlock = document.querySelector(".award");
    if (awardBlock) {
        body.classList.add("without_line", "no_shadow");
    }

    // add logic for profile.html
    const profileBlock = document.querySelector(".profile");
    if (profileBlock) {
        body.classList.add("without_line");
        profilePageLogic();
    }

    // add logic for profile.html
    const profilePresentationBlock = document.querySelector(
        ".profile-presentation"
    );
    if (profilePresentationBlock) {
        profilePresentationPageLogic();
    }

    // add logic for profile.html
    const profileCompanyBlock = document.querySelector(".company");
    if (profileCompanyBlock) {
        profileCompanyPageLogic();
    }

    // add logic for 404.html
    const notFoundPage = document.querySelector(".notFound");
    if (notFoundPage) {
        body.classList.add("black");
    }

    // add logic for experts-application-list.html
    const expertsList = document.querySelector(".experts__list");
    if (expertsList) {
        expertsApplicationListPage();
    }

    // add logic for experts-application-rating.html
    const expertsWorkIntro = document.querySelector(".experts__work-intro");
    if (expertsWorkIntro) {
        expertsWorkRatingPage();
    }

    // add winners page logic
    const winners = document.querySelector(".winners");
    if (winners) {
        winnersPageLogic();
    }
});

const toggleClassActive = (item) => {
    item.classList.toggle("active");
};

const changeHeaderBG = (header, navbar) => {
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
        navbar.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        navbar.classList.remove("sticky");
    }
};

const switchTabs = (event, tabLinks, tabs) => {
    tabLinks.forEach((item) => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
    tabs.forEach((item) => item.classList.remove("active"));
    let tabName = event.target.dataset.tab;
    document.getElementById(tabName).classList.add("active");
};

// hide / show header by scroll

function toggleHeader(itemsToRemoveClassActive) {
    let prevScroll = window.scrollY || document.documentElement.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    const header = document.querySelector(".header");

    let checkScroll = function () {
        /*
         ** Find the direction of scroll
         ** 0 - initial, 1 - up, 2 - down
         */

        curScroll = window.scrollY || document.documentElement.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 100) {
            header.classList.add("hide");
            prevDirection = direction;
            itemsToRemoveClassActive.forEach((item) =>
                item.classList.remove("active")
            );
        } else if (direction === 1) {
            header.classList.remove("hide");
            prevDirection = direction;
        }
    };

    window.addEventListener("scroll", checkScroll);
}

// index page logic

const indexPageLogic = () => {
    const allCategoriesTabLinks = document.querySelectorAll(
        ".categories__tablink"
    );
    const allCategoriesTabs = document.querySelectorAll(".categories__tab");
    // switch tabs in categories section
    allCategoriesTabLinks.forEach((el) =>
        el.addEventListener("click", (e) =>
            switchTabs(e, allCategoriesTabLinks, allCategoriesTabs)
        )
    );

    // Slider in jury block
    const jurySwiper = new Swiper(".jury__slider", {
        loop: true,
        slidesPerView: 2.35,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".jury__next",
            prevEl: ".jury__prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.86,
                spaceBetween: 8,
            },
            576: {
                slidesPerView: 2.35,
                spaceBetween: 20,
            },
        },
    });

    // Slider in speakers block
    const speakersSwiper = new Swiper(".speakers__slider", {
        loop: true,
        slidesPerView: 2.35,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".speakers__next",
            prevEl: ".speakers__prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.86,
                spaceBetween: 8,
            },
            576: {
                slidesPerView: 2.35,
                spaceBetween: 20,
            },
        },
    });

    // animation by scroll

    gsap.registerPlugin(ScrollTrigger);

    const aboutContainer = document.getElementById("about-container");
    let aboutScrollHeight = aboutContainer.offsetHeight * 0.5;

    const topicsContainer = document.getElementById("topics-container");
    let topicsScrollHeight = topicsContainer.offsetHeight * 0.8;

    const reasonsList = document.getElementById("topics-list");
    let reasonsScrollHeight = reasonsList.offsetHeight * 0.5;

    const reasonsItems = document.querySelectorAll(".reasons__item");

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            // fix about block by scroll
            // let tl = gsap.timeline();
            // tl.fromTo(
            //   ".about__container",
            //   { y: "0" },
            //   { y: `-${aboutScrollHeight}px` }
            // );

            // ScrollTrigger.create({
            //   id: "aboutScroll",
            //   animation: tl,
            //   trigger: ".about",
            //   start: "top top",
            //   end: `+=${aboutScrollHeight}px`,
            //   scrub: true,
            //   pin: true,
            //   // markers: true,
            // });

            // fix topicks block by scroll
            let tl2 = gsap.timeline();
            tl2.fromTo(
                ".topics__container",
                { y: "0" },
                { y: `-${topicsScrollHeight}px` }
            );

            ScrollTrigger.create({
                id: "topicsScroll",
                animation: tl2,
                trigger: ".topics",
                start: "top top",
                end: `+=${topicsScrollHeight}px`,
                scrub: true,
                pin: true,
                // markers: true,
            });

            // fix reasons block by scroll
            let tl3 = gsap.timeline();
            tl3.fromTo(
                ".reasons__list",
                { y: "0" },
                { y: `-${reasonsScrollHeight * 1.83}px` }
            );

            ScrollTrigger.create({
                id: "reasonsScroll",
                animation: tl3,
                trigger: ".reasons",
                start: "center center",
                end: `+=${reasonsScrollHeight * 2.5}px`,
                scrub: true,
                pin: true,
                // markers: true,
            });

            // toggle active class for reasons items
            reasonsItems.forEach((reasonsItem, index) => {
                ScrollTrigger.create({
                    trigger: reasonsItem,
                    id: index + 1,
                    start: "-=100px 60%",
                    end: () => `+=${reasonsItem.clientHeight + 90}px`,
                    toggleActions: "play reverse none reverse",
                    toggleClass: { targets: reasonsItem, className: "active" },
                    scrub: true,

                    //   markers: true,
                });
            });
        },
    });
};

// categories page logic

const categoriesPageLogic = () => {
    const allCategoriesTabLinks = document.querySelectorAll(
        ".categories-intro__tablink"
    );
    const allCategoriesTabs = document.querySelectorAll(
        ".categories-intro__tab"
    );
    const allCategoriesStars = document.querySelectorAll(
        ".categories-intro__star"
    );

    // switch tabs in categories-intro section
    allCategoriesTabLinks.forEach((el) =>
        el.addEventListener("click", (e) =>
            switchTabs(e, allCategoriesTabLinks, allCategoriesTabs)
        )
    );

    // switch opacity categories-intro__items by hover
    const allCategoriesIntroItems = document.querySelectorAll(
        ".categories-intro__item"
    );

    allCategoriesIntroItems.forEach((el) =>
        el.addEventListener("mouseover", (e) => {
            allCategoriesIntroItems.forEach((item) => {
                if (item !== e.currentTarget) {
                    item.classList.add("non-active");
                }
            });
            allCategoriesStars.forEach((item) => {
                item.classList.add("non-active");
            });
        })
    );

    allCategoriesIntroItems.forEach((el) =>
        el.addEventListener("mouseout", () => {
            allCategoriesIntroItems.forEach((item) => {
                item.classList.remove("non-active");
            });
            allCategoriesStars.forEach((item) => {
                item.classList.remove("non-active");
            });
        })
    );

    // switch opacity categories special items by hover
    const allCategoriesSpecialItems = document.querySelectorAll(
        ".categories-special__item"
    );
    const allCategoriesSpecialStars = document.querySelectorAll(
        ".categories-special__star"
    );

    allCategoriesSpecialItems.forEach((el) =>
        el.addEventListener("mouseover", (e) => {
            allCategoriesSpecialItems.forEach((item) => {
                if (item !== e.currentTarget) {
                    item.classList.add("non-active");
                }
            });
            allCategoriesSpecialStars.forEach((item) => {
                item.classList.add("non-active");
            });
        })
    );

    allCategoriesSpecialItems.forEach((el) =>
        el.addEventListener("mouseout", () => {
            allCategoriesSpecialItems.forEach((item) => {
                item.classList.remove("non-active");
            });
            allCategoriesSpecialStars.forEach((item) => {
                item.classList.remove("non-active");
            });
        })
    );
};

// category page logic

const categoryPageLocig = () => {
    // element, which become accordion
    let categoryDescriptionToShow = null;
    let categoryInfoToShow = null;

    // switch tabs on category page

    const allCategoryTabLinks = document.querySelectorAll(".category__tablink");
    const allCategoryTabs = document.querySelectorAll(".category__accordions");
    const categoryHeadersAll = document.querySelectorAll(".category__header");
    const categoryCriteriaAll = document.querySelectorAll(
        ".category__criteria"
    );

    allCategoryTabLinks.forEach((el) =>
        el.addEventListener("click", (e) => {
            // collapse accordion by switch tabs
            if (
                !e.currentTarget.classList.contains("active") &&
                categoryDescriptionToShow
            ) {
                categoryDescriptionToShow.style.maxHeight = null;
                categoryCriteriaAll.forEach((el) =>
                    el.classList.remove("open")
                );
            }
            if (
                !e.currentTarget.classList.contains("active") &&
                categoryInfoToShow
            ) {
                categoryInfoToShow.style.maxHeight = null;
                categoryHeadersAll.forEach((el) => el.classList.remove("open"));
            }
            // switch tabs
            switchTabs(e, allCategoryTabLinks, allCategoryTabs);
        })
    );

    // collapse accordion by winwow resise

    window.addEventListener("resize", () => {
        if (categoryDescriptionToShow) {
            categoryDescriptionToShow.style.maxHeight = null;
            categoryCriteriaAll.forEach((el) => el.classList.remove("open"));
        }
        if (categoryInfoToShow) {
            categoryInfoToShow.style.maxHeight = null;
            categoryHeadersAll.forEach((el) => el.classList.remove("open"));
        }
    });

    // accordions on category page

    categoryHeadersAll.forEach((el) =>
        el.addEventListener("click", (e) => {
            categoryInfoToShow = e.currentTarget.nextElementSibling;
            if (window.innerWidth < 768) {
                if (e.currentTarget.classList.contains("open")) {
                    categoryInfoToShow.style.maxHeight = null;
                    e.currentTarget.classList.remove("open");
                } else {
                    categoryHeadersAll.forEach((item) => {
                        item.nextElementSibling.style.maxHeight = null;
                        item.classList.remove("open");
                    });
                    categoryInfoToShow.style.maxHeight =
                        categoryInfoToShow.scrollHeight + "px";
                    e.currentTarget.classList.add("open");
                }
            }
        })
    );

    categoryCriteriaAll.forEach((el) =>
        el.addEventListener("click", (e) => {
            categoryDescriptionToShow = e.currentTarget.nextElementSibling;
            if (categoryDescriptionToShow.style.maxHeight) {
                categoryDescriptionToShow.style.maxHeight = null;
                e.currentTarget.classList.remove("open");
            } else {
                categoryCriteriaAll.forEach((item) => {
                    item.nextElementSibling.style.maxHeight = null;
                    item.classList.remove("open");
                });
                categoryDescriptionToShow.style.maxHeight =
                    categoryDescriptionToShow.scrollHeight + "px";
                e.currentTarget.classList.add("open");
            }
        })
    );
};

// profile page logic

const profilePageLogic = () => {
    // change active link
    const profileWrapperElement = document.querySelector(".profile__wrapper");
    const currentLink = document.getElementById(
        profileWrapperElement.dataset.currentPage
    );
    currentLink.classList.add("active");

    // phone number validation

    function validationPhoneNumber(e) {
        let phoneNumberPattern = "+7(___) ___-__-__",
            i = 0,
            def = phoneNumberPattern.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (e.type === "blur") {
            if (val.length < phoneNumberPattern.match(/([\_\d])/g).length) {
                e.target.value = "";
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = phoneNumberPattern.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                ? ""
                : a;
        });
    }
    const phoneInputs = document.querySelectorAll(".profile__phoneNumber");
    for (let elem of phoneInputs) {
        for (let event of ["input", "blur", "focus"]) {
            elem.addEventListener(event, validationPhoneNumber);
        }
    }

    // form validation

    const form = document.querySelector(".profile__form");
    const requiredInputs = document.querySelectorAll(".required__input");
    const uploadPreview = document.getElementById("uploadPreview");
    const uploadRequest = document.getElementById("uploadRequest");
    const profileUplodaListClose = document.querySelectorAll(
        ".profile__upload-close"
    );

    profileUplodaListClose.forEach((el) =>
        el.addEventListener("click", (e) => {
            e.currentTarget.parentElement.classList.remove("uploadError");
        })
    );

    function showError(el) {
        if (el.validity.valueMissing) {
            el.classList.add("error__input");
            el.nextElementSibling.style.display = "block";
        } else {
            el.classList.remove("error__input");
            el.nextElementSibling.style.display = "none";
        }
    }

    if (form) {
        requiredInputs.forEach((el) =>
            el.addEventListener("input", (e) => {
                showError(e.currentTarget);
            })
        );

        form.addEventListener("submit", function (event) {
            let isAllValid = true;

            requiredInputs.forEach((el) => {
                if (el.validity.valueMissing) {
                    isAllValid = false;
                }
            });

            // check required files
            if (uploadPreview) {
                // if file no selected
                if (!uploadPreview.files.length) {
                    event.preventDefault();
                    const uploadArea = uploadPreview.closest(
                        ".profile__upload-area"
                    );
                    const workList = uploadPreview.closest(
                        ".profile__upload-area"
                    ).children[1];
                    uploadArea.classList.add("uploadError");
                    workList.innerHTML = "Выберите файл.";
                }
            }

            if (uploadRequest) {
                // if file no selected
                if (!uploadRequest.files.length) {
                    event.preventDefault();
                    const uploadArea = uploadRequest.closest(
                        ".profile__upload-area"
                    );
                    const workList = uploadRequest.closest(
                        ".profile__upload-area"
                    ).children[1];
                    uploadArea.classList.add("uploadError");
                    workList.innerHTML = "Выберите файл.";
                }
            }

            // check required fields
            if (!isAllValid) {
                requiredInputs.forEach((el) => {
                    showError(el);
                });
                event.preventDefault();
            }

            isAllValid = true;
        });
    }
};

function profilePresentationPageLogic() {
    const previewDataTransfer = new DataTransfer();
    const requestDataTransfer = new DataTransfer();

    // upload file by input file

    const fileInputs = document.querySelectorAll(".profile__upload-input");

    fileInputs.forEach((el) =>
        el.addEventListener("change", () => {
            const uploadArea = el.closest(".profile__upload-area");
            const uploadList = uploadArea.children[1];

            let limitSize = 0;
            let dt = null;
            let validExtentions = [];
            let errorMessage = "";

            if (el.classList.contains("upload__preview")) {
                limitSize = 1048576; // 1 Mb
                dt = previewDataTransfer;
                validExtentions = ["image/jpeg", "image/jpg", "image/png"];
                errorMessage =
                    "Выберите изображение JPG/PNG. Размер не более 1МБ";
            }

            if (el.classList.contains("upload__request")) {
                limitSize = 10485760; // 10 Mb
                dt = requestDataTransfer;
                validExtentions = ["application/pdf"];
                errorMessage = "Выберите PDF-файл. Размер не более 10МБ.";
            }

            dt.items.add(el.files.item(0));

            file = el.files[0];

            let fileType = file.type;

            let fileSize = file.size;

            let fileName = file.name;

            if (validExtentions.includes(fileType) && fileSize < limitSize) {
                uploadList.innerHTML = `
          <span class="preview__name">${fileName}<span>
          <span class="preview__remove"><span>
        `;

                uploadArea.classList.add("selected");

                uploadList.addEventListener("click", () => {
                    dt.items.clear();
                    uploadPreview.files = previewDataTransfer.files;
                    uploadArea.classList.remove("selected", "active");
                });
            } else {
                uploadArea.classList.add("uploadError");
                uploadArea.classList.remove("active");
                uploadList.innerHTML = errorMessage;
            }
        })
    );

    // upload file by dragged

    const workDragArea = document.querySelector("#workPreview");

    let file;

    workDragArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.currentTarget
            .closest(".profile__upload-area")
            .classList.add("active");
    });
    workDragArea.addEventListener("dragleave", () => {
        workDragArea.classList.remove("active");
    });
    workDragArea.addEventListener("drop", (event) => {
        event.preventDefault();

        const workList = document.getElementById("workList");
        const workPreview = document.getElementById("workPreview");
        const uploadPreview = document.getElementById("uploadPreview");

        file = event.dataTransfer.files[0];

        let fileType = file.type;

        let fileSize = file.size;

        let fileName = file.name;

        let validExtentions = ["image/jpeg", "image/jpg", "image/png"];
        let limitSize = 1048576;

        if (validExtentions.includes(fileType) && fileSize < limitSize) {
            let fileReader = new FileReader();

            fileReader.onload = () => {
                workList.innerHTML = `
        <span class="preview__name">${fileName}<span>
        <span class="preview__remove"><span>
      `;

                workPreview.classList.add("selected");

                workList.addEventListener("click", () => {
                    previewDataTransfer.items.clear();
                    uploadPreview.files = previewDataTransfer.files;
                    workPreview.classList.remove("selected", "active");
                });
            };

            fileReader.readAsDataURL(file);

            previewDataTransfer.items.add(file);
            uploadPreview.files = previewDataTransfer.files;
            workPreview.classList.remove("active");
        } else {
            workPreview.classList.add("uploadError");
            workPreview.classList.remove("active");
            workList.innerHTML =
                "Выберите изображение JPG/PNG. Размер не более 1МБ";
        }
    });

    // upload file by dragged

    const requestDragArea = document.querySelector("#requestPreview");

    let file2;

    requestDragArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.currentTarget
            .closest(".profile__upload-area")
            .classList.add("active");
    });
    requestDragArea.addEventListener("dragleave", () => {
        requestDragArea.classList.remove("active");
    });
    requestDragArea.addEventListener("drop", (event) => {
        event.preventDefault();

        const workList = document.getElementById("requestList");
        const workPreview = document.getElementById("requestPreview");
        const uploadPreview = document.getElementById("uploadRequest");

        file2 = event.dataTransfer.files[0];

        let fileType = file2.type;

        let fileSize = file2.size;

        let fileName = file2.name;

        let validExtentions = ["application/pdf"];
        let limitSize = 10485760;

        if (validExtentions.includes(fileType) && fileSize < limitSize) {
            let fileReader = new FileReader();

            fileReader.onload = () => {
                workList.innerHTML = `
        <span class="preview__name">${fileName}<span>
        <span class="preview__remove"><span>
      `;

                workPreview.classList.add("selected");

                workList.addEventListener("click", () => {
                    requestDataTransfer.items.clear();
                    uploadPreview.files = requestDataTransfer.files;
                    workPreview.classList.remove("selected", "active");
                });
            };

            fileReader.readAsDataURL(file2);

            requestDataTransfer.items.add(file2);
            uploadPreview.files = requestDataTransfer.files;
            workPreview.classList.remove("active");
        } else {
            workPreview.classList.add("uploadError");
            workPreview.classList.remove("active");
            workList.innerHTML = "Выберите PDF-файл. Размер не более 10МБ.";
        }
    });

    // custom select by choices.js library

    const selects = document.querySelectorAll(".profile__select");

    selects.forEach((el) => {
        new Choices(el, {
            allowHTML: false,
            searchEnabled: false,
            itemSelectText: "",
        });
    });
}

function profileCompanyPageLogic() {
    // change placehoder content by window width
    const companyNameSmall = "Наименование компании*";
    const companyNameLagre = "Наименование компании/агентства*";

    const officialNameSmall = "Юридическое наименование*";
    const officialNameLarge = "Юридическое наименование компании / агентства*";

    const companyName = document.getElementById("companyName");
    const officialName = document.getElementById("officialName");

    const changePlaceholder = (input, small, large) => {
        input.setAttribute(
            "placeholder",
            window.innerWidth > 575 ? large : small
        );
    };
    changePlaceholder(companyName, companyNameSmall, companyNameLagre);
    changePlaceholder(officialName, officialNameSmall, officialNameLarge);
    window.addEventListener("resize", () => {
        changePlaceholder(companyName, companyNameSmall, companyNameLagre);
        changePlaceholder(officialName, officialNameSmall, officialNameLarge);
    });
}

function slidersHandler(
    sliderElements,
    arrayOfSliders,
    markersSettings = null
) {
    // init all sliders function
    const initSliders = (sliderElements, arrayOfSliders) => {
        sliderElements.forEach((slider, index) => {
            let markerValue = null;
            let initialSlide = 0;
            if (slider.closest(".project")) {
                markerValue = slider.closest(".project").dataset.marker;
                initialSlide = markersSettings[markerValue]?.initialSlide;
            }

            arrayOfSliders[index] = new Swiper(slider, {
                initialSlide: initialSlide,
                cssMode: false,
                slidesPerView: 1.5,
                spaceBetween: 10,
                grabCursor: true,
                breakpoints: {
                    460: {
                        slidesPerView: 2.2,
                    },
                    992: {
                        slidesPerView: 3.2,
                    },
                },
            });
        });
    };

    // destroy all sliders function
    const destroySliders = (sliders) => {
        sliders.forEach((slider) => slider.destroy());
    };

    // init or destroy sliders by resize

    const mq = window.matchMedia("(max-width: 1299px)");

    mq.addEventListener("change", toggleSlidersByResize);

    function toggleSlidersByResize(e) {
        if (e.matches) {
            initSliders(sliderElements, arrayOfSliders);
        } else {
            destroySliders(arrayOfSliders);
        }
    }

    // init or not sliders by window load

    window.addEventListener("load", () => {
        if (window.innerWidth <= 1299) {
            initSliders(sliderElements, arrayOfSliders);
        }
    });
}

function expertsApplicationListPage() {
    // init custom selects by choices.js

    const selects = document.querySelectorAll(".profile__select");

    selects.forEach((el) => {
        new Choices(el, {
            allowHTML: false,
            searchEnabled: false,
            itemSelectText: "",
        });
    });

    // object for change markers style
    const markersSettings = {
        unset: {
            value: "",
            bgColor: "transparent",
            initialSlide: 0,
        },
        gold: {
            value: "золото",
            bgColor: "#F2CF51",
            initialSlide: 0,
        },
        silver: {
            value: "серебро",
            bgColor: "#A19C90",
            initialSlide: 1,
        },
        bronz: {
            value: "бронза",
            bgColor: "#A88815",
            initialSlide: 2,
        },
        shortlist: {
            value: "шорт-лист",
            bgColor: "#1E1E1E",
            initialSlide: 3,
        },
    };

    // set initial state for all projects

    const projects = Array.from(document.querySelectorAll(".project"));

    function initState() {
        projects.forEach((project) => renderState(project));
    }

    initState();

    function renderState(project) {
        const markerValue = project.dataset.marker;

        // set marker settings
        const marker = project.children[0].children[0];
        marker.textContent = markersSettings[markerValue].value;
        marker.style.backgroundColor = markersSettings[markerValue].bgColor;

        // set buttons settings
        const allProjectButtons = project.querySelectorAll(".project__option");
        allProjectButtons.forEach((btn) => {
            if (btn.dataset.btn === markerValue) {
                btn.classList.add("active");
            }
        });
    }

    // init slider for each project

    const projectSliders = Array.from(
        document.querySelectorAll(".project__choice")
    );

    const sliders = [];

    slidersHandler(projectSliders, sliders, markersSettings);

    // toggle class active for '.project__option' button
    const projectOptionButtons = document.querySelectorAll(".project__option");

    projectOptionButtons.forEach((btn) => {
        btn.addEventListener("click", projectButtonsHandler);
    });

    function projectButtonsHandler(e) {
        const currBtn = e.target;
        const project = currBtn.closest(".project");
        // if click by active button
        if (currBtn.classList.contains("active")) {
            currBtn.classList.remove("active");
            project.setAttribute("data-marker", "unset");
            renderState(project);
        } else {
            // if click by non-active button
            const buttonsParent = currBtn.closest(".project__panel");
            const allProjectButtons = Array.from(buttonsParent.children);
            allProjectButtons.forEach((btn) => btn.classList.remove("active"));
            // set data-marker to current project and rerender this project
            project.setAttribute("data-marker", currBtn.dataset.btn);
            renderState(project);
        }
    }
}

function expertsWorkRatingPage() {
    // init slider for each project

    const projectSliders = Array.from(
        document.querySelectorAll(".project__choice")
    );

    const sliders = [];

    slidersHandler(projectSliders, sliders);

    // form handler

    const nominateForm = document.querySelector(".nominate__form");

    nominateForm.addEventListener("submit", (e) => e.preventDefault());

    const buttons = Array.from(document.querySelectorAll(".project__option"));

    const overlay = document.querySelector(".overlay");
    const body = document.body;
    const modal = document.querySelector(".experts__modal");
    const modalClose = document.querySelector(".experts__close");

    function buttonsHandler(e) {
        const currBtn = e.target;

        if (currBtn.classList.contains("active")) {
            currBtn.classList.remove("active");
        } else {
            buttons.forEach((btn) => btn.classList.remove("active"));
            currBtn.classList.add("active");
            overlayShow(overlay, body, modal);
        }
    }

    buttons.forEach((btn) => btn.addEventListener("click", buttonsHandler));

    overlay.addEventListener("click", () => overlayHide(overlay, body, modal));

    modalClose.addEventListener("click", () =>
        overlayHide(overlay, body, modal)
    );
}

// overlay and modal handlers

function overlayShow(overlay, body, modal) {
    overlay.classList.add("active");
    body.classList.add("lock");
    modal.classList.add("active");
}

function overlayHide(overlay, body, modal) {
    overlay.classList.remove("active");
    body.classList.remove("lock");
    modal.classList.remove("active");
}

// winners page logic
function winnersPageLogic() {
    const winnersItem = document.querySelectorAll(".winners__item");
    const brandItem = document.querySelectorAll(".brand__item");

    winnersItem.forEach((item) => {
        item.addEventListener("click", winnersItemHandler);
    });

    brandItem.forEach((item) => {
        item.addEventListener("click", brandItemHandler);
    });

    function winnersItemHandler(e) {
        let currItem = null;

        let winnersTop = e.target.closest(".winners__top");

        // toggle winners__item
        if (winnersTop) {
            currItem = e.target.closest(".winners__item");

            if (currItem.classList.contains("active")) {
                currItem.classList.remove("active");
            } else {
                winnersItem.forEach((el) => el.classList.remove("active"));
                currItem.classList.add("active");
            }
        }

        // close all nested accordions by close parent accordion
        if (winnersTop && winnersTop.closest(".winners__media")) {
            brandItem.forEach((el) => el.classList.remove("active"));
        }
    }

    // toggle brand__item
    function brandItemHandler(e) {
        let currItem = null;
        if (e.target.closest(".brand__top")) {
            currItem = e.target.closest(".brand__item");

            if (currItem.classList.contains("active")) {
                currItem.classList.remove("active");
            } else {
                brandItem.forEach((el) => el.classList.remove("active"));
                currItem.classList.add("active");
            }
        }
    }

    // popup handlers
    const overlay = document.querySelector(".overlay");
    const body = document.body;
    const workItems = document.querySelectorAll(".profile__works-item");
    let modal = null;
    let modalClose = document.querySelectorAll(".modal__close");

    workItems.forEach((item) => item.addEventListener("click", popupShow));

    // winners__popup show
    function popupShow(e) {
        const currCategory = e.target.closest(".winners__item");
        const isMedia = currCategory.classList.contains("winners__media");
        const isSpecial = currCategory.classList.contains("winners__special");
        const mediapopup = document.querySelector(".mediapopup");
        const specpopup = document.querySelector(".specpopup");

        // const modalClose = document.querySelector(".experts__close");

        if (isMedia) {
            modal = mediapopup;
        } else if (isSpecial) {
            modal = specpopup;
        }

        overlayShow(overlay, body, modal);
    }

    // winners__popup close
    overlay.addEventListener("click", () => overlayHide(overlay, body, modal));

    if (modalClose) {
        modalClose.forEach((el) =>
            el.addEventListener("click", () =>
                overlayHide(overlay, body, modal)
            )
        );
    }
}
