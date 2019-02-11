jQuery("#simulation")
  .on("click", ".m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-ad962290-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04ba84fe-cbde-401e-8c09-fd61a7ae908b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "username" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04ba84fe-cbde-401e-8c09-fd61a7ae908b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04ba84fe-cbde-401e-8c09-fd61a7ae908b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Account_Icon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04ba84fe-cbde-401e-8c09-fd61a7ae908b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f9314d1-96a4-4670-a24d-47bd2566a02f"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f9314d1-96a4-4670-a24d-47bd2566a02f"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-logo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Login_Icon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Login_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-temp" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b2f4520-4c6e-4eac-b687-1cbb956d54ff"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a044234b-c792-4acc-a45c-d8bb0c35e2eb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f9314d1-96a4-4670-a24d-47bd2566a02f"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "5"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f9314d1-96a4-4670-a24d-47bd2566a02f"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-logo_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b2f4520-4c6e-4eac-b687-1cbb956d54ff"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a044234b-c792-4acc-a45c-d8bb0c35e2eb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "InformationSec" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "clickCart"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-SectionAccount" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#m-ad962290-Triangle_1" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "clickCart"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-SectionAccount" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#m-ad962290-Triangle_1" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "-180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "clickCart"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "clickCart" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "clickCart"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "clickCart" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-temp")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-temp" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Login_window" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Create_Account_window" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-CreateAccount")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Create_Account_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Login_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Login_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-temp" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "users",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "username"
                          },{
                            "datatype": "property",
                            "target": "#m-ad962290-ID",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#m-ad962290-Pass",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ID > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF0000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF0000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF0000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_Error_Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_Error_Login" ]
                  },
                  "exectype": "timed",
                  "delay": 4000
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ID > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "username" ],
                    "value": {
                      "datatype": "property",
                      "target": "#m-ad962290-ID",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-CreateAccount_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Login_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Create_Account_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Close_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Create_Account_window" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-temp" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "users",
                      "value": {
                        "action": "jimContains",
                        "parameter": [ {
                          "field": "username"
                        },{
                          "datatype": "property",
                          "target": "#m-ad962290-ID_1",
                          "property": "jimGetValue"
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_Error_Account" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_Error_Account" ]
                  },
                  "exectype": "timed",
                  "delay": 4000
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_Error_Account" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "users",
                    "fields": {
                      "username": {
                        "datatype": "property",
                        "target": "#m-ad962290-ID_1",
                        "property": "jimGetValue"
                      },
                      "password": {
                        "datatype": "property",
                        "target": "#m-ad962290-Pass_1",
                        "property": "jimGetValue"
                      },
                      "firstname": null,
                      "lastName": null,
                      "Country": null,
                      "Address": null,
                      "Zipcode": null,
                      "Telephone": null,
                      "FirstNameA": null,
                      "LastNameA": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "username" ],
                    "value": {
                      "datatype": "property",
                      "target": "#m-ad962290-ID_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-ad962290-Account_Icon")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "username"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-Account_Icon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "username"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-ad962290-Account_Icon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Text_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_31" ],
                    "value": {
                      "action": "jimSumData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ShopingCart",
                        "value": {
                          "field": "quntity"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Text_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_27" ],
                    "value": {
                      "action": "jimSumData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Wishlist",
                        "value": {
                          "field": "Quantity"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-tabSignIn")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "username"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-tabNoSignIn" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "username"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-tabSignIn" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Text_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_38" ],
                    "value": {
                      "action": "jimSumData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "ShopingCart",
                        "value": {
                          "field": "quntity"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Text_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-ad962290-Text_28" ],
                    "value": {
                      "action": "jimSumData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Wishlist",
                        "value": {
                          "field": "Quantity"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Username_Text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-ad962290-Username_Text" ],
                    "value": {
                      "datatype": "variable",
                      "element": "username"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-ad962290-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_12": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_13": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_14": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Button_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_15": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Button_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Account_Icon") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Account_Icon > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Account_Icon": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Account_Icon": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Account_Icon": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-ad962290-SectionAccount" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Login_Icon") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Login_Icon > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Login_Icon": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Login_Icon": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Login_Icon": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_6": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-ShoppingCart_Icon_Homepage_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Wishlist_Icon_Homepage_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-light_Icon_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_8 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-light_Icon_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_3": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-dininggin_Icon_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Lounge_Icon_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Rectangle_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "none",
                        "border-top-color": "#008000",
                        "border-right-width": "2px",
                        "border-right-style": "none",
                        "border-right-color": "#008000",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#008000",
                        "border-left-width": "2px",
                        "border-left-style": "none",
                        "border-left-color": "#008000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Rectangle_19": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "none",
                        "border-top-color": "#008000",
                        "border-right-width": "2px",
                        "border-right-style": "none",
                        "border-right-color": "#008000",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#008000",
                        "border-left-width": "2px",
                        "border-left-style": "none",
                        "border-left-color": "#008000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-CreateAccount") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-CreateAccount span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Image_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_21 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_21": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-CreateAccount_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-CreateAccount_1 span": {
                      "attributes": {
                        "text-decoration": "underline"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-ad962290-Image_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_20 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_20": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 #m-ad962290-Image_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-ad962290-925f-4fc6-9d8a-c57b532ccdc9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-ad962290-Button_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Button_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Button_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Button_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Account_Icon")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Login_Icon")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-ShoppingCart_Icon_Homepage_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Wishlist_Icon_Homepage_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-light_Icon_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-dininggin_Icon_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Lounge_Icon_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Rectangle_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-CreateAccount")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Image_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-CreateAccount_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-ad962290-Image_20")) {
      jEvent.undoCases(jFirer);
    }
  });