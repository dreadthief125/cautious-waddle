AFRAME.registerComponent("steev", {
               schema: {
                 selectedItemId: { default: "", type: "string" },
               },
               init: function () {
                 this.handeWASD();
               },
               handeWASD: function () {
                              
                              this.el.addEventListener("keydown", (e) => {
                              
                              
                              var p=this.el.getAttribute('position')
                                if (e.key=='ArrowUp'){
                                  this.data.p.z=this.data.p.z+1
                                  this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
                                }
                                else if (e.key=='ArrowRight'){
                                  this.data.p.x=this.data.p.x+1
                                  this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
                                }
                                else if (e.key=='ArrowLeft'){
                                  this.data.p.x=this.data.p.x-1
                                  this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
                                }
                                else if (e.key=='ArrowDown'){
                                  this.data.p.x=this.data.p.x-1
                                  this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
                                }
                              });
                            },
})
