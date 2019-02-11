jQuery("#simulation")
  .on("click", ".m-760acb75-600c-4af6-bf64-0348d3bc9646 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-760acb75-home")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "6"
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
    } else if(jFirer.is("#m-760acb75-home_1")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "7"
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
    } else if(jFirer.is("#m-760acb75-home_2")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "8"
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
    } else if(jFirer.is("#m-760acb75-home_3")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "9"
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
    } else if(jFirer.is("#m-760acb75-home_4")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "10"
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
    } else if(jFirer.is("#m-760acb75-home_5")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "11"
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
    } else if(jFirer.is("#m-760acb75-home_6")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff"
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
    } else if(jFirer.is("#m-760acb75-itemList_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "12"
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
    } else if(jFirer.is("#m-760acb75-home_7")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
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
    } else if(jFirer.is("#m-760acb75-itemList_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "13"
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
    } else if(jFirer.is("#m-760acb75-home_8")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "14"
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
    } else if(jFirer.is("#m-760acb75-pageItem_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
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
    } else if(jFirer.is("#m-760acb75-home_9")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "15"
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
    } else if(jFirer.is("#m-760acb75-pageItem_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
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
    } else if(jFirer.is("#m-760acb75-home_10")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "16"
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
    } else if(jFirer.is("#m-760acb75-pageItem_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
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
    } else if(jFirer.is("#m-760acb75-home_11")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "17"
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
    } else if(jFirer.is("#m-760acb75-pageItem_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/19341e4f-1e43-4c21-938a-9b1d192e2689"
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
    } else if(jFirer.is("#m-760acb75-home_12")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-itemList_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "18"
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
    } else if(jFirer.is("#m-760acb75-home_13")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "19"
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
    } else if(jFirer.is("#m-760acb75-pageItem_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-home_14")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "20"
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
    } else if(jFirer.is("#m-760acb75-pageItem_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-home_15")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "21"
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
    } else if(jFirer.is("#m-760acb75-pageItem_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-home_16")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "22"
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
    } else if(jFirer.is("#m-760acb75-pageItem_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-home_17")) {
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
    } else if(jFirer.is("#m-760acb75-itemList_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "23"
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
    } else if(jFirer.is("#m-760acb75-pageItem_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/28fbe37f-a101-45d5-a550-394da5f63a15"
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
    } else if(jFirer.is("#m-760acb75-home_18")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
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
    } else if(jFirer.is("#m-760acb75-home_19")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
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
    } else if(jFirer.is("#m-760acb75-home_20")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
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
    } else if(jFirer.is("#m-760acb75-home_21")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_21")) {
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
    } else if(jFirer.is("#m-760acb75-home_22")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_22")) {
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
    } else if(jFirer.is("#m-760acb75-home_23")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "24"
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
    } else if(jFirer.is("#m-760acb75-home_24")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "25"
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
    } else if(jFirer.is("#m-760acb75-home_25")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "26"
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
    } else if(jFirer.is("#m-760acb75-home_26")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "27"
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
    } else if(jFirer.is("#m-760acb75-home_27")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "28"
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
    } else if(jFirer.is("#m-760acb75-home_28")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "List_Page_Panel" ],
                    "value": "29"
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
    } else if(jFirer.is("#m-760acb75-home_29")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_31")) {
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
    } else if(jFirer.is("#m-760acb75-home_30")) {
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
    } else if(jFirer.is("#m-760acb75-pageItem_32")) {
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
    } else if(jFirer.is("#m-760acb75-Text_1")) {
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
    } else if(jFirer.is("#m-760acb75-Text_2")) {
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
    }
  })
  .on("mouseenter dragenter", ".m-760acb75-600c-4af6-bf64-0348d3bc9646 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-760acb75-home") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_1 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_1 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_1": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_1 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_2 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_2 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_2": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_2 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_3 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_3 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_3": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_3 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_4 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_4 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_4": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_4 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_5 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_5 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_5": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_5 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_6": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_6 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_6": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_6 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_6": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_6 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_7 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_7 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_7": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_7 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_8": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_8 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_8": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_8 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_8": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_8 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_9 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_9": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_9 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_9 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_10": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_10 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_10": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_10 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_10": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_10 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_11": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_11 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_11": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_11 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_29": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_29 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_12 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_12 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_12": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_12 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_13 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_13": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_13 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_30": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_30 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_30 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_14 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_14": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_14 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_13 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_15 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_15": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_15 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_14 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_16 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_16": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_16 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_15 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_17 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-itemList_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_17": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-itemList_17 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_16 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_18": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_18 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_18": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_18 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_19": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_19 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_19": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_19 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_20": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_20 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_20": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_20 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_21 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_21": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_21 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_22": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_22 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_22": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_22 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_23": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_23 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_23": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_23 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_24": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_24 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_24": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_24 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_25": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_25 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_25": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_25 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_26": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_26 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_26": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_26 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_27": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_27 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_27 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_27": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_27 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_27 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_28": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_28 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_28": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_28 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_29": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_29 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_29 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_31": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_31 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_31 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-home_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_30": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_30 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-home_30 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-pageItem_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_32": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_32 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-pageItem_32 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-Text_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_1 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#m-760acb75-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_2": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'Amiko',Arial"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#m-760acb75-600c-4af6-bf64-0348d3bc9646 #m-760acb75-Text_2 span": {
                      "attributes": {
                        "color": "#004D00",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Amiko',Arial",
                        "font-size": "18.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
  .on("mouseleave dragleave", ".m-760acb75-600c-4af6-bf64-0348d3bc9646 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-760acb75-home")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-itemList_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-home_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-pageItem_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-Text_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-760acb75-Text_2")) {
      jEvent.undoCases(jFirer);
    }
  });