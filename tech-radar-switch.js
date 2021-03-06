var tr = tr || {};
var color = d3.scale.ordinal()
    .range(["#e9faff", "#d6f6ff", "#c3f2ff"]);
	
	
tr.models = {}, tr.graphing = {}, tr.util = {}, tr.graphing.Radar = function(t, n) {
    function r() {
        return Math.round(t / 2)
    }

    function e() {
	
	  p.append("line")
		.attr("x1",r())
		.attr("y1",0)
		.attr("x2",r())
		.style("opacity",  0.5)
		.transition()
		.delay(500)
		.style("opacity", 1)
		.attr("y2",296)
		.attr("stroke-width",10),		
		
	p.append("line")
	   .attr("x1",r())
	   .attr("y1",296)
	   .attr("x2",t)
	   .attr("y2",400)
	   .style("opacity",  0.5)
	   .transition()
	   .delay(500)
	   .style("opacity", 1)
	   .attr("stroke-width",10),
		
		
	p.append("line")
	   .attr("x1",r())
	   .attr("y1",296)
	   .attr("x2",0)
	   .attr("y2",400)
	   .style("opacity", 0.5)
	   .transition()
	   .delay(500)
	   .style("opacity", 1)
	   .attr("stroke-width",10)
    }

    function a(t, n) {
        var e = (l.sequence(t.length), l.sum(t.length)),
            a = l.sum(n);
        return r() - r() * a / e
    }
	
    function u(t) {
        t.forEach(function(n, e) {
            p.append("circle").attr("cx", r()).attr("cy", r()).attr("r", a(t, e)).style("fill", function(d) { return color(e); });
        })
    }


    function c(t) {
        var n;
		var iyy=0;  
        n = Math.round(r() / t.length), t.forEach(function(n, e) {
					var name=n.name();	
					var ix=10;
					var iy=10;
					var ir=1;
			
					for (var i = 0; i < name.length; i++) {
						var carR=name.charAt(i);
						  p.append("text")
							.attr("class", "line-text")
							.attr("stroke", "#000000")
							.attr("stroke-width", "0.3")
							.attr("y", (560-iyy)+iy)
							.attr("x", 200+ix)
							.attr("text-anchor", "end")
							.text(carR)
							.attr("transform", "translate(0,0) rotate(-"+ir+")")
								ix=ix+5;
								iy=iy+5;
								ir=ir+1;
							}
				
			iyy=iyy+100;
        })
		
    }

    // Triangle for Trial/Watch
    function o(t, n, r, e,colr,ps) {
        var a, u, c, o, i, s;
		var psize=ps;
		 return a = parseInt(ps), u = n - a, c = t - a + 1, o = t + a + 1, i = n + a - a / 2.5, 
		s = t + 1 + "," + u + " " + c + "," + i + " " + o + "," + i, 
		(e || p)
		//.append("polygon").attr("points", s).attr("class", r).attr("stroke-width", 1.5)
		.append("a")
		.attr("xlink:href", "#")
		.attr("target", "")
		.append("polygon")  
		.attr("points",s)
		.attr("class",r)
		.attr("stroke-width",1)
		.style("opacity", 0)
		.transition()
		.delay(1000)
		.style("opacity", 1)
		.style("fill",colr)	
    }
	
	// circle for Pilot
	function po(t,n,r,e,colr,sz){
	return(e||p)		
								.append("a")
								.attr("xlink:href", "#")
								.attr("target", "")
								.append("circle") 
								.attr("cx",t)
								.attr("cy",n)
								.attr("class",r)
								.attr("stroke-width",1)
								.attr("r",sz)
								.style("opacity", 0)
								.transition()
								.delay(1000)
								.style("opacity", 1)
								.style("fill",colr)								
								//.each(blink_circle);
	}
	
    function i(t, n, r, e,colr,sz) {
        return (e || p)
		//.append("circle").attr("cx", t).attr("cy", n).attr("class", r).attr("stroke-width", 1.5).attr("r", 10)
		.append("a")
							.attr("xlink:href", "#")
							.attr("target", "")
							 .append("rect")  
							 .attr("class",r)
							.attr("stroke-width",1)
							.attr("x", t)
                            .attr("y", n)
							.attr("r",sz)
							.attr("width", sz )
							.attr("fill",r)
							.style("opacity", 0)
							.transition()
							.delay(1000)
							.style("opacity", 1)
		                    .attr("height", sz)
							.style("fill",colr)	
    }

    function s(t, n, e, u, c) {
        var s;
        s = n.blips(), t.forEach(function(n, f) {
            var d, l, I;
           //new variables for workaround solution - BEGIN
            aa = 0, bb = 0, cc = 0, dd = 0,
            aa1 = 1, bb1 = 1, cc1 = 1, dd1 = 1,
            ee = 0, ff = 0, gg = 0, hh = 0, 
            ee1 = 1, ff1 = 1, gg1 = 1, hh1 = 1,
            ii = 0, jj = 0, kk = 0, ll = 0, 
            ii1 = 1, jj1 = 1, kk1 = 1, ll1 = 1,
            oo = 0, pp = 0, qq = 0, rr = 0,
            oo1 = 1, pp1 = 1, qq1 = 1, rr1 = 1,

            xy1 = 20,  xy2 = 20, xy3 = 30, xy4 = 50, 
            xy5 = 0, xy6 = 0, xy7 = 30, xy8 = 50, 
            xy9 = 60, xy10 = 50, xy11 = 50, xy12 = 80, 
            xy13 = 100, xy14 = 120, xy15 = 70, xy16 = 50,
            yz1 = 300, yz2 = 250, yz3 = 240, yz4 = 200;
            //new variables for workaround solution - END

            d = a(t, f), l = f == t.length - 1 ? 10 : a(t, f + 1);
            var I = s.filter(function(t) {
                return t.cycle() == n
            });


            //Loop - BEGIN
            I.forEach(function(t) {

                if (c == "first" && n.name()== "Tactical")
                {
                    aa = aa + 1;
                }
                else if (c == "first" && n.name()== "Radical")
                {
                    bb = bb + 1;
                }
                else if (c == "first" && n.name()== "Disruptive")
                {
                    cc = cc + 1;
                }
                
                else if (c == "second" && n.name()== "Tactical")
                {
                    ee = ee + 1;
                }
                else if (c == "second" && n.name()== "Radical")
                {
                    ff = ff + 1;
                }
                else if (c == "second" && n.name()== "Disruptive")
                {
                    gg = gg + 1;
                }
               
                else if (c == "third" && n.name()== "Tactical")
                {
                    ii = ii + 1;
                }
                else if (c == "third" && n.name()== "Radical")
                {
                    jj = jj + 1;
                }
                else if (c == "third" && n.name()== "Disruptive")
                {
                    kk = kk + 1;
                } 
                                    
            })              
            //New loop - END




            I.forEach(function(t) {

                var a, s, f = t.name().split(""),
                    I = f.reduce(function(t, n) {
                        return t + n.charCodeAt(0)
                    }, 0);          


                // New conditional statements - BEGIN

				//a=Math.PI*chance.integer({min:+15,max:90})/180;

                if (c == "first" && n.name()== "Tactical")
                {
                    if (aa1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (aa1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (aa1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }                   
                    a = xy1 / 180;
				
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy1 = xy1 + (yz1 / aa);     
                    aa1 = aa1 + 1;  
                    if (aa1 > 3)
                    {
                        aa1 = 1;
                    }
                }

                else if (c == "first" && n.name()== "Radical")
                {
                    if (bb1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (bb1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (bb1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }                   
                    a = xy2 / 180;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy2 = xy2 + (yz2 / bb); 
                    bb1 = bb1 + 1;  
                    if (bb1 > 3)
                    {
                        bb1 = 1;
                    }                   
                }

                else if (c == "first" && n.name()== "Disruptive")
                {
                    if (cc1 == 1)
                    {
                        s = ((l + d) / 2) + 30;
                    }   
                    else if (cc1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (cc1 == 3)
                    {
                        s = ((l + d) / 2) - 30;
                    }               
                    a = xy3 / 180;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy3 = xy3 + (yz2 / cc); 
                    cc1 = cc1 + 1;  
                    if (cc1 > 3)
                    {
                        cc1 = 1;
                    }                       
                }


                else if (c == "second" && n.name()== "Tactical")
                {
                    if (ee1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (ee1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (ee1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }               
                    a = xy5 / 180;
					
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy5 = xy5 + (yz1 / ee);
                    ee1 = ee1 + 1;  
                    if (ee1 > 3)
                    {
                        ee1 = 1;
                    }   

                }

                else if (c == "second" && n.name()== "Radical")
                {
                    if (ff1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (ff1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (ff1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }               
                    a = xy6 / 160;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy6 = xy6 + (yz2/ ff);  
                    ff1 = ff1 + 1;  
                    if (ff1 > 3)
                    {
                        ff1 = 1;
                    }                       
                }

                else if (c == "second" && n.name()== "Disruptive")
                {
                    if (gg1 == 1)
                    {
                        s = ((l + d) / 2) + 30;
                    }   
                    else if (gg1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (gg1 == 3)
                    {
                        s = ((l + d) / 2) - 30;
                    }               
                    a = xy7 / 180;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy7 = xy7 + (yz3 / gg);
                    gg1 = gg1 + 1;  
                    if (gg1 > 3)
                    {
                        gg1 = 1;
                    }                       
                }


                else if (c == "third" && n.name()== "Tactical")
                {
                    if (ii1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (ii1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (ii1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }               
                    a = xy9 / 160;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy9 = xy9 + (yz1 / ii);
                    ii1 = ii1 + 1;  
					
                    if (ii1 > 3)
                    {
                        ii1 = 1;
                    }   

                }

                else if (c == "third" && n.name()== "Radical")
                {
                    if (jj1 == 1)
                    {
                        s = ((l + d) / 2) + 10;
                    }   
                    else if (jj1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (jj1 == 3)
                    {
                        s = ((l + d) / 2) - 10;
                    }               
                    a = xy10 / 100;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy10 = xy10 + (yz2 / jj);
                    jj1 = jj1 + 1;  
                    if (jj1 > 3)
                    {
                        jj1 = 1;
                    }                       
                }

                else if (c == "third" && n.name()== "Disruptive")
                {
                    if (kk1 == 1)
                    {
                        s = ((l + d) / 2) + 30;
                    }   
                    else if (kk1 == 2)
                    {
                        s = (l + d) / 2; 
                    }

                    else if (kk1 == 3)
                    {
                        s = ((l + d) / 2) - 30;
                    }               
                    a = xy11 / 100;
                    var m = r() + s * Math.cos(a) * e,
                    y = r() + s * Math.sin(a) * u;
                    xy11 = xy11 + (yz3 / kk);
                    kk1 = kk1 + 1;  
					
                    if (kk1 > 3)
                    {
                        kk1 = 1;
                    }                       
                }
				
				var HypeLevel=t.isNew();
				var MarketPotential=t.mp();
				var TechnologyMaturity=t.tm();
				var namecc=t.name();
				var array = namecc.split(" ");
				//var TechName=t.name().replace(/\s+/g, "-");
				var TechName=t.name().replace(/[^A-Z0-9]+/ig, "-");
                var v=p.append("g")
					
				 if(HypeLevel=='Adopt') 
						i(m,y,c,v,'','10');
					else if 
						(HypeLevel=='Pilot') po(m,y,c,v,'','6');
					else 
						o(m,y,c,v,'','8'); 
						
				//Combination of MarketPotential(Small,Medium,High), TechnologyMaturity(Startup) & HypeLevel(Pilot)
				if(MarketPotential=="Small" && TechnologyMaturity=="Startup" && HypeLevel=='Pilot')
					po(m,y,c,v,'#ff0000','4');
				if(MarketPotential=="Medium" && TechnologyMaturity=="Startup" && HypeLevel=='Pilot')
					po(m,y,c,v,'#ff0000','6');	
				if(MarketPotential=="High" && TechnologyMaturity=="Startup" && HypeLevel=='Pilot')
					po(m,y,c,v,'#ff0000','8');	

				//Combination of MarketPotential(Small,Medium,High), TechnologyMaturity(Startup) & HypeLevel(Adopt)	
				if(MarketPotential=="Small" && TechnologyMaturity=="Startup" && HypeLevel=='Adopt')
					i(m,y,c,v,'#ff0000','8');
				if(MarketPotential=="Medium" && TechnologyMaturity=="Startup" && HypeLevel=='Adopt')
					i(m,y,c,v,'#ff0000','10');
				if(MarketPotential=="High" && TechnologyMaturity=="Startup" && HypeLevel=='Adopt')
					i(m,y,c,v,'#ff0000','12');

				//Combination of MarketPotential(Small,Medium,High), TechnologyMaturity(Startup) & HypeLevel(Trial/Watch)
				if(MarketPotential=="Small" && TechnologyMaturity=="Startup" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#ff0000','6');	
				if(MarketPotential=="Medium" && TechnologyMaturity=="Startup" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#ff0000','8');	
				if(MarketPotential=="High" && TechnologyMaturity=="Startup" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#ff0000','10');
					
					
				if(MarketPotential=="Small" && TechnologyMaturity=="Academic" && HypeLevel=='Pilot')
					po(m,y,c,v,'#00FF00','4');	
				if(MarketPotential=="Small" && TechnologyMaturity=="Academic" && HypeLevel=='Adopt')
					i(m,y,c,v,'#00FF00','8');
				if(MarketPotential=="Small" && TechnologyMaturity=="Academic" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#00FF00','6');

				if(MarketPotential=="Medium" && TechnologyMaturity=="Academic" && HypeLevel=='Pilot')
					po(m,y,c,v,'#00FF00','6');	
				if(MarketPotential=="Medium" && TechnologyMaturity=="Academic" && HypeLevel=='Adopt')
					i(m,y,c,v,'#00FF00','10');
				if(MarketPotential=="Medium" && TechnologyMaturity=="Academic" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#00FF00','6');	

				if(MarketPotential=="High" && TechnologyMaturity=="Academic" && HypeLevel=='Pilot')
					po(m,y,c,v,'#00FF00','8');	
				if(MarketPotential=="High" && TechnologyMaturity=="Academic" && HypeLevel=='Adopt')
					i(m,y,c,v,'#00FF00','12');
				if(MarketPotential=="High" && TechnologyMaturity=="Academic" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#00FF00','10');

				if(MarketPotential=="Small" && TechnologyMaturity=="Industrialized" && HypeLevel=='Pilot')
					po(m,y,c,v,'#0000FF','4');	
				if(MarketPotential=="Small" && TechnologyMaturity=="Industrialized" && HypeLevel=='Adopt')
					i(m,y,c,v,'#0000FF','8');
				if(MarketPotential=="Small" && TechnologyMaturity=="Industrialized" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#0000FF','6');
					
				if(MarketPotential=="Medium" && TechnologyMaturity=="Industrialized" && HypeLevel=='Pilot')
					po(m,y,c,v,'#0000FF','6');	
				if(MarketPotential=="Medium" && TechnologyMaturity=="Industrialized" && HypeLevel=='Adopt')
					i(m,y,c,v,'#0000FF','10');
				if(MarketPotential=="Medium" && TechnologyMaturity=="Industrialized" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#0000FF','8');
					
				if(MarketPotential=="High" && TechnologyMaturity=="Industrialized" && HypeLevel=='Pilot')
					po(m,y,c,v,'#0000FF','8');	
				if(MarketPotential=="High" && TechnologyMaturity=="Industrialized" && HypeLevel=='Adopt')
					i(m,y,c,v,'#0000FF','12');
				if(MarketPotential=="High" && TechnologyMaturity=="Industrialized" && HypeLevel=='Trial/Watch')
					o(m,y,c,v,'#0000FF','10');
				
				
				v.attr("class", "blip-group")
					v.attr("techname", TechName.toLowerCase())	
					var iy=0;
					for(ii = 0; ii < 2; ii++) {
						var nameccArr4=array[ii];
						 var tx=m-10;
						 var textPosi=array.length;
						if(textPosi==1){var ty=y-(10-iy);}else{ var ty=y-(20-iy);}
						   v.append("a")
							.attr("xlink:href", "#")
							.attr("target", "")
						    .append("text")
							.attr("x",tx)
							.attr("y",ty)
							.attr("class","blip-text")
							.attr("dx",10)
							.attr("dy", 5)
							.attr("text-anchor","middle")
							.transition(t)
							.delay(2000)
							.text(nameccArr4)
						iy=iy+10;
					}  
	 
					v.on("mousemove",function(d){ ajaxcall(t.name()); });	
				
						
            })
        })
    }
	
	
    function f(n) {
	
        function r(t, n, r, e, a,dx,dy,rt) {
           //p.append("text").attr("x", r).attr("y", e).attr("class", a).attr("text-anchor", n).text(t)
		   
		   p.append("text")
			.attr("x",r)
			.attr("y",e)
			.attr("class",a)
			.attr("dx", dx)
			 //.transition()
			 // .duration(2000)
				.attr("dy", dy)
				.attr("transform",rt)
				.attr("text-anchor",n)
				.text(t)
			}
	  
			r(n.I.name(),"end",t+26,30,"first","-6em","-17em","rotate(56)"),
			r(n.II.name(),"start",10,20,"second","-5em","3em","rotate(-57)"),
			r(n.III.name(),"start",10,t-10,"third","-2em","7em","rotate(-43)") 
		
    }
    var d, l, p, h;
    return h = [], l = new tr.util.Fib, d = {}, d.svg = function() {
        return p
    }, d.init = function(t) {
        return p = d3.select(t || "body").append("svg"), d
    }, d.plot = function() {
        var r, a;
        r = n.cycles().reverse(), a = n.quadrants(), p.attr("width", t).attr("height", t), u(r), e(), c(r), n.hasQuadrants() && (f(a), 
		s(r, a.I, 1, -1, "first"), 
		s(r, a.II, -1, -1, "second"), 
		s(r, a.III, -1, 1, "third")), 
		h.forEach(function(t) {
            t()
        })
    }, d
}, 
tr.models.Blip = function(t, n, r, e,mp,tm) {

    var a, u;
    return a = {}, u = -1, 
	a.name = function(){return t},
	a.mp=function(){return mp},
	a.tm=function(){return tm},
	a.description = function() {
        return e || ""
    }, a.isNew = function() {
        return r
    }, a.cycle = function() {
        return n
    }, a.number = function() {
        return u
    }, a.setNumber = function(t) {
        u = t
    }, a
}, tr.models.Cycle = function(t, n) {
    var r = {};
    return r.name = function() {
        return t
    }, r.order = function() {
        return n
    }, r
}, tr.models.Quadrant = function(t) {
    var n, r;
    return n = {}, r = [], n.name = function() {
        return t
    }, n.add = function(t) {
        Array.isArray(t) ? r = r.concat(t) : r.push(t)
    }, n.blips = function() {
        return r.slice(0)
    }, n
}, tr.models.Radar = function() {
    function t(t) {
        t.forEach(function(t) {
            t.setNumber(++u)
        })
    }

    function n() {
        var t = [];
        for (var n in a) a.hasOwnProperty(n) && null != a[n] && t.push(a[n]);
        return t
    }

    function r() {
        return n().reduce(function(t, n) {
            return t.concat(n.blips())
        }, [])
    }
    var e, a, u;
    return u = 0, a = {
        I: null,
        II: null,
        III: null
    }, e = {}, e.setFirstQuadrant = function(n) {
        a.I = n, t(a.I.blips())
    }, e.setSecondQuadrant = function(n) {
        a.II = n, t(a.II.blips())
    }, e.setThirdQuadrant = function(n) {
        a.III = n, t(a.III.blips())
    },  e.hasQuadrants = function() {
        return !!(a.I || a.II || a.III)
    }, e.cycles = function() {
        var t, n;
        n = [], t = {}, r().forEach(function(n) {
            t[n.cycle().name()] = n.cycle()
        });
        for (var e in t) t.hasOwnProperty(e) && n.push(t[e]);
        return n.slice(0).sort(function(t, n) {
            return t.order() - n.order()
        })
    }, e.quadrants = function() {
        return a
    }, e
}, tr.util.Fib = function() {
    var t = {};
    return t.sequence = function(t) {
        for (var n = [0, 1], r = 2; t > r; r++) n[r] = n[r - 2] + n[r - 1];
        return n
    }, t.sum = function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : t.sequence(n + 1).reduce(function(t, n) {
            return t + n
        }, 0)
    }, t
};