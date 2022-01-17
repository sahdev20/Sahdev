(this.webpackJsonptunis = this.webpackJsonptunis || []).push([
    [0], {
        77: function(e, s, c) {},
        78: function(e, s, c) {
            "use strict";
            c.r(s);
            var t = c(25),
                a = c.n(t),
                i = c(1),
                l = c(14),
                o = c(0),
                n = [{
                    img: "dark",
                    title: "Dark Demo (Professional Portfolio)",
                    routerPath: "/home-dark",
                    delayAnimation: "50"
                }, {
                    img: "light",
                    title: "Light Demo (Classic Portfolio)",
                    routerPath: "/home-light",
                    delayAnimation: ""
                }],
                r = function() {
                    return Object(o.jsxs)("div", {
                        children: [Object(o.jsx)("section", {
                            className: "banner text-center",
                            children: Object(o.jsxs)("div", {
                                className: "content",
                                children: [Object(o.jsx)("h1", {
                                    children: "Tunis"
                                }), Object(o.jsx)("h2", {
                                    children: "Personal Portfolio React Template"
                                })]
                            })
                        }), Object(o.jsx)("section", {
                            className: "demo dark",
                            children: Object(o.jsx)("div", {
                                className: "container",
                                children: Object(o.jsx)("div", {
                                    className: "row",
                                    children: n.map((function(e, s) {
                                        return Object(o.jsx)("div", {
                                            className: "col-xs-12 col-sm-6 col-md-6",
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1200",
                                            "data-aos-delay": e.delayAnimation,
                                            children: Object(o.jsxs)("div", {
                                                className: "content text-center",
                                                children: [Object(o.jsx)("div", {
                                                    className: "bg_container",
                                                    children: Object(o.jsx)(l.b, {
                                                        to: e.routerPath,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: Object(o.jsx)("img", {
                                                            src: "img/intro/".concat(e.img, ".jpg"),
                                                            alt: "demo",
                                                            className: "img-responsive screenshot"
                                                        })
                                                    })
                                                }), Object(o.jsx)("h2", {
                                                    children: e.title
                                                }), Object(o.jsx)("div", {
                                                    className: "anchor",
                                                    children: Object(o.jsx)("h6", {
                                                        children: Object(o.jsx)(l.b, {
                                                            className: "btn",
                                                            to: e.routerPath,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: "view demo"
                                                        })
                                                    })
                                                })]
                                            })
                                        }, s)
                                    }))
                                })
                            })
                        }), Object(o.jsxs)("footer", {
                            children: [Object(o.jsxs)("div", {
                                className: "go_purchase",
                                children: [Object(o.jsx)("h6", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    children: "You are at the right step now"
                                }), Object(o.jsxs)("h3", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "100",
                                    children: ["Purchase Tunis & Build Your Super Fast", " ", Object(o.jsx)("span", {
                                        className: "theme-color",
                                        children: "React"
                                    }), " &", " ", Object(o.jsx)("span", {
                                        className: "theme-color",
                                        children: "Bootstrap 5 "
                                    }), " Based Portfolio Template."]
                                }), Object(o.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "1200",
                                    "data-aos-delay": "200",
                                    children: Object(o.jsxs)("a", {
                                        className: "button",
                                        href: "https://themeforest.net/user/ib-themes/portfolio",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [Object(o.jsx)("span", {
                                            className: "button-text",
                                            children: " Purchase Now"
                                        }), Object(o.jsx)("span", {
                                            className: "button-icon fa fa-arrow-right"
                                        })]
                                    })
                                })]
                            }), Object(o.jsxs)("div", {
                                className: "text-center footer_copyright",
                                children: [Object(o.jsx)("h6", {
                                    children: "Tunis - Personal Portfolio React Template"
                                }), Object(o.jsxs)("h5", {
                                    children: ["\xa9 ", (new Date).getFullYear(), " Designed with", " ", Object(o.jsx)("span", {
                                        className: "heart",
                                        children: "\u2764"
                                    }), " by", " ", Object(o.jsx)("a", {
                                        href: "https://themeforest.net/user/ib-themes",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "ib-themes."
                                    }), " "]
                                })]
                            })]
                        })]
                    })
                },
                j = c(4),
                d = c(3),
                m = c(2),
                b = c.n(m),
                u = [{
                    title: "4",
                    subTitle1: "Pipeline",
                    subTitle2: "Project"
                }, {
                    title: "5",
                    subTitle1: "Completed",
                    subTitle2: "Projects"
                 }, {
                    title: "20",
                    subTitle1: "Achivements",
                //     subTitle2: "customers"
                }, {
                    title: "20",
                    subTitle1: "Certificates",
                    // subTitle2: "won"
                }
            ],
                x = function() {
                    return Object(o.jsx)("div", {
                        className: "row",
                        children: u.map((function(e, s) {
                            return Object(o.jsx)("div", {
                                className: "col-6",
                                children: Object(o.jsxs)("div", {
                                    className: "box-stats with-margin",
                                    children: [Object(o.jsx)("h3", {
                                        className: "poppins-font position-relative",
                                        children: e.title
                                    }), Object(o.jsxs)("p", {
                                        className: "open-sans-font m-0 position-relative text-uppercase",
                                        children: [e.subTitle1, " ", Object(o.jsx)("span", {
                                            className: "d-block",
                                            children: e.subTitle2
                                        })]
                                    })]
                                })
                            }, s)
                        }))
                    })
                },
                p = [{
                    year: "2015",
                    degree: "ENGINEERING DEGREE",
                    institute: "LJ Collage",
                    // details: "  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore\n        adipisicing elit"
                 }, //{
                //     year: "2012",
                //     degree: "MASTER DEGREE",
                //     institute: "KIEV UNIVERSITY",
                //     details: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol\n        elit, tempor incididunt"
                 //},
                  {
                    year: "2009",
                    degree: "High School ",
                    institute: "THE H.B.Kapadia NEW HIGH SCHOOL",
                    // details: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur\n        elit, sed do eiusmod tempor duntt"
                }],
                O = function() {
                    return Object(o.jsx)("ul", {
                        children: p.map((function(e, s) {
                            return Object(o.jsxs)("li", {
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("i", {
                                        className: "fa fa-briefcase"
                                    })
                                }), Object(o.jsx)("span", {
                                    className: "time open-sans-font text-uppercase",
                                    children: e.year
                                }), Object(o.jsxs)("h5", {
                                    className: "poppins-font text-uppercase",
                                    children: [e.degree, Object(o.jsx)("span", {
                                        className: "place open-sans-font",
                                        children: e.institute
                                    })]
                                }), Object(o.jsx)("p", {
                                    className: "open-sans-font",
                                    children: e.details
                                })]
                            }, s)
                        }))
                    })
                },
                h = [{
                    year: "   2018 - Present",
                    position: " Web Developer",
                    compnayName: "Envato",
                    details: "  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore\n        adipisicing elit"
                }, {
                    year: "2013 - 2018",
                    position: " UI/UX Designer",
                    compnayName: "Themeforest",
                    details: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol\n        elit, tempor incididunt"
                }, {
                    year: "2020 - 2021",
                    position: "Assistant Professor",
                    compnayName: "Videohive",
                    details: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur\n        elit, sed do eiusmod tempor duntt"
                }],
                g = function() {
                    return Object(o.jsx)("ul", {
                        children: h.map((function(e, s) {
                            return Object(o.jsxs)("li", {
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("i", {
                                        className: "fa fa-briefcase"
                                    })
                                }), Object(o.jsx)("span", {
                                    className: "time open-sans-font text-uppercase",
                                    children: e.year
                                }), Object(o.jsxs)("h5", {
                                    className: "poppins-font text-uppercase",
                                    children: [e.position, Object(o.jsx)("span", {
                                        className: "place open-sans-font",
                                        children: e.compnayName
                                    })]
                                }), Object(o.jsx)("p", {
                                    className: "open-sans-font",
                                    children: e.details
                                })]
                            }, s)
                        }))
                    })
                },
                N = [{
                    meta: "first name",
                    metaInfo: "Sahdev"
                }, {
                    meta: "last name",
                    metaInfo: "Patel"
                }, {
                    meta: "Age",
                    metaInfo: "21 Years"
                }, {
                    meta: "Nationality",
                    metaInfo: "INDIAN"
                }, {
                    meta: "Freelance",
                    metaInfo: "Available"
                }, {
                    meta: "Address",
                    metaInfo: "INDIA"
                }, {
                    meta: "phone",
                    metaInfo: "+91-8980866438"
                }, {
                    meta: "Email",
                    metaInfo: "sahdevpatel2015@gmail.com"
                }, {
                    meta: "Linkedin",
                    metaInfo: ""
                }, {
                    meta: "langages",
                    metaInfo: "English, Hindi"
                }],
                v = function() {
                    return Object(o.jsx)("ul", {
                        className: "about-list list-unstyled open-sans-font",
                        children: N.map((function(e, s) {
                            return Object(o.jsxs)("li", {
                                children: [Object(o.jsxs)("span", {
                                    className: "title",
                                    children: [e.meta, ": "]
                                }), Object(o.jsx)("span", {
                                    className: "value d-block d-sm-inline-block d-lg-block d-xl-inline-block",
                                    children: e.metaInfo
                                })]
                            }, s)
                        }))
                    })
                },
                f = [{
                    skillClass: "p85",
                    skillPercent: "85",
                    skillName: "HTML"
                }, {
                    skillClass: "p75",
                    skillPercent: "75",
                    skillName: "JAVASCRIPT"
                }, {
                    skillClass: "p65",
                    skillPercent: "65",
                    skillName: "CSS"
                }, {
                    skillClass: "p85",
                    skillPercent: "85",
                    skillName: "Java"
                }, {
                    skillClass: "p85",
                    skillPercent: "85",
                    skillName: "MEAN"
                }, {
                    skillClass: "p90",
                    skillPercent: "90",
                    skillName: "Database"
                }, {
                    skillClass: "p80",
                    skillPercent: "80",
                    skillName: "Python"
                }, {
                    skillClass: "p90",
                    skillPercent: "90",
                    skillName: "Android"
                }, {
                    skillClass: "p85",
                    skillPercent: "85",
                    skillName: "Angular"
                }, {
                    skillClass: "p75",
                    skillPercent: "75",
                    skillName: "REACT"
                }],
                y = function() {
                    return Object(o.jsx)(o.Fragment, {
                        children: f.map((function(e, s) {
                            return Object(o.jsxs)("div", {
                                className: "col-6 col-md-3 mb-3 mb-sm-5",
                                children: [Object(o.jsxs)("div", {
                                    className: "c100 ".concat(e.skillClass),
                                    children: [Object(o.jsxs)("span", {
                                        children: [e.skillPercent, "%"]
                                    }), Object(o.jsxs)("div", {
                                        className: "slice",
                                        children: [Object(o.jsx)("div", {
                                            className: "bar"
                                        }), Object(o.jsx)("div", {
                                            className: "fill"
                                        })]
                                    })]
                                }), Object(o.jsx)("h6", {
                                    className: "text-uppercase open-sans-font text-center mt-2 mt-sm-4",
                                    children: e.skillName
                                })]
                            }, s)
                        }))
                    })
                },
                w = function() {
                    return Object(o.jsx)("section", {
                        className: "main-content ",
                        children: Object(o.jsxs)("div", {
                            className: "container",
                            children: [Object(o.jsxs)("div", {
                                className: "row",
                                children: [Object(o.jsx)("div", {
                                    className: "col-xl-6 col-lg-5 col-12",
                                    children: Object(o.jsxs)("div", {
                                        className: "row",
                                        children: [Object(o.jsx)("div", {
                                            className: "col-12",
                                            children: Object(o.jsx)("h3", {
                                                className: "text-uppercase custom-title mb-0 ft-wt-600",
                                                children: "personal infos"
                                            })
                                        }), Object(o.jsx)("div", {
                                            className: "col-12 d-block d-sm-none",
                                            children: Object(o.jsx)("img", {
                                                src: "img/hero/img-mobile.jpg",
                                                className: "img-fluid main-img-mobile",
                                                alt: "about avatar"
                                            })
                                        }), Object(o.jsx)("div", {
                                            className: "col-12",
                                            children: Object(o.jsx)(v, {})
                                        }), Object(o.jsx)("div", {
                                            className: "col-12 mt-1",
                                            children: Object(o.jsxs)("a", {
                                                className: "button",
                                                href: "img/cv.webp",
                                                download: !0,
                                                children: [Object(o.jsx)("span", {
                                                    className: "button-text",
                                                    children: "Download CV"
                                                }), Object(o.jsx)("span", {
                                                    className: "button-icon fa fa-download"
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0",
                                    children: Object(o.jsx)(x, {})
                                })]
                            }), Object(o.jsx)("hr", {
                                className: "separator"
                            }), Object(o.jsxs)("div", {
                                className: "row",
                                children: [Object(o.jsx)("div", {
                                    className: "col-12",
                                    children: Object(o.jsx)("h3", {
                                        className: "text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600",
                                        children: "My Skills"
                                    })
                                }), Object(o.jsx)(y, {})]
                            }), Object(o.jsx)("hr", {
                                className: "separator mt-1"
                            }), Object(o.jsxs)("div", {
                                className: "row",
                                children: [Object(o.jsx)("div", {
                                    className: "col-12",
                                    children: Object(o.jsxs)("h3", {
                                        className: "text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600",
                                        children: ["Experience ", Object(o.jsx)("span", {
                                            children: "&"
                                        }), " Education"]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-lg-6 m-15px-tb",
                                    children: Object(o.jsx)("div", {
                                        className: "resume-box",
                                        children: Object(o.jsx)(g, {})
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-lg-6 m-15px-tb",
                                    children: Object(o.jsx)("div", {
                                        className: "resume-box",
                                        children: Object(o.jsx)(O, {})
                                    })
                                })]
                            })]
                        })
                    })
                },
                k = "img/hero/light.jpg",
                C = "img-mobile-light",
                _ = "lucy milner",
                P = "web designer",
                q = "I'm a Indian based full-stack & front\u2011 developer focused on\n  crafting clean & user\u2011friendly experiences, I am passionate about\n  building excellent software that improves the lives of those\n  around me.",
                S = "more about me",
                L = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1];

                    function a() {
                        t(!c)
                    }
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)("div", {
                            className: "row home-details-container align-items-center",
                            children: [Object(o.jsx)("div", {
                                className: "col-lg-4 bg position-fixed d-none d-lg-block",
                                style: {
                                    backgroundImage: "url(".concat("" + k, ")")
                                }
                            }), Object(o.jsx)("div", {
                                className: "col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start",
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("img", {
                                        src: "img/hero/".concat(C, ".jpg"),
                                        className: "img-fluid main-img-mobile d-sm-block d-lg-none",
                                        alt: "hero man"
                                    }), Object(o.jsxs)("h1", {
                                        className: "text-uppercase poppins-font",
                                        children: ["I'm ", _, ".", Object(o.jsx)("span", {
                                            children: P
                                        })]
                                    }), Object(o.jsx)("p", {
                                        className: "open-sans-font",
                                        children: q
                                    }), Object(o.jsxs)("button", {
                                        className: "button",
                                        onClick: a,
                                        children: [Object(o.jsx)("span", {
                                            className: "button-text",
                                            children: S
                                        }), Object(o.jsx)("span", {
                                            className: "button-icon fa fa-arrow-right"
                                        })]
                                    })]
                                })
                            })]
                        }), Object(o.jsx)(b.a, {
                            isOpen: c,
                            onRequestClose: a,
                            contentLabel: "My dialog",
                            className: "custom-modal dark light",
                            overlayClassName: "custom-overlay",
                            closeTimeoutMS: 500,
                            children: Object(o.jsxs)("div", {
                                children: [Object(o.jsx)("button", {
                                    className: "close-modal",
                                    onClick: a,
                                    children: Object(o.jsx)("img", {
                                        src: "/img/cancel.svg",
                                        alt: "close icon"
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "box_inner about green",
                                    children: Object(o.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("div", {
                                            className: "title-section text-left text-sm-center",
                                            children: [Object(o.jsxs)("h1", {
                                                children: ["ABOUT ", Object(o.jsx)("span", {
                                                    children: "ME"
                                                })]
                                            }), Object(o.jsx)("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })]
                                        }), Object(o.jsx)(w, {})]
                                    })
                                })]
                            })
                        })]
                    })
                },
                M = function() {
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children: [Object(o.jsx)("i", {
                                className: "fa fa-map position-absolute"
                            }), Object(o.jsx)("span", {
                                className: "d-block",
                                children: "Address Point"
                            }), "Ahmedabad, Gujarat, India."]
                        }), Object(o.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children: [Object(o.jsx)("i", {
                                className: "fa fa-envelope-open position-absolute"
                            }), Object(o.jsx)("span", {
                                className: "d-block",
                                children: "mail me"
                            }), " ", Object(o.jsx)("a", {
                                href: "mailto:sahdevpatel2015@gmail.com",
                                children: "sahdevpatel2015@gmail.com"
                            })]
                        }), Object(o.jsxs)("p", {
                            className: "open-sans-font custom-span-contact position-relative",
                            children: [Object(o.jsx)("i", {
                                className: "fa fa-phone-square position-absolute"
                            }), Object(o.jsx)("span", {
                                className: "d-block",
                                children: "call me"
                            }), " ", Object(o.jsx)("a", {
                                href: "Tel: +91-8980866438",
                                children: "+91-8980866438"
                            })]
                        })]
                    })
                },
                T = c(27),
                E = c.n(T),
                R = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Image Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Envato"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://themeforest.net/item/edina-personal-portfolio-react-template/34082686",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.envato.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-1.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                A = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Youtube Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Video"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Videohive"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Software "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Adobe After Effects"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://videohive.net/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.videohive.net"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("div", {
                                className: "videocontainer",
                                children: Object(o.jsx)("iframe", {
                                    className: "youtube-video",
                                    title: "youtube video",
                                    src: "https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer",
                                    allowFullScreen: !0
                                })
                            })]
                        })
                    })
                },
                I = c(12),
                D = c(34),
                B = c.n(D),
                H = (c(73), c(74), function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Slider Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Themeforest"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://themeforest.net/item/edina-personal-portfolio-react-template/34082686",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.envato.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsxs)(B.a, Object(I.a)(Object(I.a)({}, {
                                dots: !0,
                                infinite: !1,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                draggable: !1
                            }), {}, {
                                children: [Object(o.jsx)("div", {
                                    className: "slide_item",
                                    children: Object(o.jsx)("img", {
                                        src: "img/projects/project-3.jpg",
                                        alt: "slide 1"
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "slide_item",
                                    children: Object(o.jsx)("img", {
                                        src: "img/projects/project-2.jpg",
                                        alt: "slide 1"
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "slide_item",
                                    children: Object(o.jsx)("img", {
                                        src: "img/projects/project-1.jpg",
                                        alt: "slide 1"
                                    })
                                })]
                            }))]
                        })
                    })
                }),
                U = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "LOCAL VIDEO PROJECT"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Video"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Videohive"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Software "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Adobe After Effects"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://videohive.net/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.videohive.net"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("div", {
                                className: "videocontainer",
                                children: Object(o.jsx)("video", {
                                    id: "video",
                                    className: "responsive-video",
                                    controls: !0,
                                    poster: "img/projects/project-1.jpg",
                                    children: Object(o.jsx)("source", {
                                        src: "img/projects/video.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    })
                },
                F = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Saas App Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Themeforest"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.envato.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-5.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                Y = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Image Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Envato"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://www.pexels.com/search/agency/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.pexels.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-6.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                J = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Facebook Profile"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Facebook"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://www.facebook.com/ibthemes",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.facebook.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-7.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                W = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Dribbble Profile"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Dribbble"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://dribbble.com/ib-themes",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.dribbble.com"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-8.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                V = function() {
                    return Object(o.jsx)("div", {
                        className: "slideshow",
                        children: Object(o.jsxs)("figure", {
                            children: [Object(o.jsxs)("figcaption", {
                                children: [Object(o.jsx)("h3", {
                                    children: "Behance Project"
                                }), Object(o.jsxs)("div", {
                                    className: "row open-sans-font",
                                    children: [Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-file-text-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Project "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Website"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-user-o pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Client "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "Behance"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-code pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Langages "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: "HTML, CSS, Javascript"
                                        })]
                                    }), Object(o.jsxs)("div", {
                                        className: "col-12 col-sm-6 mb-2",
                                        children: [Object(o.jsx)("i", {
                                            className: "fa fa-external-link pr-2"
                                        }), Object(o.jsx)("span", {
                                            className: "project-label",
                                            children: "Preview "
                                        }), ":", " ", Object(o.jsx)("span", {
                                            className: "ft-wt-600 uppercase",
                                            children: Object(o.jsx)("a", {
                                                href: "https://www.behance.net/ib-themes",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "www.behance.net"
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(o.jsx)("img", {
                                src: "img/projects/project-9.jpg",
                                alt: "Portolio"
                            })]
                        })
                    })
                },
                G = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1],
                        a = Object(i.useState)(!1),
                        l = Object(d.a)(a, 2),
                        n = l[0],
                        r = l[1],
                        j = Object(i.useState)(!1),
                        m = Object(d.a)(j, 2),
                        u = m[0],
                        x = m[1],
                        p = Object(i.useState)(!1),
                        O = Object(d.a)(p, 2),
                        h = O[0],
                        g = O[1],
                        N = Object(i.useState)(!1),
                        v = Object(d.a)(N, 2),
                        f = v[0],
                        y = v[1],
                        w = Object(i.useState)(!1),
                        k = Object(d.a)(w, 2),
                        C = k[0],
                        _ = k[1],
                        P = Object(i.useState)(!1),
                        q = Object(d.a)(P, 2),
                        S = q[0],
                        L = q[1],
                        M = Object(i.useState)(!1),
                        T = Object(d.a)(M, 2),
                        I = T[0],
                        D = T[1],
                        B = Object(i.useState)(!1),
                        G = Object(d.a)(B, 2),
                        K = G[0],
                        z = G[1];

                    function X() {
                        t(!c)
                    }

                    function Q() {
                        r(!n)
                    }

                    function Z() {
                        x(!u)
                    }

                    function $() {
                        g(!h)
                    }

                    function ee() {
                        y(!f)
                    }

                    function se() {
                        _(!C)
                    }

                    function ce() {
                        L(!S)
                    }

                    function te() {
                        D(!I)
                    }

                    function ae() {
                        z(!K)
                    }
                    return Object(i.useEffect)((function() {
                        E()(), E()({
                            selector: ".direction-reveal",
                            itemSelector: ".direction-reveal__card",
                            animationName: "slide",
                            animationPostfixEnter: "enter",
                            animationPostfixLeave: "leave",
                            touchThreshold: 500
                        })
                    }), []), Object(o.jsxs)("ul", {
                        className: "row grid",
                        children: [Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: X,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-1.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: " direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Image Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: c,
                                onRequestClose: X,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: X,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(R, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: Q,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-2.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: " direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Youtube Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: n,
                                onRequestClose: Q,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: Q,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(A, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: Z,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-3.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: " direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Slider Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: u,
                                onRequestClose: Z,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: Z,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(H, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: $,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-4.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: "direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Local Video Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: h,
                                onRequestClose: $,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: $,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(U, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: ee,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-5.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: "direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Saas App Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: f,
                                onRequestClose: ee,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: ee,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(F, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: se,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-6.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: " direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Image Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: C,
                                onRequestClose: se,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: se,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(Y, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: ce,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-7.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: " direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Facebook Profile"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: S,
                                onRequestClose: ce,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: ce,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(J, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsx)("li", {
                            className: "direction-reveal",
                            children: Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: te,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-8.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: "direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Dribbble Profile"
                                    })
                                }), Object(o.jsx)(b.a, {
                                    isOpen: I,
                                    onRequestClose: te,
                                    contentLabel: "My dialog",
                                    className: "custom-modal dark green",
                                    overlayClassName: "custom-overlay",
                                    closeTimeoutMS: 500,
                                    children: Object(o.jsxs)("div", {
                                        children: [Object(o.jsx)("button", {
                                            className: "close-modal",
                                            onClick: te,
                                            children: Object(o.jsx)("img", {
                                                src: "/img/cancel.svg",
                                                alt: "close icon"
                                            })
                                        }), Object(o.jsx)("div", {
                                            className: "box_inner portfolio",
                                            children: Object(o.jsx)(W, {})
                                        })]
                                    })
                                })]
                            })
                        }), Object(o.jsxs)("li", {
                            className: "direction-reveal",
                            children: [Object(o.jsxs)("figure", {
                                className: "direction-reveal__card",
                                onClick: ae,
                                children: [Object(o.jsx)("img", {
                                    src: "img/projects/project-9.jpg",
                                    alt: "Portolio"
                                }), Object(o.jsx)("div", {
                                    className: "direction-reveal__overlay direction-reveal__anim--enter",
                                    children: Object(o.jsx)("span", {
                                        className: "direction-reveal__title",
                                        children: "Behance Project"
                                    })
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: K,
                                onRequestClose: ae,
                                contentLabel: "My dialog",
                                className: "custom-modal dark green",
                                overlayClassName: "custom-overlay",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: ae,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner portfolio",
                                        children: Object(o.jsx)(V, {})
                                    })]
                                })
                            })]
                        })]
                    })
                },
                K = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "How to Own Your Audience by Creating an Email List"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-1.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                },
                z = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "Top 10 Toolkits for Deep Learning in 2020"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-2.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                },
                X = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "Everything You Need to Know About Web Accessibility"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-3.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                },
                Q = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "How to Inject Humor & Comedy Into Your Brand"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-4.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                },
                Z = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "Women in Web Design: How To Achieve Success"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-5.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                },
                $ = function() {
                    return Object(o.jsxs)("article", {
                        children: [Object(o.jsxs)("div", {
                            className: "title-section text-left text-sm-center",
                            children: [Object(o.jsxs)("h1", {
                                children: ["Post ", Object(o.jsx)("span", {
                                    children: "Details"
                                })]
                            }), Object(o.jsx)("span", {
                                className: "title-bg",
                                children: "posts"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "meta open-sans-font",
                            children: [Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-user"
                                }), " steve"]
                            }), Object(o.jsxs)("span", {
                                className: "date",
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-calendar"
                                }), " 9 January 2017"]
                            }), Object(o.jsxs)("span", {
                                children: [Object(o.jsx)("i", {
                                    className: "fa fa-tags"
                                }), " wordpress, business, economy, design"]
                            })]
                        }), Object(o.jsx)("h1", {
                            children: "Evergreen versus topical content: An overview"
                        }), Object(o.jsx)("img", {
                            src: "img/blog/blog-post-6.jpg",
                            className: "img-fluid",
                            alt: "Blog"
                        }), Object(o.jsxs)("div", {
                            className: "blog-excerpt open-sans-font pb-5",
                            children: [Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }), Object(o.jsxs)("div", {
                                className: "quotebox",
                                children: [Object(o.jsx)("div", {
                                    className: "icon",
                                    children: Object(o.jsx)("img", {
                                        src: "img/blog/quote.svg",
                                        alt: "blog quote"
                                    })
                                }), Object(o.jsx)("p", {
                                    children: "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights."
                                })]
                            }), Object(o.jsx)("p", {
                                children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                            }), Object(o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })]
                    })
                };
            b.a.setAppElement("#root");
            var ee = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1],
                        a = Object(i.useState)(!1),
                        l = Object(d.a)(a, 2),
                        n = l[0],
                        r = l[1],
                        j = Object(i.useState)(!1),
                        m = Object(d.a)(j, 2),
                        u = m[0],
                        x = m[1],
                        p = Object(i.useState)(!1),
                        O = Object(d.a)(p, 2),
                        h = O[0],
                        g = O[1],
                        N = Object(i.useState)(!1),
                        v = Object(d.a)(N, 2),
                        f = v[0],
                        y = v[1],
                        w = Object(i.useState)(!1),
                        k = Object(d.a)(w, 2),
                        C = k[0],
                        _ = k[1];

                    function P() {
                        t(!c)
                    }

                    function q() {
                        r(!n)
                    }

                    function S() {
                        x(!u)
                    }

                    function L() {
                        g(!h)
                    }

                    function M() {
                        y(!f)
                    }

                    function T() {
                        _(!C)
                    }
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: P,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-1.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "How to Own Your Audience by Creating an Email List"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: c,
                                onRequestClose: P,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: P,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(K, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: q,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-2.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Top 10 Toolkits for Deep Learning in 2020"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: n,
                                onRequestClose: q,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: q,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(z, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: S,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-3.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Everything You Need to Know About Web Accessibility"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: u,
                                onRequestClose: S,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: S,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(X, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: L,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-4.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "How to Inject Humor & Comedy Into Your Brand"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: h,
                                onRequestClose: L,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: L,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(Q, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: M,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-5.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Women in Web Design: How To Achieve Success"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: f,
                                onRequestClose: M,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: M,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(Z, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: T,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-6.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Evergreen versus topical content: An overview"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: C,
                                onRequestClose: T,
                                contentLabel: "My dialog",
                                className: "custom-modal ",
                                overlayClassName: "custom-overlay green",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: T,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)($, {})
                                    })]
                                })
                            })]
                        })]
                    })
                },
                se = c(36),
                ce = function() {
                    var e = Object(se.a)(),
                        s = e.register,
                        c = e.handleSubmit,
                        t = e.formState.errors;
                    return Object(o.jsx)(o.Fragment, {
                        children: Object(o.jsx)("form", {
                            className: "contactform",
                            onSubmit: c((function(e, s) {
                                s.target.reset(), console.log("Message submited: " + JSON.stringify(e))
                            })),
                            children: Object(o.jsxs)("div", {
                                className: "row",
                                children: [Object(o.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [Object(o.jsx)("input", Object(I.a)(Object(I.a)({}, s("name", {
                                            required: !0
                                        })), {}, {
                                            type: "text",
                                            name: "name",
                                            placeholder: "YOUR NAME"
                                        })), t.name && "required" === t.name.type && Object(o.jsx)("span", {
                                            className: "invalid-feedback",
                                            children: "Name is required"
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [Object(o.jsx)("input", Object(I.a)(Object(I.a)({}, s("email", {
                                            required: "Email is Required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Entered value does not match email format"
                                            }
                                        }, {
                                            required: !0
                                        })), {}, {
                                            type: "email",
                                            name: "email",
                                            placeholder: "YOUR EMAIL"
                                        })), t.email && Object(o.jsx)("span", {
                                            className: "invalid-feedback",
                                            children: t.email.message
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-12 col-md-12",
                                    children: Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [Object(o.jsx)("input", Object(I.a)(Object(I.a)({}, s("subject", {
                                            required: !0
                                        })), {}, {
                                            type: "text",
                                            name: "subject",
                                            placeholder: "YOUR SUBJECT"
                                        })), t.subject && Object(o.jsx)("span", {
                                            className: "invalid-feedback",
                                            children: "Message is required."
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-12",
                                    children: Object(o.jsxs)("div", {
                                        className: "form-group",
                                        children: [Object(o.jsx)("textarea", Object(I.a)(Object(I.a)({}, s("message", {
                                            required: !0
                                        })), {}, {
                                            name: "message",
                                            placeholder: "YOUR MESSAGE"
                                        })), t.message && Object(o.jsx)("span", {
                                            className: "invalid-feedback",
                                            children: "Message is required."
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-12",
                                    children: Object(o.jsxs)("button", {
                                        type: "submit",
                                        className: "button",
                                        children: [Object(o.jsx)("span", {
                                            className: "button-text",
                                            children: "Send Message"
                                        }), Object(o.jsx)("span", {
                                            className: "button-icon fa fa-send"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                te = [{
                    iconName: "fab fa-facebook-f",
                    link: "https://www.facebook.com/"
                }, {
                    iconName: "fa fa-twitter",
                    link: "https://twitter.com/"
                }, {
                    iconName: "fa fa-youtube",
                    link: "https://www.youtube.com/"
                }, {
                    iconName: "fa fa-dribbble",
                    link: "https://dribbble.com/"
                }],
                ae = function() {
                    return Object(o.jsx)("ul", {
                        className: "social list-unstyled pt-1 mb-5",
                        children: te.map((function(e, s) {
                            return Object(o.jsx)("li", {
                                children: Object(o.jsx)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: Object(o.jsx)("i", {
                                        className: e.iconName
                                    })
                                })
                            }, s)
                        }))
                    })
                },
                ie = c(20),
                le = c.n(ie),
                oe = [{
                    icon: "fa-home",
                    menuName: "Home"
                }, {
                    icon: "fa-user",
                    menuName: "About"
                }, {
                    icon: "fa-briefcase",
                    menuName: "Portfolio"
                }, {
                    icon: "fa-envelope-open",
                    menuName: "Contact"
                }, {
                    icon: "fa-comments",
                    menuName: "Blog"
                }],
                ne = function() {
                    return document.body.classList.add("light"), Object(o.jsxs)("div", {
                        className: "green",
                        children: [Object(o.jsx)("div", {
                            className: "demo-sticker",
                            children: Object(o.jsx)("a", {
                                href: "/home-dark",
                                children: Object(o.jsx)("i", {
                                    className: "fa fa-moon-o",
                                    "aria-hidden": "true"
                                })
                            })
                        }), Object(o.jsx)(le.a, {
                            innerSize: 8,
                            outerSize: 44,
                            color: "114, 182, 38",
                            outerAlpha: .3,
                            innerScale: .7,
                            outerScale: 1.2
                        }), Object(o.jsxs)(j.d, {
                            children: [Object(o.jsx)("div", {
                                className: "header",
                                children: Object(o.jsx)(j.b, {
                                    className: " icon-menu  revealator-slideup revealator-once revealator-delay1",
                                    children: oe.map((function(e, s) {
                                        return Object(o.jsxs)(j.a, {
                                            className: "icon-box",
                                            children: [Object(o.jsx)("i", {
                                                className: "fa ".concat(e.icon)
                                            }), Object(o.jsx)("h2", {
                                                children: e.menuName
                                            })]
                                        }, s)
                                    }))
                                })
                            }), Object(o.jsxs)("div", {
                                className: "tab-panel_list",
                                children: [Object(o.jsx)(j.c, {
                                    className: "home ",
                                    children: Object(o.jsxs)("div", {
                                        className: "container-fluid main-container container-home p-0 ",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsx)("div", {
                                            className: "color-block d-none d-lg-block"
                                        }), Object(o.jsx)(L, {})]
                                    })
                                }), Object(o.jsx)(j.c, {
                                    className: "about",
                                    children: Object(o.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("div", {
                                            className: "title-section text-left text-sm-center",
                                            children: [Object(o.jsxs)("h1", {
                                                children: ["ABOUT ", Object(o.jsx)("span", {
                                                    children: "ME"
                                                })]
                                            }), Object(o.jsx)("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })]
                                        }), Object(o.jsx)(w, {})]
                                    })
                                }), Object(o.jsxs)(j.c, {
                                    className: "portfolio",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["my ", Object(o.jsx)("span", {
                                                children: "portfolio"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "works"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container grid-gallery main-content",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: Object(o.jsx)(G, {})
                                    })]
                                }), Object(o.jsxs)(j.c, {
                                    className: "contact",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["get in ", Object(o.jsx)("span", {
                                                children: "touch"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "contact"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: Object(o.jsxs)("div", {
                                            className: "row",
                                            children: [Object(o.jsxs)("div", {
                                                className: "col-12 col-lg-4",
                                                children: [Object(o.jsx)("h3", {
                                                    className: "text-uppercase custom-title mb-0 ft-wt-600 pb-3",
                                                    children: "Don't be shy !"
                                                }), Object(o.jsx)("p", {
                                                    className: "open-sans-font mb-4",
                                                    children: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                                                }), Object(o.jsx)(M, {}), Object(o.jsx)(ae, {})]
                                            }), Object(o.jsx)("div", {
                                                className: "col-12 col-lg-8",
                                                children: Object(o.jsx)(ce, {})
                                            })]
                                        })
                                    })]
                                }), Object(o.jsxs)(j.c, {
                                    className: "blog",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center ",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["my ", Object(o.jsx)("span", {
                                                children: "blog"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "posts"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: Object(o.jsx)("div", {
                                            className: "row pb-50",
                                            children: Object(o.jsx)(ee, {})
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                re = "img/hero/dark.jpg",
                je = "img-mobile",
                de = "Sahdev Patel",
                me = "full-stck developer",
                be = "I'm a full-stack developer\u2011 focused on\n  crafting clean & user\u2011friendly experiences, I am passionate about\n  building excellent software that improves the lives of those\n  around me.",
                ue = "more about me",
                xe = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1];

                    function a() {
                        t(!c)
                    }
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)("div", {
                            className: "row home-details-container align-items-center",
                            children: [Object(o.jsx)("div", {
                                className: "col-lg-4 bg position-fixed d-none d-lg-block",
                                style: {
                                    backgroundImage: "url(".concat("" + re, ")")
                                }
                            }), Object(o.jsx)("div", {
                                className: "col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start",
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("img", {
                                        src: "img/hero/".concat(je, ".jpg"),
                                        className: "img-fluid main-img-mobile d-sm-block d-lg-none",
                                        alt: "hero man"
                                    }), Object(o.jsxs)("h1", {
                                        className: "text-uppercase poppins-font",
                                        children: ["I'm ", de, ".", Object(o.jsx)("span", {
                                            children: me
                                        })]
                                    }), Object(o.jsx)("p", {
                                        className: "open-sans-font",
                                        children: be
                                    }), Object(o.jsxs)("button", {
                                        className: "button",
                                        onClick: a,
                                        children: [Object(o.jsx)("span", {
                                            className: "button-text",
                                            children: ue
                                        }), Object(o.jsx)("span", {
                                            className: "button-icon fa fa-arrow-right"
                                        })]
                                    })]
                                })
                            })]
                        }), Object(o.jsx)(b.a, {
                            isOpen: c,
                            onRequestClose: a,
                            contentLabel: "My dialog",
                            className: "custom-modal dark hero",
                            overlayClassName: "custom-overlay dark",
                            closeTimeoutMS: 500,
                            children: Object(o.jsxs)("div", {
                                children: [Object(o.jsx)("button", {
                                    className: "close-modal",
                                    onClick: a,
                                    children: Object(o.jsx)("img", {
                                        src: "../img/cancel.svg",
                                        alt: "close icon"
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "box_inner about",
                                    children: Object(o.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("div", {
                                            className: "title-section text-left text-sm-center",
                                            children: [Object(o.jsxs)("h1", {
                                                children: ["ABOUT ", Object(o.jsx)("span", {
                                                    children: "ME"
                                                })]
                                            }), Object(o.jsx)("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })]
                                        }), Object(o.jsx)(w, {})]
                                    })
                                })]
                            })
                        })]
                    })
                },
                pe = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1],
                        a = Object(i.useState)(!1),
                        l = Object(d.a)(a, 2),
                        n = l[0],
                        r = l[1],
                        m = Object(i.useState)(!1),
                        u = Object(d.a)(m, 2),
                        x = u[0],
                        p = u[1],
                        O = Object(i.useState)(!1),
                        h = Object(d.a)(O, 2),
                        g = h[0],
                        N = h[1],
                        v = Object(i.useState)(!1),
                        f = Object(d.a)(v, 2),
                        y = f[0],
                        w = f[1],
                        k = Object(i.useState)(!1),
                        C = Object(d.a)(k, 2),
                        _ = C[0],
                        P = C[1],
                        q = Object(i.useState)(!1),
                        S = Object(d.a)(q, 2),
                        L = S[0],
                        M = S[1],
                        T = Object(i.useState)(!1),
                        E = Object(d.a)(T, 2),
                        I = E[0],
                        D = E[1],
                        B = Object(i.useState)(!1),
                        G = Object(d.a)(B, 2),
                        K = G[0],
                        z = G[1];

                    function X() {
                        t(!c)
                    }

                    function Q() {
                        r(!n)
                    }

                    function Z() {
                        p(!x)
                    }

                    function $() {
                        N(!g)
                    }

                    function ee() {
                        w(!y)
                    }

                    function se() {
                        P(!_)
                    }

                    function ce() {
                        M(!L)
                    }

                    function te() {
                        D(!I)
                    }

                    function ae() {
                        z(!K)
                    }
                    return Object(o.jsxs)(j.d, {
                        children: [Object(o.jsxs)(j.b, {
                            className: "portfolio-tab-list",
                            children: [Object(o.jsx)(j.a, {
                                children: "ALL"
                            }), Object(o.jsx)(j.a, {
                                children: "SPRING"
                            }), Object(o.jsx)(j.a, {
                                children: "ANDROID"
                            }), Object(o.jsx)(j.a, {
                                children: "MEAN"
                            }), Object(o.jsx)(j.a, {
                                children: "MERN"
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "portfolio-tab-content",
                            children: [Object(o.jsx)(j.c, {
                                children: Object(o.jsxs)("ul", {
                                    className: "row grid justify-content-center",
                                    children: [Object(o.jsxs)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            onClick: X,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-1.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: "Mockup Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: c,
                                            onRequestClose: X,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: X,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(R, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            onClick: Q,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-2.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Youtube Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: n,
                                            onRequestClose: Q,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: Q,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(A, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            onClick: Z,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-3.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Slider Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: x,
                                            onRequestClose: Z,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: Z,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(H, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: $,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-4.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Local Video Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: g,
                                            onRequestClose: $,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: $,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(U, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ee,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-5.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Saas App Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: y,
                                            onRequestClose: ee,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ee,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(F, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: se,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-6.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Mockup Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: _,
                                            onRequestClose: se,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: se,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(Y, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ce,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-7.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Facebook Profile"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: L,
                                            onRequestClose: ce,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ce,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(J, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: te,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-8.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Dribbble Profile"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: I,
                                            onRequestClose: te,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: te,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(W, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ae,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-9.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Behance Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: K,
                                            onRequestClose: ae,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ae,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(V, {})
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(o.jsx)(j.c, {
                                children: Object(o.jsxs)("ul", {
                                    className: "row grid justify-content-center",
                                    children: [Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ce,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-7.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Facebook Profile"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: L,
                                            onRequestClose: ce,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ce,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(J, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: $,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-4.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Local Video Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: g,
                                            onRequestClose: $,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: $,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(U, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ee,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-5.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Saas App Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: y,
                                            onRequestClose: ee,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ee,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(F, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: se,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-6.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Mockup Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: _,
                                            onRequestClose: se,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: se,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(Y, {})
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(o.jsx)(j.c, {
                                children: Object(o.jsxs)("ul", {
                                    className: "row grid justify-content-center",
                                    children: [Object(o.jsxs)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            onClick: Q,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-2.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Youtube Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: n,
                                            onRequestClose: Q,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: Q,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(A, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: $,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-4.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Local Video Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: g,
                                            onRequestClose: $,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: $,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(U, {})
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(o.jsx)(j.c, {
                                children: Object(o.jsxs)("ul", {
                                    className: "row grid justify-content-center",
                                    children: [Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: te,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-8.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Dribbble Profile"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: I,
                                            onRequestClose: te,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: te,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(W, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ae,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-9.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Behance Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: K,
                                            onRequestClose: ae,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ae,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(V, {})
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(o.jsx)(j.c, {
                                children: Object(o.jsxs)("ul", {
                                    className: "row grid justify-content-center",
                                    children: [Object(o.jsxs)("li", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "0",
                                        children: [Object(o.jsxs)("figure", {
                                            onClick: X,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-1.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: "Mockup Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: c,
                                            onRequestClose: X,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: X,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(R, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: ae,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-9.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Behance Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: K,
                                            onRequestClose: ae,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: ae,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(V, {})
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsxs)("li", {
                                        className: "direction-reveal",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "200",
                                        children: [Object(o.jsxs)("figure", {
                                            className: "direction-reveal__card",
                                            onClick: se,
                                            children: [Object(o.jsx)("img", {
                                                src: "img/projects/project-6.jpg",
                                                alt: "Portolio"
                                            }), Object(o.jsx)("div", {
                                                className: " hover-content-wrapper",
                                                children: Object(o.jsx)("span", {
                                                    className: "content-title",
                                                    children: " Mockup Project"
                                                })
                                            })]
                                        }), Object(o.jsx)(b.a, {
                                            isOpen: _,
                                            onRequestClose: se,
                                            contentLabel: "My dialog",
                                            className: "custom-modal dark",
                                            overlayClassName: "custom-overlay dark",
                                            closeTimeoutMS: 500,
                                            children: Object(o.jsxs)("div", {
                                                children: [Object(o.jsx)("button", {
                                                    className: "close-modal",
                                                    onClick: se,
                                                    children: Object(o.jsx)("img", {
                                                        src: "/img/cancel.svg",
                                                        alt: "close icon"
                                                    })
                                                }), Object(o.jsx)("div", {
                                                    className: "box_inner portfolio",
                                                    children: Object(o.jsx)(Y, {})
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                };
            b.a.setAppElement("#root");
            var Oe = function() {
                    var e = Object(i.useState)(!1),
                        s = Object(d.a)(e, 2),
                        c = s[0],
                        t = s[1],
                        a = Object(i.useState)(!1),
                        l = Object(d.a)(a, 2),
                        n = l[0],
                        r = l[1],
                        j = Object(i.useState)(!1),
                        m = Object(d.a)(j, 2),
                        u = m[0],
                        x = m[1],
                        p = Object(i.useState)(!1),
                        O = Object(d.a)(p, 2),
                        h = O[0],
                        g = O[1],
                        N = Object(i.useState)(!1),
                        v = Object(d.a)(N, 2),
                        f = v[0],
                        y = v[1],
                        w = Object(i.useState)(!1),
                        k = Object(d.a)(w, 2),
                        C = k[0],
                        _ = k[1];

                    function P() {
                        t(!c)
                    }

                    function q() {
                        r(!n)
                    }

                    function S() {
                        x(!u)
                    }

                    function L() {
                        g(!h)
                    }

                    function M() {
                        y(!f)
                    }

                    function T() {
                        _(!C)
                    }
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: P,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-1.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "How to Own Your Audience by Creating an Email List"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: c,
                                onRequestClose: P,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: P,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(K, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: q,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-2.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Top 10 Toolkits for Deep Learning in 2020"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: n,
                                onRequestClose: q,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: q,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(z, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: S,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-3.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Everything You Need to Know About Web Accessibility"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: u,
                                onRequestClose: S,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: S,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(X, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: L,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-4.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "How to Inject Humor & Comedy Into Your Brand"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: h,
                                onRequestClose: L,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: L,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(Q, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: M,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-5.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Women in Web Design: How To Achieve Success"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: f,
                                onRequestClose: M,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: M,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)(Z, {})
                                    })]
                                })
                            })]
                        }), Object(o.jsxs)("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-4 mb-30",
                            children: [Object(o.jsxs)("article", {
                                className: "post-container",
                                onClick: T,
                                children: [Object(o.jsx)("div", {
                                    className: "post-thumb",
                                    children: Object(o.jsx)("div", {
                                        className: "d-block position-relative overflow-hidden",
                                        children: Object(o.jsx)("img", {
                                            src: "img/blog/blog-post-6.jpg",
                                            className: "img-fluid",
                                            alt: "Blog Post"
                                        })
                                    })
                                }), Object(o.jsxs)("div", {
                                    className: "post-content",
                                    children: [Object(o.jsx)("div", {
                                        className: "entry-header",
                                        children: Object(o.jsx)("h3", {
                                            children: "Evergreen versus topical content: An overview"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "entry-content open-sans-font",
                                        children: Object(o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                                        })
                                    })]
                                })]
                            }), Object(o.jsx)(b.a, {
                                isOpen: C,
                                onRequestClose: T,
                                contentLabel: "My dialog",
                                className: "custom-modal dark",
                                overlayClassName: "custom-overlay dark",
                                closeTimeoutMS: 500,
                                children: Object(o.jsxs)("div", {
                                    children: [Object(o.jsx)("button", {
                                        className: "close-modal",
                                        onClick: T,
                                        children: Object(o.jsx)("img", {
                                            src: "/img/cancel.svg",
                                            alt: "close icon"
                                        })
                                    }), Object(o.jsx)("div", {
                                        className: "box_inner blog-post",
                                        children: Object(o.jsx)($, {})
                                    })]
                                })
                            })]
                        })]
                    })
                },
                he = [{
                    icon: "fa-home",
                    menuName: "Home"
                }, {
                    icon: "fa-user",
                    menuName: "About"
                 },// {
                //     icon: "fa-briefcase",
                //     menuName: "Portfolio"
                // },
                 {
                    icon: "fa-envelope-open",
                    menuName: "Contact"
                }, 
                // {
                //     icon: "fa-comments",
                //     menuName: "Blog"
                // }
            ],
                ge = function() {
                    return Object(o.jsxs)("div", {
                        className: "yellow",
                        children: [Object(o.jsx)("div", {
                            className: "demo-sticker",
                            children: Object(o.jsx)("a", {
                                href: "/home-light",
                                children: Object(o.jsx)("i", {
                                    className: "fa fa-lightbulb-o",
                                    "aria-hidden": "true"
                                })
                            })
                        }), Object(o.jsxs)(j.d, {
                            children: [Object(o.jsx)("div", {
                                className: "header",
                                children: Object(o.jsx)(j.b, {
                                    className: " icon-menu  revealator-slideup revealator-once revealator-delay1",
                                    children: he.map((function(e, s) {
                                        return Object(o.jsxs)(j.a, {
                                            className: "icon-box",
                                            children: [Object(o.jsx)("i", {
                                                className: "fa ".concat(e.icon)
                                            }), Object(o.jsx)("h2", {
                                                children: e.menuName
                                            })]
                                        }, s)
                                    }))
                                })
                            }), Object(o.jsxs)("div", {
                                className: "tab-panel_list",
                                children: [Object(o.jsx)(j.c, {
                                    className: "home ",
                                    children: Object(o.jsxs)("div", {
                                        className: "container-fluid main-container container-home p-0 ",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsx)("div", {
                                            className: "color-block d-none d-lg-block"
                                        }), Object(o.jsx)(xe, {})]
                                    })
                                }), Object(o.jsx)(j.c, {
                                    className: "about",
                                    children: Object(o.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("div", {
                                            className: "title-section text-left text-sm-center",
                                            children: [Object(o.jsxs)("h1", {
                                                children: ["ABOUT ", Object(o.jsx)("span", {
                                                    children: "ME"
                                                })]
                                            }), Object(o.jsx)("span", {
                                                className: "title-bg",
                                                children: "Resume"
                                            })]
                                        }), Object(o.jsx)(w, {})]
                                    })
                                }), Object(o.jsxs)(j.c, {
                                    className: "portfolio professional",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["my ", Object(o.jsx)("span", {
                                                children: "portfolio"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "works"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container grid-gallery main-content",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        "data-aos-delay": "100",
                                        children: Object(o.jsx)(pe, {})
                                    })]
                                }), Object(o.jsxs)(j.c, {
                                    className: "contact",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["get in ", Object(o.jsx)("span", {
                                                children: "touch"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "contact"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: Object(o.jsxs)("div", {
                                            className: "row",
                                            children: [Object(o.jsxs)("div", {
                                                className: "col-12 col-lg-4",
                                                children: [Object(o.jsx)("h3", {
                                                    className: "text-uppercase custom-title mb-0 ft-wt-600 pb-3",
                                                    children: "Don't be shy !"
                                                }), Object(o.jsx)("p", {
                                                    className: "open-sans-font mb-4",
                                                    children: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                                                }), Object(o.jsx)(M, {}), Object(o.jsx)(ae, {})]
                                            }), Object(o.jsx)("div", {
                                                className: "col-12 col-lg-8",
                                                children: Object(o.jsx)(ce, {})
                                            })]
                                        })
                                    })]
                                }), Object(o.jsxs)(j.c, {
                                    className: "blog",
                                    children: [Object(o.jsxs)("div", {
                                        className: "title-section text-left text-sm-center ",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: [Object(o.jsxs)("h1", {
                                            children: ["my ", Object(o.jsx)("span", {
                                                children: "blog"
                                            })]
                                        }), Object(o.jsx)("span", {
                                            className: "title-bg",
                                            children: "posts"
                                        })]
                                    }), Object(o.jsx)("div", {
                                        className: "container",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1200",
                                        children: Object(o.jsx)("div", {
                                            className: "row pb-50",
                                            children: Object(o.jsx)(Oe, {})
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
               
                ve = c(6);

            function fe() {
                var e = Object(ve.f)().pathname;
                return Object(i.useEffect)((function() {
                    window.scrollTo(0, 0)
                }), [e]), null
            }
            var ye = function() {
                return Object(o.jsx)(o.Fragment, {
                    children: Object(o.jsxs)(l.a, {
                        children: [Object(o.jsx)(fe, {}), Object(o.jsxs)(ve.c, {
                            children: [Object(o.jsx)(ve.a, {
                                exact: !0,
                                path: "/",
                                component: r
                            }), Object(o.jsx)(ve.a, {
                                path: "/home-light",
                                component: ne
                            }), Object(o.jsx)(ve.a, {
                                path: "/home-dark",
                                component: ge
                            }), Object(o.jsx)(ve.a, {
                                component: ge
                            })]
                        })]
                    })
                })
            };

            function we() {
                var e = Object(i.useState)(!1),
                    s = Object(d.a)(e, 2),
                    c = s[0],
                    t = s[1];
                return Object(i.useEffect)((function() {
                    var e = function() {
                        window.pageYOffset > 500 ? t(!0) : t(!1)
                    };
                    return window.addEventListener("scroll", e),
                        function() {
                            return window.removeEventListener("scroll", e)
                        }
                }), []), Object(o.jsx)(o.Fragment, {
                    children: c && Object(o.jsx)("div", {
                        onClick: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "scroll_up my_totop",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1200",
                        children: Object(o.jsx)("span", {
                            className: "beny_tm_totop"
                        })
                    })
                })
            }
            var ke = c(35),
                Ce = c.n(ke),
                _e = (c(76), function() {
                    return Object(i.useEffect)((function() {
                        Ce.a.init()
                    }), []), Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(le.a, {
                            innerSize: 8,
                            outerSize: 44,
                            color: "255, 160, 1",
                            outerAlpha: .3,
                            innerScale: .7,
                            outerScale: 1.2
                        }), Object(o.jsx)(we, {}), Object(o.jsx)(ye, {})]
                    })
                }),
                Pe = function(e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 79)).then((function(s) {
                        var c = s.getCLS,
                            t = s.getFID,
                            a = s.getFCP,
                            i = s.getLCP,
                            l = s.getTTFB;
                        c(e), t(e), a(e), i(e), l(e)
                    }))
                };
            c(77);
            a.a.render(Object(o.jsx)(_e, {}), document.getElementById("root")), Pe()
        }
    },
    [
        [78, 1, 2]
    ]
]);