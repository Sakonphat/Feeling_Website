jQuery("#simulation")
  .on("click", ".m-84009793-81ff-42a2-8f06-9a81775f497a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-84009793-Image_face")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://www.facebook.com",
                    "tab": true
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
    } else if(jFirer.is("#m-84009793-Image_insta")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://www.instagram.com",
                    "tab": true
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
    } else if(jFirer.is("#m-84009793-Image_twitter")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://www.twitter.com",
                    "tab": true
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
    } else if(jFirer.is("#m-84009793-Image_face_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.pinterest.com/",
                    "tab": true
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
  .on("mouseenter dragenter", ".m-84009793-81ff-42a2-8f06-9a81775f497a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-84009793-Image_face") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face": {
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
    } else if(jFirer.is("#m-84009793-Image_insta") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_insta > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_insta": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_insta": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_insta": {
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
    } else if(jFirer.is("#m-84009793-Image_twitter") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_twitter > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_twitter": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_twitter": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_twitter": {
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
    } else if(jFirer.is("#m-84009793-Image_face_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#m-84009793-81ff-42a2-8f06-9a81775f497a #m-84009793-Image_face_1": {
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
  .on("mouseleave dragleave", ".m-84009793-81ff-42a2-8f06-9a81775f497a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-84009793-Image_face")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-84009793-Image_insta")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-84009793-Image_twitter")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#m-84009793-Image_face_1")) {
      jEvent.undoCases(jFirer);
    }
  });