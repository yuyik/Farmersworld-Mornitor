		$.fn.digits = function(){ 
		return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
		})
		}
		var fee,wax;
		
		$.getJSON("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300&convert_id=2781", function(json) {
            var wax_usd = json.data[2300].quote[2781].price.toFixed(4);
			var wax_usd_change = json.data[2300].quote[2781].percent_change_24h.toFixed(2);
            document.getElementById("usd").innerHTML = wax_usd
			document.getElementById("usd_change").innerHTML = wax_usd_change
		});
		
		$.getJSON("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300&convert_id=2809", function(json) {
            var wax = json.data[2300].quote[2809].price.toFixed(2);
			var wax_change = json.data[2300].quote[2809].percent_change_24h.toFixed(2);
            document.getElementById("wax").innerHTML = wax
			document.getElementById("wax_change").innerHTML = wax_change
        });
		

		fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
			"referrer": "https://fw.f12key.xyz/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": "{\"json\":true,\"code\":\"farmersworld\",\"scope\":\"farmersworld\",\"table\":\"config\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}",
			"method": "POST",
			"mode": "cors",
			"credentials": "omit"
			})
			.then(function (response){
				return response.json();
			})
			.then(function (json){
				var fee = json.rows[0].fee.toFixed(2);
				document.getElementById("fee").innerHTML = fee
				//console.log(json);
			});
			
		
		
		$.getJSON("https://wax.alcor.exchange/api/markets", function(json) {
            var fix = json
            var fww = json[97].last_price.toFixed(3)
			var fwf = json[98].last_price.toFixed(3)
			var fwg = json[99].last_price.toFixed(3)
			
			var fww_percent = json[97].change24.toFixed(1)
			var fwf_percent = json[98].change24.toFixed(1)
			var fwg_percent = json[99].change24.toFixed(1)

			var fww_percent1 = json[97].changeWeek.toFixed(1)
			var fwf_percent1 = json[98].changeWeek.toFixed(1)
			var fwg_percent1 = json[99].changeWeek.toFixed(1)
			
            document.getElementById("fww").innerHTML = fww
			document.getElementById("fwf").innerHTML = fwf
			document.getElementById("fwg").innerHTML = fwg
			
			let wax = document.getElementById('wax').innerHTML
			document.getElementById("baht-fww").innerHTML = (fww*wax).toFixed(3)
			document.getElementById("baht-fwf").innerHTML = (fwf*wax).toFixed(3)
			document.getElementById("baht-fwg").innerHTML = (fwg*wax).toFixed(3)
			
//			let wax1 = document.getElementById('usd').innerHTML
			document.getElementById("usd-fww").innerHTML = fww_percent + " %" 
			document.getElementById("usd-fwf").innerHTML = fwf_percent + " %"
			document.getElementById("usd-fwg").innerHTML = fwg_percent + " %"
			document.getElementById("usd-fww1").innerHTML = fww_percent1 + " %" 
			document.getElementById("usd-fwf1").innerHTML = fwf_percent1 + " %"
			document.getElementById("usd-fwg1").innerHTML = fwg_percent1 + " %"
			
			console.log(fix)

			var delayInMilliseconds = 2000;
			setTimeout(function() {
			let wax = document.getElementById('wax').innerHTML
			let fwf = document.getElementById('fwf').innerHTML
			let fww = document.getElementById('fww').innerHTML
			let fwg = document.getElementById('fwg').innerHTML
						
			var toolplot_cf = (fww * 200 + fwg * 120)
			document.getElementById("tool-plot-cf").innerHTML = toolplot_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-plot-cf-thb").innerHTML = (toolplot_cf * wax).toFixed(0).toLocaleString() + " B."
			
			var toolbarleyseed_cf = (fwg * 50) // = wax
			document.getElementById("tool-barleyseed-cf").innerHTML = toolbarleyseed_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-barleyseed-cf-thb").innerHTML = (toolbarleyseed_cf * wax).toFixed(2).toLocaleString() + " B."
			
			var toolcornseed_cf = (fwg * 75)
			document.getElementById("tool-cornseed-cf").innerHTML = toolcornseed_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-cornseed-cf-thb").innerHTML = (toolcornseed_cf * wax).toFixed(2).toLocaleString() + " B."
			
			var toolbarley_cf = (fwg * 40)
			document.getElementById("tool-barley-cf").innerHTML = toolbarley_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-barley-cf-thb").innerHTML = (toolbarley_cf * wax).toFixed(2).toLocaleString() + " B."

			document.getElementById("cost-barley").innerHTML = ((toolbarleyseed_cf*8)+(fwf*2016)).toFixed(2) + " ￦ | "
			document.getElementById("cost-barley-thb").innerHTML = (((toolbarleyseed_cf*8)+(fwf*2016))*wax).toFixed(2).toLocaleString() + " B."
			
			document.getElementById("revenue-barley").innerHTML = (38*fwg*60).toFixed(2) + " ￦ | "
			document.getElementById("revenue-barley-thb").innerHTML = (38*fwg*60 * wax).toFixed(2).toLocaleString() + " B."
			//38*fwg*60
			//document.getElementById("revenue-barley").innerHTML = (toolbarley_cf*60).toFixed(2) + " ￦ | "
			//document.getElementById("revenue-barley-thb").innerHTML = (toolbarley_cf *60 * wax).toFixed(0).toLocaleString() + " B."			

			document.getElementById("profit-barley").innerHTML =  (((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*0.8).toFixed(0) + " ￦ | "
			document.getElementById("profit-barley-thb").innerHTML = (((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax)*0.35).toFixed(0).toLocaleString() + " B."
			document.getElementById("profit-barley-thb1").innerHTML = (((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax)*0.35).toFixed(0).toLocaleString() + " - " + ((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax).toFixed(0).toLocaleString() + " B."
			
			var toolcorn_cf = (fwg * 60)
			document.getElementById("tool-corn-cf").innerHTML = toolcorn_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-corn-cf-thb").innerHTML = (toolcorn_cf * wax).toFixed(0).toLocaleString() + " B."
/*
			var toolfb_cf = (fww * 19200 + fwg * 3200)
			document.getElementById("tool-fb-cf").innerHTML = toolfb_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fb-cf-thb").innerHTML = (toolfb_cf * wax).toLocaleString() + " B."
			document.getElementById("profit-fb").innerHTML = "กำไรต่อวัน : " + ((80*24*fwf)-(153.6*fwg)).toFixed(0) + " ￦ | "
			document.getElementById("profit-fb-thb").innerHTML = (((80*24*fwf)-(153.6*fwg))*wax).toFixed(0) + " B."
*/	
			var toolfb_cf = (fww * 19200 + fwg * 3200)
			document.getElementById("tool-fb-cf").innerHTML = toolfb_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fb-cf-thb").innerHTML = (toolfb_cf * wax).toLocaleString() + " B."
			document.getElementById("profit-fb").innerHTML = "กำไรต่อวัน : " + (((80*24*fwf)-(153.6*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fb-thb").innerHTML = ((((80*24*fwf)-(153.6*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolfn_cf = (fww * 4800 + fwg * 800)
			document.getElementById("tool-fn-cf").innerHTML = toolfn_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fn-cf-thb").innerHTML = (toolfn_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-fn").innerHTML = "กำไรต่อวัน : " + (((20*24*fwf)-(96*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fn-thb").innerHTML = ((((20*24*fwf)-(96*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolfr_cf = (fww * 1200 + fwg * 200)
			document.getElementById("tool-fr-cf").innerHTML = toolfr_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fr-cf-thb").innerHTML = (toolfr_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-fr").innerHTML = "กำไรต่อวัน : " + (((5*24*fwf)-(24*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fr-thb").innerHTML = ((((5*24*fwf)-(24*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolcs_cf = (fww * 21600 + fwg * 3600)
			document.getElementById("tool-cs-cf").innerHTML = toolcs_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-cs-cf-thb").innerHTML = (toolcs_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-cs").innerHTML = "กำไรต่อวัน : " + (((54*24*fww)-((216*fwg)+(288*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-cs-thb").innerHTML = ((((54*24*fww)-((216*fwg)+(288*fwf)))*wax)*0.95).toFixed(0) + " B."
			var tools_cf = (fww * 7200 + fwg * 1200)
			document.getElementById("tool-s-cf").innerHTML = tools_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-s-cf-thb").innerHTML = (tools_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-s").innerHTML = "กำไรต่อวัน : " + (((17*24*fww)-((72*fwg)+(144*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-s-thb").innerHTML = ((((17*24*fww)-((72*fwg)+(144*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			var toola_cf = (fww * 2400 + fwg * 400)
			document.getElementById("tool-a-cf").innerHTML = toola_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-a-cf-thb").innerHTML = (toola_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-a").innerHTML = "กำไรต่อวัน : " + (((5*24*fww)-((24*fwg)+(48*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-a-thb").innerHTML = ((((5*24*fww)-((24*fwg)+(48*fwf)))*wax)*0.95).toFixed(0) + " B."
			var toolsa_cf = ((fww * 800) + (fwg * 135))
			document.getElementById("tool-sa-cf").innerHTML = toolsa_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-sa-cf-thb").innerHTML = (toolsa_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-sa").innerHTML = "กำไรต่อวัน : " + (((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-sa-thb").innerHTML = ((((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)*0.95).toFixed(0) + " B."
			var toolasa_cf = ((fww * 110) + (fwg * 20))
			document.getElementById("tool-asa-cf").innerHTML = toolasa_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-asa-cf-thb").innerHTML = (toolasa_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-asa").innerHTML = "กำไรต่อวัน : " + (((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-asa-thb").innerHTML = ((((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)*0.95).toFixed(0) + " B."
			var toolme_cf = (fww * 24000 + fwg * 4000)
			document.getElementById("tool-me-cf").innerHTML = toolme_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-me-cf-thb").innerHTML = (toolme_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-me").innerHTML = "กำไรต่อวัน : " + (((100*12*fwg)-((12*fwg)+(319.2*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-me-thb").innerHTML = ((((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)*0.95).toFixed(0) + " B."
// -------------------------------------------------			
			$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298592&collection_name=farmersworld", function(json) {
            var toolplot = (json.data[0].price.amount / 100000000)
			var toolplot_thb = (toolplot * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolplot_thb < (toolplot_cf * wax)) {
				// document.getElementById("roi-plot").innerHTML = (toolplot_thb/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-plot").innerHTML = ((toolplot_cf * wax)/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-plot").innerHTML = toolplot.toFixed(2) + " ￦ | "
			document.getElementById("tool-plot-thb").innerHTML = toolplot_thb.toFixed(2) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298595&collection_name=farmersworld", function(json) {
            var toolbarleyseed = (json.data[0].price.amount / 100000000)
			var toolbarleyseed_thb = (toolbarleyseed * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolbarleyseed_thb < (toolbarleyseed_cf * wax)) {
				// document.getElementById("roi-barleyseed").innerHTML = (toolbarleyseed_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-barleyseed").innerHTML = ((toolbarleyseed_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-barleyseed").innerHTML = toolbarleyseed.toFixed(2) + " ￦ | "
			document.getElementById("tool-barleyseed-thb").innerHTML = toolbarleyseed_thb.toFixed(2) + " B."
        });
		
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298596&collection_name=farmersworld", function(json) {
            var toolcornseed = (json.data[0].price.amount / 100000000)
			var toolcornseed_thb = (toolcornseed * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolcornseed_thb < (toolcornseed_cf * wax)) {
				// document.getElementById("roi-cornseed").innerHTML = (toolcornseed_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-cornseed").innerHTML = ((toolcornseed_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-cornseed").innerHTML = toolcornseed.toFixed(2) + " ￦ | "
			document.getElementById("tool-cornseed-thb").innerHTML = toolcornseed_thb.toFixed(2) + " B."
        });
		
		
			$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=318606&collection_name=farmersworld", function(json) {
            var toolbarley = (json.data[0].price.amount / 100000000)
			var toolbarley_thb = (toolbarley * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolbarley_thb < (toolbarley_cf * wax)) {
				// document.getElementById("roi-barley").innerHTML = (toolbarley_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-barley").innerHTML = ((toolbarley_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-barley").innerHTML = toolbarley.toFixed(2) + " ￦ | "
			document.getElementById("tool-barley-thb").innerHTML = toolbarley_thb.toFixed(2) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=318607&collection_name=farmersworld", function(json) {
            var toolcorn = (json.data[0].price.amount / 100000000)
			var toolcorn_thb = (toolcorn * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolcorn_thb < (toolcorn_cf * wax)) {
				// document.getElementById("roi-corn").innerHTML = (toolcorn_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-corn").innerHTML = ((toolcorn_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-corn").innerHTML = toolcorn.toFixed(2) + " ￦ | "
			document.getElementById("tool-corn-thb").innerHTML = toolcorn_thb.toFixed(2) + " B."
        });


//---------------------------------------------
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203889&collection_name=farmersworld", function(json) {
            var toolfb = (json.data[0].price.amount / 100000000)
			var toolfb_thb = (toolfb * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfb_thb < (toolfb_cf * wax)) {
				document.getElementById("roi-fb").innerHTML = (toolfb_thb/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fb").innerHTML = ((toolfb_cf * wax)/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-fb").innerHTML = toolfb.toFixed(0) + " ￦ | "
			document.getElementById("tool-fb-thb").innerHTML = toolfb_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203888&collection_name=farmersworld", function(json) {
            var toolfn = (json.data[0].price.amount / 100000000)
			var toolfn_thb = (toolfn * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfn_thb < (toolfn_cf * wax)) {
				document.getElementById("roi-fn").innerHTML = (toolfn_thb/(((20*24*fwf)-(96*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fn").innerHTML = ((toolfn_cf * wax)/(((20*24*fwf)-(96*fwg))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-fn").innerHTML = toolfn.toFixed(0) + " ￦ | "
			document.getElementById("tool-fn-thb").innerHTML = toolfn_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203887&collection_name=farmersworld", function(json) {
            var toolfr = (json.data[0].price.amount / 100000000)
			var toolfr_thb = (toolfr * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfr_thb < (toolfr_cf * wax)) {
				document.getElementById("roi-fr").innerHTML = (toolfr_thb/(((5*24*fwf)-(24*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fr").innerHTML = ((toolfr_cf * wax)/(((5*24*fwf)-(24*fwg))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-fr").innerHTML = toolfr.toFixed(0) + " ￦ | "
			document.getElementById("tool-fr-thb").innerHTML = toolfr_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203886&collection_name=farmersworld", function(json) {
            var toolcs = (json.data[0].price.amount / 100000000)
			var toolcs_thb = (toolcs * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolcs_thb < (toolcs_cf * wax)) {
				document.getElementById("roi-cs").innerHTML = (toolcs_thb/(((54*24*fww)-((216*fwg)+(288*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-cs").innerHTML = ((toolcs_cf * wax)/(((54*24*fww)-((216*fwg)+(288*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-cs").innerHTML = toolcs.toFixed(0) + " ￦ | "
			document.getElementById("tool-cs-thb").innerHTML = toolcs_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203883&collection_name=farmersworld", function(json) {
            var tools = (json.data[0].price.amount / 100000000)
			var tools_thb = (tools * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (tools_thb < (tools_cf * wax)) {
				document.getElementById("roi-s").innerHTML = (tools_thb/(((17*24*fww)-((72*fwg)+(144*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-s").innerHTML = ((tools_cf * wax)/(((17*24*fww)-((72*fwg)+(144*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-s").innerHTML = tools.toFixed(0) + " ￦ | "
			document.getElementById("tool-s-thb").innerHTML = tools_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203881&collection_name=farmersworld", function(json) {
            var toola = (json.data[0].price.amount / 100000000)
			var toola_thb = (toola * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toola_thb < (toola_cf * wax)) {
				document.getElementById("roi-a").innerHTML = (toola_thb/(((5*24*fww)-((24*fwg)+(48*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-a").innerHTML = ((toola_cf * wax)/(((5*24*fww)-((24*fwg)+(48*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-a").innerHTML = toola.toFixed(0) + " ￦ | "
			document.getElementById("tool-a-thb").innerHTML = toola_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=260763&collection_name=farmersworld", function(json) {
            var toolsa = (json.data[0].price.amount / 100000000)
			var toolsa_thb = (toolsa * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolsa_thb < (toolsa_cf * wax)) {
				document.getElementById("roi-sa").innerHTML = (toolsa_thb/(((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-sa").innerHTML = ((toolsa_cf * wax)/(((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-sa").innerHTML = toolsa.toFixed(0) + " ￦ | "
			document.getElementById("tool-sa-thb").innerHTML = toolsa_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=378691&collection_name=farmersworld", function(json) {
            var toolasa = (json.data[0].price.amount / 100000000)
			var toolasa_thb = (toolasa * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolasa_thb < (toolasa_cf * wax)) {
				document.getElementById("roi-asa").innerHTML = (toolasa_thb/(((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-asa").innerHTML = ((toolasa_cf * wax)/(((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-asa").innerHTML = toolasa.toFixed(0) + " ￦ | "
			document.getElementById("tool-asa-thb").innerHTML = toolasa_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203891&collection_name=farmersworld", function(json) {
            var toolme = (json.data[0].price.amount / 100000000)
			var toolme_thb = (toolme * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolme_thb < (toolme_cf * wax)) {
				document.getElementById("roi-me").innerHTML = (toolme_thb/(((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-me").innerHTML = ((toolme_cf * wax)/(((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-me").innerHTML = toolme.toFixed(0) + " ￦ | "
			document.getElementById("tool-me-thb").innerHTML = toolme_thb.toFixed(0) + " B."
        });
		}, delayInMilliseconds);
        });
		
		
		////////////////////////////////   REFRESH   /////////////////////////////////////
		
		
		function refreshPage()
		{
		
		$.getJSON("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300&convert_id=2781", function(json) {
		var wax_usd = json.data[2300].quote[2781].price.toFixed(4);
		document.getElementById("usd").innerHTML = wax_usd
		//console.log(wax_usd)
		});
		
		$.getJSON("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=2300&convert_id=2809", function(json) {
            var wax = json.data[2300].quote[2809].price.toFixed(2);
            document.getElementById("wax").innerHTML = wax
        });
		
		fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
			"referrer": "https://fw.f12key.xyz/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": "{\"json\":true,\"code\":\"farmersworld\",\"scope\":\"farmersworld\",\"table\":\"config\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}",
			"method": "POST",
			"mode": "cors",
			"credentials": "omit"
			})
			.then(function (response){
				return response.json();
			})
			.then(function (json){
				var fee = json.rows[0].fee.toFixed(2);
				document.getElementById("fee").innerHTML = fee
				//console.log(json);
				//console.log(fee);
			});
			
		$.getJSON("https://wax.alcor.exchange/api/markets", function(json) {
            var fix = json
            var fww = json[97].last_price.toFixed(3)
			var fwf = json[98].last_price.toFixed(3)
			var fwg = json[99].last_price.toFixed(3)
            document.getElementById("fww").innerHTML = fww
			document.getElementById("fwf").innerHTML = fwf
			document.getElementById("fwg").innerHTML = fwg
			
			let wax = document.getElementById('wax').innerHTML
			document.getElementById("baht-fww").innerHTML = (fww*wax).toFixed(3)
			document.getElementById("baht-fwf").innerHTML = (fwf*wax).toFixed(3)
			document.getElementById("baht-fwg").innerHTML = (fwg*wax).toFixed(3)
			
		
			var delayInMilliseconds = 2000;
			setTimeout(function() {
			let wax = document.getElementById('wax').innerHTML
			let fwf = document.getElementById('fwf').innerHTML
			let fww = document.getElementById('fww').innerHTML
			let fwg = document.getElementById('fwg').innerHTML
			
			var toolplot_cf = (fww * 200 + fwg * 120)
			document.getElementById("tool-plot-cf").innerHTML = toolplot_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-plot-cf-thb").innerHTML = (toolplot_cf * wax).toFixed(2).toLocaleString() + " B."
			
			var toolbarleyseed_cf = (fwg * 50)
			document.getElementById("tool-barleyseed-cf").innerHTML = toolbarleyseed_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-barleyseed-cf-thb").innerHTML = (toolbarleyseed_cf * wax).toFixed(2).toLocaleString() + " B."
			
			var toolcornseed_cf = (fwg * 75)
			document.getElementById("tool-cornseed-cf").innerHTML = toolcornseed_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-cornseed-cf-thb").innerHTML = (toolcornseed_cf * wax).toFixed(2).toLocaleString() + " B."
			
			var toolbarley_cf = (fwg * 40)
			document.getElementById("tool-barley-cf").innerHTML = toolbarley_cf.toFixed(2) + " ￦ | "
			document.getElementById("tool-barley-cf-thb").innerHTML = (toolbarley_cf * wax).toFixed(2).toLocaleString() + " B."

			document.getElementById("cost-barley").innerHTML = ((toolbarleyseed_cf*8)+(fwf*2016)).toFixed(2) + " ￦ | "
			document.getElementById("cost-barley-thb").innerHTML = (((toolbarleyseed_cf*8)+(fwf*2016))*wax).toFixed(2).toLocaleString() + " B."
			
			document.getElementById("revenue-barley").innerHTML = (38*fwg*60).toFixed(2) + " ￦ | "
			document.getElementById("revenue-barley-thb").innerHTML = (38*fwg*60 * wax).toFixed(2).toLocaleString() + " B."
			//38*fwg*60
			//document.getElementById("revenue-barley").innerHTML = (toolbarley_cf*60).toFixed(2) + " ￦ | "
			//document.getElementById("revenue-barley-thb").innerHTML = (toolbarley_cf *60 * wax).toFixed(0).toLocaleString() + " B."			

			document.getElementById("profit-barley").innerHTML =  (((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*0.8).toFixed(0) + " ￦ | "
			document.getElementById("profit-barley-thb").innerHTML = (((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax)*0.35).toFixed(0).toLocaleString() + " B."
						document.getElementById("profit-barley-thb1").innerHTML = (((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax)*0.35).toFixed(0).toLocaleString() + " - " + ((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax).toFixed(0).toLocaleString() + " B."
			
			var toolcorn_cf = (fwg * 60)
			document.getElementById("tool-corn-cf").innerHTML = toolcorn_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-corn-cf-thb").innerHTML = (toolcorn_cf * wax).toFixed(0).toLocaleString() + " B."


//------------------------------			
			var toolfb_cf = (fww * 19200 + fwg * 3200)
			document.getElementById("tool-fb-cf").innerHTML = toolfb_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fb-cf-thb").innerHTML = (toolfb_cf * wax).toLocaleString() + " B."
			document.getElementById("profit-fb").innerHTML = "กำไรต่อวัน : " + (((80*24*fwf)-(153.6*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fb-thb").innerHTML = ((((80*24*fwf)-(153.6*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolfn_cf = (fww * 4800 + fwg * 800)
			document.getElementById("tool-fn-cf").innerHTML = toolfn_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fn-cf-thb").innerHTML = (toolfn_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-fn").innerHTML = "กำไรต่อวัน : " + (((20*24*fwf)-(96*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fn-thb").innerHTML = ((((20*24*fwf)-(96*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolfr_cf = (fww * 1200 + fwg * 200)
			document.getElementById("tool-fr-cf").innerHTML = toolfr_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-fr-cf-thb").innerHTML = (toolfr_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-fr").innerHTML = "กำไรต่อวัน : " + (((5*24*fwf)-(24*fwg))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-fr-thb").innerHTML = ((((5*24*fwf)-(24*fwg))*wax)*0.95).toFixed(0) + " B."
			
			var toolcs_cf = (fww * 21600 + fwg * 3600)
			document.getElementById("tool-cs-cf").innerHTML = toolcs_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-cs-cf-thb").innerHTML = (toolcs_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-cs").innerHTML = "กำไรต่อวัน : " + (((54*24*fww)-((216*fwg)+(288*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-cs-thb").innerHTML = ((((54*24*fww)-((216*fwg)+(288*fwf)))*wax)*0.95).toFixed(0) + " B."
			var tools_cf = (fww * 7200 + fwg * 1200)
			document.getElementById("tool-s-cf").innerHTML = tools_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-s-cf-thb").innerHTML = (tools_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-s").innerHTML = "กำไรต่อวัน : " + (((17*24*fww)-((72*fwg)+(144*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-s-thb").innerHTML = ((((17*24*fww)-((72*fwg)+(144*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			var toola_cf = (fww * 2400 + fwg * 400)
			document.getElementById("tool-a-cf").innerHTML = toola_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-a-cf-thb").innerHTML = (toola_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-a").innerHTML = "กำไรต่อวัน : " + (((5*24*fww)-((24*fwg)+(48*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-a-thb").innerHTML = ((((5*24*fww)-((24*fwg)+(48*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			var toolsa_cf = ((fww * 800) + (fwg * 135))
			document.getElementById("tool-sa-cf").innerHTML = toolsa_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-sa-cf-thb").innerHTML = (toolsa_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-sa").innerHTML = "กำไรต่อวัน : " + (((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-sa-thb").innerHTML = ((((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			var toolasa_cf = ((fww * 110) + (fwg * 20))
			document.getElementById("tool-asa-cf").innerHTML = toolasa_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-asa-cf-thb").innerHTML = (toolasa_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-asa").innerHTML = "กำไรต่อวัน : " + (((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-asa-thb").innerHTML = ((((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			var toolme_cf = (fww * 24000 + fwg * 4000)
			document.getElementById("tool-me-cf").innerHTML = toolme_cf.toFixed(0) + " ￦ | "
			document.getElementById("tool-me-cf-thb").innerHTML = (toolme_cf * wax).toFixed(0) + " B."
			document.getElementById("profit-me").innerHTML = "กำไรต่อวัน : " + (((100*12*fwg)-((12*fwg)+(319.2*fwf)))*0.95).toFixed(0) + " ￦ | "
			document.getElementById("profit-me-thb").innerHTML = ((((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)*0.95).toFixed(0) + " B."
			
			$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298592&collection_name=farmersworld", function(json) {
            var toolplot = (json.data[0].price.amount / 100000000)
			var toolplot_thb = (toolplot * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolplot_thb < (toolplot_cf * wax)) {
				// document.getElementById("roi-plot").innerHTML = (toolplot_thb/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-plot").innerHTML = ((toolplot_cf * wax)/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-plot").innerHTML = toolplot.toFixed(2) + " ￦ | "
			document.getElementById("tool-plot-thb").innerHTML = toolplot_thb.toFixed(2) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298595&collection_name=farmersworld", function(json) {
            var toolbarleyseed = (json.data[0].price.amount / 100000000)
			var toolbarleyseed_thb = (toolbarleyseed * wax)
			var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolbarleyseed_thb < (toolbarleyseed_cf * wax)) {
				// document.getElementById("roi-barleyseed").innerHTML = (toolbarleyseed_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-barleyseed").innerHTML = ((toolbarleyseed_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-barleyseed").innerHTML = toolbarleyseed.toFixed(2) + " ￦ | "
			document.getElementById("tool-barleyseed-thb").innerHTML = toolbarleyseed_thb.toFixed(2) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=318606&collection_name=farmersworld", function(json) {
            var toolbarley = (json.data[0].price.amount / 100000000)
			var toolbarley_thb = (toolbarley * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolbarley_thb < (toolbarley_cf * wax)) {
				// document.getElementById("roi-barley").innerHTML = (toolbarley_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-barley").innerHTML = ((toolbarley_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-barley").innerHTML = toolbarley.toFixed(2) + " ￦ | "
			document.getElementById("tool-barley-thb").innerHTML = toolbarley_thb.toFixed(2) + " B."
			
			//var totalallprofit = ((((toolbarley_cf*60) - ((toolbarleyseed_cf*8)+(fwf*2016)))*wax )-12*wax)
			//document.getElementById("all-profit-thb").innerHTML = totalallprofit.toLocaleString() + " B."
			
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=298596&collection_name=farmersworld", function(json) {
            var toolcornseed = (json.data[0].price.amount / 100000000)
			var toolcornseed_thb = (toolcornseed * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolcornseed_thb < (toolcornseed_cf * wax)) {
				// document.getElementById("roi-cornseed").innerHTML = (toolcornseed_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-cornseed").innerHTML = ((toolcornseed_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-cornseed").innerHTML = toolcornseed.toFixed(2) + " ￦ | "
			document.getElementById("tool-cornseed-thb").innerHTML = toolcornseed_thb.toFixed(2) + " B."
        });
		
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=318607&collection_name=farmersworld", function(json) {
            var toolcorn = (json.data[0].price.amount / 100000000)
			var toolcorn_thb = (toolcorn * wax)
			// var delayInMilliseconds = 1000;
			// setTimeout(function() {
			// if (toolcorn_thb < (toolcorn_cf * wax)) {
				// document.getElementById("roi-corn").innerHTML = (toolcorn_thb/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// } else {
				// document.getElementById("roi-corn").innerHTML = ((toolcorn_cf * wax)/(((153.6*fwg))*wax)).toFixed(0) + " วัน"
			// }
			// }, delayInMilliseconds);
            document.getElementById("tool-corn").innerHTML = toolcorn.toFixed(2) + " ￦ | "
			document.getElementById("tool-corn-thb").innerHTML = toolcorn_thb.toFixed(2) + " B."
        });
		
//----------------------------
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203889&collection_name=farmersworld", function(json) {
            var toolfb = (json.data[0].price.amount / 100000000)
			var toolfb_thb = (toolfb * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfb_thb < (toolfb_cf * wax)) {
				document.getElementById("roi-fb").innerHTML = (toolfb_thb/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fb").innerHTML = ((toolfb_cf * wax)/(((80*24*fwf)-(153.6*fwg))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-fb").innerHTML = toolfb.toFixed(0) + " ￦ | "
			document.getElementById("tool-fb-thb").innerHTML = toolfb_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203888&collection_name=farmersworld", function(json) {
            var toolfn = (json.data[0].price.amount / 100000000)
			var toolfn_thb = (toolfn * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfn_thb < (toolfn_cf * wax)) {
				document.getElementById("roi-fn").innerHTML = (toolfn_thb/(((20*24*fwf)-(96*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fn").innerHTML = ((toolfn_cf * wax)/(((20*24*fwf)-(96*fwg))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-fn").innerHTML = toolfn.toFixed(0) + " ￦ | "
			document.getElementById("tool-fn-thb").innerHTML = toolfn_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203887&collection_name=farmersworld", function(json) {
            var toolfr = (json.data[0].price.amount / 100000000)
			var toolfr_thb = (toolfr * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolfr_thb < (toolfr_cf * wax)) {
				document.getElementById("roi-fr").innerHTML = (toolfr_thb/(((5*24*fwf)-(24*fwg))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-fr").innerHTML = ((toolfr_cf * wax)/(((5*24*fwf)-(24*fwg))*wax)).toFixed(0) + " วัน"
			}

			}, delayInMilliseconds);
            document.getElementById("tool-fr").innerHTML = toolfr.toFixed(0) + " WAX/ "
			document.getElementById("tool-fr-thb").innerHTML = toolfr_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203886&collection_name=farmersworld", function(json) {
            var toolcs = (json.data[0].price.amount / 100000000)
			var toolcs_thb = (toolcs * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolcs_thb < (toolcs_cf * wax)) {
				document.getElementById("roi-cs").innerHTML = (toolcs_thb/(((54*24*fww)-((216*fwg)+(288*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-cs").innerHTML = ((toolcs_cf * wax)/(((54*24*fww)-((216*fwg)+(288*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-cs").innerHTML = toolcs.toFixed(0) + " ￦ | "
			document.getElementById("tool-cs-thb").innerHTML = toolcs_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203883&collection_name=farmersworld", function(json) {
            var tools = (json.data[0].price.amount / 100000000)
			var tools_thb = (tools * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (tools_thb < (tools_cf * wax)) {
				document.getElementById("roi-s").innerHTML = (tools_thb/(((17*24*fww)-((72*fwg)+(144*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-s").innerHTML = ((tools_cf * wax)/(((17*24*fww)-((72*fwg)+(144*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-s").innerHTML = tools.toFixed(0) + " ￦ | "
			document.getElementById("tool-s-thb").innerHTML = tools_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203881&collection_name=farmersworld", function(json) {
            var toola = (json.data[0].price.amount / 100000000)
			var toola_thb = (toola * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toola_thb < (toola_cf * wax)) {
				document.getElementById("roi-a").innerHTML = (toola_thb/(((5*24*fww)-((24*fwg)+(48*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-a").innerHTML = ((toola_cf * wax)/(((5*24*fww)-((24*fwg)+(48*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-a").innerHTML = toola.toFixed(0) + " ￦ | "
			document.getElementById("tool-a-thb").innerHTML = toola_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=260763&collection_name=farmersworld", function(json) {
            var toolsa = (json.data[0].price.amount / 100000000)
			var toolsa_thb = (toolsa * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolsa_thb < (toolsa_cf * wax)) {
				document.getElementById("roi-sa").innerHTML = (toolsa_thb/(((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-sa").innerHTML = ((toolsa_cf * wax)/(((1.7*24*fww)-((14.4*fwg)+(24*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-sa").innerHTML = toolsa.toFixed(0) + " ￦ | "
			document.getElementById("tool-sa-thb").innerHTML = toolsa_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=378691&collection_name=farmersworld", function(json) {
            var toolasa = (json.data[0].price.amount / 100000000)
			var toolasa_thb = (toolasa * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolasa_thb < (toolasa_cf * wax)) {
				document.getElementById("roi-asa").innerHTML = (toolasa_thb/(((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-asa").innerHTML = ((toolasa_cf * wax)/(((0.7*12*fww)-((2.4*fwg)+(9.6*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-asa").innerHTML = toolasa.toFixed(0) + " ￦ | "
			document.getElementById("tool-asa-thb").innerHTML = toolasa_thb.toFixed(0) + " B."
        });
		
		$.getJSON("https://wax.api.atomicassets.io/atomicmarket/v1/sales?limit=1&order=asc&sort=price&state=1&template_id=203891&collection_name=farmersworld", function(json) {
            var toolme = (json.data[0].price.amount / 100000000)
			var toolme_thb = (toolme * wax)
			var delayInMilliseconds = 1000;
			setTimeout(function() {
			if (toolme_thb < (toolme_cf * wax)) {
				document.getElementById("roi-me").innerHTML = (toolme_thb/(((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)).toFixed(0) + " วัน"
			} else {
				document.getElementById("roi-me").innerHTML = ((toolme_cf * wax)/(((100*12*fwg)-((12*fwg)+(319.2*fwf)))*wax)).toFixed(0) + " วัน"
			}
			}, delayInMilliseconds);
            document.getElementById("tool-me").innerHTML = toolme.toFixed(0) + " ￦ | "
			document.getElementById("tool-me-thb").innerHTML = toolme_thb.toFixed(0) + " B."
        });
		}, delayInMilliseconds);
        });
		
		}
		setInterval('refreshPage()', 30000);
		
		setInterval(function() {
			var hours = (new Date()).getHours();
			var minutes = (new Date()).getMinutes();
			var seconds = (new Date()).getSeconds();
			fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
			"referrer": "https://fw.f12key.xyz/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": "{\"json\":true,\"code\":\"farmersworld\",\"scope\":\"farmersworld\",\"table\":\"config\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}",
			"method": "POST",
			"mode": "cors",
			"credentials": "omit"
			})
			.then(function (response){
				return response.json();
			})
			.then(function (json){
				var fee = json.rows[0].fee.toFixed(2);
				//document.getElementById("fee").innerHTML = fee
				//console.log(json);
				console.log(hours+":"+minutes+":"+seconds+" Fee = " +  fee);
			});
				
		}, 1000*60*10);
		
		
