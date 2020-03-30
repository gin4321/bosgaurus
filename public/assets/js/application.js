function utf8_encode(e) {
    if (null == e) return "";
    var t, n, i = e + "",
        r = "",
        s = 0;
    t = n = 0, s = i.length;
    for (var a = 0; a < s; a++) {
        var o = i.charCodeAt(a),
            l = null;
        o < 128 ? n++ : l = 127 < o && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), null !== l && (t < n && (r += i.slice(t, n)), r += l, t = n = a + 1)
    }
    return t < n && (r += i.slice(t, s)), r
}

function crc32(e) {
    var t = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",
        n = 0,
        i = 0;
    n ^= -1;
    for (var r = 0, s = (e = utf8_encode(e)).length; r < s; r++) i = 255 & (n ^ e.charCodeAt(r)), n = n >>> 8 ^ "0x" + t.substr(9 * i, 8);
    return (n ^= -1) < 0 && (n += 4294967296), n
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function debounce(r, s, a) {
    var o;
    return function l() {
        var e = this,
            t = arguments,
            n = function() {
                o = null, a || r.apply(e, t)
            },
            i = a && !o;
        clearTimeout(o), o = setTimeout(n, s), i && r.apply(e, t)
    }
}

function styleSelectBoxes() {
    $(".control-group.select.styled").each(function(e, t) {
        $(t).find("select").wrap('<div class="styled-select-box" />')
    })
}

function AnalyticsNewsletterSubscribed() {
    function t(e) {
        return {
            form: e
        }
    }
    return {
        track: function n(e) {
            window.analytics && window.analytics.track("Newsletter Subscribed", t(e))
        }
    }
}

function AnalyticsOrderCompleted() {
    return {
        track: function t(e) {
            window.analytics && window.analytics.track(e.key, e.data)
        }
    }
}

function AtHomeGiftAddOns() {
    var i, n;
    this.addOnSummaryElement = function() {
        return $(".js-gift-subscription-addons")
    }, this.areAddOnsSelected = function() {
        return 0 < $('input[name="add_on_variants[]"]:checked').length
    }, this.clearSelectedCheckboxes = function() {
        $('input[name="add_on_variants[]"]:checked').removeAttr("checked")
    }, this.initialize = function(e, t) {
        i = e, (n = t).initialize()
    }, this.openModal = function(e) {
        $(".js-gift-subscription-add-on-modal-" + e).modal()
    }, this.proceedToCheckoutElement = function() {
        return $(".js-proceed-to-checkout")
    }, this.setAddOn = function(e, t, n) {
        i.set(e, t, n)
    }, this.simulateClick = function(e, t) {
        $(e.data("elementId")).trigger("click"), t && $(".js-learn-more-lightbox").modal("hide")
    }, this.toggleProceed = function() {
        var e = this.areAddOnsSelected();
        this.proceedToCheckoutElement().toggle(e), this.addOnSummaryElement().toggle(e)
    }, this.updateView = function() {
        i.toggle(), n.set(i.price(), i.isChecked()), this.toggleProceed()
    }
}

function AtHomeGiftAddOnsTotalPrice() {
    var n;
    this.get = function() {
        return n
    }, this.set = function(e, t) {
        t ? n += e : n -= e, this.updateView()
    }, this.initialize = function() {
        n = this.startingPrice(), this.updateView()
    }, this.startingPrice = function() {
        return parseFloat($(".js-total-price").data("subscriptionPrice"))
    }, this.updateView = function() {
        $(".js-total-price").html("$" + n.toFixed(2))
    }
}

function AtHomeGiftSelectedAddOn() {
    var i, r, s;
    this.set = function(e, t, n) {
        i = e, r = t, s = n
    }, this.getElementId = function() {
        return r
    }, this.getValue = function() {
        return i
    }, this.isChecked = function() {
        return s
    }, this.price = function() {
        return parseFloat($("#" + r).data("price"))
    }, this.checkMark = function() {
        return this.label().find(".js-checkmark")
    }, this.label = function() {
        return $('label[for="' + r + '"]')
    }, this.modal = function() {
        return $(".js-gift-subscription-add-on-modal-" + i)
    }, this.modalCheckMark = function() {
        return this.modal().find(".js-checkmark")
    }, this.modalSelect = function() {
        return this.modal().find(".js-modal-select-add-on-variant")
    }, this.modalSelectedText = function() {
        return this.modal().find(".js-selected-text")
    }, this.modalSelectText = function() {
        return this.modal().find(".js-select-text")
    }, this.selectedText = function() {
        return this.label().find(".js-selected-text")
    }, this.selectText = function() {
        return this.label().find(".js-select-text")
    }, this.summary = function() {
        return $(".js-add-on-variant-summary-" + i)
    }, this.elementsToToggleDisplay = function() {
        return [{
            element: this.checkMark(),
            display: s,
            classes: "dib"
        }, {
            element: this.label(),
            display: !s,
            classes: "secondary-blue-btn"
        }, {
            element: this.label(),
            display: s,
            classes: "br bl bb b--light-silver lh-reset"
        }, {
            element: this.modalCheckMark(),
            display: s,
            classes: "dib"
        }, {
            element: this.modalSelect(),
            display: !s,
            classes: "secondary-blue-btn"
        }, {
            element: this.modalSelect(),
            display: s,
            classes: "ba b--light-silver lh-reset mid-gray"
        }, {
            element: this.modalSelectText(),
            display: !s,
            classes: "dib"
        }, {
            element: this.modalSelectedText(),
            display: s,
            classes: "dib"
        }, {
            element: this.selectedText(),
            display: s,
            classes: "dib"
        }, {
            element: this.selectText(),
            display: !s,
            classes: "dib"
        }]
    }, this.toggleDisplay = function(e) {
        e.element.toggleClass(e.classes, e.display)
    }, this.toggle = function() {
        this.summary().toggle(s), $.each(this.elementsToToggleDisplay(), function(e, t) {
            this.toggleDisplay(t)
        }.bind(this))
    }
}

function initCommunityMap() {
    CommunityMap.setupMap()
}

function clearHighlightedRow() {
    $(".js-forecast-row.opened, .js-order-forecast, .js-styled-date-display").addClass("dn"), $(".js-order-row, .js-forecast-row").removeClass("opened")
}

function resetAndAddGreenBorder(e) {
    clearHighlightedRow(), $(".js-order-row[data-variant-id=" + e + "]").addClass("opened")
}

function toggleForecastRow(e, t, n) {
    forecastRow = $(".js-forecast-row[data-variant-id= " + e + "]"), forecastRow.addClass("opened").removeClass("dn"), height = forecastRow.find(".js-abs-element").height() + 40, forecastRow.css("height", height);
    for (var i = moment(t).add(8, "days"), r = moment(t); r.isBefore(i); r.add(1, "day")) $(".js-order-forecast[data-date-id= " + r.format("YYYY-MM-DD") + "]").removeClass("dn");
    return forecastRow.find(".js-styled-date-display").html(n), forecastRow
}

function recalculateTotalsForTable(e, t) {
    var n = $(".js-order-input[data-variant-id=" + e + "]").parents(".js-parent-table"),
        i = n.find(".js-order-input[data-date-id=" + t + "]"),
        r = n.find(".js-total-field[data-date-id=" + t + "]"),
        s = Number(0);
    i.each(function() {
        var e = parseInt(Number($(this).val()));
        s += e
    }), 0 < s ? r.text(s) : r.text("")
}

function mostRecentUneditableDate(e) {
    var t = $(e).parents("table").find("tr.js-order-row.opened").find("input").toArray().map(function(e) {
        return moment($(e).data("date-id")).unix()
    });
    return moment.unix(Math.min.apply(Math, t)).subtract(1, "day").format("YYYY-MM-DD")
}

function showMatchingPlans() {
    $(".js-plan-form:visible").addClass("dn"), $(".js-plan-form[data-plan-size=" + selectedGiftSize + "][data-plan-frequency=" + selectedGiftFrequency + "]").removeClass("dn"), $(".js-plan").removeClass("dn")
}

function selectionsFromParams() {
    $(".js-plan-size-select.selected").length && (selectedGiftSize = $(".js-plan-size-select.selected").attr("data-size"), $(".js-frequency").removeClass("dn"), $(".js-frequency-selection.selected").length && (selectedGiftFrequency = $(".js-frequency-selection.selected").attr("data-days"), showMatchingPlans()))
}

function toggleResponsiveNavMenu() {
    $(".js-bg-nav-screen").toggleClass("dn"), $(".js-menu-icon").toggleClass("fill-gray nav-sticky-hamburger"), $(".js-mobile-menu").toggleClass("js-open"), $(".js-mobile-menu").toggle(100, function() {
        $(".js-mobile-menu").hasClass("js-open") ? $(".js-menu-icon").css("left", $(".js-mobile-menu").width() + 20) : $(".js-mobile-menu, .js-menu-icon").removeAttr("style")
    })
}

function missingName(e) {
    return null == e || /^UOM:\s.+$/.test(e)
}

function hasConcatenatedName(e) {
    return /(oz|gr)$/.test(e)
}

function parseName(e) {
    return /^(.+(?=\s))\s(.+)/.exec(e)[1]
}

function pickReasonableName(e) {
    if (null == e.item || missingName(e.item.display_name)) return e.sku;
    var t = e.item.display_name;
    return hasConcatenatedName(t) ? parseName(t) : t
}

function TransferValidator(e) {
    this.validate = function() {
        return [this._notFromMerchWarehouse, this._hasItems, this._isMeasurable].reduce(function(e, t) {
            return e && t()
        }, !0)
    }, this.hasReceipt = function() {
        return 0 < e.item_receipts.length
    }, this.hasSyncedReceipts = function() {
        return e.item_receipts.every(_receiptIsSynced)
    }, this._isMeasurable = function() {
        return e.transfer_order_items.every(this._hasUOM)
    }, this._notFromMerchWarehouse = function() {
        return !MERCH_BRANCH_NUMBERS.includes(e.from_branch_number)
    }, this._hasItems = function() {
        return e.transfer_order_items.every(this._hasItem)
    }, _receiptIsSynced = function(e) {
        return !!e.saved_to_netsuite
    }, _hasItem = function(e) {
        return !!e.hasOwnProperty("item") || (_notifyValidationError("No matching item found for TransferOrderItem id: " + e.id), !1)
    }, _hasUOM = function(e) {
        return !!e.item.hasOwnProperty("sales_unit_of_measure") || (_notifyValidationError("No matching UOM found for TransferOrderItem id: " + e.id), !1)
    }, _notifyValidationError = function(e) {
        "undefined" != typeof Honeybadger && Honeybadger.notify({
            message: e
        })
    }
}

function toggleAvailability(e) {
    $(".js-variant-visibility").each(function() {
        $(this).prop("checked") ? ($($(this).data("show-section")).show(), e && $($(this).data("preset-checkboxes")).prop("checked", !0)) : ($($(this).data("show-section")).hide(), e && $($(this).data("preset-checkboxes")).prop("checked", !1))
    })
}

function toggleSelection(e, t, n) {
    var i = e.find(":selected, :checked"),
        r = i.prop("text") || i.prop("checked");
    return n.includes(r) ? ($(t).show(), !0) : ($(t).hide(), $(t).find("input, select").val(""), !1)
}

function toggleWholeBeanConfiguration(e) {
    "Whole Bean" === e ? $(".js-packaging").show() : $(".js-packaging").hide()
}

function togglePerfectlyGroundConfiguration(e) {
    "Perfectly Ground" === e ? $(".js-perfectly-ground-configuration").show() : $(".js-perfectly-ground-configuration").hide()
}

function toggleConfigurations() {
    var e = $("#variant_fulfillment_strategy_type").find(":selected").prop("text");
    toggleWholeBeanConfiguration(e), togglePerfectlyGroundConfiguration(e)
}

function stickyModule() {
    parentTop = $(".js-parent-fixed").offset().top + 100, parentBottom = $("footer").offset().top, stoppingPoint = parentBottom - parentTop, currentPlace = $(document).scrollTop(), currentPlace >= parentTop ? ($(".js-fixed-component").show(), currentPlace <= parentBottom ? $(".js-fixed-component").css({
        position: "fixed"
    }) : $(".js-fixed-component").css({
        position: "absolute",
        top: stoppingPoint
    })) : $(".js-fixed-component").hide()
}

function initMap() {
    mapManager.setupMap()
}

function displayWholesaleShipping(e) {
    var t = ["Shipped - 2 Day", "Shipped - Ground", "Shipped - Expedited"]; - 1 !== $.inArray(e, t) ? $(".js-wholesale-shipping").show() : $(".js-wholesale-shipping").hide()
}

function sectionClickListener() {
    $(".js-package-type-filter").on("click", function(e) {
        e.preventDefault;
        var t = $(this);
        t.parent().children().removeClass("bold"), t.addClass("bold");
        var n = t.text().toLowerCase().trim(),
            i = ["service", "retail", "other", "consumer", "specialty", "culinary", "coffee"],
            r = i.filter(function(e) {
                return "all" == n ? e : e == n
            }),
            s = i.filter(function(e) {
                if (-1 == $.inArray(e, r)) return e
            });
        return r.map(function(e) {
            $("section." + e).show()
        }), s.map(function(e) {
            $("section." + e).hide()
        }), "all" == n && $("section.dn").hide(), !1
    })
}

function recalculateTotals() {
    var n = Number(originalCartCount),
        i = Number(originalCartTotal);
    $(".js-quantity-input").each(function() {
        var e = Number($(this).val()),
            t = Number($(this).parent().parent().find(".js-variant-price").text().replace("$", ""));
        n += e, i += e * t
    }), $(".js-items-total").text(n + " items"), $(".js-order-total").text("$" + i)
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(x, e) {
        function o(e) {
            var t = !!e && "length" in e && e.length,
                n = fe.type(e);
            return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function t(e, n, i) {
            if (fe.isFunction(n)) return fe.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
            if (n.nodeType) return fe.grep(e, function(e) {
                return e === n !== i
            });
            if ("string" == typeof n) {
                if (xe.test(n)) return fe.filter(n, e, i);
                n = fe.filter(n, e)
            }
            return fe.grep(e, function(e) {
                return -1 < fe.inArray(e, n) !== i
            })
        }

        function n(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function c(e) {
            var n = {};
            return fe.each(e.match(Ae) || [], function(e, t) {
                n[t] = !0
            }), n
        }

        function r() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), x.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), x.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === x.event.type || "complete" === ie.readyState) && (r(), fe.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? fe.parseJSON(n) : n)
                    } catch (r) {}
                    fe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function i(e, t, n, i) {
            if (Me(e)) {
                var r, s, a = fe.expando,
                    o = e.nodeType,
                    l = o ? fe.cache : e,
                    u = o ? e[a] : e[a] && a;
                if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t) return u || (u = o ? e[a] = ne.pop() || fe.guid++ : a), l[u] || (l[u] = o ? {} : {
                    toJSON: fe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? l[u] = fe.extend(l[u], t) : l[u].data = fe.extend(l[u].data, t)), s = l[u], i || (s.data || (s.data = {}), s = s.data), n !== undefined && (s[fe.camelCase(t)] = n), "string" == typeof t ? null == (r = s[t]) && (r = s[fe.camelCase(t)]) : r = s, r
            }
        }

        function a(e, t, n) {
            if (Me(e)) {
                var i, r, s = e.nodeType,
                    a = s ? fe.cache : e,
                    o = s ? e[fe.expando] : fe.expando;
                if (a[o]) {
                    if (t && (i = n ? a[o] : a[o].data)) {
                        r = (t = fe.isArray(t) ? t.concat(fe.map(t, fe.camelCase)) : t in i ? [t] : (t = fe.camelCase(t)) in i ? [t] : t.split(" ")).length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !u(i) : !fe.isEmptyObject(i)) return
                    }(n || (delete a[o].data, u(a[o]))) && (s ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[o] : a[o] = undefined)
                }
            }
        }

        function d(e, t, n, i) {
            var r, s = 1,
                a = 20,
                o = i ? function() {
                    return i.cur()
                } : function() {
                    return fe.css(e, t, "")
                },
                l = o(),
                u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
                c = (fe.cssNumber[t] || "px" !== u && +l) && He.exec(fe.css(e, t));
            if (c && c[3] !== u)
                for (u = u || c[3], n = n || [], c = +l || 1; c /= s = s || ".5", fe.style(e, t, c + u), s !== (s = o() / l) && 1 !== s && --a;);
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function g(e) {
            var t = Ye.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function v(e, t) {
            var n, i, r = 0,
                s = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!s)
                for (s = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || fe.nodeName(i, t) ? s.push(i) : fe.merge(s, v(i, t));
            return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], s) : s
        }

        function y(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
        }

        function b(e) {
            qe.test(e.type) && (e.defaultChecked = e.checked)
        }

        function m(e, t, n, i, r) {
            for (var s, a, o, l, u, c, d, h = e.length, f = g(t), p = [], m = 0; m < h; m++)
                if ((a = e[m]) || 0 === a)
                    if ("object" === fe.type(a)) fe.merge(p, a.nodeType ? [a] : a);
                    else if (Ge.test(a)) {
                for (l = l || f.appendChild(t.createElement("div")), u = (We.exec(a) || ["", ""])[1].toLowerCase(), d = Qe[u] || Qe._default, l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2], s = d[0]; s--;) l = l.lastChild;
                if (!de.leadingWhitespace && Ue.test(a) && p.push(t.createTextNode(Ue.exec(a)[0])), !de.tbody)
                    for (s = (a = "table" !== u || Xe.test(a) ? "<table>" !== d[1] || Xe.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; s--;) fe.nodeName(c = a.childNodes[s], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (fe.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = f.lastChild
            } else p.push(t.createTextNode(a));
            for (l && f.removeChild(l), de.appendChecked || fe.grep(v(p, "input"), b), m = 0; a = p[m++];)
                if (i && -1 < fe.inArray(a, i)) r && r.push(a);
                else if (o = fe.contains(a.ownerDocument, a), l = v(f.appendChild(a), "script"), o && y(l), n)
                for (s = 0; a = l[s++];) Ve.test(a.type || "") && n.push(a);
            return l = null, f
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function _(e, t, n, i, r, s) {
            var a, o;
            if ("object" == typeof t) {
                for (o in "string" != typeof n && (i = i || n, n = undefined), t) _(e, o, n, i, t[o], s);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = f;
            else if (!r) return e;
            return 1 === s && (a = r, (r = function(e) {
                return fe().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = fe.guid++)), e.each(function() {
                fe.event.add(this, t, r, i, n)
            })
        }

        function w(e, t) {
            return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function k(e) {
            return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
        }

        function C(e) {
            var t = ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function S(e, t) {
            if (1 === t.nodeType && fe.hasData(e)) {
                var n, i, r, s = fe._data(e),
                    a = fe._data(t, s),
                    o = s.events;
                if (o)
                    for (n in delete a.handle, a.events = {}, o)
                        for (i = 0, r = o[n].length; i < r; i++) fe.event.add(t, n, o[n][i]);
                a.data && (a.data = fe.extend({}, a.data))
            }
        }

        function $(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                    for (i in (r = fe._data(t)).events) fe.removeEvent(t, i, r.handle);
                    t.removeAttribute(fe.expando)
                }
                "script" === n && t.text !== e.text ? (k(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function D(n, i, r, s) {
            i = se.apply([], i);
            var e, t, a, o, l, u, c = 0,
                d = n.length,
                h = d - 1,
                f = i[0],
                p = fe.isFunction(f);
            if (p || 1 < d && "string" == typeof f && !de.checkClone && at.test(f)) return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = f.call(this, e, t.html())), D(t, i, r, s)
            });
            if (d && (e = (u = m(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === u.childNodes.length && (u = e), e || s)) {
                for (a = (o = fe.map(v(u, "script"), k)).length; c < d; c++) t = u, c !== h && (t = fe.clone(t, !0, !0), a && fe.merge(o, v(t, "script"))), r.call(n[c], t, c);
                if (a)
                    for (l = o[o.length - 1].ownerDocument, fe.map(o, C), c = 0; c < a; c++) t = o[c], Ve.test(t.type || "") && !fe._data(t, "globalEval") && fe.contains(l, t) && (t.src ? fe._evalUrl && fe._evalUrl(t.src) : fe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(lt, "")));
                u = e = null
            }
            return n
        }

        function j(e, t, n) {
            for (var i, r = t ? fe.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || fe.cleanData(v(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function T(e, t) {
            var n = fe(t.createElement(e)).appendTo(t.body),
                i = fe.css(n[0], "display");
            return n.detach(), i
        }

        function A(e) {
            var t = ie,
                n = dt[e];
            return n || ("none" !== (n = T(e, t)) && n || ((t = ((ct = (ct || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ct[0].contentDocument).document).write(), t.close(), n = T(e, t), ct.detach()), dt[e] = n), n
        }

        function F(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function M(e) {
            if (e in $t) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;)
                if ((e = St[n] + t) in $t) return e
        }

        function I(e, t) {
            for (var n, i, r, s = [], a = 0, o = e.length; a < o; a++)(i = e[a]).style && (s[a] = fe._data(i, "olddisplay"), n = i.style.display, t ? (s[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && ze(i) && (s[a] = fe._data(i, "olddisplay", A(i.nodeName)))) : (r = ze(i), (n && "none" !== n || !r) && fe._data(i, "olddisplay", r ? n : fe.css(i, "display"))));
            for (a = 0; a < o; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[a] || "" : "none"));
            return e
        }

        function E(e, t, n) {
            var i = kt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function P(e, t, n, i, r) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; s < 4; s += 2) "margin" === n && (a += fe.css(e, n + Le[s], !0, r)), i ? ("content" === n && (a -= fe.css(e, "padding" + Le[s], !0, r)), "margin" !== n && (a -= fe.css(e, "border" + Le[s] + "Width", !0, r))) : (a += fe.css(e, "padding" + Le[s], !0, r), "padding" !== n && (a += fe.css(e, "border" + Le[s] + "Width", !0, r)));
            return a
        }

        function O(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                s = gt(e),
                a = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, s);
            if (r <= 0 || null == r) {
                if (((r = vt(e, t, s)) < 0 || null == r) && (r = e.style[t]), ft.test(r)) return r;
                i = a && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + P(e, t, n || (a ? "border" : "content"), i, s) + "px"
        }

        function N(e, t, n, i, r) {
            return new N.prototype.init(e, t, n, i, r)
        }

        function R() {
            return x.setTimeout(function() {
                Dt = undefined
            }), Dt = fe.now()
        }

        function H(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Le[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function L(e, t, n) {
            for (var i, r = (q.tweeners[t] || []).concat(q.tweeners["*"]), s = 0, a = r.length; s < a; s++)
                if (i = r[s].call(n, t, e)) return i
        }

        function z(t, e, n) {
            var i, r, s, a, o, l, u, c = this,
                d = {},
                h = t.style,
                f = t.nodeType && ze(t),
                p = fe._data(t, "fxshow");
            for (i in n.queue || (null == (o = fe._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || l()
                }), o.unqueued++, c.always(function() {
                    c.always(function() {
                        o.unqueued--, fe.queue(t, "fx").length || o.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = fe.css(t, "display")) ? fe._data(t, "olddisplay") || A(t.nodeName) : u) && "none" === fe.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), e)
                if (r = e[i], Et.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !p || p[i] === undefined) continue;
                        f = !0
                    }
                    d[i] = p && p[i] || fe.style(t, i)
                } else u = undefined;
            if (fe.isEmptyObject(d)) "inline" === ("none" === u ? A(t.nodeName) : u) && (h.display = u);
            else
                for (i in p ? "hidden" in p && (f = p.hidden) : p = fe._data(t, "fxshow", {}), s && (p.hidden = !f), f ? fe(t).show() : c.done(function() {
                        fe(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in fe._removeData(t, "fxshow"), d) fe.style(t, e, d[e])
                    }), d) a = L(f ? p[i] : 0, i, c), i in p || (p[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }

        function B(e, t) {
            var n, i, r, s, a;
            for (n in e)
                if (r = t[i = fe.camelCase(n)], s = e[n], fe.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (a = fe.cssHooks[i]) && "expand" in a)
                    for (n in s = a.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
                else t[i] = r
        }

        function q(s, e, t) {
            var n, a, i = 0,
                r = q.prefilters.length,
                o = fe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (a) return !1;
                    for (var e = Dt || R(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                    return o.notifyWith(s, [u, n, t]), n < 1 && r ? t : (o.resolveWith(s, [u]), !1)
                },
                u = o.promise({
                    elem: s,
                    props: fe.extend({}, e),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Dt || R(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = fe.Tween(s, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? u.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) u.tweens[t].run(1);
                        return e ? (o.notifyWith(s, [u, 1, 0]), o.resolveWith(s, [u, e])) : o.rejectWith(s, [u, e]), this
                    }
                }),
                c = u.props;
            for (B(c, u.opts.specialEasing); i < r; i++)
                if (n = q.prefilters[i].call(u, s, c, u.opts)) return fe.isFunction(n.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(n.stop, n)), n;
            return fe.map(c, L, u), fe.isFunction(u.opts.start) && u.opts.start.call(s, u), fe.fx.timer(fe.extend(l, {
                elem: s,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function W(e) {
            return fe.attr(e, "class") || ""
        }

        function V(s) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    r = e.toLowerCase().match(Ae) || [];
                if (fe.isFunction(t))
                    for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
            }
        }

        function U(t, r, s, a) {
            function o(e) {
                var i;
                return l[e] = !0, fe.each(t[e] || [], function(e, t) {
                    var n = t(r, s, a);
                    return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), o(n), !1)
                }), i
            }
            var l = {},
                u = t === an;
            return o(r.dataTypes[0]) || !l["*"] && o("*")
        }

        function Y(e, t) {
            var n, i, r = fe.ajaxSettings.flatOptions || {};
            for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && fe.extend(!0, e, n), e
        }

        function Q(e, t, n) {
            for (var i, r, s, a, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in o)
                    if (o[a] && o[a].test(r)) {
                        l.unshift(a);
                        break
                    } if (l[0] in n) s = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        s = a;
                        break
                    }
                    i || (i = a)
                }
                s = s || i
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function G(e, t, n, i) {
            var r, s, a, o, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (s = c.shift(); s;)
                if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(a = u[l + " " + s] || u["* " + s]))
                    for (r in u)
                        if ((o = r.split(" "))[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                            !0 === a ? a = u[r] : !0 !== u[r] && (s = o[0], c.unshift(o[1]));
                            break
                        } if (!0 !== a)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function X(e) {
            return e.style && e.style.display || fe.css(e, "display")
        }

        function Z(e) {
            if (!fe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === X(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function K(n, e, i, r) {
            var t;
            if (fe.isArray(e)) fe.each(e, function(e, t) {
                i || dn.test(n) ? r(n, t) : K(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
            else if (i || "object" !== fe.type(e)) r(n, e);
            else
                for (t in e) K(n + "[" + t + "]", e[t], i, r)
        }

        function J() {
            try {
                return new x.XMLHttpRequest
            } catch (e) {}
        }

        function ee() {
            try {
                return new x.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function te(e) {
            return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ne = [],
            ie = x.document,
            re = ne.slice,
            se = ne.concat,
            ae = ne.push,
            oe = ne.indexOf,
            le = {},
            ue = le.toString,
            ce = le.hasOwnProperty,
            de = {},
            he = "1.12.4",
            fe = function(e, t) {
                return new fe.fn.init(e, t)
            },
            pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ve = function(e, t) {
                return t.toUpperCase()
            };
        fe.fn = fe.prototype = {
            jquery: he,
            constructor: fe,
            selector: "",
            length: 0,
            toArray: function() {
                return re.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
            },
            pushStack: function(e) {
                var t = fe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return fe.each(this, e)
            },
            map: function(n) {
                return this.pushStack(fe.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ae,
            sort: ne.sort,
            splice: ne.splice
        }, fe.extend = fe.fn.extend = function(e) {
            var t, n, i, r, s, a, o = e || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof o && (c = o, o = arguments[l] || {}, l++), "object" == typeof o || fe.isFunction(o) || (o = {}), l === u && (o = this, l--); l < u; l++)
                if (null != (s = arguments[l]))
                    for (r in s) t = o[r], o !== (i = s[r]) && (c && i && (fe.isPlainObject(i) || (n = fe.isArray(i))) ? (n ? (n = !1, a = t && fe.isArray(t) ? t : []) : a = t && fe.isPlainObject(t) ? t : {}, o[r] = fe.extend(c, a, i)) : i !== undefined && (o[r] = i));
            return o
        }, fe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === fe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !fe.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ce.call(e, t);
                for (t in e);
                return t === undefined || ce.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && fe.trim(e) && (x.execScript || function(e) {
                    x.eval.call(x, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(ge, ve)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (o(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(pe, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (oe) return oe.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n != n)
                    for (; t[i] !== undefined;) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, s = e.length, a = !n; r < s; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, s = 0,
                    a = [];
                if (o(e))
                    for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
                else
                    for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
                return se.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), fe.isFunction(e) ? (n = re.call(arguments, 2), (i = function() {
                    return e.apply(t || this, n.concat(re.call(arguments)))
                }).guid = e.guid = e.guid || fe.guid++, i) : undefined
            },
            now: function() {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(n) {
            function _(e, t, n, i) {
                var r, s, a, o, l, u, c, d, h = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!i && ((t ? t.ownerDocument || t : L) !== M && F(t), t = t || M, E)) {
                    if (11 !== f && (u = ve.exec(e)))
                        if (r = u[1]) {
                            if (9 === f) {
                                if (!(a = t.getElementById(r))) return n;
                                if (a.id === r) return n.push(a), n
                            } else if (h && (a = h.getElementById(r)) && R(t, a) && a.id === r) return n.push(a), n
                        } else {
                            if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && v.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        } if (v.qsa && !V[e + " "] && (!P || !P.test(e))) {
                        if (1 !== f) h = t, d = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(be, "\\$&") : t.setAttribute("id", o = H), s = (c = S(e)).length, l = he.test(o) ? "#" + o : "[id='" + o + "']"; s--;) c[s] = l + " " + g(c[s]);
                            d = c.join(","), h = ye.test(e) && m(t.parentNode) || t
                        }
                        if (d) try {
                            return K.apply(n, h.querySelectorAll(d)), n
                        } catch (p) {} finally {
                            o === H && t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(oe, "$1"), t, n, i)
            }

            function e() {
                function n(e, t) {
                    return i.push(e + " ") > k.cacheLength && delete n[i.shift()], n[e + " "] = t
                }
                var i = [];
                return n
            }

            function l(e) {
                return e[H] = !0, e
            }

            function r(e) {
                var t = M.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function t(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
            }

            function u(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function i(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function s(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function a(a) {
                return l(function(s) {
                    return s = +s, l(function(e, t) {
                        for (var n, i = a([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function m(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function o() {}

            function g(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function d(o, e, t) {
                var l = e.dir,
                    u = t && "parentNode" === l,
                    c = B++;
                return e.first ? function(e, t, n) {
                    for (; e = e[l];)
                        if (1 === e.nodeType || u) return o(e, t, n)
                } : function(e, t, n) {
                    var i, r, s, a = [z, c];
                    if (n) {
                        for (; e = e[l];)
                            if ((1 === e.nodeType || u) && o(e, t, n)) return !0
                    } else
                        for (; e = e[l];)
                            if (1 === e.nodeType || u) {
                                if ((i = (r = (s = e[H] || (e[H] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[l]) && i[0] === z && i[1] === c) return a[2] = i[2];
                                if ((r[l] = a)[2] = o(e, t, n)) return !0
                            }
                }
            }

            function h(r) {
                return 1 < r.length ? function(e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0
                } : r[0]
            }

            function y(e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) _(e, t[i], n);
                return n
            }

            function w(e, t, n, i, r) {
                for (var s, a = [], o = 0, l = e.length, u = null != t; o < l; o++)(s = e[o]) && (n && !n(s, i, r) || (a.push(s), u && t.push(o)));
                return a
            }

            function b(f, p, m, g, v, e) {
                return g && !g[H] && (g = b(g)), v && !v[H] && (v = b(v, e)), l(function(e, t, n, i) {
                    var r, s, a, o = [],
                        l = [],
                        u = t.length,
                        c = e || y(p || "*", n.nodeType ? [n] : n, []),
                        d = !f || !e && p ? c : w(c, o, f, n, i),
                        h = m ? v || (e ? f : u || g) ? [] : t : d;
                    if (m && m(d, h, n, i), g)
                        for (r = w(h, l), g(r, [], n, i), s = r.length; s--;)(a = r[s]) && (h[l[s]] = !(d[l[s]] = a));
                    if (e) {
                        if (v || f) {
                            if (v) {
                                for (r = [], s = h.length; s--;)(a = h[s]) && r.push(d[s] = a);
                                v(null, h = [], r, i)
                            }
                            for (s = h.length; s--;)(a = h[s]) && -1 < (r = v ? ee(e, a) : o[s]) && (e[r] = !(t[r] = a))
                        }
                    } else h = w(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, i) : K.apply(t, h)
                })
            }

            function f(e) {
                for (var r, t, n, i = e.length, s = k.relative[e[0].type], a = s || k.relative[" "], o = s ? 1 : 0, l = d(function(e) {
                        return e === r
                    }, a, !0), u = d(function(e) {
                        return -1 < ee(r, e)
                    }, a, !0), c = [function(e, t, n) {
                        var i = !s && (n || t !== j) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                        return r = null, i
                    }]; o < i; o++)
                    if (t = k.relative[e[o].type]) c = [d(h(c), t)];
                    else {
                        if ((t = k.filter[e[o].type].apply(null, e[o].matches))[H]) {
                            for (n = ++o; n < i && !k.relative[e[n].type]; n++);
                            return b(1 < o && h(c), 1 < o && g(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(oe, "$1"), t, o < n && f(e.slice(o, n)), n < i && f(e = e.slice(n)), n < i && g(e))
                        }
                        c.push(t)
                    } return h(c)
            }

            function c(g, v) {
                var y = 0 < v.length,
                    b = 0 < g.length,
                    e = function(e, t, n, i, r) {
                        var s, a, o, l = 0,
                            u = "0",
                            c = e && [],
                            d = [],
                            h = j,
                            f = e || b && k.find.TAG("*", r),
                            p = z += null == h ? 1 : Math.random() || .1,
                            m = f.length;
                        for (r && (j = t === M || t || r); u !== m && null != (s = f[u]); u++) {
                            if (b && s) {
                                for (a = 0, t || s.ownerDocument === M || (F(s), n = !E); o = g[a++];)
                                    if (o(s, t || M, n)) {
                                        i.push(s);
                                        break
                                    } r && (z = p)
                            }
                            y && ((s = !o && s) && l--, e && c.push(s))
                        }
                        if (l += u, y && u !== l) {
                            for (a = 0; o = v[a++];) o(c, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || d[u] || (d[u] = X.call(i));
                                d = w(d)
                            }
                            K.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && _.uniqueSort(i)
                        }
                        return r && (z = p, j = h), c
                    };
                return y ? l(e) : e
            }
            var p, v, k, x, C, S, $, D, j, T, A, F, M, I, E, P, O, N, R, H = "sizzle" + 1 * new Date,
                L = n.document,
                z = 0,
                B = 0,
                q = e(),
                W = e(),
                V = e(),
                U = function(e, t) {
                    return e === t && (A = !0), 0
                },
                Y = 1 << 31,
                Q = {}.hasOwnProperty,
                G = [],
                X = G.pop,
                Z = G.push,
                K = G.push,
                J = G.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(se),
                he = new RegExp("^" + ie + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ke = function() {
                    F()
                };
            try {
                K.apply(G = J.call(L.childNodes), L.childNodes), G[L.childNodes.length].nodeType
            } catch (xe) {
                K = {
                    apply: G.length ? function(e, t) {
                        Z.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (p in v = _.support = {}, C = _.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, F = _.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : L;
                    return i !== M && 9 === i.nodeType && i.documentElement && (I = (M = i).documentElement, E = !C(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), v.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), v.getElementsByTagName = r(function(e) {
                        return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                    }), v.getElementsByClassName = ge.test(M.getElementsByClassName), v.getById = r(function(e) {
                        return I.appendChild(e).id = H, !M.getElementsByName || !M.getElementsByName(H).length
                    }), v.getById ? (k.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && E) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, k.filter.ID = function(e) {
                        var t = e.replace(_e, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete k.find.ID, k.filter.ID = function(e) {
                        var n = e.replace(_e, we);
                        return function(e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), k.find.TAG = v.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            s = t.getElementsByTagName(e);
                        if ("*" !== e) return s;
                        for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, k.find.CLASS = v.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                    }, O = [], P = [], (v.qsa = ge.test(M.querySelectorAll)) && (r(function(e) {
                        I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || P.push(".#.+[+~]")
                    }), r(function(e) {
                        var t = M.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (v.matchesSelector = ge.test(N = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                        v.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), O.push("!=", se)
                    }), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(I.compareDocumentPosition), R = t || ge.test(I.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function(e, t) {
                        if (e === t) return A = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === L && R(L, e) ? -1 : t === M || t.ownerDocument === L && R(L, t) ? 1 : T ? ee(T, e) - ee(T, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return A = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            s = t.parentNode,
                            a = [e],
                            o = [t];
                        if (!r || !s) return e === M ? -1 : t === M ? 1 : r ? -1 : s ? 1 : T ? ee(T, e) - ee(T, t) : 0;
                        if (r === s) return u(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) o.unshift(n);
                        for (; a[i] === o[i];) i++;
                        return i ? u(a[i], o[i]) : a[i] === L ? -1 : o[i] === L ? 1 : 0
                    }), M
                }, _.matches = function(e, t) {
                    return _(e, null, null, t)
                }, _.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== M && F(e), t = t.replace(ce, "='$1']"), v.matchesSelector && E && !V[t + " "] && (!O || !O.test(t)) && (!P || !P.test(t))) try {
                        var n = N.call(e, t);
                        if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (xe) {}
                    return 0 < _(t, M, null, [e]).length
                }, _.contains = function(e, t) {
                    return (e.ownerDocument || e) !== M && F(e), R(e, t)
                }, _.attr = function(e, t) {
                    (e.ownerDocument || e) !== M && F(e);
                    var n = k.attrHandle[t.toLowerCase()],
                        i = n && Q.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !E) : undefined;
                    return i !== undefined ? i : v.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, _.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, _.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (A = !v.detectDuplicates, T = !v.sortStable && e.slice(0), e.sort(U), A) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return T = null, e
                }, x = _.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += x(t);
                    return n
                }, (k = _.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(_e, we), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || _.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && _.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(_e, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = q[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, i, r) {
                            return function(e) {
                                var t = _.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(p, e, t, m, g) {
                            var v = "nth" !== p.slice(0, 3),
                                y = "last" !== p.slice(-4),
                                b = "of-type" === e;
                            return 1 === m && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, r, s, a, o, l, u = v !== y ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    d = b && e.nodeName.toLowerCase(),
                                    h = !n && !b,
                                    f = !1;
                                if (c) {
                                    if (v) {
                                        for (; u;) {
                                            for (a = e; a = a[u];)
                                                if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                            l = u = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                        for (f = (o = (i = (r = (s = (a = c)[H] || (a[H] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[p] || [])[0] === z && i[1]) && i[2], a = o && c.childNodes[o]; a = ++o && a && a[u] || (f = o = 0) || l.pop();)
                                            if (1 === a.nodeType && ++f && a === e) {
                                                r[p] = [z, o, f];
                                                break
                                            }
                                    } else if (h && (f = o = (i = (r = (s = (a = e)[H] || (a[H] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[p] || [])[0] === z && i[1]), !1 === f)
                                        for (;
                                            (a = ++o && a && a[u] || (f = o = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (h && ((r = (s = a[H] || (a[H] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[p] = [z, f]), a !== e)););
                                    return (f -= g) === m || f % m == 0 && 0 <= f / m
                                }
                            }
                        },
                        PSEUDO: function(e, s) {
                            var t, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || _.error("unsupported pseudo: " + e);
                            return a[H] ? a(s) : 1 < a.length ? (t = [e, e, "", s], k.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                                for (var n, i = a(e, s), r = i.length; r--;) e[n = ee(e, i[r])] = !(t[n] = i[r])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: l(function(e) {
                            var i = [],
                                r = [],
                                o = $(e.replace(oe, "$1"));
                            return o[H] ? l(function(e, t, n, i) {
                                for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, t, n) {
                                return i[0] = e, o(i, null, n, r), i[0] = null, !r.pop()
                            }
                        }),
                        has: l(function(t) {
                            return function(e) {
                                return 0 < _(t, e).length
                            }
                        }),
                        contains: l(function(t) {
                            return t = t.replace(_e, we),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || x(e)).indexOf(t)
                                }
                        }),
                        lang: l(function(n) {
                            return he.test(n || "") || _.error("unsupported lang: " + n), n = n.replace(_e, we).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === I
                        },
                        focus: function(e) {
                            return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !k.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return pe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: a(function() {
                            return [0]
                        }),
                        last: a(function(e, t) {
                            return [t - 1]
                        }),
                        eq: a(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: a(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: a(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: a(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: a(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = k.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[p] = i(p);
            for (p in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[p] = s(p);
            return o.prototype = k.filters = k.pseudos, k.setFilters = new o, S = _.tokenize = function(e, t) {
                var n, i, r, s, a, o, l, u = W[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, o = [], l = k.preFilter; a;) {
                    for (s in n && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), o.push(r = [])), n = !1, (i = ue.exec(a)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(oe, " ")
                        }), a = a.slice(n.length)), k.filter) !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: s,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? _.error(e) : W(e, o).slice(0)
            }, $ = _.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    s = V[e + " "];
                if (!s) {
                    for (t || (t = S(e)), n = t.length; n--;)(s = f(t[n]))[H] ? i.push(s) : r.push(s);
                    (s = V(e, c(r, i))).selector = e
                }
                return s
            }, D = _.select = function(e, t, n, i) {
                var r, s, a, o, l, u = "function" == typeof e && e,
                    c = !i && S(e = u.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (a = s[0]).type && v.getById && 9 === t.nodeType && E && k.relative[s[1].type]) {
                        if (!(t = (k.find.ID(a.matches[0].replace(_e, we), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !k.relative[o = a.type]);)
                        if ((l = k.find[o]) && (i = l(a.matches[0].replace(_e, we), ye.test(s[0].type) && m(t.parentNode) || t))) {
                            if (s.splice(r, 1), !(e = i.length && g(s))) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || $(e, c))(i, t, !E, n, !t || ye.test(e) && m(t.parentNode) || t), n
            }, v.sortStable = H.split("").sort(U).join("") === H, v.detectDuplicates = !!A, F(), v.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(M.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || t("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), v.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || t("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || t(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), _
        }(x);
        fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
        var be = function(e, t, n) {
                for (var i = [], r = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && fe(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            _e = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            we = fe.expr.match.needsContext,
            ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            xe = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, fe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (fe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) fe.find(e, i[t], n);
                return (n = this.pushStack(1 < r ? fe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(t(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(t(this, e || [], !0))
            },
            is: function(e) {
                return !!t(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
            }
        });
        var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (fe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ce, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this));
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), ke.test(i[1]) && fe.isPlainObject(t))
                    for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((r = ie.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return Ce.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = ie, this.selector = e, this
        }).prototype = fe.fn, Ce = fe(ie);
        var $e = /^(?:parents|prev(?:Until|All))/,
            De = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fe.fn.extend({
            has: function(e) {
                var t, n = fe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (fe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, s = [], a = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        } return this.pushStack(1 < s.length ? fe.uniqueSort(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return n(e, "nextSibling")
            },
            prev: function(e) {
                return n(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return _e((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return _e(e.firstChild)
            },
            contents: function(e) {
                return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
            }
        }, function(i, r) {
            fe.fn[i] = function(e, t) {
                var n = fe.map(this, r, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = fe.filter(t, n)), 1 < this.length && (De[i] || (n = fe.uniqueSort(n)), $e.test(i) && (n = n.reverse())), this.pushStack(n)
            }
        });
        var je, Te, Ae = /\S+/g;
        for (Te in fe.Callbacks = function(i) {
                i = "string" == typeof i ? c(i) : fe.extend({}, i);
                var r, e, t, n, s = [],
                    a = [],
                    o = -1,
                    l = function() {
                        for (n = i.once, t = r = !0; a.length; o = -1)
                            for (e = a.shift(); ++o < s.length;) !1 === s[o].apply(e[0], e[1]) && i.stopOnFalse && (o = s.length, e = !1);
                        i.memory || (e = !1), r = !1, n && (s = e ? [] : "")
                    },
                    u = {
                        add: function() {
                            return s && (e && !r && (o = s.length - 1, a.push(e)), function n(e) {
                                fe.each(e, function(e, t) {
                                    fe.isFunction(t) ? i.unique && u.has(t) || s.push(t) : t && t.length && "string" !== fe.type(t) && n(t)
                                })
                            }(arguments), e && !r && l()), this
                        },
                        remove: function() {
                            return fe.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = fe.inArray(t, s, n));) s.splice(n, 1), n <= o && o--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < fe.inArray(e, s) : 0 < s.length
                        },
                        empty: function() {
                            return s && (s = []), this
                        },
                        disable: function() {
                            return n = a = [], s = e = "", this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return n = !0, e || u.disable(), this
                        },
                        locked: function() {
                            return !!n
                        },
                        fireWith: function(e, t) {
                            return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), r || l()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!t
                        }
                    };
                return u
            }, fe.extend({
                Deferred: function(e) {
                    var s = [
                            ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", fe.Callbacks("memory")]
                        ],
                        r = "pending",
                        a = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var r = arguments;
                                return fe.Deferred(function(i) {
                                    fe.each(s, function(e, t) {
                                        var n = fe.isFunction(r[e]) && r[e];
                                        o[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && fe.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                        })
                                    }), r = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? fe.extend(e, a) : a
                            }
                        },
                        o = {};
                    return a.pipe = a.then, fe.each(s, function(e, t) {
                        var n = t[2],
                            i = t[3];
                        a[t[1]] = n.add, i && n.add(function() {
                            r = i
                        }, s[1 ^ e][2].disable, s[2][2].lock), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? a : this, arguments), this
                        }, o[t[0] + "With"] = n.fireWith
                    }), a.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var r, t, n, i = 0,
                        s = re.call(arguments),
                        a = s.length,
                        o = 1 !== a || e && fe.isFunction(e.promise) ? a : 0,
                        l = 1 === o ? e : fe.Deferred(),
                        u = function(t, n, i) {
                            return function(e) {
                                n[t] = this, i[t] = 1 < arguments.length ? re.call(arguments) : e, i === r ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                            }
                        };
                    if (1 < a)
                        for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) s[i] && fe.isFunction(s[i].promise) ? s[i].promise().progress(u(i, t, r)).done(u(i, n, s)).fail(l.reject) : --o;
                    return o || l.resolveWith(n, s), l.promise()
                }
            }), fe.fn.ready = function(e) {
                return fe.ready.promise().done(e), this
            }, fe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? fe.readyWait++ : fe.ready(!0)
                },
                ready: function(e) {
                    (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0) !== e && 0 < --fe.readyWait || (je.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready")))
                }
            }), fe.ready.promise = function(e) {
                if (!je)
                    if (je = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) x.setTimeout(fe.ready);
                    else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), x.addEventListener("load", s);
                else {
                    ie.attachEvent("onreadystatechange", s), x.attachEvent("onload", s);
                    var t = !1;
                    try {
                        t = null == x.frameElement && ie.documentElement
                    } catch (n) {}
                    t && t.doScroll && function i() {
                        if (!fe.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (n) {
                                return x.setTimeout(i, 50)
                            }
                            r(), fe.ready()
                        }
                    }()
                }
                return je.promise(e)
            }, fe.ready.promise(), fe(de)) break;
        de.ownFirst = "0" === Te, de.inlineBlockNeedsLayout = !1, fe(function() {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Fe, Me = function(e) {
                var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        fe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !u(e)
            },
            data: function(e, t, n) {
                return i(e, t, n)
            },
            removeData: function(e, t) {
                return a(e, t)
            },
            _data: function(e, t, n) {
                return i(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return a(e, t, !0)
            }
        }), fe.fn.extend({
            data: function(e, t) {
                var n, i, r, s = this[0],
                    a = s && s.attributes;
                if (e !== undefined) return "object" == typeof e ? this.each(function() {
                    fe.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    fe.data(this, e, t)
                }) : s ? l(s, e, fe.data(s, e)) : undefined;
                if (this.length && (r = fe.data(s), 1 === s.nodeType && !fe._data(s, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(s, i = fe.camelCase(i.slice(5)), r[i]);
                    fe._data(s, "parsedAttrs", !0)
                }
                return r
            },
            removeData: function(e) {
                return this.each(function() {
                    fe.removeData(this, e)
                })
            }
        }), fe.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = fe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    s = fe._queueHooks(e, t),
                    a = function() {
                        fe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return fe._data(e, n) || fe._data(e, n, {
                    empty: fe.Callbacks("once memory").add(function() {
                        fe._removeData(e, t + "queue"), fe._removeData(e, n)
                    })
                })
            }
        }), fe.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? fe.queue(this[0], t) : n === undefined ? this : this.each(function() {
                    var e = fe.queue(this, t, n);
                    fe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && fe.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = fe.Deferred(),
                    s = this,
                    a = this.length,
                    o = function() {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = fe._data(s[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                return o(), r.promise(t)
            }
        }), de.shrinkWrapBlocks = function() {
            return null != Fe ? Fe : (Fe = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", Fe = 3 !== e.offsetWidth), t.removeChild(n), Fe) : void 0);
            var e, t, n
        };
        var Pe, Oe, Ne, Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            He = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
            Le = ["Top", "Right", "Bottom", "Left"],
            ze = function(e, t) {
                return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
            },
            Be = function(e, t, n, i, r, s, a) {
                var o = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === fe.type(n))
                    for (o in r = !0, n) Be(e, t, o, n[o], !0, s, a);
                else if (i !== undefined && (r = !0, fe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(fe(e), n)
                    })), t))
                    for (; o < l; o++) t(e[o], n, a ? i : i.call(e[o], o, t(e[o], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
            },
            qe = /^(?:checkbox|radio)$/i,
            We = /<([\w:-]+)/,
            Ve = /^$|\/(?:java|ecma)script/i,
            Ue = /^\s+/,
            Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        Pe = ie.createElement("div"), Oe = ie.createDocumentFragment(), Ne = ie.createElement("input"), Pe.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === Pe.firstChild.nodeType, de.tbody = !Pe.getElementsByTagName("tbody").length, de.htmlSerialize = !!Pe.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, Ne.type = "checkbox", Ne.checked = !0, Oe.appendChild(Ne), de.appendChecked = Ne.checked, Pe.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!Pe.cloneNode(!0).lastChild.defaultValue, Oe.appendChild(Pe), (Ne = ie.createElement("input")).setAttribute("type", "radio"), Ne.setAttribute("checked", "checked"), Ne.setAttribute("name", "t"), Pe.appendChild(Ne), de.checkClone = Pe.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!Pe.addEventListener, Pe[fe.expando] = 1, de.attributes = !Pe.getAttribute(fe.expando);
        var Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
        var Ge = /<|&#?\w+;/,
            Xe = /<tbody/i;
        ! function() {
            var e, t, n = ie.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (de[e] = t in x) || (n.setAttribute(t, "t"), de[e] = !1 === n.attributes[t].expando);
            n = null
        }();
        var Ze = /^(?:input|select|textarea)$/i,
            Ke = /^key/,
            Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            et = /^(?:focusinfocus|focusoutblur)$/,
            tt = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var s, a, o, l, u, c, d, h, f, p, m, g = fe._data(e);
                if (g) {
                    for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = fe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                            return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(c.elem, arguments)
                        }).elem = e), o = (t = (t || "").match(Ae) || [""]).length; o--;) f = m = (s = tt.exec(t[o]) || [])[1], p = (s[2] || "").split(".").sort(), f && (u = fe.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = fe.event.special[f] || {}, d = fe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && fe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (h = a[f]) || ((h = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), fe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var s, a, o, l, u, c, d, h, f, p, m, g = fe.hasData(e) && fe._data(e);
                if (g && (c = g.events)) {
                    for (u = (t = (t || "").match(Ae) || [""]).length; u--;)
                        if (f = m = (o = tt.exec(t[u]) || [])[1], p = (o[2] || "").split(".").sort(), f) {
                            for (d = fe.event.special[f] || {}, h = c[f = (i ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) a = h[s], !r && m !== a.origType || n && n.guid !== a.guid || o && !o.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(s, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || fe.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) fe.event.remove(e, f + t[u], n, i, !0);
                    fe.isEmptyObject(c) && (delete g.handle, fe._removeData(e, "events"))
                }
            },
            trigger: function(e, t, n, i) {
                var r, s, a, o, l, u, c, d = [n || ie],
                    h = ce.call(e, "type") ? e.type : e,
                    f = ce.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = n = n || ie, 3 !== n.nodeType && 8 !== n.nodeType && !et.test(h + fe.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(
                        ".")).shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, (e = e[fe.expando] ? e : new fe.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : fe.makeArray(t, [e]), l = fe.event.special[h] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                    if (!i && !l.noBubble && !fe.isWindow(n)) {
                        for (o = l.delegateType || h, et.test(o + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                        u === (n.ownerDocument || ie) && d.push(u.defaultView || u.parentWindow || x)
                    }
                    for (c = 0;
                        (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? o : l.bindType || h, (r = (fe._data(a, "events") || {})[e.type] && fe._data(a, "handle")) && r.apply(a, t), (r = s && a[s]) && r.apply && Me(a) && (e.result = r.apply(a, t), !1 === e.result && e.preventDefault());
                    if (e.type = h, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && Me(n) && s && n[h] && !fe.isWindow(n)) {
                        (u = n[s]) && (n[s] = null), fe.event.triggered = h;
                        try {
                            n[h]()
                        } catch (p) {}
                        fe.event.triggered = undefined, u && (n[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = fe.event.fix(e);
                var t, n, i, r, s, a = [],
                    o = re.call(arguments),
                    l = (fe._data(this, "events") || {})[e.type] || [],
                    u = fe.event.special[e.type] || {};
                if ((o[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (a = fe.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, (i = ((fe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, s, a = [],
                    o = t.delegateCount,
                    l = e.target;
                if (o && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < o; n++) i[r = (s = t[n]).selector + " "] === undefined && (i[r] = s.needsContext ? -1 < fe(r, this).index(l) : fe.find(r, this, null, [l]).length), i[r] && i.push(s);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        } return o < t.length && a.push({
                    elem: this,
                    handlers: t.slice(o)
                }), a
            },
            fix: function(e) {
                if (e[fe.expando]) return e;
                var t, n, i, r = e.type,
                    s = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Je.test(r) ? this.mouseHooks : Ke.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new fe.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
                return e.target || (e.target = s.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, s) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, s = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || ie).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === p() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return fe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = fe.extend(new fe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, fe.Event = function(e, t) {
            if (!(this instanceof fe.Event)) return new fe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? h : f) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
        }, fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, s) {
            fe.event.special[e] = {
                delegateType: s,
                bindType: s,
                handle: function(e) {
                    var t, n = this,
                        i = e.relatedTarget,
                        r = e.handleObj;
                    return i && (i === n || fe.contains(n, i)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = s), t
                }
            }
        }), de.submit || (fe.event.special.submit = {
            setup: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
                    n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), fe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.remove(this, "._submit")
            }
        }), de.change || (fe.event.special.change = {
            setup: function() {
                if (Ze.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), fe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
                })), !1;
                fe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ze.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                    }), fe._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return fe.event.remove(this, "._change"), !Ze.test(this.nodeName)
            }
        }), de.focusin || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var r = function(e) {
                fe.event.simulate(i, e.target, fe.event.fix(e))
            };
            fe.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = fe._data(e, i);
                    t || e.addEventListener(n, r, !0), fe._data(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = fe._data(e, i) - 1;
                    t ? fe._data(e, i, t) : (e.removeEventListener(n, r, !0), fe._removeData(e, i))
                }
            }
        }), fe.fn.extend({
            on: function(e, t, n, i) {
                return _(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return _(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = f), this.each(function() {
                    fe.event.remove(this, e, n, t)
                });
                for (r in e) this.off(r, t, e[r]);
                return this
            },
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return fe.event.trigger(e, t, n, !0)
            }
        });
        var nt = / jQuery\d+="(?:null|\d+)"/g,
            it = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            st = /<script|<style|<link/i,
            at = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ot = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ut = g(ie).appendChild(ie.createElement("div"));
        fe.extend({
            htmlPrefilter: function(e) {
                return e.replace(rt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, s, a, o, l = fe.contains(e.ownerDocument, e);
                if (de.html5Clone || fe.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(s = ut.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (i = v(s), o = v(e), a = 0; null != (r = o[a]); ++a) i[a] && $(r, i[a]);
                if (t)
                    if (n)
                        for (o = o || v(e), i = i || v(s), a = 0; null != (r = o[a]); a++) S(r, i[a]);
                    else S(e, s);
                return 0 < (i = v(s, "script")).length && y(i, !l && v(e, "script")), i = o = r = null, s
            },
            cleanData: function(e, t) {
                for (var n, i, r, s, a = 0, o = fe.expando, l = fe.cache, u = de.attributes, c = fe.event.special; null != (n = e[a]); a++)
                    if ((t || Me(n)) && (s = (r = n[o]) && l[r])) {
                        if (s.events)
                            for (i in s.events) c[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, s.handle);
                        l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[o] = undefined : n.removeAttribute(o), ne.push(r))
                    }
            }
        }), fe.fn.extend({
            domManip: D,
            detach: function(e) {
                return j(this, e, !0)
            },
            remove: function(e) {
                return j(this, e)
            },
            text: function(e) {
                return Be(this, function(e) {
                    return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return D(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return D(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = w(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && fe.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && fe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Be(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                    if ("string" == typeof e && !st.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !Ue.test(e)) && !Qe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return D(this, arguments, function(e) {
                    var t = this.parentNode;
                    fe.inArray(this, n) < 0 && (fe.cleanData(v(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            fe.fn[e] = function(e) {
                for (var t, n = 0, i = [], r = fe(e), s = r.length - 1; n <= s; n++) t = n === s ? this : this.clone(!0), fe(r[n])[a](t), ae.apply(i, t.get());
                return this.pushStack(i)
            }
        });
        var ct, dt = {
                HTML: "block",
                BODY: "block"
            },
            ht = /^margin/,
            ft = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
            pt = function(e, t, n, i) {
                var r, s, a = {};
                for (s in t) a[s] = e.style[s], e.style[s] = t[s];
                for (s in r = n.apply(e, i || []), t) e.style[s] = a[s];
                return r
            },
            mt = ie.documentElement;
        ! function() {
            function e() {
                var e, t, n = ie.documentElement;
                n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = l = !1, r = o = !0, x.getComputedStyle && (t = x.getComputedStyle(c), i = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, s = "4px" === (t || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", r = "4px" === (t || {
                    marginRight: "4px"
                }).marginRight, (e = c.appendChild(ie.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((x.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(u)
            }
            var i, r, s, a, o, l, u = ie.createElement("div"),
                c = ie.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, fe.extend(de, {
                reliableHiddenOffsets: function() {
                    return null == i && e(), a
                },
                boxSizingReliable: function() {
                    return null == i && e(), s
                },
                pixelMarginRight: function() {
                    return null == i && e(), r
                },
                pixelPosition: function() {
                    return null == i && e(), i
                },
                reliableMarginRight: function() {
                    return null == i && e(), o
                },
                reliableMarginLeft: function() {
                    return null == i && e(), l
                }
            }))
        }();
        var gt, vt, yt = /^(top|right|bottom|left)$/;
        x.getComputedStyle ? (gt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = x), t.getComputedStyle(e)
        }, vt = function(e, t, n) {
            var i, r, s, a, o = e.style;
            return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), n && !de.pixelMarginRight() && ft.test(a) && ht.test(t) && (i = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = r, o.maxWidth = s), a === undefined ? a : a + ""
        }) : mt.currentStyle && (gt = function(e) {
            return e.currentStyle
        }, vt = function(e, t, n) {
            var i, r, s, a, o = e.style;
            return null == (a = (n = n || gt(e)) ? n[t] : undefined) && o && o[t] && (a = o[t]), ft.test(a) && !yt.test(t) && (i = o.left, (s = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : a, a = o.pixelLeft + "px", o.left = i, s && (r.left = s)), a === undefined ? a : a + "" || "auto"
        });
        var bt = /alpha\([^)]*\)/i,
            _t = /opacity\s*=\s*([^)]*)/i,
            wt = /^(none|table(?!-c[ea]).+)/,
            kt = new RegExp("^(" + Re + ")(.*)$", "i"),
            xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ct = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            St = ["Webkit", "O", "Moz", "ms"],
            $t = ie.createElement("div").style;
        fe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = vt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, s, a, o = fe.camelCase(t),
                        l = e.style;
                    if (t = fe.cssProps[o] || (fe.cssProps[o] = M(o) || o), a = fe.cssHooks[t] || fe.cssHooks[o], n === undefined) return a && "get" in a && (r = a.get(e, !1, i)) !== undefined ? r : l[t];
                    if ("string" === (s = typeof n) && (r = He.exec(n)) && r[1] && (n = d(e, t, r), s = "number"), null != n && n == n && ("number" === s && (n += r && r[3] || (fe.cssNumber[o] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, s, a, o = fe.camelCase(t);
                return t = fe.cssProps[o] || (fe.cssProps[o] = M(o) || o), (a = fe.cssHooks[t] || fe.cssHooks[o]) && "get" in a && (s = a.get(e, !0, n)), s === undefined && (s = vt(e, t, i)), "normal" === s && t in Ct && (s = Ct[t]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
            }
        }), fe.each(["height", "width"], function(e, r) {
            fe.cssHooks[r] = {
                get: function(e, t, n) {
                    if (t) return wt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, xt, function() {
                        return O(e, r, n)
                    }) : O(e, r, n)
                },
                set: function(e, t, n) {
                    var i = n && gt(e);
                    return E(e, t, n ? P(e, r, n, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), de.opacity || (fe.cssHooks.opacity = {
            get: function(e, t) {
                return _t.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    s = i && i.filter || n.filter || "";
                ((n.zoom = 1) <= t || "" === t) && "" === fe.trim(s.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = bt.test(s) ? s.replace(bt, r) : s + " " + r)
            }
        }), fe.cssHooks.marginRight = F(de.reliableMarginRight, function(e, t) {
            if (t) return pt(e, {
                display: "inline-block"
            }, vt, [e, "marginRight"])
        }), fe.cssHooks.marginLeft = F(de.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(vt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, s) {
            fe.cssHooks[r + s] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Le[t] + s] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, ht.test(r) || (fe.cssHooks[r + s].set = E)
        }), fe.fn.extend({
            css: function(e, t) {
                return Be(this, function(e, t, n) {
                    var i, r, s = {},
                        a = 0;
                    if (fe.isArray(t)) {
                        for (i = gt(e), r = t.length; a < r; a++) s[t[a]] = fe.css(e, t[a], !1, i);
                        return s
                    }
                    return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return I(this, !0)
            },
            hide: function() {
                return I(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ze(this) ? fe(this).show() : fe(this).hide()
                })
            }
        }), (fe.Tween = N).prototype = {
            constructor: N,
            init: function(e, t, n, i, r, s) {
                this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (fe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = N.prototype.init, fe.fx.step = {};
        var Dt, jt, Tt, At, Ft, Mt, It, Et = /^(?:toggle|show|hide)$/,
            Pt = /queueHooks$/;
        fe.Animation = fe.extend(q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return d(n.elem, e, He.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
            },
            prefilters: [z],
            prefilter: function(e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), fe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || fe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !fe.isFunction(t) && t
            };
            return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
            }, i
        }, fe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var r = fe.isEmptyObject(t),
                    s = fe.speed(e, n, i),
                    a = function() {
                        var e = q(this, fe.extend({}, t), s);
                        (r || fe._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
            },
            stop: function(r, e, s) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(s)
                };
                return "string" != typeof r && (s = e, e = r, r = undefined), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = fe.timers,
                        i = fe._data(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && Pt.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                    !e && s || fe.dequeue(this, r)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = fe._data(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        r = fe.timers,
                        s = n ? n.length : 0;
                    for (t.finish = !0, fe.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), fe.each(["toggle", "show", "hide"], function(e, i) {
            var r = fe.fn[i];
            fe.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(H(i, !0), e, t, n)
            }
        }), fe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            fe.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), fe.timers = [], fe.fx.tick = function() {
            var e, t = fe.timers,
                n = 0;
            for (Dt = fe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || fe.fx.stop(), Dt = undefined
        }, fe.fx.timer = function(e) {
            fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
        }, fe.fx.interval = 13, fe.fx.start = function() {
            jt || (jt = x.setInterval(fe.fx.tick, fe.fx.interval))
        }, fe.fx.stop = function() {
            x.clearInterval(jt), jt = null
        }, fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fe.fn.delay = function(i, e) {
            return i = fe.fx && fe.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = x.setTimeout(e, i);
                t.stop = function() {
                    x.clearTimeout(n)
                }
            })
        }, At = ie.createElement("input"), Ft = ie.createElement("div"), Mt = ie.createElement("select"), It = Mt.appendChild(ie.createElement("option")), (Ft = ie.createElement("div")).setAttribute("className", "t"), Ft.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Tt = Ft.getElementsByTagName("a")[0], At.setAttribute("type", "checkbox"), Ft.appendChild(At), (Tt = Ft.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== Ft.className, de.style = /top/.test(Tt.getAttribute("style")), de.hrefNormalized = "/a" === Tt.getAttribute("href"), de.checkOn = !!At.value, de.optSelected = It.selected, de.enctype = !!ie.createElement("form").enctype, Mt.disabled = !0, de.optDisabled = !It.disabled, (At = ie.createElement("input")).setAttribute("value", ""), de.input = "" === At.getAttribute("value"), At.value = "t", At.setAttribute("type", "radio"), de.radioValue = "t" === At.value;
        var Ot = /\r/g,
            Nt = /[\x20\t\r\n\f]+/g;
        fe.fn.extend({
            val: function(n) {
                var i, e, r, t = this[0];
                return arguments.length ? (r = fe.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = r ? n.call(this, e, fe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : fe.isArray(t) && (t = fe.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== undefined || (this.value = t))
                })) : t ? (i = fe.valHooks[t.type] || fe.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(Ot, "") : null == e ? "" : e : void 0
            }
        }), fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : fe.trim(fe.text(e)).replace(Nt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, a = s ? null : [], o = s ? r + 1 : i.length, l = r < 0 ? o : s ? r : 0; l < o; l++)
                            if (((n = i[l]).selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = fe(n).val(), s) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, s = fe.makeArray(t), a = r.length; a--;)
                            if (i = r[a], -1 < fe.inArray(fe.valHooks.option.get(i), s)) try {
                                i.selected = n = !0
                            } catch (o) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    if (fe.isArray(t)) return e.checked = -1 < fe.inArray(fe(e).val(), t)
                }
            }, de.checkOn || (fe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Rt, Ht, Lt = fe.expr.attrHandle,
            zt = /^(?:checked|selected)$/i,
            Bt = de.getSetAttribute,
            qt = de.input;
        fe.fn.extend({
            attr: function(e, t) {
                return Be(this, fe.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    fe.removeAttr(this, e)
                })
            }
        }), fe.extend({
            attr: function(e, t, n) {
                var i, r, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === s && fe.isXMLDoc(e) || (t = t.toLowerCase(), r = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Ht : Rt)), n !== undefined ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? undefined : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    s = t && t.match(Ae);
                if (s && 1 === e.nodeType)
                    for (; n = s[r++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? qt && Bt || !zt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(Bt ? n : i)
            }
        }), Ht = {
            set: function(e, t, n) {
                return !1 === t ? fe.removeAttr(e, n) : qt && Bt || !zt.test(n) ? e.setAttribute(!Bt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = Lt[t] || fe.find.attr;
            qt && Bt || !zt.test(t) ? Lt[t] = function(e, t, n) {
                var i, r;
                return n || (r = Lt[t], Lt[t] = i, i = null != s(e, t, n) ? t.toLowerCase() : null, Lt[t] = r), i
            } : Lt[t] = function(e, t, n) {
                if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), qt && Bt || (fe.attrHooks.value = {
            set: function(e, t, n) {
                if (!fe.nodeName(e, "input")) return Rt && Rt.set(e, t, n);
                e.defaultValue = t
            }
        }), Bt || (Rt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, Lt.id = Lt.name = Lt.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, fe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Rt.set
        }, fe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Rt.set(e, "" !== t && t, n)
            }
        }, fe.each(["width", "height"], function(e, n) {
            fe.attrHooks[n] = {
                set: function(e, t) {
                    if ("" === t) return e.setAttribute(n, "auto"), t
                }
            }
        })), de.style || (fe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Wt = /^(?:input|select|textarea|button|object)$/i,
            Vt = /^(?:a|area)$/i;
        fe.fn.extend({
            prop: function(e, t) {
                return Be(this, fe.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(t) {
                return t = fe.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = undefined, delete this[t]
                    } catch (e) {}
                })
            }
        }), fe.extend({
            prop: function(e, t, n) {
                var i, r, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Wt.test(e.nodeName) || Vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
            fe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (fe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        }), de.enctype || (fe.propFix.enctype = "encoding");
        var Ut = /[\t\r\n\f]/g;
        fe.fn.extend({
            addClass: function(t) {
                var e, n, i, r, s, a, o, l = 0;
                if (fe.isFunction(t)) return this.each(function(e) {
                    fe(this).addClass(t.call(this, e, W(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Ae) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ut, " ")) {
                            for (a = 0; s = e[a++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            r !== (o = fe.trim(i)) && fe.attr(n, "class", o)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, r, s, a, o, l = 0;
                if (fe.isFunction(t)) return this.each(function(e) {
                    fe(this).removeClass(t.call(this, e, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Ae) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ut, " ")) {
                            for (a = 0; s = e[a++];)
                                for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                            r !== (o = fe.trim(i)) && fe.attr(n, "class", o)
                        } return this
            },
            toggleClass: function(r, t) {
                var s = typeof r;
                return "boolean" == typeof t && "string" === s ? t ? this.addClass(r) : this.removeClass(r) : fe.isFunction(r) ? this.each(function(e) {
                    fe(this).toggleClass(r.call(this, e, W(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if ("string" === s)
                        for (t = 0, n = fe(this), i = r.match(Ae) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else r !== undefined && "boolean" !== s || ((e = W(this)) && fe._data(this, "__className__", e), fe.attr(this, "class", e || !1 === r ? "" : fe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + W(n) + " ").replace(Ut, " ").indexOf(t)) return !0;
                return !1
            }
        }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            fe.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Yt = x.location,
            Qt = fe.now(),
            Gt = /\?/,
            Xt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fe.parseJSON = function(e) {
            if (x.JSON && x.JSON.parse) return x.JSON.parse(e + "");
            var r, s = null,
                t = fe.trim(e + "");
            return t && !fe.trim(t.replace(Xt, function(e, t, n, i) {
                return r && t && (s = 0), 0 === s ? e : (r = n || t, s += !i - !n, "")
            })) ? Function("return " + t)() : fe.error("Invalid JSON: " + e)
        }, fe.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                x.DOMParser ? t = (new x.DOMParser).parseFromString(e, "text/xml") : ((t = new x.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
            } catch (n) {
                t = undefined
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + e), t
        };
        var Zt = /#.*$/,
            Kt = /([?&])_=[^&]*/,
            Jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            tn = /^(?:GET|HEAD)$/,
            nn = /^\/\//,
            rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sn = {},
            an = {},
            on = "*/".concat("*"),
            ln = Yt.href,
            un = rn.exec(ln.toLowerCase()) || [];
        fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ln,
                type: "GET",
                isLocal: en.test(un[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": on,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fe.parseJSON,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Y(Y(e, fe.ajaxSettings), t) : Y(fe.ajaxSettings, e)
            },
            ajaxPrefilter: V(sn),
            ajaxTransport: V(an),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, s, a, o, l, u = t;
                    2 !== w && (w = 2, h && x.clearTimeout(h), p = undefined, d = i || "", k.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (o = Q(m, k, n)), o = G(m, o, k, r), r ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (fe.lastModified[c] = l), (l = k.getResponseHeader("etag")) && (fe.etag[c] = l)),
                        204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = o.state, s = o.data, r = !(a = o.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || u) + "", r ? y.resolveWith(g, [s, u, k]) : y.rejectWith(g, [k, u, a]), k.statusCode(_), _ = undefined, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [k, m, r ? s : a]), b.fireWith(g, [k, u]), f && (v.trigger("ajaxComplete", [k, m]), --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = undefined), t = t || {};
                var i, r, c, d, h, f, p, s, m = fe.ajaxSetup({}, t),
                    g = m.context || m,
                    v = m.context && (g.nodeType || g.jquery) ? fe(g) : fe.event,
                    y = fe.Deferred(),
                    b = fe.Callbacks("once memory"),
                    _ = m.statusCode || {},
                    a = {},
                    o = {},
                    w = 0,
                    l = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; t = Jt.exec(d);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? d : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = o[n] = o[n] || e, a[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (m.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) _[t] = [_[t], e[t]];
                                else k.always(e[k.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            return p && p.abort(t), n(0, t), this
                        }
                    };
                if (y.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, m.url = ((e || m.url || ln) + "").replace(Zt, "").replace(nn, un[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = fe.trim(m.dataType || "*").toLowerCase().match(Ae) || [""], null == m.crossDomain && (i = rn.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fe.param(m.data, m.traditional)), U(sn, m, t, k), 2 === w) return k;
                for (r in (f = fe.event && m.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !tn.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Gt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Kt.test(c) ? c.replace(Kt, "$1_=" + Qt++) : c + (Gt.test(c) ? "&" : "?") + "_=" + Qt++)), m.ifModified && (fe.lastModified[c] && k.setRequestHeader("If-Modified-Since", fe.lastModified[c]), fe.etag[c] && k.setRequestHeader("If-None-Match", fe.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + on + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(r, m.headers[r]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, k, m) || 2 === w)) return k.abort();
                for (r in l = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[r](m[r]);
                if (p = U(an, m, t, k)) {
                    if (k.readyState = 1, f && v.trigger("ajaxSend", [k, m]), 2 === w) return k;
                    m.async && 0 < m.timeout && (h = x.setTimeout(function() {
                        k.abort("timeout")
                    }, m.timeout));
                    try {
                        w = 1, p.send(a, n)
                    } catch (u) {
                        if (!(w < 2)) throw u;
                        n(-1, u)
                    }
                } else n(-1, "No Transport");
                return k
            },
            getJSON: function(e, t, n) {
                return fe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, undefined, t, "script")
            }
        }), fe.each(["get", "post"], function(e, r) {
            fe[r] = function(e, t, n, i) {
                return fe.isFunction(t) && (i = i || n, n = t, t = undefined), fe.ajax(fe.extend({
                    url: e,
                    type: r,
                    dataType: i,
                    data: t,
                    success: n
                }, fe.isPlainObject(e) && e))
            }
        }), fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, fe.fn.extend({
            wrapAll: function(t) {
                if (fe.isFunction(t)) return this.each(function(e) {
                    fe(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = fe(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return fe.isFunction(n) ? this.each(function(e) {
                    fe(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = fe(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = fe.isFunction(t);
                return this.each(function(e) {
                    fe(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), fe.expr.filters.hidden = function(e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Z(e)
        }, fe.expr.filters.visible = function(e) {
            return !fe.expr.filters.hidden(e)
        };
        var cn = /%20/g,
            dn = /\[\]$/,
            hn = /\r?\n/g,
            fn = /^(?:submit|button|image|reset|file)$/i,
            pn = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) K(n, e[n], t, r);
            return i.join("&").replace(cn, "+")
        }, fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && pn.test(this.nodeName) && !fn.test(e) && (this.checked || !qe.test(e))
                }).map(function(e, t) {
                    var n = fe(this).val();
                    return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(hn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(hn, "\r\n")
                    }
                }).get()
            }
        }), fe.ajaxSettings.xhr = x.ActiveXObject !== undefined ? function() {
            return this.isLocal ? ee() : 8 < ie.documentMode ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || ee()
        } : J;
        var mn = 0,
            gn = {},
            vn = fe.ajaxSettings.xhr();
        x.attachEvent && x.attachEvent("onunload", function() {
            for (var e in gn) gn[e](undefined, !0)
        }), de.cors = !!vn && "withCredentials" in vn, (vn = de.ajax = !!vn) && fe.ajaxTransport(function(u) {
            var c;
            if (!u.crossDomain || de.cors) return {
                send: function(e, a) {
                    var t, o = u.xhr(),
                        l = ++mn;
                    if (o.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                        for (t in u.xhrFields) o[t] = u.xhrFields[t];
                    for (t in u.mimeType && o.overrideMimeType && o.overrideMimeType(u.mimeType), u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && o.setRequestHeader(t, e[t] + "");
                    o.send(u.hasContent && u.data || null), c = function(e, t) {
                        var n, i, r;
                        if (c && (t || 4 === o.readyState))
                            if (delete gn[l], c = undefined, o.onreadystatechange = fe.noop, t) 4 !== o.readyState && o.abort();
                            else {
                                r = {}, n = o.status, "string" == typeof o.responseText && (r.text = o.responseText);
                                try {
                                    i = o.statusText
                                } catch (s) {
                                    i = ""
                                }
                                n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                            } r && a(n, i, r, o.getAllResponseHeaders())
                    }, u.async ? 4 === o.readyState ? x.setTimeout(c) : o.onreadystatechange = gn[l] = c : c()
                },
                abort: function() {
                    c && c(undefined, !0)
                }
            }
        }), fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e), e
                }
            }
        }), fe.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), fe.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var i, r = ie.head || fe("head")[0] || ie.documentElement;
                return {
                    send: function(e, n) {
                        (i = ie.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                            (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                        }, r.insertBefore(i, r.firstChild)
                    },
                    abort: function() {
                        i && i.onload(undefined, !0)
                    }
                }
            }
        });
        var yn = [],
            bn = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = yn.pop() || fe.expando + "_" + Qt++;
                return this[e] = !0, e
            }
        }), fe.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, r, s, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(bn, "$1" + i) : !1 !== e.jsonp && (e.url += (Gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || fe.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = x[i], x[i] = function() {
                s = arguments
            }, n.always(function() {
                r === undefined ? fe(x).removeProp(i) : x[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, yn.push(i)), s && fe.isFunction(r) && r(s[0]), s = r = undefined
            }), "script"
        }), fe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = ke.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = m([e], t, r), r && r.length && fe(r).remove(), fe.merge([], i.childNodes))
        };
        var _n = fe.fn.load;
        fe.fn.load = function(e, t, n) {
            if ("string" != typeof e && _n) return _n.apply(this, arguments);
            var i, r, s, a = this,
                o = e.indexOf(" ");
            return -1 < o && (i = fe.trim(e.slice(o, e.length)), e = e.slice(0, o)), fe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), 0 < a.length && fe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                s = arguments, a.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, s || [e.responseText, t, e])
                })
            }), this
        }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), fe.expr.filters.animated = function(t) {
            return fe.grep(fe.timers, function(e) {
                return t === e.elem
            }).length
        }, fe.offset = {
            setOffset: function(e, t, n) {
                var i, r, s, a, o, l, u = fe.css(e, "position"),
                    c = fe(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), o = c.offset(), s = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < fe.inArray("auto", [s, l]) ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, o))), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
            }
        }, fe.fn.extend({
            offset: function(t) {
                if (arguments.length) return t === undefined ? this : this.each(function(e) {
                    fe.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    s = r && r.ownerDocument;
                return s ? (e = s.documentElement, fe.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(s), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - fe.css(i, "marginTop", !0),
                        left: t.left - n.left - fe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                    return e || mt
                })
            }
        }), fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var s = /Y/.test(r);
            fe.fn[t] = function(e) {
                return Be(this, function(e, t, n) {
                    var i = te(e);
                    if (n === undefined) return i ? r in i ? i[r] : i.document.documentElement[t] : e[t];
                    i ? i.scrollTo(s ? fe(i).scrollLeft() : n, s ? n : fe(i).scrollTop()) : e[t] = n
                }, t, e, arguments.length, null)
            }
        }), fe.each(["top", "left"], function(e, n) {
            fe.cssHooks[n] = F(de.pixelPosition, function(e, t) {
                if (t) return t = vt(e, n), ft.test(t) ? fe(e).position()[n] + "px" : t
            })
        }), fe.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            fe.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(i, e) {
                fe.fn[e] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return Be(this, function(e, t, n) {
                        var i;
                        return fe.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : n === undefined ? fe.css(e, t, r) : fe.style(e, t, n, r)
                    }, a, n ? e : undefined, n, null)
                }
            })
        }), fe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), fe.fn.size = function() {
            return this.length
        }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fe
        });
        var wn = x.jQuery,
            kn = x.$;
        return fe.noConflict = function(e) {
            return x.$ === fe && (x.$ = kn), e && x.jQuery === fe && (x.jQuery = wn), fe
        }, e || (x.jQuery = x.$ = fe), fe
    }), function(c, l) {
        "use strict";
        var u;
        c.rails !== l && c.error("jquery-ujs has already been loaded!");
        var e = c(document);
        c.rails = u = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return c("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return c("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = u.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
            },
            fire: function(e, t, n) {
                var i = c.Event(t);
                return e.trigger(i, n), !1 !== i.result
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(e) {
                return c.ajax(e)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== l && !1 !== e.data("remote")
            },
            handleRemote: function(i) {
                var e, t, n, r, s, a;
                if (u.fire(i, "ajax:before")) {
                    if (r = i.data("with-credentials") || null, s = i.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, i.is("form")) {
                        e = i.data("ujs:submit-button-formmethod") || i.attr("method"), t = i.data("ujs:submit-button-formaction") || i.attr("action"), n = c(i[0]).serializeArray();
                        var o = i.data("ujs:submit-button");
                        o && (n.push(o), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(u.inputChangeSelector) ? (e = i.data("method"), t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(u.buttonClickSelector) ? (e = i.data("method") || "get", t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"), t = u.href(i), n = i.data("params") || null);
                    return a = {
                        type: e || "GET",
                        data: n,
                        dataType: s,
                        beforeSend: function(e, t) {
                            if (t.dataType === l && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), !u.fire(i, "ajax:beforeSend", [e, t])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: u.isCrossDomain(t)
                    }, r && (a.xhrFields = {
                        withCredentials: r
                    }), t && (a.url = t), u.ajax(a)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(e) {
                var t = u.href(e),
                    n = e.data("method"),
                    i = e.attr("target"),
                    r = u.csrfToken(),
                    s = u.csrfParam(),
                    a = c('<form method="post" action="' + t + '"></form>'),
                    o = '<input name="_method" value="' + n + '" type="hidden" />';
                s === l || r === l || u.isCrossDomain(t) || (o += '<input name="' + s + '" value="' + r + '" type="hidden" />'), i && a.attr("target", i), a.hide().append(o).appendTo("body"), a.submit()
            },
            formElements: function(e, t) {
                return e.is("form") ? c(e[0].elements).filter(t) : e.find(t)
            },
            disableFormElements: function(e) {
                u.formElements(e, u.disableSelector).each(function() {
                    u.disableFormElement(c(this))
                })
            },
            disableFormElement: function(e) {
                var t, n;
                t = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== l && (e.data("ujs:enable-with", e[t]()), e[t](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(e) {
                u.formElements(e, u.enableSelector).each(function() {
                    u.enableFormElement(c(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== l && (e[t](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, n = e.data("confirm"),
                    i = !1;
                if (!n) return !0;
                if (u.fire(e, "confirm")) {
                    try {
                        i = u.confirm(n)
                    } catch (r) {
                        (console.error || console.log).call(console, r.stack || r)
                    }
                    t = u.fire(e, "confirm:complete", [i])
                }
                return i && t
            },
            blankInputs: function(e, t, n) {
                var i, r, s, a = c(),
                    o = t || "input,textarea",
                    l = e.find(o),
                    u = {};
                return l.each(function() {
                    (i = c(this)).is("input[type=radio]") ? (s = i.attr("name"), u[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (r = e.find('input[type=radio][name="' + s + '"]'), a = a.add(r)), u[s] = s)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (a = a.add(i))
                }), !!a.length && a
            },
            nonBlankInputs: function(e, t) {
                return u.blankInputs(e, t, !0)
            },
            stopEverything: function(e) {
                return c(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var t = e.data("disable-with");
                t !== l && (e.data("ujs:enable-with", e.html()), e.html(t)), e.bind("click.railsDisable", function(e) {
                    return u.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== l && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, u.fire(e, "rails:attachBindings") && (c.ajaxPrefilter(function(e, t, n) {
            e.crossDomain || u.CSRFProtection(n)
        }), c(window).on("pageshow.rails", function() {
            c(c.rails.enableSelector).each(function() {
                var e = c(this);
                e.data("ujs:disabled") && c.rails.enableFormElement(e)
            }), c(c.rails.linkDisableSelector).each(function() {
                var e = c(this);
                e.data("ujs:disabled") && c.rails.enableElement(e)
            })
        }), e.on("ajax:complete", u.linkDisableSelector, function() {
            u.enableElement(c(this))
        }), e.on("ajax:complete", u.buttonDisableSelector, function() {
            u.enableFormElement(c(this))
        }), e.on("click.rails", u.linkClickSelector, function(e) {
            var t = c(this),
                n = t.data("method"),
                i = t.data("params"),
                r = e.metaKey || e.ctrlKey;
            if (!u.allowAction(t)) return u.stopEverything(e);
            if (!r && t.is(u.linkDisableSelector) && u.disableElement(t), u.isRemote(t)) {
                if (r && (!n || "GET" === n) && !i) return !0;
                var s = u.handleRemote(t);
                return !1 === s ? u.enableElement(t) : s.fail(function() {
                    u.enableElement(t)
                }), !1
            }
            return n ? (u.handleMethod(t), !1) : void 0
        }), e.on("click.rails", u.buttonClickSelector, function(e) {
            var t = c(this);
            if (!u.allowAction(t) || !u.isRemote(t)) return u.stopEverything(e);
            t.is(u.buttonDisableSelector) && u.disableFormElement(t);
            var n = u.handleRemote(t);
            return !1 === n ? u.enableFormElement(t) : n.fail(function() {
                u.enableFormElement(t)
            }), !1
        }), e.on("change.rails", u.inputChangeSelector, function(e) {
            var t = c(this);
            return u.allowAction(t) && u.isRemote(t) ? (u.handleRemote(t), !1) : u.stopEverything(e)
        }), e.on("submit.rails", u.formSubmitSelector, function(e) {
            var t, n, i = c(this),
                r = u.isRemote(i);
            if (!u.allowAction(i)) return u.stopEverything(e);
            if (i.attr("novalidate") === l)
                if (i.data("ujs:formnovalidate-button") === l) {
                    if ((t = u.blankInputs(i, u.requiredInputSelector, !1)) && u.fire(i, "ajax:aborted:required", [t])) return u.stopEverything(e)
                } else i.data("ujs:formnovalidate-button", l);
            if (r) {
                if (n = u.nonBlankInputs(i, u.fileInputSelector)) {
                    setTimeout(function() {
                        u.disableFormElements(i)
                    }, 13);
                    var s = u.fire(i, "ajax:aborted:file", [n]);
                    return s || setTimeout(function() {
                        u.enableFormElements(i)
                    }, 13), s
                }
                return u.handleRemote(i), !1
            }
            setTimeout(function() {
                u.disableFormElements(i)
            }, 13)
        }), e.on("click.rails", u.formInputClickSelector, function(e) {
            var t = c(this);
            if (!u.allowAction(t)) return u.stopEverything(e);
            var n = t.attr("name"),
                i = n ? {
                    name: n,
                    value: t.val()
                } : null,
                r = t.closest("form");
            0 === r.length && (r = c("#" + t.attr("form"))), r.data("ujs:submit-button", i), r.data("ujs:formnovalidate-button", t.attr("formnovalidate")), r.data("ujs:submit-button-formaction", t.attr("formaction")), r.data("ujs:submit-button-formmethod", t.attr("formmethod"))
        }), e.on("ajax:send.rails", u.formSubmitSelector, function(e) {
            this === e.target && u.disableFormElements(c(this))
        }), e.on("ajax:complete.rails", u.formSubmitSelector, function(e) {
            this === e.target && u.enableFormElements(c(this))
        }), c(function() {
            u.refreshCSRFTokens()
        }))
    }(jQuery), function(s) {
        "use strict";
        var r = function(e, t) {
            this.$element = s(e), this.options = s.extend({}, s.fn.collapse.defaults, t), this.options.parent && (this.$parent = s(this.options.parent)), this.options.toggle && this.toggle()
        };
        r.prototype = {
            constructor: r,
            dimension: function() {
                return this.$element.hasClass("width") ? "width" : "height"
            },
            show: function() {
                var e, t, n, i;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (e = this.dimension(), t = s.camelCase(["scroll", e].join("-")), (n = this.$parent && this.$parent.find("> .accordion-group > .in")) && n.length) {
                        if ((i = n.data("collapse")) && i.transitioning) return;
                        n.collapse("hide"), i || n.data("collapse", null)
                    }
                    this.$element[e](0), this.transition("addClass", s.Event("show"), "shown"), s.support.transition && this.$element[e](this.$element[0][t])
                }
            },
            hide: function() {
                var e;
                !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", s.Event("hide"), "hidden"), this.$element[e](0))
            },
            reset: function(e) {
                var t = this.dimension();
                return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(e, t, n) {
                var i = this,
                    r = function() {
                        "show" == t.type && i.reset(), i.transitioning = 0, i.$element.trigger(n)
                    };
                this.$element.trigger(t), t.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), s.support.transition && this.$element.hasClass("collapse") ? this.$element.one(s.support.transition.end, r) : r())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var e = s.fn.collapse;
        s.fn.collapse = function(i) {
            return this.each(function() {
                var e = s(this),
                    t = e.data("collapse"),
                    n = s.extend({}, s.fn.collapse.defaults, e.data(), "object" == typeof i && i);
                t || e.data("collapse", t = new r(this, n)), "string" == typeof i && t[i]()
            })
        }, s.fn.collapse.defaults = {
            toggle: !0
        }, s.fn.collapse.Constructor = r, s.fn.collapse.noConflict = function() {
            return s.fn.collapse = e, this
        }, s(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
            var t, n = s(this),
                i = n.attr("data-target") || e.preventDefault() || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""),
                r = s(i).data("collapse") ? "toggle" : n.data();
            n[s(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), s(i).collapse(r)
        })
    }(window.jQuery), function(s) {
        "use strict";
        var r = function(e, t) {
            this.options = t, this.$element = s(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", s.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        r.prototype = {
            constructor: r,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var t = this,
                    e = s.Event("show");
                this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var e = s.support.transition && t.$element.hasClass("fade");
                    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), e && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), e ? t.$element.one(s.support.transition.end, function() {
                        t.$element.focus().trigger("shown")
                    }) : t.$element.focus().trigger("shown")
                }))
            },
            hide: function(e) {
                e && e.preventDefault();
                e = s.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), s(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), s.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var t = this;
                s(document).on("focusin.modal", function(e) {
                    t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
                })
            },
            escape: function() {
                var t = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                    27 == e.which && t.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var e = this,
                    t = setTimeout(function() {
                        e.$element.off(s.support.transition.end), e.hideModal()
                    }, 500);
                this.$element.one(s.support.transition.end, function() {
                    clearTimeout(t), e.hideModal()
                })
            },
            hideModal: function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.removeBackdrop(), e.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(e) {
                var t = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var n = s.support.transition && t;
                    if (this.$backdrop = s('<div class="modal-backdrop ' + t + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? s.proxy(this.$element[0].focus, this.$element[0]) : s.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    n ? this.$backdrop.one(s.support.transition.end, e) : e()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(s.support.transition.end, e) : e()) : e && e()
            }
        };
        var e = s.fn.modal;
        s.fn.modal = function(i) {
            return this.each(function() {
                var e = s(this),
                    t = e.data("modal"),
                    n = s.extend({}, s.fn.modal.defaults, e.data(), "object" == typeof i && i);
                t || e.data("modal", t = new r(this, n)), "string" == typeof i ? t[i]() : n.show && t.show()
            })
        }, s.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, s.fn.modal.Constructor = r, s.fn.modal.noConflict = function() {
            return s.fn.modal = e, this
        }, s(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
            var t = s(this),
                n = t.attr("href"),
                i = s(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                r = i.data("modal") ? "toggle" : s.extend({
                    remote: !/#/.test(n) && n
                }, i.data(), t.data());
            e.preventDefault(), i.modal(r).one("hide", function() {
                t.focus()
            })
        })
    }(window.jQuery), function(l) {
        "use strict";
        var r = function(e, t) {
            this.init("tooltip", e, t)
        };
        r.prototype = {
            constructor: r,
            init: function(e, t, n) {
                var i, r, s, a, o;
                for (this.type = e, this.$element = l(t), this.options = this.getOptions(n), this.enabled = !0, o = (s = this.options.trigger.split(" ")).length; o--;) "click" == (a = s[o]) ? this.$element.on("click." + this.type, this.options.selector, l.proxy(this.toggle, this)) : "manual" != a && (i = "hover" == a ? "mouseenter" : "focus", r = "hover" == a ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, l.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, l.proxy(this.leave, this)));
                this.options.selector ? this._options = l.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(e) {
                return (e = l.extend({}, l.fn[this.type].defaults, this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            },
            enter: function(e) {
                var t, n = l.fn[this.type].defaults,
                    i = {};
                if (this._options && l.each(this._options, function(e, t) {
                        n[e] != t && (i[e] = t)
                    }, this), !(t = l(e.currentTarget)[this.type](i).data(this.type)).options.delay || !t.options.delay.show) return t.show();
                clearTimeout(this.timeout), t.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == t.hoverState && t.show()
                }, t.options.delay.show)
            },
            leave: function(e) {
                var t = l(e.currentTarget)[this.type](this._options).data(this.type);
                if (this.timeout && clearTimeout(this.timeout), !t.options.delay || !t.options.delay.hide) return t.hide();
                t.hoverState = "out", this.timeout = setTimeout(function() {
                    "out" == t.hoverState && t.hide()
                }, t.options.delay.hide)
            },
            show: function() {
                var e, t, n, i, r, s, a = l.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                    switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), r = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), t = this.getPosition(), n = e[0].offsetWidth, i = e[0].offsetHeight, r) {
                        case "bottom":
                            s = {
                                top: t.top + t.height,
                                left: t.left + t.width / 2 - n / 2
                            };
                            break;
                        case "top":
                            s = {
                                top: t.top - i,
                                left: t.left + t.width / 2 - n / 2
                            };
                            break;
                        case "left":
                            s = {
                                top: t.top + t.height / 2 - i / 2,
                                left: t.left - n
                            };
                            break;
                        case "right":
                            s = {
                                top: t.top + t.height / 2 - i / 2,
                                left: t.left + t.width
                            }
                    }
                    this.applyPlacement(s, r), this.$element.trigger("shown")
                }
            },
            applyPlacement: function(e, t) {
                var n, i, r, s, a = this.tip(),
                    o = a[0].offsetWidth,
                    l = a[0].offsetHeight;
                a.offset(e).addClass(t).addClass("in"), n = a[0].offsetWidth, i = a[0].offsetHeight, "top" == t && i != l && (e.top = e.top + l - i, s = !0), "bottom" == t || "top" == t ? (r = 0, e.left < 0 && (r = -2 * e.left, e.left = 0, a.offset(e), n = a[0].offsetWidth, i = a[0].offsetHeight), this.replaceArrow(r - o + n, n, "left")) : this.replaceArrow(i - l, i, "top"), s && a.offset(e)
            },
            replaceArrow: function(e, t, n) {
                this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
            },
            setContent: function() {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function e() {
                    var e = setTimeout(function() {
                        t.off(l.support.transition.end).detach()
                    }, 500);
                    t.one(l.support.transition.end, function() {
                        clearTimeout(e), t.detach()
                    })
                }
                var t = this.tip(),
                    n = l.Event("hide");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) return t.removeClass("in"), l.support.transition && this.$tip.hasClass("fade") ? e() : t.detach(), this.$element.trigger("hidden"), this
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function() {
                var e = this.$element[0];
                return l.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function() {
                var e = this.$element,
                    t = this.options;
                return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
            },
            tip: function() {
                return this.$tip = this.$tip || l(this.options.template)
            },
            arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(e) {
                var t = e ? l(e.currentTarget)[this.type](this._options).data(this.type) : this;
                t.tip().hasClass("in") ? t.hide() : t.show()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var e = l.fn.tooltip;
        l.fn.tooltip = function(i) {
            return this.each(function() {
                var e = l(this),
                    t = e.data("tooltip"),
                    n = "object" == typeof i && i;
                t || e.data("tooltip", t = new r(this, n)), "string" == typeof i && t[i]()
            })
        }, l.fn.tooltip.Constructor = r, l.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, l.fn.tooltip.noConflict = function() {
            return l.fn.tooltip = e, this
        }
    }(window.jQuery), function(r) {
        "use strict";
        var s = function(e, t) {
            this.$element = r(e), this.options = r.extend({}, r.fn.button.defaults, t)
        };
        s.prototype.setState = function(e) {
            var t = "disabled",
                n = this.$element,
                i = n.data(),
                r = n.is("input") ? "val" : "html";
            e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), setTimeout(function() {
                "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
            }, 0)
        }, s.prototype.toggle = function() {
            var e = this.$element.closest('[data-toggle="buttons-radio"]');
            e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var e = r.fn.button;
        r.fn.button = function(i) {
            return this.each(function() {
                var e = r(this),
                    t = e.data("button"),
                    n = "object" == typeof i && i;
                t || e.data("button", t = new s(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i)
            })
        }, r.fn.button.defaults = {
            loadingText: "loading..."
        }, r.fn.button.Constructor = s, r.fn.button.noConflict = function() {
            return r.fn.button = e, this
        }, r(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
            var t = r(e.target);
            t.hasClass("btn") || (t = t.closest(".btn")), t.button("toggle")
        })
    }(window.jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function() {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(o) {
    "use strict";

    function l(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && o(t);
        return n && n.length ? n : e.parent()
    }

    function s(i) {
        i && 3 === i.which || (o(t).remove(), o(u).each(function() {
            var e = o(this),
                t = l(e),
                n = {
                    relatedTarget: this
                };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && o.contains(t[0], i.target) || (t.trigger(i = o.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(o.Event("hidden.bs.dropdown", n)))))
        }))
    }

    function e(n) {
        return this.each(function() {
            var e = o(this),
                t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
        })
    }
    var t = ".dropdown-backdrop",
        u = '[data-toggle="dropdown"]',
        i = function(e) {
            o(e).on("click.bs.dropdown", this.toggle)
        };
    i.VERSION = "3.3.7", i.prototype.toggle = function(e) {
        var t = o(this);
        if (!t.is(".disabled, :disabled")) {
            var n = l(t),
                i = n.hasClass("open");
            if (s(), !i) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && o(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(o(this)).on("click", s);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(e = o.Event("show.bs.dropdown", r)), e.isDefaultPrevented()) return;
                t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(o.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = o(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var n = l(t),
                    i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(u).trigger("focus"), t.trigger("click");
                var r = " li:not(.disabled):visible a",
                    s = n.find(".dropdown-menu" + r);
                if (s.length) {
                    var a = s.index(e.target);
                    38 == e.which && 0 < a && a--, 40 == e.which && a < s.length - 1 && a++, ~a || (a = 0), s.eq(a).trigger("focus")
                }
            }
        }
    };
    var n = o.fn.dropdown;
    o.fn.dropdown = e, o.fn.dropdown.Constructor = i, o.fn.dropdown.noConflict = function() {
        return o.fn.dropdown = n, this
    }, o(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", u, i.prototype.toggle).on("keydown.bs.dropdown.data-api", u, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";
    var b = function(e, n, t) {
            var i, r, s = document.createElement("img");
            if (s.onerror = n, s.onload = function() {
                    !r || t && t.noRevoke || b.revokeObjectURL(r), n && n(b.scale(s, t))
                }, b.isInstanceOf("Blob", e) || b.isInstanceOf("File", e)) i = r = b.createObjectURL(e), s._type = e.type;
            else {
                if ("string" != typeof e) return !1;
                i = e, t && t.crossOrigin && (s.crossOrigin = t.crossOrigin)
            }
            return i ? (s.src = i, s) : b.readFile(e, function(e) {
                var t = e.target;
                t && t.result ? s.src = t.result : n && n(e)
            })
        },
        t = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    b.isInstanceOf = function(e, t) {
        return Object.prototype.toString.call(t) === "[object " + e + "]"
    }, b.transformCoordinates = function() {}, b.getTransformedOptions = function(e) {
        return e
    }, b.renderImageToCanvas = function(e, t, n, i, r, s, a, o, l, u) {
        return e.getContext("2d").drawImage(t, n, i, r, s, a, o, l, u), e
    }, b.hasCanvasOption = function(e) {
        return e.canvas || e.crop
    }, b.scale = function(e, t) {
        t = t || {};
        var n, i, r, s, a, o, l, u, c, d = document.createElement("canvas"),
            h = e.getContext || b.hasCanvasOption(t) && d.getContext,
            f = e.naturalWidth || e.width,
            p = e.naturalHeight || e.height,
            m = f,
            g = p,
            v = function() {
                var e = Math.max((r || m) / m, (s || g) / g);
                1 < e && (m = Math.ceil(m * e), g = Math.ceil(g * e))
            },
            y = function() {
                var e = Math.min((n || m) / m, (i || g) / g);
                e < 1 && (m = Math.ceil(m * e), g = Math.ceil(g * e))
            };
        return h && (l = (t = b.getTransformedOptions(t)).left || 0, u = t.top || 0, t.sourceWidth ? (a = t.sourceWidth, void 0 !== t.right && void 0 === t.left && (l = f - a - t.right)) : a = f - l - (t.right || 0), t.sourceHeight ? (o = t.sourceHeight, void 0 !== t.bottom && void 0 === t.top && (u = p - o - t.bottom)) : o = p - u - (t.bottom || 0), m = a, g = o), n = t.maxWidth, i = t.maxHeight, r = t.minWidth, s = t.minHeight, h && n && i && t.crop ? (c = a / o - (m = n) / (g = i)) < 0 ? (o = i * a / n, void 0 === t.top && void 0 === t.bottom && (u = (p - o) / 2)) : 0 < c && (a = n * o / i, void 0 === t.left && void 0 === t.right && (l = (f - a) / 2)) : ((t.contain || t.cover) && (r = n = n || r, s = i = i || s), t.cover ? (y(), v()) : (v(), y())), h ? (d.width = m, d.height = g, b.transformCoordinates(d, t), b.renderImageToCanvas(d, e, l, u, a, o, 0, 0, m, g)) : (e.width = m, e.height = g, e)
    }, b.createObjectURL = function(e) {
        return !!t && t.createObjectURL(e)
    }, b.revokeObjectURL = function(e) {
        return !!t && t.revokeObjectURL(e)
    }, b.readFile = function(e, t, n) {
        if (window.FileReader) {
            var i = new FileReader;
            if (i.onload = i.onerror = t, i[n = n || "readAsDataURL"]) return i[n](e), i
        }
        return !1
    }, "function" == typeof define && define.amd ? define(function() {
        return b
    }) : e.loadImage = b
}(this),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e(window.loadImage)
}(function(y) {
    "use strict";
    if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
        var b = y.renderImageToCanvas;
        y.detectSubsampling = function(e) {
            var t, n;
            return 1048576 < e.width * e.height && ((t = document.createElement("canvas")).width = t.height = 1, (n = t.getContext("2d")).drawImage(e, 1 - e.width, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
        }, y.detectVerticalSquash = function(e, t) {
            var n, i, r, s, a = e.naturalHeight || e.height,
                o = document.createElement("canvas"),
                l = o.getContext("2d");
            for (t && (a /= 2), o.width = 1, o.height = a, l.drawImage(e, 0, 0), n = l.getImageData(0, 0, 1, a).data, i = 0, s = r = a; i < s;) 0 === n[4 * (s - 1) + 3] ? r = s : i = s, s = r + i >> 1;
            return s / a || 1
        }, y.renderImageToCanvas = function(e, t, n, i, r, s, a, o, l, u) {
            if ("image/jpeg" === t._type) {
                var c, d, h, f, p = e.getContext("2d"),
                    m = document.createElement("canvas"),
                    g = 1024,
                    v = m.getContext("2d");
                if (m.width = g, m.height = g, p.save(), (c = y.detectSubsampling(t)) && (n /= 2, i /= 2, r /= 2, s /= 2), d = y.detectVerticalSquash(t, c), c || 1 !== d) {
                    for (i *= d, l = Math.ceil(g * l / r), u = Math.ceil(g * u / s / d), f = o = 0; f < s;) {
                        for (h = a = 0; h < r;) v.clearRect(0, 0, g, g), v.drawImage(t, n, i, r, s, -h, -f, r, s), p.drawImage(m, 0, 0, g, g, a, o, l, u), h += g, a += l;
                        f += g, o += u
                    }
                    return p.restore(), e
                }
            }
            return b(e, t, n, i, r, s, a, o, l, u)
        }
    }
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e(window.loadImage)
}(function(e) {
    "use strict";
    var t = e.hasCanvasOption;
    e.hasCanvasOption = function(e) {
        return t(e) || e.orientation
    }, e.transformCoordinates = function(e, t) {
        var n = e.getContext("2d"),
            i = e.width,
            r = e.height,
            s = t.orientation;
        if (s) switch (4 < s && (e.width = r, e.height = i), s) {
            case 2:
                n.translate(i, 0), n.scale(-1, 1);
                break;
            case 3:
                n.translate(i, r), n.rotate(Math.PI);
                break;
            case 4:
                n.translate(0, r), n.scale(1, -1);
                break;
            case 5:
                n.rotate(.5 * Math.PI), n.scale(1, -1);
                break;
            case 6:
                n.rotate(.5 * Math.PI), n.translate(0, -r);
                break;
            case 7:
                n.rotate(.5 * Math.PI), n.translate(i, -r), n.scale(-1, 1);
                break;
            case 8:
                n.rotate(-.5 * Math.PI), n.translate(-i, 0)
        }
    }, e.getTransformedOptions = function(e) {
        if (!e.orientation || 1 === e.orientation) return e;
        var t, n = {};
        for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        switch (e.orientation) {
            case 2:
                n.left = e.right, n.right = e.left;
                break;
            case 3:
                n.left = e.right, n.top = e.bottom, n.right = e.left, n.bottom = e.top;
                break;
            case 4:
                n.top = e.bottom, n.bottom = e.top;
                break;
            case 5:
                n.left = e.top, n.top = e.left, n.right = e.bottom, n.bottom = e.right;
                break;
            case 6:
                n.left = e.top, n.top = e.right, n.right = e.bottom, n.bottom = e.left;
                break;
            case 7:
                n.left = e.bottom, n.top = e.right, n.right = e.top, n.bottom = e.left;
                break;
            case 8:
                n.left = e.bottom, n.top = e.left, n.right = e.top, n.bottom = e.right
        }
        return 4 < e.orientation && (n.maxWidth = e.maxHeight, n.maxHeight = e.maxWidth, n.minWidth = e.minHeight, n.minHeight = e.minWidth, n.sourceWidth = e.sourceHeight, n.sourceHeight = e.sourceWidth), n
    }
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e(window.loadImage)
}(function(p) {
    "use strict";
    var e = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    p.blobSlice = e && function() {
        return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
    }, p.metaDataParsers = {
        jpeg: {
            65505: []
        }
    }, p.parseMetaData = function(e, c, d) {
        var h = this,
            t = (d = d || {}).maxMetaDataSize || 262144,
            f = {};
        (!(window.DataView && e && 12 <= e.size && "image/jpeg" === e.type && p.blobSlice) || !p.readFile(p.blobSlice.call(e, 0, t), function(e) {
            if (e.target.error) return console.log(e.target.error), void c(f);
            var t, n, i, r, s = e.target.result,
                a = new DataView(s),
                o = 2,
                l = a.byteLength - 4,
                u = o;
            if (65496 === a.getUint16(0)) {
                for (; o < l && (65504 <= (t = a.getUint16(o)) && t <= 65519 || 65534 === t);) {
                    if (o + (n = a.getUint16(o + 2) + 2) > a.byteLength) {
                        console.log("Invalid meta data: Invalid segment size.");
                        break
                    }
                    if (i = p.metaDataParsers.jpeg[t])
                        for (r = 0; r < i.length; r += 1) i[r].call(h, a, o, n, f, d);
                    u = o += n
                }!d.disableImageHead && 6 < u && (f.imageHead = s.slice ? s.slice(0, u) : new Uint8Array(s).subarray(0, u))
            } else console.log("Invalid JPEG file: Missing JPEG marker.");
            c(f)
        }, "readAsArrayBuffer")) && c(f)
    }
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-meta"], e) : e(window.loadImage)
}(function(f) {
    "use strict";
    f.ExifMap = function() {
        return this
    }, f.ExifMap.prototype.map = {
        Orientation: 274
    }, f.ExifMap.prototype.get = function(e) {
        return this[e] || this[this.map[e]]
    }, f.getExifThumbnail = function(e, t, n) {
        var i, r, s;
        if (n && !(t + n > e.byteLength)) {
            for (i = [], r = 0; r < n; r += 1) s = e.getUint8(t + r), i.push((s < 16 ? "0" : "") + s.toString(16));
            return "data:image/jpeg,%" + i.join("%")
        }
        console.log("Invalid Exif data: Invalid thumbnail data.")
    }, f.exifTagTypes = {
        1: {
            getValue: function(e, t) {
                return e.getUint8(t)
            },
            size: 1
        },
        2: {
            getValue: function(e, t) {
                return String.fromCharCode(e.getUint8(t))
            },
            size: 1,
            ascii: !0
        },
        3: {
            getValue: function(e, t, n) {
                return e.getUint16(t, n)
            },
            size: 2
        },
        4: {
            getValue: function(e, t, n) {
                return e.getUint32(t, n)
            },
            size: 4
        },
        5: {
            getValue: function(e, t, n) {
                return e.getUint32(t, n) / e.getUint32(t + 4, n)
            },
            size: 8
        },
        9: {
            getValue: function(e, t, n) {
                return e.getInt32(t, n)
            },
            size: 4
        },
        10: {
            getValue: function(e, t, n) {
                return e.getInt32(t, n) / e.getInt32(t + 4, n)
            },
            size: 8
        }
    }, f.exifTagTypes[7] = f.exifTagTypes[1], f.getExifValue = function(e, t, n, i, r, s) {
        var a, o, l, u, c, d, h = f.exifTagTypes[i];
        if (h) {
            if (!((o = 4 < (a = h.size * r) ? t + e.getUint32(n + 8, s) : n + 8) + a > e.byteLength)) {
                if (1 === r) return h.getValue(e, o, s);
                for (l = [], u = 0; u < r; u += 1) l[u] = h.getValue(e, o + u * h.size, s);
                if (h.ascii) {
                    for (c = "", u = 0; u < l.length && "\0" !== (d = l[u]); u += 1) c += d;
                    return c
                }
                return l
            }
            console.log("Invalid Exif data: Invalid data offset.")
        } else console.log("Invalid Exif data: Invalid tag type.")
    }, f.parseExifTag = function(e, t, n, i, r) {
        var s = e.getUint16(n, i);
        r.exif[s] = f.getExifValue(e, t, n, e.getUint16(n + 2, i), e.getUint32(n + 4, i), i)
    }, f.parseExifTags = function(e, t, n, i, r) {
        var s, a, o;
        if (n + 6 > e.byteLength) console.log("Invalid Exif data: Invalid directory offset.");
        else {
            if (!((a = n + 2 + 12 * (s = e.getUint16(n, i))) + 4 > e.byteLength)) {
                for (o = 0; o < s; o += 1) this.parseExifTag(e, t, n + 2 + 12 * o, i, r);
                return e.getUint32(a, i)
            }
            console.log("Invalid Exif data: Invalid directory size.")
        }
    }, f.parseExifData = function(e, t, n, i, r) {
        if (!r.disableExif) {
            var s, a, o, l = t + 10;
            if (1165519206 === e.getUint32(t + 4)) {
                if (l + 8 > e.byteLength) return void console.log("Invalid Exif data: Invalid segment size.");
                if (0 !== e.getUint16(t + 8)) return void console.log("Invalid Exif data: Missing byte alignment offset.");
                switch (e.getUint16(l)) {
                    case 18761:
                        s = !0;
                        break;
                    case 19789:
                        s = !1;
                        break;
                    default:
                        return void console.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== e.getUint16(l + 2, s)) return void console.log("Invalid Exif data: Missing TIFF marker.");
                a = e.getUint32(l + 4, s), i.exif = new f.ExifMap, (a = f.parseExifTags(e, l, l + a, s, i)) && !r.disableExifThumbnail && (o = {
                    exif: {}
                }, a = f.parseExifTags(e, l, l + a, s, o), o.exif[513] && (i.exif.Thumbnail = f.getExifThumbnail(e, l + o.exif[513], o.exif[514]))), i.exif[34665] && !r.disableExifSub && f.parseExifTags(e, l, l + i.exif[34665], s, i), i.exif[34853] && !r.disableExifGps && f.parseExifTags(e, l, l + i.exif[34853], s, i)
            }
        }
    }, f.metaDataParsers.jpeg[65505].push(f.parseExifData)
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-exif"], e) : e(window.loadImage)
}(function(e) {
    "use strict";
    e.ExifMap.prototype.tags = {
            256: "ImageWidth",
            257: "ImageHeight",
            34665: "ExifIFDPointer",
            34853: "GPSInfoIFDPointer",
            40965: "InteroperabilityIFDPointer",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            274: "Orientation",
            277: "SamplesPerPixel",
            284: "PlanarConfiguration",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            282: "XResolution",
            283: "YResolution",
            296: "ResolutionUnit",
            273: "StripOffsets",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            513: "JPEGInterchangeFormat",
            514: "JPEGInterchangeFormatLength",
            301: "TransferFunction",
            318: "WhitePoint",
            319: "PrimaryChromaticities",
            529: "YCbCrCoefficients",
            532: "ReferenceBlackWhite",
            306: "DateTime",
            270: "ImageDescription",
            271: "Make",
            272: "Model",
            305: "Software",
            315: "Artist",
            33432: "Copyright",
            36864: "ExifVersion",
            40960: "FlashpixVersion",
            40961: "ColorSpace",
            40962: "PixelXDimension",
            40963: "PixelYDimension",
            42240: "Gamma",
            37121: "ComponentsConfiguration",
            37122: "CompressedBitsPerPixel",
            37500: "MakerNote",
            37510: "UserComment",
            40964: "RelatedSoundFile",
            36867: "DateTimeOriginal",
            36868: "DateTimeDigitized",
            37520: "SubSecTime",
            37521: "SubSecTimeOriginal",
            37522: "SubSecTimeDigitized",
            33434: "ExposureTime",
            33437: "FNumber",
            34850: "ExposureProgram",
            34852: "SpectralSensitivity",
            34855: "PhotographicSensitivity",
            34856: "OECF",
            34864: "SensitivityType",
            34865: "StandardOutputSensitivity",
            34866: "RecommendedExposureIndex",
            34867: "ISOSpeed",
            34868: "ISOSpeedLatitudeyyy",
            34869: "ISOSpeedLatitudezzz",
            37377: "ShutterSpeedValue",
            37378: "ApertureValue",
            37379: "BrightnessValue",
            37380: "ExposureBias",
            37381: "MaxApertureValue",
            37382: "SubjectDistance",
            37383: "MeteringMode",
            37384: "LightSource",
            37385: "Flash",
            37396: "SubjectArea",
            37386: "FocalLength",
            41483: "FlashEnergy",
            41484: "SpatialFrequencyResponse",
            41486: "FocalPlaneXResolution",
            41487: "FocalPlaneYResolution",
            41488: "FocalPlaneResolutionUnit",
            41492: "SubjectLocation",
            41493: "ExposureIndex",
            41495: "SensingMethod",
            41728: "FileSource",
            41729: "SceneType",
            41730: "CFAPattern",
            41985: "CustomRendered",
            41986: "ExposureMode",
            41987: "WhiteBalance",
            41988: "DigitalZoomRatio",
            41989: "FocalLengthIn35mmFilm",
            41990: "SceneCaptureType",
            41991: "GainControl",
            41992: "Contrast",
            41993: "Saturation",
            41994: "Sharpness",
            41995: "DeviceSettingDescription",
            41996: "SubjectDistanceRange",
            42016: "ImageUniqueID",
            42032: "CameraOwnerName",
            42033: "BodySerialNumber",
            42034: "LensSpecification",
            42035: "LensMake",
            42036: "LensModel",
            42037: "LensSerialNumber",
            0: "GPSVersionID",
            1: "GPSLatitudeRef",
            2: "GPSLatitude",
            3: "GPSLongitudeRef",
            4: "GPSLongitude",
            5: "GPSAltitudeRef",
            6: "GPSAltitude",
            7: "GPSTimeStamp",
            8: "GPSSatellites",
            9: "GPSStatus",
            10: "GPSMeasureMode",
            11: "GPSDOP",
            12: "GPSSpeedRef",
            13: "GPSSpeed",
            14: "GPSTrackRef",
            15: "GPSTrack",
            16: "GPSImgDirectionRef",
            17: "GPSImgDirection",
            18: "GPSMapDatum",
            19: "GPSDestLatitudeRef",
            20: "GPSDestLatitude",
            21: "GPSDestLongitudeRef",
            22: "GPSDestLongitude",
            23: "GPSDestBearingRef",
            24: "GPSDestBearing",
            25: "GPSDestDistanceRef",
            26: "GPSDestDistance",
            27: "GPSProcessingMethod",
            28: "GPSAreaInformation",
            29: "GPSDateStamp",
            30: "GPSDifferential",
            31: "GPSHPositioningError"
        }, e.ExifMap.prototype.stringValues = {
            ExposureProgram: {
                0: "Undefined",
                1: "Manual",
                2: "Normal program",
                3: "Aperture priority",
                4: "Shutter priority",
                5: "Creative program",
                6: "Action program",
                7: "Portrait mode",
                8: "Landscape mode"
            },
            MeteringMode: {
                0: "Unknown",
                1: "Average",
                2: "CenterWeightedAverage",
                3: "Spot",
                4: "MultiSpot",
                5: "Pattern",
                6: "Partial",
                255: "Other"
            },
            LightSource: {
                0: "Unknown",
                1: "Daylight",
                2: "Fluorescent",
                3: "Tungsten (incandescent light)",
                4: "Flash",
                9: "Fine weather",
                10: "Cloudy weather",
                11: "Shade",
                12: "Daylight fluorescent (D 5700 - 7100K)",
                13: "Day white fluorescent (N 4600 - 5400K)",
                14: "Cool white fluorescent (W 3900 - 4500K)",
                15: "White fluorescent (WW 3200 - 3700K)",
                17: "Standard light A",
                18: "Standard light B",
                19: "Standard light C",
                20: "D55",
                21: "D65",
                22: "D75",
                23: "D50",
                24: "ISO studio tungsten",
                255: "Other"
            },
            Flash: {
                0: "Flash did not fire",
                1: "Flash fired",
                5: "Strobe return light not detected",
                7: "Strobe return light detected",
                9: "Flash fired, compulsory flash mode",
                13: "Flash fired, compulsory flash mode, return light not detected",
                15: "Flash fired, compulsory flash mode, return light detected",
                16: "Flash did not fire, compulsory flash mode",
                24: "Flash did not fire, auto mode",
                25: "Flash fired, auto mode",
                29: "Flash fired, auto mode, return light not detected",
                31: "Flash fired, auto mode, return light detected",
                32: "No flash function",
                65: "Flash fired, red-eye reduction mode",
                69: "Flash fired, red-eye reduction mode, return light not detected",
                71: "Flash fired, red-eye reduction mode, return light detected",
                73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                89: "Flash fired, auto mode, red-eye reduction mode",
                93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            SensingMethod: {
                1: "Undefined",
                2: "One-chip color area sensor",
                3: "Two-chip color area sensor",
                4: "Three-chip color area sensor",
                5: "Color sequential area sensor",
                7: "Trilinear sensor",
                8: "Color sequential linear sensor"
            },
            SceneCaptureType: {
                0: "Standard",
                1: "Landscape",
                2: "Portrait",
                3: "Night scene"
            },
            SceneType: {
                1: "Directly photographed"
            },
            CustomRendered: {
                0: "Normal process",
                1: "Custom process"
            },
            WhiteBalance: {
                0: "Auto white balance",
                1: "Manual white balance"
            },
            GainControl: {
                0: "None",
                1: "Low gain up",
                2: "High gain up",
                3: "Low gain down",
                4: "High gain down"
            },
            Contrast: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            Saturation: {
                0: "Normal",
                1: "Low saturation",
                2: "High saturation"
            },
            Sharpness: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            SubjectDistanceRange: {
                0: "Unknown",
                1: "Macro",
                2: "Close view",
                3: "Distant view"
            },
            FileSource: {
                3: "DSC"
            },
            ComponentsConfiguration: {
                0: "",
                1: "Y",
                2: "Cb",
                3: "Cr",
                4: "R",
                5: "G",
                6: "B"
            },
            Orientation: {
                1: "top-left",
                2: "top-right",
                3: "bottom-right",
                4: "bottom-left",
                5: "left-top",
                6: "right-top",
                7: "right-bottom",
                8: "left-bottom"
            }
        }, e.ExifMap.prototype.getText = function(e) {
            var t = this.get(e);
            switch (e) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                case "Orientation":
                    return this.stringValues[e][t];
                case "ExifVersion":
                case "FlashpixVersion":
                    return String.fromCharCode(t[0], t[1], t[2], t[3]);
                case "ComponentsConfiguration":
                    return this.stringValues[e][t[0]] + this.stringValues[e][t[1]] + this.stringValues[e][t[2]] + this.stringValues[e][t[3]];
                case "GPSVersionID":
                    return t[0] + "." + t[1] + "." + t[2] + "." + t[3]
            }
            return String(t)
        },
        function(e) {
            var t, n = e.tags,
                i = e.map;
            for (t in n) n.hasOwnProperty(t) && (i[n[t]] = t)
        }(e.ExifMap.prototype), e.ExifMap.prototype.getAll = function() {
            var e, t, n = {};
            for (e in this) this.hasOwnProperty(e) && ((t = this.tags[e]) && (n[t] = this.getText(t)));
            return n
        }
}),
function(e) {
    "use strict";
    var i = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
        o = e.Blob && function() {
            try {
                return Boolean(new Blob)
            } catch (e) {
                return !1
            }
        }(),
        l = o && e.Uint8Array && function() {
            try {
                return 100 === new Blob([new Uint8Array(100)]).size
            } catch (e) {
                return !1
            }
        }(),
        u = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
        r = (o || u) && e.atob && e.ArrayBuffer && e.Uint8Array && function(e) {
            var t, n, i, r, s, a;
            for (t = 0 <= e.split(",")[0].indexOf("base64") ? atob(e.split(",")[1]) : decodeURIComponent(e.split(",")[1]), n = new ArrayBuffer(t.length), i = new Uint8Array(n), r = 0; r < t.length; r += 1) i[r] = t.charCodeAt(r);
            return s = e.split(",")[0].split(":")[1].split(";")[0], o ? new Blob([l ? i : n], {
                type: s
            }) : ((a = new u).append(n), a.getBlob(s))
        };
    e.HTMLCanvasElement && !i.toBlob && (i.mozGetAsFile ? i.toBlob = function(e, t, n) {
        n && i.toDataURL && r ? e(r(this.toDataURL(t, n))) : e(this.mozGetAsFile("blob", t))
    } : i.toDataURL && r && (i.toBlob = function(e, t, n) {
        e(r(this.toDataURL(t, n)))
    })), "function" == typeof define && define.amd ? define(function() {
        return r
    }) : e.dataURLtoBlob = r
}(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    return e.ui = e.ui || {}, e.ui.version = "1.12.1"
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(e) {
    return e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function($) {
    return function() {
        function k(e, t, n) {
            return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
        }

        function x(e, t) {
            return parseInt($.css(e, t), 10) || 0
        }

        function t(e) {
            var t = e[0];
            return 9 === t.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : $.isWindow(t) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : t.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: t.pageY,
                    left: t.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        var r, C = Math.max,
            S = Math.abs,
            i = /left|center|right/,
            s = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            o = /^\w+/,
            l = /%$/,
            n = $.fn.position;
        $.position = {
            scrollbarWidth: function() {
                if (r !== undefined) return r;
                var e, t, n = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = n.children()[0];
                return $("body").append(n), e = i.offsetWidth, n.css("overflow", "scroll"), e === (t = i.offsetWidth) && (t = n[0].clientWidth), n.remove(), r = e - t
            },
            getScrollInfo: function(e) {
                var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    i = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? $.position.scrollbarWidth() : 0,
                    height: i ? $.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var t = $(e || window),
                    n = $.isWindow(t[0]),
                    i = !!t[0] && 9 === t[0].nodeType;
                return {
                    element: t,
                    isWindow: n,
                    isDocument: i,
                    offset: !n && !i ? $(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: t.scrollLeft(),
                    scrollTop: t.scrollTop(),
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }
            }
        }, $.fn.position = function(d) {
            if (!d || !d.of) return n.apply(this, arguments);
            d = $.extend({}, d);
            var h, f, p, m, g, e, v = $(d.of),
                y = $.position.getWithinInfo(d.within),
                b = $.position.getScrollInfo(y),
                _ = (d.collision || "flip").split(" "),
                w = {};
            return e = t(v), v[0].preventDefault && (d.at = "left top"), f = e.width, p = e.height, m = e.offset, g = $.extend({}, m), $.each(["my", "at"], function() {
                var e, t, n = (d[this] || "").split(" ");
                1 === n.length && (n = i.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = i.test(n[0]) ? n[0] : "center", n[1] = s.test(n[1]) ? n[1] : "center", e = a.exec(n[0]), t = a.exec(n[1]), w[this] = [e ? e[0] : 0, t ? t[0] : 0], d[this] = [o.exec(n[0])[0], o.exec(n[1])[0]]
            }), 1 === _.length && (_[1] = _[0]), "right" === d.at[0] ? g.left += f : "center" === d.at[0] && (g.left += f / 2), "bottom" === d.at[1] ? g.top += p : "center" === d.at[1] && (g.top += p / 2), h = k(w.at, f, p), g.left += h[0], g.top += h[1], this.each(function() {
                var n, e, a = $(this),
                    o = a.outerWidth(),
                    l = a.outerHeight(),
                    t = x(this, "marginLeft"),
                    i = x(this, "marginTop"),
                    r = o + t + x(this, "marginRight") + b.width,
                    s = l + i + x(this, "marginBottom") + b.height,
                    u = $.extend({}, g),
                    c = k(w.my, a.outerWidth(), a.outerHeight());
                "right" === d.my[0] ? u.left -= o : "center" === d.my[0] && (u.left -= o / 2), "bottom" === d.my[1] ? u.top -= l : "center" === d.my[1] && (u.top -= l / 2), u.left += c[0], u.top += c[1], n = {
                    marginLeft: t,
                    marginTop: i
                }, $.each(["left", "top"], function(e, t) {
                    $.ui.position[_[e]] && $.ui.position[_[e]][t](u, {
                        targetWidth: f,
                        targetHeight: p,
                        elemWidth: o,
                        elemHeight: l,
                        collisionPosition: n,
                        collisionWidth: r,
                        collisionHeight: s,
                        offset: [h[0] + c[0], h[1] + c[1]],
                        my: d.my,
                        at: d.at,
                        within: y,
                        elem: a
                    })
                }), d.using && (e = function(e) {
                    var t = m.left - u.left,
                        n = t + f - o,
                        i = m.top - u.top,
                        r = i + p - l,
                        s = {
                            target: {
                                element: v,
                                left: m.left,
                                top: m.top,
                                width: f,
                                height: p
                            },
                            element: {
                                element: a,
                                left: u.left,
                                top: u.top,
                                width: o,
                                height: l
                            },
                            horizontal: n < 0 ? "left" : 0 < t ? "right" : "center",
                            vertical: r < 0 ? "top" : 0 < i ? "bottom" : "middle"
                        };
                    f < o && S(t + n) < f && (s.horizontal = "center"), p < l && S(i + r) < p && (s.vertical = "middle"), C(S(t), S(n)) > C(S(i), S(r)) ? s.important = "horizontal" : s.important = "vertical", d.using.call(this, e, s)
                }), a.offset($.extend(u, {
                    using: e
                }))
            })
        }, $.ui.position = {
            fit: {
                left: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollLeft : i.offset.left,
                        s = i.width,
                        a = e.left - t.collisionPosition.marginLeft,
                        o = r - a,
                        l = a + t.collisionWidth - s - r;
                    t.collisionWidth > s ? 0 < o && l <= 0 ? (n = e.left + o + t.collisionWidth - s - r, e.left += o - n) : e.left = 0 < l && o <= 0 ? r : l < o ? r + s - t.collisionWidth : r : 0 < o ? e.left += o : 0 < l ? e.left -= l : e.left = C(e.left - a, e.left)
                },
                top: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollTop : i.offset.top,
                        s = t.within.height,
                        a = e.top - t.collisionPosition.marginTop,
                        o = r - a,
                        l = a + t.collisionHeight - s - r;
                    t.collisionHeight > s ? 0 < o && l <= 0 ? (n = e.top + o + t.collisionHeight - s - r, e.top += o - n) : e.top = 0 < l && o <= 0 ? r : l < o ? r + s - t.collisionHeight : r : 0 < o ? e.top += o : 0 < l ? e.top -= l : e.top = C(e.top - a, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var n, i, r = t.within,
                        s = r.offset.left + r.scrollLeft,
                        a = r.width,
                        o = r.isWindow ? r.scrollLeft : r.offset.left,
                        l = e.left - t.collisionPosition.marginLeft,
                        u = l - o,
                        c = l + t.collisionWidth - a - o,
                        d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        h = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    u < 0 ? ((n = e.left + d + h + f + t.collisionWidth - a - s) < 0 || n < S(u)) && (e.left += d + h + f) : 0 < c && (0 < (i = e.left - t.collisionPosition.marginLeft + d + h + f - o) || S(i) < c) && (e.left += d + h + f)
                },
                top: function(e, t) {
                    var n, i, r = t.within,
                        s = r.offset.top + r.scrollTop,
                        a = r.height,
                        o = r.isWindow ? r.scrollTop : r.offset.top,
                        l = e.top - t.collisionPosition.marginTop,
                        u = l - o,
                        c = l + t.collisionHeight - a - o,
                        d = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        f = -2 * t.offset[1];
                    u < 0 ? ((i = e.top + d + h + f + t.collisionHeight - a - s) < 0 || i < S(u)) && (e.top += d + h + f) : 0 < c && (0 < (n = e.top - t.collisionPosition.marginTop + d + h + f - o) || S(n) < c) && (e.top += d + h + f)
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), $.ui.position
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(e) {
    return e.ui.safeActiveElement = function(e) {
        var t;
        try {
            t = e.activeElement
        } catch (n) {
            t = e.body
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(e) {
    return e.fn.extend({
        uniqueId: (t = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++t)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    });
    var t
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(c) {
    var s, n = 0,
        o = Array.prototype.slice;
    return c.cleanData = (s = c.cleanData, function(e) {
        var t, n, i;
        for (i = 0; null != (n = e[i]); i++) try {
            (t = c._data(n, "events")) && t.remove && c(n).triggerHandler("remove")
        } catch (r) {}
        s(e)
    }), c.widget = function(e, n, t) {
        var i, r, s, a = {},
            o = e.split(".")[0],
            l = o + "-" + (e = e.split(".")[1]);
        return t || (t = n, n = c.Widget), c.isArray(t) && (t = c.extend.apply(null, [{}].concat(t))), c.expr[":"][l.toLowerCase()] = function(e) {
            return !!c.data(e, l)
        }, c[o] = c[o] || {}, i = c[o][e], r = c[o][e] = function(e, t) {
            if (!this._createWidget) return new r(e, t);
            arguments.length && this._createWidget(e, t)
        }, c.extend(r, i, {
            version: t.version,
            _proto: c.extend({}, t),
            _childConstructors: []
        }), (s = new n).options = c.widget.extend({}, s.options), c.each(t, function(t, s) {
            c.isFunction(s) ? a[t] = function() {
                function i() {
                    return n.prototype[t].apply(this, arguments)
                }

                function r(e) {
                    return n.prototype[t].apply(this, e)
                }
                return function() {
                    var e, t = this._super,
                        n = this._superApply;
                    return this._super = i, this._superApply = r, e = s.apply(this, arguments), this._super = t, this._superApply = n, e
                }
            }() : a[t] = s
        }), r.prototype = c.widget.extend(s, {
            widgetEventPrefix: i && s.widgetEventPrefix || e
        }, a, {
            constructor: r,
            namespace: o,
            widgetName: e,
            widgetFullName: l
        }), i ? (c.each(i._childConstructors, function(e, t) {
            var n = t.prototype;
            c.widget(n.namespace + "." + n.widgetName, r, t._proto)
        }), delete i._childConstructors) : n._childConstructors.push(r), c.widget.bridge(e, r), r
    }, c.widget.extend = function(e) {
        for (var t, n, i = o.call(arguments, 1), r = 0, s = i.length; r < s; r++)
            for (t in i[r]) n = i[r][t], i[r].hasOwnProperty(t) && n !== undefined && (c.isPlainObject(n) ? e[t] = c.isPlainObject(e[t]) ? c.widget.extend({}, e[t], n) : c.widget.extend({}, n) : e[t] = n);
        return e
    }, c.widget.bridge = function(s, t) {
        var a = t.prototype.widgetFullName || s;
        c.fn[s] = function(n) {
            var e = "string" == typeof n,
                i = o.call(arguments, 1),
                r = this;
            return e ? this.length || "instance" !== n ? this.each(function() {
                var e, t = c.data(this, a);
                return "instance" === n ? (r = t, !1) : t ? c.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && e !== undefined ? (r = e && e.jquery ? r.pushStack(e.get()) : e, !1) : void 0 : c.error("no such method '" + n + "' for " + s + " widget instance") : c.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + n + "'")
            }) : r = undefined : (i.length && (n = c.widget.extend.apply(null, [n].concat(i))), this.each(function() {
                var e = c.data(this, a);
                e ? (e.option(n || {}), e._init && e._init()) : c.data(this, a, new t(n, this))
            })), r
        }
    }, c.Widget = function() {}, c.Widget._childConstructors = [], c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, t) {
            t = c(t || this.defaultElement || this)[0], this.element = c(t), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = c(), this.hoverable = c(), this.focusable = c(), this.classesElementLookup = {}, t !== this && (c.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === t && this.destroy()
                }
            }), this.document = c(t.style ? t.ownerDocument : t.document || t), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)), this.options = c.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function() {
            var n = this;
            this._destroy(), c.each(this.classesElementLookup, function(e, t) {
                n._removeClass(t, e)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: c.noop,
        widget: function() {
            return this.element
        },
        option: function(e, t) {
            var n, i, r, s = e;
            if (0 === arguments.length) return c.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (s = {}, e = (n = e.split(".")).shift(), n.length) {
                    for (i = s[e] = c.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) i[n[r]] = i[n[r]] || {}, i = i[n[r]];
                    if (e = n.pop(), 1 === arguments.length) return i[e] === undefined ? null : i[e];
                    i[e] = t
                } else {
                    if (1 === arguments.length) return this.options[e] === undefined ? null : this.options[e];
                    s[e] = t
                } return this._setOptions(s), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
        },
        _setOptionClasses: function(e) {
            var t, n, i;
            for (t in e) i = this.classesElementLookup[t], e[t] !== this.options.classes[t] && i && i.length && (n = c(i.get()), this._removeClass(i, t), n.addClass(this._classes({
                element: n,
                keys: t,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(r) {
            function e(e, t) {
                var n, i;
                for (i = 0; i < e.length; i++) n = a.classesElementLookup[e[i]] || c(), n = r.add ? c(c.unique(n.get().concat(r.element.get()))) : c(n.not(r.element).get()), a.classesElementLookup[e[i]] = n, s.push(e[i]), t && r.classes[e[i]] && s.push(r.classes[e[i]])
            }
            var s = [],
                a = this;
            return r = c.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, r), this._on(r.element, {
                remove: "_untrackClassesElement"
            }), r.keys && e(r.keys.match(/\S+/g) || [], !0), r.extra && e(r.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(n) {
            var i = this;
            c.each(i.classesElementLookup, function(e, t) {
                -1 !== c.inArray(n.target, t) && (i.classesElementLookup[e] = c(t.not(n.target).get()))
            })
        },
        _removeClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !1)
        },
        _addClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !0)
        },
        _toggleClass: function(e, t, n, i) {
            i = "boolean" == typeof i ? i : n;
            var r = "string" == typeof e || null === e,
                s = {
                    extra: r ? t : n,
                    keys: r ? e : t,
                    element: r ? this.element : e,
                    add: i
                };
            return s.element.toggleClass(
                this._classes(s), i), this
        },
        _on: function(a, o, e) {
            var l, u = this;
            "boolean" != typeof a && (e = o, o = a, a = !1), e ? (o = l = c(o), this.bindings = this.bindings.add(o)) : (e = o, o = this.element, l = this.widget()), c.each(e, function(e, t) {
                function n() {
                    if (a || !0 !== u.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? u[t] : t).apply(u, arguments)
                }
                "string" != typeof t && (n.guid = t.guid = t.guid || n.guid || c.guid++);
                var i = e.match(/^([\w:-]*)\s*(.*)$/),
                    r = i[1] + u.eventNamespace,
                    s = i[2];
                s ? l.on(r, s, n) : o.on(r, n)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t).off(t), this.bindings = c(this.bindings.not(e).get()), this.focusable = c(this.focusable.not(e).get()), this.hoverable = c(this.hoverable.not(e).get())
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(c(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(c(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(c(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(c(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, t, n) {
            var i, r, s = this.options[e];
            if (n = n || {}, (t = c.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], r = t.originalEvent)
                for (i in r) i in t || (t[i] = r[i]);
            return this.element.trigger(t, n), !(c.isFunction(s) && !1 === s.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
        }
    }, c.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, a) {
        c.Widget.prototype["_" + s] = function(t, e, n) {
            var i;
            "string" == typeof e && (e = {
                effect: e
            });
            var r = e ? !0 === e || "number" == typeof e ? a : e.effect || a : s;
            "number" == typeof(e = e || {}) && (e = {
                duration: e
            }), i = !c.isEmptyObject(e), e.complete = n, e.delay && t.delay(e.delay), i && c.effects && c.effects.effect[r] ? t[s](e) : r !== s && t[r] ? t[r](e.duration, e.easing, n) : t.queue(function(e) {
                c(this)[s](), n && n.call(t[0]), e()
            })
        }
    }), c.widget
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], e) : e(jQuery)
}(function(o) {
    return o.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var t = o(e.target),
                        n = o(o.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var t = o(e.target).closest(".ui-menu-item"),
                            n = o(e.currentTarget);
                        t[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, n)
                },
                blur: function(e) {
                    this._delay(function() {
                        !o.contains(this.element[0], o.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                var e = o(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var t, n, i, r, s = !0;
            switch (e.keyCode) {
                case o.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case o.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case o.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case o.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case o.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case o.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case o.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case o.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case o.ui.keyCode.ENTER:
                case o.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case o.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    s = !1, n = this.previousFilter || "", r = !1, i = 96 <= e.keyCode && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), i === n ? r = !0 : i = n + i, t = this._filterMenuItems(i), (t = r && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (i = String.fromCharCode(e.keyCode), t = this._filterMenuItems(i)), t.length ? (this.focus(e, t), this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            s && e.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var e, t, n, i, r = this,
                s = this.options.icons.submenu,
                a = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), t = a.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = o(this),
                    t = e.prev(),
                    n = o("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(n, "ui-menu-icon", "ui-icon " + s), t.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", t.attr("id"))
            }), this._addClass(t, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = o(this);
                r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), i = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(n, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !o.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(e, t) {
            if ("icons" === e) {
                var n = this.element.find(".ui-menu-icon");
                this._removeClass(n, null, this.options.icons.submenu)._addClass(n, null, t.submenu)
            }
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var n, i, r;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), r = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(r, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (n = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(e) {
            var t, n, i, r, s, a;
            this._hasScroll() && (t = parseFloat(o.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(o.css(this.activeMenu[0], "paddingTop")) || 0, i = e.offset().top - this.activeMenu.offset().top - t - n, r = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = e.outerHeight(), i < 0 ? this.activeMenu.scrollTop(r + i) : s < i + a && this.activeMenu.scrollTop(r + i - s + a))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function(e) {
            var t = o.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var e = n ? this.element : o(t && t.target).closest(this.element.find(".ui-menu"));
                e.length || (e = this.element), this._close(e), this.blur(t), this._removeClass(e.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = e
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !o(e.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var i;
            this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), this.focus(n, i)
        },
        nextPage: function(e) {
            var t, n, i;
            this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (t = o(this)).offset().top - n - i < 0
            }), this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e)
        },
        previousPage: function(e) {
            var t, n, i;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (t = o(this)).offset().top - n + i
            }), this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || o(e.target).closest(".ui-menu-item");
            var t = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t)
        },
        _filterMenuItems: function(e) {
            var t = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = new RegExp("^" + t, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return n.test(o.trim(o(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], e) : e(jQuery)
}(function(a) {
    return a.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var n, i, r, e = this.element[0].nodeName.toLowerCase(),
                t = "textarea" === e,
                s = "input" === e;
            this.isMultiLine = t || !s && this._isContentEditable(this.element), this.valueMethod = this.element[t || s ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) i = r = n = !0;
                    else {
                        i = r = n = !1;
                        var t = a.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                n = !0, this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                n = !0, this._move("nextPage", e);
                                break;
                            case t.UP:
                                n = !0, this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                n = !0, this._keyEvent("next", e);
                                break;
                            case t.ENTER:
                                this.menu.active && (n = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case t.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case t.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(e)
                        }
                    }
                },
                keypress: function(e) {
                    if (n) return n = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault());
                    if (!i) {
                        var t = a.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                this._move("nextPage", e);
                                break;
                            case t.UP:
                                this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                this._keyEvent("next", e)
                        }
                    }
                },
                input: function(e) {
                    if (r) return r = !1, void e.preventDefault();
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), this._change(e))
                }
            }), this._initSource(), this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== a.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, t) {
                    var n, i;
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        a(e.target).trigger(e.originalEvent)
                    });
                    i = t.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: i
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(i.value), (n = t.item.attr("aria-label") || i.value) && a.trim(n).length && (this.liveRegion.children().hide(), a("<div>").text(n).appendTo(this.liveRegion))
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item"),
                        i = this.previous;
                    this.element[0] !== a.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = i, this._delay(function() {
                        this.previous = i, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = a("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var t = this.menu.element[0];
            return e.target === this.element[0] || e.target === t || a.contains(t, e.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? a(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var n, i, r = this;
            a.isArray(this.options.source) ? (n = this.options.source, this.source = function(e, t) {
                t(a.ui.autocomplete.filter(n, e.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, t) {
                r.xhr && r.xhr.abort(), r.xhr = a.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        t(e)
                    },
                    error: function() {
                        t([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(i) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    t = this.menu.element.is(":visible"),
                    n = i.altKey || i.ctrlKey || i.metaKey || i.shiftKey;
                e && (!e || t || n) || (this.selectedItem = null, this.search(null, i))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return a.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : a.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : a.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var t = this.menu.element.empty();
            this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(n, e) {
            var i = this;
            a.each(e, function(e, t) {
                i._renderItemData(n, t)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(e, t) {
            return a("<li>").append(a("<div>").text(t.label)).appendTo(e)
        },
        _move: function(e, t) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
            this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
        },
        _isContentEditable: function(e) {
            if (!e.length) return !1;
            var t = e.prop("contentEditable");
            return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, t) {
            var n = new RegExp(a.ui.autocomplete.escapeRegex(t), "i");
            return a.grep(e, function(e) {
                return n.test(e.label || e.value || e)
            })
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(t).appendTo(this.liveRegion))
        }
    }), a.ui.autocomplete
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], e) : e(jQuery)
}(function(x) {
    function l(e) {
        for (var t, n; e.length && e[0] !== document;) {
            if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
            e = e.parent()
        }
        return 0
    }

    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, x.extend(this._defaults, this.regional[""]), this.regional.en = x.extend(!0, {}, this.regional[""]), this.regional["en-US"] = x.extend(!0, {}, this.regional.en), this.dpDiv = n(x("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", t, function() {
            x(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", t, a)
    }

    function a() {
        x.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (x(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), x(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).addClass("ui-datepicker-next-hover"))
    }

    function d(e, t) {
        for (var n in x.extend(e, t), t) null == t[n] && (e[n] = t[n]);
        return e
    }
    var o;
    return x.extend(x.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }), x.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return d(this._defaults, e || {}), this
        },
        _attachDatepicker: function(e, t) {
            var n, i, r;
            i = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (r = this._newInst(x(e), i)).settings = x.extend({}, t || {}), "input" === n ? this._connectDatepicker(e, r) : i && this._inlineDatepicker(e, r)
        },
        _newInst: function(e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? n(x("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, t) {
            var n = x(e);
            t.append = x([]), t.trigger = x([]), n.hasClass(this.markerClassName) || (this._attachments(n, t), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(t), x.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, t) {
            var n, i, r, s = this._get(t, "appendText"),
                a = this._get(t, "isRTL");
            t.append && t.append.remove(), s && (t.append = x("<span class='" + this._appendClass + "'>" + s + "</span>"), e[a ? "before" : "after"](t.append)), e.off("focus", this._showDatepicker), t.trigger && t.trigger.remove(), "focus" !== (n = this._get(t, "showOn")) && "both" !== n || e.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (i = this._get(t, "buttonText"), r = this._get(t, "buttonImage"), t.trigger = x(this._get(t, "buttonImageOnly") ? x("<img/>").addClass(this._triggerClass).attr({
                src: r,
                alt: i,
                title: i
            }) : x("<button type='button'></button>").addClass(this._triggerClass).html(r ? x("<img/>").attr({
                src: r,
                alt: i,
                title: i
            }) : i)), e[a ? "before" : "after"](t.trigger), t.trigger.on("click", function() {
                return x.datepicker._datepickerShowing && x.datepicker._lastInput === e[0] ? x.datepicker._hideDatepicker() : (x.datepicker._datepickerShowing && x.datepicker._lastInput !== e[0] && x.datepicker._hideDatepicker(), x.datepicker._showDatepicker(e[0])), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, i, r, s = new Date(2009, 11, 20),
                    a = this._get(e, "dateFormat");
                a.match(/[DM]/) && (t = function(e) {
                    for (r = i = n = 0; r < e.length; r++) e[r].length > n && (n = e[r].length, i = r);
                    return i
                }, s.setMonth(t(this._get(e, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(e, t) {
            var n = x(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(t.dpDiv), x.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, t, n, i, r) {
            var s, a, o, l, u, c = this._dialogInst;
            return c || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = x("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), x("body").append(this._dialogInput), (c = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, x.data(this._dialogInput[0], "datepicker", c)), d(c.settings, i || {}), t = t && t.constructor === Date ? this._formatDate(c, t) : t, this._dialogInput.val(t), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (a = document.documentElement.clientWidth, o = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + l, o / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), x.blockUI && x.blockUI(this.dpDiv), x.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function(e) {
            var t, n = x(e),
                i = x.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), x.removeData(e, "datepicker"), "input" === t ? (i.append.remove(), i.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== t && "span" !== t || n.removeClass(this.markerClassName).empty(), o === i && (o = null))
        },
        _enableDatepicker: function(t) {
            var e, n, i = x(t),
                r = x.data(t, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !1, r.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== e && "span" !== e || ((n = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = x.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var e, n, i = x(t),
                r = x.data(t, "datepicker");
            i.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !0, r.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== e && "span" !== e || ((n = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = x.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return x.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, n) {
            var i, r, s, a, o = this._getInst(e);
            if (2 === arguments.length && "string" == typeof t) return "defaults" === t ? x.extend({}, x.datepicker._defaults) : o ? "all" === t ? x.extend({}, o.settings) : this._get(o, t) : null;
            i = t || {}, "string" == typeof t && ((i = {})[t] = n), o && (this._curInst === o && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), s = this._getMinMaxDate(o, "min"), a = this._getMinMaxDate(o, "max"), d(o.settings, i), null !== s && i.dateFormat !== undefined && i.minDate === undefined && (o.settings.minDate = this._formatDate(o, s)), null !== a && i.dateFormat !== undefined && i.maxDate === undefined && (o.settings.maxDate = this._formatDate(o, a)), "disabled" in i && (i.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(x(e), o), this._autoSize(o), this._setDate(o, r), this._updateAlternate(o), this._updateDatepicker(o))
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function(e) {
            var t, n, i, r = x.datepicker._getInst(e.target),
                s = !0,
                a = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, x.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    x.datepicker._hideDatepicker(), s = !1;
                    break;
                case 13:
                    return (i = x("td." + x.datepicker._dayOverClass + ":not(." + x.datepicker._currentClass + ")", r.dpDiv))[0] && x.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, i[0]), (t = x.datepicker._get(r, "onSelect")) ? (n = x.datepicker._formatDate(r), t.apply(r.input ? r.input[0] : null, [n, r])) : x.datepicker._hideDatepicker(), !1;
                case 27:
                    x.datepicker._hideDatepicker();
                    break;
                case 33:
                    x.datepicker._adjustDate(e.target, e.ctrlKey ? -x.datepicker._get(r, "stepBigMonths") : -x.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 34:
                    x.datepicker._adjustDate(e.target, e.ctrlKey ? +x.datepicker._get(r, "stepBigMonths") : +x.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && x.datepicker._clearDate(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && x.datepicker._gotoToday(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && x.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && x.datepicker._adjustDate(e.target, e.ctrlKey ? -x.datepicker._get(r, "stepBigMonths") : -x.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && x.datepicker._adjustDate(e.target, -7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && x.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && x.datepicker._adjustDate(e.target, e.ctrlKey ? +x.datepicker._get(r, "stepBigMonths") : +x.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && x.datepicker._adjustDate(e.target, 7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                default:
                    s = !1
            } else 36 === e.keyCode && e.ctrlKey ? x.datepicker._showDatepicker(this) : s = !1;
            s && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t, n, i = x.datepicker._getInst(e.target);
            if (x.datepicker._get(i, "constrainInput")) return t = x.datepicker._possibleChars(x.datepicker._get(i, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !t || -1 < t.indexOf(n)
        },
        _doKeyUp: function(e) {
            var t = x.datepicker._getInst(e.target);
            if (t.input.val() !== t.lastVal) try {
                x.datepicker.parseDate(x.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, x.datepicker._getFormatConfig(t)) && (
                    x.datepicker._setDateFromField(t), x.datepicker._updateAlternate(t), x.datepicker._updateDatepicker(t))
            } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            var t, n, i, r, s, a, o;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = x("input", e.parentNode)[0]), x.datepicker._isDisabledDatepicker(e) || x.datepicker._lastInput === e) || (t = x.datepicker._getInst(e), x.datepicker._curInst && x.datepicker._curInst !== t && (x.datepicker._curInst.dpDiv.stop(!0, !0), t && x.datepicker._datepickerShowing && x.datepicker._hideDatepicker(x.datepicker._curInst.input[0])), !1 !== (i = (n = x.datepicker._get(t, "beforeShow")) ? n.apply(e, [e, t]) : {}) && (d(t.settings, i), t.lastVal = null, x.datepicker._lastInput = e, x.datepicker._setDateFromField(t), x.datepicker._inDialog && (e.value = ""), x.datepicker._pos || (x.datepicker._pos = x.datepicker._findPos(e), x.datepicker._pos[1] += e.offsetHeight), r = !1, x(e).parents().each(function() {
                return !(r |= "fixed" === x(this).css("position"))
            }), s = {
                left: x.datepicker._pos[0],
                top: x.datepicker._pos[1]
            }, x.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), x.datepicker._updateDatepicker(t), s = x.datepicker._checkOffset(t, s, r), t.dpDiv.css({
                position: x.datepicker._inDialog && x.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px"
            }), t.inline || (a = x.datepicker._get(t, "showAnim"), o = x.datepicker._get(t, "duration"), t.dpDiv.css("z-index", l(x(e)) + 1), x.datepicker._datepickerShowing = !0, x.effects && x.effects.effect[a] ? t.dpDiv.show(a, x.datepicker._get(t, "showOptions"), o) : t.dpDiv[a || "show"](a ? o : null), x.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), x.datepicker._curInst = t)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, (o = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var t, n = this._getNumberOfMonths(e),
                i = n[1],
                r = 17,
                s = e.dpDiv.find("." + this._dayOverClass + " a");
            0 < s.length && a.apply(s.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < i && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", r * i + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === x.datepicker._curInst && x.datepicker._datepickerShowing && x.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (t = e.yearshtml, setTimeout(function() {
                t === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), t = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(e, t, n) {
            var i = e.dpDiv.outerWidth(),
                r = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                o = document.documentElement.clientWidth + (n ? 0 : x(document).scrollLeft()),
                l = document.documentElement.clientHeight + (n ? 0 : x(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? i - s : 0, t.left -= n && t.left === e.input.offset().left ? x(document).scrollLeft() : 0, t.top -= n && t.top === e.input.offset().top + a ? x(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + i > o && i < o ? Math.abs(t.left + i - o) : 0), t.top -= Math.min(t.top, t.top + r > l && r < l ? Math.abs(r + a) : 0), t
        },
        _findPos: function(e) {
            for (var t, n = this._getInst(e), i = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || x.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
            return [(t = x(e).offset()).left, t.top]
        },
        _hideDatepicker: function(e) {
            var t, n, i, r, s = this._curInst;
            !s || e && s !== x.data(e, "datepicker") || this._datepickerShowing && (t = this._get(s, "showAnim"), n = this._get(s, "duration"), i = function() {
                x.datepicker._tidyDialog(s)
            }, x.effects && (x.effects.effect[t] || x.effects[t]) ? s.dpDiv.hide(t, x.datepicker._get(s, "showOptions"), n, i) : s.dpDiv["slideDown" === t ? "slideUp" : "fadeIn" === t ? "fadeOut" : "hide"](t ? n : null, i), t || i(), this._datepickerShowing = !1, (r = this._get(s, "onClose")) && r.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), x.blockUI && (x.unblockUI(), x("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (x.datepicker._curInst) {
                var t = x(e.target),
                    n = x.datepicker._getInst(t[0]);
                (t[0].id === x.datepicker._mainDivId || 0 !== t.parents("#" + x.datepicker._mainDivId).length || t.hasClass(x.datepicker.markerClassName) || t.closest("." + x.datepicker._triggerClass).length || !x.datepicker._datepickerShowing || x.datepicker._inDialog && x.blockUI) && (!t.hasClass(x.datepicker.markerClassName) || x.datepicker._curInst === n) || x.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, t, n) {
            var i = x(e),
                r = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(r, t + ("M" === n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        },
        _gotoToday: function(e) {
            var t, n = x(e),
                i = this._getInst(n[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (t = new Date, i.selectedDay = t.getDate(), i.drawMonth = i.selectedMonth = t.getMonth(), i.drawYear = i.selectedYear = t.getFullYear()), this._notifyChange(i), this._adjustDate(n)
        },
        _selectMonthYear: function(e, t, n) {
            var i = x(e),
                r = this._getInst(i[0]);
            r["selected" + ("M" === n ? "Month" : "Year")] = r["draw" + ("M" === n ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(i)
        },
        _selectDay: function(e, t, n, i) {
            var r, s = x(e);
            x(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || ((r = this._getInst(s[0])).selectedDay = r.currentDay = x("a", i).html(), r.selectedMonth = r.currentMonth = t, r.selectedYear = r.currentYear = n, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function(e) {
            var t = x(e);
            this._selectDate(t, "")
        },
        _selectDate: function(e, t) {
            var n, i = x(e),
                r = this._getInst(i[0]);
            t = null != t ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r), (n = this._get(r, "onSelect")) ? n.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t, n, i, r = this._get(e, "altField");
            r && (t = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), i = this.formatDate(t, n, this._getFormatConfig(e)), x(r).val(i))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [0 < t && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(n, s, e) {
            if (null == n || null == s) throw "Invalid arguments";
            if ("" === (s = "object" == typeof s ? s.toString() : s + "")) return null;
            var i, t, r, a, o = 0,
                l = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                c = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (e ? e.dayNames : null) || this._defaults.dayNames,
                h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (e ? e.monthNames : null) || this._defaults.monthNames,
                p = -1,
                m = -1,
                g = -1,
                v = -1,
                y = !1,
                b = function(e) {
                    var t = i + 1 < n.length && n.charAt(i + 1) === e;
                    return t && i++, t
                },
                _ = function(e) {
                    var t = b(e),
                        n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        i = new RegExp("^\\d{" + ("y" === e ? n : 1) + "," + n + "}"),
                        r = s.substring(o).match(i);
                    if (!r) throw "Missing number at position " + o;
                    return o += r[0].length, parseInt(r[0], 10)
                },
                w = function(e, t, n) {
                    var i = -1,
                        r = x.map(b(e) ? n : t, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (x.each(r, function(e, t) {
                            var n = t[1];
                            if (s.substr(o, n.length).toLowerCase() === n.toLowerCase()) return i = t[0], o += n.length, !1
                        }), -1 !== i) return i + 1;
                    throw "Unknown name at position " + o
                },
                k = function() {
                    if (s.charAt(o) !== n.charAt(i)) throw "Unexpected literal at position " + o;
                    o++
                };
            for (i = 0; i < n.length; i++)
                if (y) "'" !== n.charAt(i) || b("'") ? k() : y = !1;
                else switch (n.charAt(i)) {
                    case "d":
                        g = _("d");
                        break;
                    case "D":
                        w("D", c, d);
                        break;
                    case "o":
                        v = _("o");
                        break;
                    case "m":
                        m = _("m");
                        break;
                    case "M":
                        m = w("M", h, f);
                        break;
                    case "y":
                        p = _("y");
                        break;
                    case "@":
                        p = (a = new Date(_("@"))).getFullYear(), m = a.getMonth() + 1, g = a.getDate();
                        break;
                    case "!":
                        p = (a = new Date((_("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = a.getMonth() + 1, g = a.getDate();
                        break;
                    case "'":
                        b("'") ? k() : y = !0;
                        break;
                    default:
                        k()
                }
            if (o < s.length && (r = s.substr(o), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === p ? p = (new Date).getFullYear() : p < 100 && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= u ? 0 : -100)), -1 < v)
                for (m = 1, g = v;;) {
                    if (g <= (t = this._getDaysInMonth(p, m - 1))) break;
                    m++, g -= t
                }
            if ((a = this._daylightSavingAdjust(new Date(p, m - 1, g))).getFullYear() !== p || a.getMonth() + 1 !== m || a.getDate() !== g) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(n, e, t) {
            if (!e) return "";
            var i, r = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (t ? t.dayNames : null) || this._defaults.dayNames,
                a = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (t ? t.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var t = i + 1 < n.length && n.charAt(i + 1) === e;
                    return t && i++, t
                },
                u = function(e, t, n) {
                    var i = "" + t;
                    if (l(e))
                        for (; i.length < n;) i = "0" + i;
                    return i
                },
                c = function(e, t, n, i) {
                    return l(e) ? i[t] : n[t]
                },
                d = "",
                h = !1;
            if (e)
                for (i = 0; i < n.length; i++)
                    if (h) "'" !== n.charAt(i) || l("'") ? d += n.charAt(i) : h = !1;
                    else switch (n.charAt(i)) {
                        case "d":
                            d += u("d", e.getDate(), 2);
                            break;
                        case "D":
                            d += c("D", e.getDay(), r, s);
                            break;
                        case "o":
                            d += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += u("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += c("M", e.getMonth(), a, o);
                            break;
                        case "y":
                            d += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            d += e.getTime();
                            break;
                        case "!":
                            d += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? d += "'" : h = !0;
                            break;
                        default:
                            d += n.charAt(i)
                    }
            return d
        },
        _possibleChars: function(n) {
            var i, e = "",
                t = !1,
                r = function(e) {
                    var t = i + 1 < n.length && n.charAt(i + 1) === e;
                    return t && i++, t
                };
            for (i = 0; i < n.length; i++)
                if (t) "'" !== n.charAt(i) || r("'") ? e += n.charAt(i) : t = !1;
                else switch (n.charAt(i)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        e += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        r("'") ? e += "'" : t = !0;
                        break;
                    default:
                        e += n.charAt(i)
                }
            return e
        },
        _get: function(e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    r = this._getDefaultDate(e),
                    s = r,
                    a = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, i, a) || r
                } catch (o) {
                    i = t ? "" : i
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = i ? s.getDate() : 0, e.currentMonth = i ? s.getMonth() : 0, e.currentYear = i ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(l, e, t) {
            var n = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                i = null == e || "" === e ? t : "string" == typeof e ? function(e) {
                    try {
                        return x.datepicker.parseDate(x.datepicker._get(l, "dateFormat"), e, x.datepicker._getFormatConfig(l))
                    } catch (o) {}
                    for (var t = (e.toLowerCase().match(/^c/) ? x.datepicker._getDate(l) : null) || new Date, n = t.getFullYear(), i = t.getMonth(), r = t.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = s.exec(e); a;) {
                        switch (a[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(a[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(a[1], 10);
                                break;
                            case "m":
                            case "M":
                                i += parseInt(a[1], 10), r = Math.min(r, x.datepicker._getDaysInMonth(n, i));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(a[1], 10), r = Math.min(r, x.datepicker._getDaysInMonth(n, i))
                        }
                        a = s.exec(e)
                    }
                    return new Date(n, i, r)
                }(e) : "number" == typeof e ? isNaN(e) ? t : n(e) : new Date(e.getTime());
            return (i = i && "Invalid Date" === i.toString() ? t : i) && (i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0)), this._daylightSavingAdjust(i)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var i = !t,
                r = e.selectedMonth,
                s = e.selectedYear,
                a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = a.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(), e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(), r === e.selectedMonth && s === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _attachHandlers: function(e) {
            var t = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        x.datepicker._adjustDate(n, -t, "M")
                    },
                    next: function() {
                        x.datepicker._adjustDate(n, +t, "M")
                    },
                    hide: function() {
                        x.datepicker._hideDatepicker()
                    },
                    today: function() {
                        x.datepicker._gotoToday(n)
                    },
                    selectDay: function() {
                        return x.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return x.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function() {
                        return x.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                x(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, i, r, s, a, o, l, u, c, d, h, f, p, m, g, v, y, b, _, w, k, x, C, S, $, D, j, T, A, F, M, I, E, P, O, N, R, H, L = new Date,
                z = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                B = this._get(e, "isRTL"),
                q = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                V = this._get(e, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(e),
                Y = this._get(e, "showCurrentAtPos"),
                Q = this._get(e, "stepMonths"),
                G = 1 !== U[0] || 1 !== U[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(e, "min"),
                K = this._getMinMaxDate(e, "max"),
                J = e.drawMonth - Y,
                ee = e.drawYear;
            if (J < 0 && (J += 12, ee--), K)
                for (t = this._daylightSavingAdjust(new Date(K.getFullYear(), K.getMonth() - U[0] * U[1] + 1, K.getDate())), t = Z && t < Z ? Z : t; this._daylightSavingAdjust(new Date(ee, J, 1)) > t;) --J < 0 && (J = 11, ee--);
            for (e.drawMonth = J, e.drawYear = ee, n = this._get(e, "prevText"), n = V ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, J - Q, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = V ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, J + Q, 1)), this._getFormatConfig(e)) : r, s = this._canAdjustMonth(e, 1, ee, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + r + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + r + "</span></a>", a = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? X : z, a = V ? this.formatDate(a, o, this._getFormatConfig(e)) : a, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), h = this._get(e, "dayNames"), f = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; k < U[0]; k++) {
                for (x = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (S = this._daylightSavingAdjust(new Date(ee, J, e.selectedDay)), $ = " ui-corner-all", D = "", G) {
                        if (D += "<div class='ui-datepicker-group", 1 < U[1]) switch (C) {
                            case 0:
                                D += " ui-datepicker-group-first", $ = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case U[1] - 1:
                                D += " ui-datepicker-group-last", $ = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", $ = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + $ + "'>" + (/all|left/.test($) && 0 === k ? B ? s : i : "") + (/all|right/.test($) && 0 === k ? B ? i : s : "") + this._generateMonthYearHeader(e, J, ee, Z, K, 0 < k || 0 < C, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", j = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) j += "<th scope='col'" + (5 <= (w + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[T = (w + c) % 7] + "'>" + f[T] + "</span></th>";
                    for (D += j + "</tr></thead><tbody>", A = this._getDaysInMonth(ee, J), ee === e.selectedYear && J === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), F = (this._getFirstDayOfMonth(ee, J) - c + 7) % 7, M = Math.ceil((F + A) / 7), I = G && this.maxRows > M ? this.maxRows : M, this.maxRows = I, E = this._daylightSavingAdjust(new Date(ee, J, 1 - F)), P = 0; P < I; P++) {
                        for (D += "<tr>", O = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(E) + "</td>" : "", w = 0; w < 7; w++) N = g ? g.apply(e.input ? e.input[0] : null, [E]) : [!0, ""], H = (R = E.getMonth() !== J) && !y || !N[0] || Z && E < Z || K && K < E, O += "<td class='" + (5 <= (w + c + 6) % 7 ? " ui-datepicker-week-end" : "") + (R ? " ui-datepicker-other-month" : "") + (E.getTime() === S.getTime() && J === e.selectedMonth && e._keyEvent || b.getTime() === E.getTime() && b.getTime() === S.getTime() ? " " + this._dayOverClass : "") + (H ? " " + this._unselectableClass + " ui-state-disabled" : "") + (R && !v ? "" : " " + N[1] + (E.getTime() === X.getTime() ? " " + this._currentClass : "") + (E.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (R && !v || !N[2] ? "" : " title='" + N[2].replace(/'/g, "&#39;") + "'") + (H ? "" : " data-handler='selectDay' data-event='click' data-month='" + E.getMonth() + "' data-year='" + E.getFullYear() + "'") + ">" + (R && !v ? "&#xa0;" : H ? "<span class='ui-state-default'>" + E.getDate() + "</span>" : "<a class='ui-state-default" + (E.getTime() === z.getTime() ? " ui-state-highlight" : "") + (E.getTime() === X.getTime() ? " ui-state-active" : "") + (R ? " ui-priority-secondary" : "") + "' href='#'>" + E.getDate() + "</a>") + "</td>", E.setDate(E.getDate() + 1), E = this._daylightSavingAdjust(E);
                        D += O + "</tr>"
                    }
                    11 < ++J && (J = 0, ee++), x += D += "</tbody></table>" + (G ? "</div>" + (0 < U[0] && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                _ += x
            }
            return _ += u, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, n, i, r, s, a, o) {
            var l, u, c, d, h, f, p, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (s || !g) _ += "<span class='ui-datepicker-month'>" + a[t] + "</span>";
            else {
                for (l = i && i.getFullYear() === n, u = r && r.getFullYear() === n, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= i.getMonth()) && (!u || c <= r.getMonth()) && (_ += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!s && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", s || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = (f = function(e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        })(d[0]), m = Math.max(p, f(d[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, m = r ? Math.min(m, r.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p <= m; p++) e.yearshtml += "<option value='" + p + "'" + (p === n ? " selected='selected'" : "") + ">" + p + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                } return b += this._get(e, "yearSuffix"), y && (b += (!s && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function(e, t, n) {
            var i = e.selectedYear + ("Y" === n ? t : 0),
                r = e.selectedMonth + ("M" === n ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, s)));
            e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), "M" !== n && "Y" !== n || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                r = n && t < n ? n : t;
            return i && i < r ? i : r
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, n, i) {
            var r = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, i + (t < 0 ? t : r[0] * r[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, i, r = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                a = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (n = l.split(":"), i = (new Date).getFullYear(), a = parseInt(n[0], 10), o = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (a += i), n[1].match(/[+\-].*/) && (o += i)), (!r || t.getTime() >= r.getTime()) && (!s || t.getTime() <= s.getTime()) && (!a || t.getFullYear() >= a) && (!o || t.getFullYear() <= o)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return {
                shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
        }
    }), x.fn.datepicker = function(e, t) {
        if (!this.length) return this;
        x.datepicker.initialized || (x(document).on("mousedown", x.datepicker._checkExternalClick), x.datepicker.initialized = !0), 0 === x("#" + x.datepicker._mainDivId).length && x("body").append(x.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof t ? x.datepicker["_" + e + "Datepicker"].apply(x.datepicker, [this[0]].concat(n)) : this.each(function() {
            "string" == typeof e ? x.datepicker["_" + e + "Datepicker"].apply(x.datepicker, [this].concat(n)) : x.datepicker._attachDatepicker(this, e)
        }) : x.datepicker["_" + e + "Datepicker"].apply(x.datepicker, [this[0]].concat(n))
    }, x.datepicker = new e, x.datepicker.initialized = !1, x.datepicker.uuid = (new Date).getTime(), x.datepicker.version = "1.12.1", x.datepicker
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(e) {
    return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], e) : e(jQuery)
}(function(r) {
    var s = !1;
    return r(document).on("mouseup", function() {
        s = !1
    }), r.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(e) {
                if (!0 === r.data(e.target, t.widgetName + ".preventClickEvent")) return r.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var t = this,
                    n = 1 === e.which,
                    i = !("string" != typeof this.options.cancel || !e.target.nodeName) && r(e.target).closest(this.options.cancel).length;
                return !(n && !i && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    t.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === r.data(e.target, this.widgetName + ".preventClickEvent") && r.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return t._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return t._mouseUp(e)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (r.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && r.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(i) {
    return i.extend(i.expr[":"], {
        data: i.expr.createPseudo ? i.expr.createPseudo(function(t) {
            return function(e) {
                return !!i.data(e, t)
            }
        }) : function(e, t, n) {
            return !!i.data(e, n[3])
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}(function(s) {
    return s.fn.scrollParent = function(e) {
        var t = this.css("position"),
            n = "absolute" === t,
            i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            r = this.parents().filter(function() {
                var e = s(this);
                return (!n || "static" !== e.css("position")) && i.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== t && r.length ? r : s(this[0].ownerDocument || document)
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../ie", "../scroll-parent", "../version", "../widget"], e) : e(jQuery)
}(function(f) {
    return f.widget("ui.sortable", f.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, n) {
            return t <= e && e < t + n
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), f.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var e = this.items.length - 1; 0 <= e; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, t) {
            var n = null,
                i = !1,
                r = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), f(e.target).parents().each(function() {
                if (f.data(this, r.widgetName + "-item") === r) return n = f(this), !1
            }), f.data(e.target, r.widgetName + "-item") === r && (n = f(e.target)), !!n && (!(this.options.handle && !t && (f(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (i = !0)
            }), !i)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, t, n) {
            var i, r, s = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, f.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = f("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", e, this._uiHash(this));
            return f.ui.ddmanager && (f.ui.ddmanager.current = this), f.ui.ddmanager && !s.dropBehaviour && f.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var t, n, i, r, s = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (
                    e.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), e.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), !1 !== a && f.ui.ddmanager && !s.dropBehaviour && f.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t = this.items.length - 1; 0 <= t; t--)
                if (i = (n = this.items[t]).item[0], (r = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(i === this.currentItem[0] || this.placeholder[1 === r ? "next" : "prev"]()[0] === i || f.contains(this.placeholder[0], i) || "semi-dynamic" === this.options.type && f.contains(this.element[0], i))) {
                    if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                } return this._contactContainers(e), f.ui.ddmanager && f.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, t) {
            if (e) {
                if (f.ui.ddmanager && !this.options.dropBehaviour && f.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        i = this.placeholder.offset(),
                        r = this.options.axis,
                        s = {};
                    r && "x" !== r || (s.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, f(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e)
                    })
                } else this._clear(e, t);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new f.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), f.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? f(this.domPosition.prev).after(this.currentItem) : f(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var e = this._getItemsAsjQuery(t && t.connected),
                n = [];
            return t = t || {}, f(e).each(function() {
                var e = (f(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                e && n.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
            }), !n.length && t.key && n.push(t.key + "="), n.join("&")
        },
        toArray: function(e) {
            var t = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t.each(function() {
                n.push(f(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                i = this.positionAbs.top,
                r = i + this.helperProportions.height,
                s = e.left,
                a = s + e.width,
                o = e.top,
                l = o + e.height,
                u = this.offset.click.top,
                c = this.offset.click.left,
                d = "x" === this.options.axis || o < i + u && i + u < l,
                h = "y" === this.options.axis || s < t + c && t + c < a,
                f = d && h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < a && o < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var t, n, i = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                r = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
            return !(!i || !r) && (t = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(), this.floating ? "right" === n || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                i = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && t || "up" === i && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (0 < e ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (0 < e ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function t() {
                a.push(this)
            }
            var n, i, r, s, a = [],
                o = [],
                l = this._connectWith();
            if (l && e)
                for (n = l.length - 1; 0 <= n; n--)
                    for (i = (r = f(l[n], this.document[0])).length - 1; 0 <= i; i--)(s = f.data(r[i], this.widgetFullName)) && s !== this && !s.options.disabled && o.push([f.isFunction(s.options.items) ? s.options.items.call(s.element) : f(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (o.push([f.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : f(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = o.length - 1; 0 <= n; n--) o[n][0].each(t);
            return f(a)
        },
        _removeCurrentsFromItems: function() {
            var n = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = f.grep(this.items, function(e) {
                for (var t = 0; t < n.length; t++)
                    if (n[t] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var t, n, i, r, s, a, o, l, u = this.items,
                c = [
                    [f.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : f(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (t = d.length - 1; 0 <= t; t--)
                    for (n = (i = f(d[t], this.document[0])).length - 1; 0 <= n; n--)(r = f.data(i[n], this.widgetFullName)) && r !== this && !r.options.disabled && (c.push([f.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                        item: this.currentItem
                    }) : f(r.options.items, r.element), r]), this.containers.push(r));
            for (t = c.length - 1; 0 <= t; t--)
                for (s = c[t][1], n = 0, l = (a = c[t][0]).length; n < l; n++)(o = f(a[n])).data(this.widgetName + "-item", s), u.push({
                    item: o,
                    instance: s,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            var t, n, i, r;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), t = this.items.length - 1; 0 <= t; t--)(n = this.items[t]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? f(this.options.toleranceElement, n.item) : n.item, e || (n.width = i.outerWidth(), n.height = i.outerHeight()), r = i.offset(), n.left = r.left, n.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (t = this.containers.length - 1; 0 <= t; t--) r = this.containers[t].element.offset(), this.containers[t].containerCache.left = r.left, this.containers[t].containerCache.top = r.top, this.containers[t].containerCache.width = this.containers[t].element.outerWidth(), this.containers[t].containerCache.height = this.containers[t].element.outerHeight();
            return this
        },
        _createPlaceholder: function(n) {
            var i, r = (n = n || this).options;
            r.placeholder && r.placeholder.constructor !== String || (i = r.placeholder, r.placeholder = {
                element: function() {
                    var e = n.currentItem[0].nodeName.toLowerCase(),
                        t = f("<" + e + ">", n.document[0]);
                    return n._addClass(t, "ui-sortable-placeholder", i || n.currentItem[0].className)._removeClass(t, "ui-sortable-helper"), "tbody" === e ? n._createTrPlaceholder(n.currentItem.find("tr").eq(0), f("<tr>", n.document[0]).appendTo(t)) : "tr" === e ? n._createTrPlaceholder(n.currentItem, t) : "img" === e && t.attr("src", n.currentItem.attr("src")), i || t.css("visibility", "hidden"), t
                },
                update: function(e, t) {
                    i && !r.forcePlaceholderSize || (t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10)))
                }
            }), n.placeholder = f(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _createTrPlaceholder: function(e, t) {
            var n = this;
            e.children().each(function() {
                f("<td>&#160;</td>", n.document[0]).attr("colspan", f(this).attr("colspan") || 1).appendTo(t)
            })
        },
        _contactContainers: function(e) {
            var t, n, i, r, s, a, o, l, u, c, d = null,
                h = null;
            for (t = this.containers.length - 1; 0 <= t; t--)
                if (!f.contains(this.currentItem[0], this.containers[t].element[0]))
                    if (this._intersectsWith(this.containers[t].containerCache)) {
                        if (d && f.contains(this.containers[t].element[0], d.element[0])) continue;
                        d = this.containers[t], h = t
                    } else this.containers[t].containerCache.over && (this.containers[t]._trigger("out", e, this._uiHash(this)), this.containers[t].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[h].containerCache.over || (this.containers[h]._trigger("over", e, this._uiHash(this)), this.containers[h].containerCache.over = 1);
                else {
                    for (i = 1e4, r = null, s = (u = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = u ? "width" : "height", c = u ? "pageX" : "pageY", n = this.items.length - 1; 0 <= n; n--) f.contains(this.containers[h].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (o = this.items[n].item.offset()[s], l = !1, e[c] - o > this.items[n][a] / 2 && (l = !0), Math.abs(e[c] - o) < i && (i = Math.abs(e[c] - o), r = this.items[n], this.direction = l ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[h]) return void(this.currentContainer.containerCache.over || (this.containers[h]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[h].element, !0), this._trigger("change", e, this._uiHash()), this.containers[h]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[h], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[h]._trigger("over", e, this._uiHash(this)), this.containers[h].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var t = this.options,
                n = f.isFunction(t.helper) ? f(t.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === t.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || f("parent" !== t.appendTo ? t.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), n[0].style.width && !t.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !t.forceHelperSize || n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), f.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && f.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && f.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.currentItem.position();
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, t, n, i = this.options;
            "parent" === i.containment && (i.containment = this.helper[0].parentNode), "document" !== i.containment && "window" !== i.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (e = f(i.containment)[0], t = f(i.containment).offset(), n = "hidden" !== f(e).css("overflow"), this.containment = [t.left + (parseInt(f(e).css("borderLeftWidth"), 10) || 0) + (parseInt(f(e).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(f(e).css("borderTopWidth"), 10) || 0) + (parseInt(f(e).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(f(e).css("borderLeftWidth"), 10) || 0) - (parseInt(f(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(f(e).css("borderTopWidth"), 10) || 0) - (parseInt(f(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var n = "absolute" === e ? 1 : -1,
                i = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && f.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(i[0].tagName);
            return {
                top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()) * n,
                left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var t, n, i = this.options,
                r = e.pageX,
                s = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && f.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), i.grid && (t = this.originalPageY + Math.round((s - this.originalPageY) / i.grid[1]) * i.grid[1], s = this.containment ? t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - i.grid[1] : t + i.grid[1] : t, n = this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - i.grid[0] : n + i.grid[0] : n)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : a.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(e, t) {
            function n(t, n, i) {
                return function(e) {
                    i._trigger(t, e, n._uiHash(n))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (t || (r.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), r.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) t || r.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (i = 0; i < r.length; i++) r[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === f.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var t = e || this;
            return {
                helper: t.helper,
                placeholder: t.placeholder || f([]),
                position: t.position,
                originalPosition: t.originalPosition,
                offset: t.positionAbs,
                item: t.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../keycode", "../version", "../widget"], e) : e(jQuery)
}(function(c) {
    return c.widget("ui.slider", c.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, t, n = this.options,
                i = this.element.find(".ui-slider-handle"),
                r = "<span tabindex='0'></span>",
                s = [];
            for (t = n.values && n.values.length || 1, i.length > t && (i.slice(t).remove(), i = i.slice(0, t)), e = i.length; e < t; e++) s.push(r);
            this.handles = i.add(c(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                c(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : c.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = c("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var t, n, i, r, s, a, o, l = this,
                u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var t = Math.abs(n - l.values(e));
                (t < i || i === t && (e === l._lastChangedValue || l.values(e) === u.min)) && (i = t, r = c(this), s = e)
            }), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(r, null, "ui-state-active"), r.trigger("focus"), a = r.offset(), o = !c(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = o ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - r.width() / 2,
                top: e.pageY - a.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, n), this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, i, r, s;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 1 < (i = n / t) && (i = 1), i < 0 && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), s = this._valueMin() + i * r, this._trimAlignValue(s)
        },
        _uiHash: function(e, t, n) {
            var i = {
                handle: this.handles[e],
                handleIndex: e,
                value: t !== undefined ? t : this.value()
            };
            return this._hasMultipleValues() && (i.value = t !== undefined ? t : this.values(e), i.values = n || this.values()), i
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(e, t) {
            return this._trigger("start", e, this._uiHash(t))
        },
        _slide: function(e, t, n) {
            var i, r = this.value(),
                s = this.values();
            this._hasMultipleValues() && (i = this.values(t ? 0 : 1), r = this.values(t), 2 === this.options.values.length && !0 === this.options.range && (n = 0 === t ? Math.min(i, n) : Math.max(i, n)), s[t] = n), n !== r && !1 !== this._trigger("slide", e, this._uiHash(t, n, s)) && (this._hasMultipleValues() ? this.values(t, n) : this.value(n))
        },
        _stop: function(e, t) {
            this._trigger("stop", e, this._uiHash(t))
        },
        _change: function(e, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, t) {
            var n, i, r;
            if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(t), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!c.isArray(e)) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, i = e, r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(i[r]), this._change(null, r);
            this._refreshValue()
        },
        _setOption: function(e, t) {
            var n, i = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === t ? (this.options.value = this._values(0), this.options.values = null) : "max" === t && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), c.isArray(this.options.values) && (i = this.options.values.length), this._super(e, t), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(t), this.handles.css("horizontal" === t ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = i - 1; 0 <= n; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(e) {
            this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, n, i;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this._hasMultipleValues()) {
                for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
                return n
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = 0 < this.options.step ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                i = e - n;
            return 2 * Math.abs(n) >= t && (i += 0 < n ? t : -t), parseFloat(i.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                n = this.options.step;
            (e = Math.round((e - t) / n) * n + t) > this.options.max && (e -= n), this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = e.toString(),
                n = t.indexOf(".");
            return -1 === n ? 0 : t.length - n - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(e) {
            "vertical" === e && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === e && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var t, n, e, i, r, s = this.options.range,
                a = this.options,
                o = this,
                l = !this._animateOff && a.animate,
                u = {};
            this._hasMultipleValues() ? this.handles.each(function(e) {
                n = (o.values(e) - o._valueMin()) / (o._valueMax() - o._valueMin()) * 100, u["horizontal" === o.orientation ? "left" : "bottom"] = n + "%", c(this).stop(1, 1)[l ? "animate" : "css"](u, a.animate), !0 === o.options.range && ("horizontal" === o.orientation ? (0 === e && o.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: n + "%"
                }, a.animate), 1 === e && o.range[l ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === e && o.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: n + "%"
                }, a.animate), 1 === e && o.range[l ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), t = n
            }) : (e = this.value(), i = this._valueMin(), r = this._valueMax(), n = r !== i ? (e - i) / (r - i) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: n + "%"
            }, a.animate), "max" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: 100 - n + "%"
            }, a.animate), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: n + "%"
            }, a.animate), "max" === s && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: 100 - n + "%"
            }, a.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var t, n, i, r = c(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case c.ui.keyCode.HOME:
                    case c.ui.keyCode.END:
                    case c.ui.keyCode.PAGE_UP:
                    case c.ui.keyCode.PAGE_DOWN:
                    case c.ui.keyCode.UP:
                    case c.ui.keyCode.RIGHT:
                    case c.ui.keyCode.DOWN:
                    case c.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(c(e.target), null, "ui-state-active"), !1 === this._start(e, r))) return
                }
                switch (i = this.options.step, t = n = this._hasMultipleValues() ? this.values(r) : this.value(), e.keyCode) {
                    case c.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case c.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case c.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(t + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case c.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(t - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case c.ui.keyCode.UP:
                    case c.ui.keyCode.RIGHT:
                        if (t === this._valueMax()) return;
                        n = this._trimAlignValue(t + i);
                        break;
                    case c.ui.keyCode.DOWN:
                    case c.ui.keyCode.LEFT:
                        if (t === this._valueMin()) return;
                        n = this._trimAlignValue(t - i)
                }
                this._slide(e, r, n)
            },
            keyup: function(e) {
                var t = c(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, t), this._change(e, t), this._removeClass(c(e.target), null, "ui-state-active"))
            }
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function(o) {
    "use strict";
    var i = 0;
    o.ajaxTransport("iframe", function(r) {
        var s, a, t;
        if (r.async) return {
            send: function(e, n) {
                (s = o('<form style="display:none;"></form>')).attr("accept-charset", r.formAcceptCharset), t = /\?/.test(r.url) ? "&" : "?", "DELETE" === r.type ? (r.url = r.url + t + "_method=DELETE", r.type = "POST") : "PUT" === r.type ? (r.url = r.url + t + "_method=PUT", r.type = "POST") : "PATCH" === r.type && (r.url = r.url + t + "_method=PATCH", r.type = "POST"), a = o('<iframe src="javascript:false;" name="iframe-transport-' + (i += 1) + '"></iframe>').bind("load", function() {
                    var i, t = o.isArray(r.paramName) ? r.paramName : [r.paramName];
                    a.unbind("load").bind("load", function() {
                        var e;
                        try {
                            if (!(e = a.contents()).length || !e[0].firstChild) throw new Error
                        } catch (t) {
                            e = undefined
                        }
                        n(200, "success", {
                            iframe: e
                        }), o('<iframe src="javascript:false;"></iframe>').appendTo(s), s.remove()
                    }), s.prop("target", a.prop("name")).prop("action", r.url).prop("method", r.type), r.formData && o.each(r.formData, function(e, t) {
                        o('<input type="hidden"/>').prop("name", t.name).val(t.value).appendTo(s)
                    }), r.fileInput && r.fileInput.length && "POST" === r.type && (i = r.fileInput.clone(), r.fileInput.after(function(e) {
                        return i[e]
                    }), r.paramName && r.fileInput.each(function(e) {
                        o(this).prop("name", t[e] || r.paramName)
                    }), s.append(r.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), s.submit(), i && i.length && r.fileInput.each(function(e, t) {
                        var n = o(i[e]);
                        o(t).prop("name", n.prop("name")), n.replaceWith(t)
                    })
                }), s.append(a).appendTo(document.body)
            },
            abort: function() {
                a && a.unbind("load").prop("src", "javascript".concat(":false;")), s && s.remove()
            }
        }
    }), o.ajaxSetup({
        converters: {
            "iframe text": function(e) {
                return e && o(e[0].body).text()
            },
            "iframe json": function(e) {
                return e && o.parseJSON(o(e[0].body).text())
            },
            "iframe html": function(e) {
                return e && o(e[0].body).html()
            },
            "iframe script": function(e) {
                return e && o.globalEval(o(e[0].body).text())
            }
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
}(function(v) {
    "use strict";
    v.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || v('<input type="file">').prop("disabled")), v.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), v.support.xhrFormDataFileUpload = !!window.FormData, v.support.blobSlice = window.Blob && (
        Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), v.widget("blueimp.fileupload", {
        options: {
            dropZone: v(document),
            pasteZone: v(document),
            fileInput: undefined,
            replaceFileInput: !0,
            paramName: undefined,
            singleFileUploads: !0,
            limitMultiFileUploads: undefined,
            limitMultiFileUploadSize: undefined,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: undefined,
            forceIframeTransport: !1,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: !0,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(n, e) {
                return n = this.messages[n] || n.toString(), e && v.each(e, function(e, t) {
                    n = n.replace("{" + e + "}", t)
                }), n
            },
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(e, t) {
                if (e.isDefaultPrevented()) return !1;
                (t.autoUpload || !1 !== t.autoUpload && v(this).fileupload("option", "autoUpload")) && t.process().done(function() {
                    t.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: v.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, n) {
                var i = e - this.timestamp;
                return (!this.bitrate || !n || n < i) && (this.bitrate = (t - this.loaded) * (1e3 / i) * 8, this.loaded = t, this.timestamp = e), this.bitrate
            }
        },
        _isXHRUpload: function(e) {
            return !e.forceIframeTransport && (!e.multipart && v.support.xhrFileUpload || v.support.xhrFormDataFileUpload)
        },
        _getFormData: function(e) {
            var n;
            return "function" === v.type(e.formData) ? e.formData(e.form) : v.isArray(e.formData) ? e.formData : "object" === v.type(e.formData) ? (n = [], v.each(e.formData, function(e, t) {
                n.push({
                    name: e,
                    value: t
                })
            }), n) : []
        },
        _getTotal: function(e) {
            var n = 0;
            return v.each(e, function(e, t) {
                n += t.size || 1
            }), n
        },
        _initProgressObject: function(e) {
            var t = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            e._progress ? v.extend(e._progress, t) : e._progress = t
        },
        _initResponseObject: function(e) {
            var t;
            if (e._response)
                for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
            else e._response = {}
        },
        _onProgress: function(e, t) {
            if (e.lengthComputable) {
                var n, i = Date.now ? Date.now() : (new Date).getTime();
                if (t._time && t.progressInterval && i - t._time < t.progressInterval && e.loaded !== e.total) return;
                t._time = i, n = Math.floor(e.loaded / e.total * (t.chunkSize || t._progress.total)) + (t.uploadedBytes || 0), this._progress.loaded += n - t._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(i, this._progress.loaded, t.bitrateInterval), t._progress.loaded = t.loaded = n, t._progress.bitrate = t.bitrate = t._bitrateTimer.getBitrate(i, n, t.bitrateInterval), this._trigger("progress", v.Event("progress", {
                    delegatedEvent: e
                }), t), this._trigger("progressall", v.Event("progressall", {
                    delegatedEvent: e
                }), this._progress)
            }
        },
        _initProgressListener: function(n) {
            var i = this,
                e = n.xhr ? n.xhr() : v.ajaxSettings.xhr();
            e.upload && (v(e.upload).bind("progress", function(e) {
                var t = e.originalEvent;
                e.lengthComputable = t.lengthComputable, e.loaded = t.loaded, e.total = t.total, i._onProgress(e, n)
            }), n.xhr = function() {
                return e
            })
        },
        _isInstanceOf: function(e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _initXHRData: function(n) {
            var i, r = this,
                e = n.files[0],
                t = n.multipart || !v.support.xhrFileUpload,
                s = "array" === v.type(n.paramName) ? n.paramName[0] : n.paramName;
            n.headers = v.extend({}, n.headers), n.contentRange && (n.headers["Content-Range"] = n.contentRange), t && !n.blob && this._isInstanceOf("File", e) || (n.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.name) + '"'), t ? v.support.xhrFormDataFileUpload && (n.postMessage ? (i = this._getFormData(n), n.blob ? i.push({
                name: s,
                value: n.blob
            }) : v.each(n.files, function(e, t) {
                i.push({
                    name: "array" === v.type(n.paramName) && n.paramName[e] || s,
                    value: t
                })
            })) : (r._isInstanceOf("FormData", n.formData) ? i = n.formData : (i = new FormData, v.each(this._getFormData(n), function(e, t) {
                i.append(t.name, t.value)
            })), n.blob ? i.append(s, n.blob, e.name) : v.each(n.files, function(e, t) {
                (r._isInstanceOf("File", t) || r._isInstanceOf("Blob", t)) && i.append("array" === v.type(n.paramName) && n.paramName[e] || s, t, t.uploadName || t.name)
            })), n.data = i) : (n.contentType = e.type || "application/octet-stream", n.data = n.blob || e), n.blob = null
        },
        _initIframeSettings: function(e) {
            var t = v("<a></a>").prop("href", e.url).prop("host");
            e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && t && t !== location.host && e.formData.push({
                name: e.redirectParamName || "redirect",
                value: e.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function(e) {
            var t = v(e.fileInput),
                i = e.paramName;
            return i ? v.isArray(i) || (i = [i]) : (i = [], t.each(function() {
                for (var e = v(this), t = e.prop("name") || "files[]", n = (e.prop("files") || [1]).length; n;) i.push(t), n -= 1
            }), i.length || (i = [t.prop("name") || "files[]"])), i
        },
        _initFormSettings: function(e) {
            e.form && e.form.length || (e.form = v(e.fileInput.prop("form")), e.form.length || (e.form = v(this.options.fileInput.prop("form")))), e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || "string" === v.type(e.form.prop("method")) && e.form.prop("method") || "").toUpperCase(), "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(e) {
            var t = v.extend({}, this.options, e);
            return this._initFormSettings(t), this._initDataSettings(t), t
        },
        _getDeferredState: function(e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function(e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function(e, t, n) {
            var i = v.Deferred(),
                r = i.promise();
            return t = t || this.options.context || r, !0 === e ? i.resolveWith(t, n) : !1 === e && i.rejectWith(t, n), r.abort = i.promise, this._enhancePromise(r)
        },
        _addConvenienceMethods: function(e, n) {
            var i = this,
                r = function(e) {
                    return v.Deferred().resolveWith(i, e).promise()
                };
            n.process = function(e, t) {
                return (e || t) && (n._processQueue = this._processQueue = (this._processQueue || r([this])).pipe(function() {
                    return n.errorThrown ? v.Deferred().rejectWith(i, [n]).promise() : r(arguments)
                }).pipe(e, t)), this._processQueue || r([this])
            }, n.submit = function() {
                return "pending" !== this.state() && (n.jqXHR = this.jqXHR = !1 !== i._trigger("submit", v.Event("submit", {
                    delegatedEvent: e
                }), this) && i._onSend(e, this)), this.jqXHR || i._getXHRPromise()
            }, n.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), i._getXHRPromise(!1))
            }, n.state = function() {
                return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0
            }, n.processing = function() {
                return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue)
            }, n.progress = function() {
                return this._progress
            }, n.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(e) {
            var t = e.getResponseHeader("Range"),
                n = t && t.split("-"),
                i = n && 1 < n.length && parseInt(n[1], 10);
            return i && i + 1
        },
        _chunkedUpload: function(s, e) {
            s.uploadedBytes = s.uploadedBytes || 0;
            var t, a, o = this,
                n = s.files[0],
                l = n.size,
                u = s.uploadedBytes,
                c = s.maxChunkSize || l,
                d = this._blobSlice,
                h = v.Deferred(),
                i = h.promise();
            return !(!(this._isXHRUpload(s) && d && (u || c < l)) || s.data) && (!!e || (l <= u ? (n.error = s.i18n("uploadedBytes"), this._getXHRPromise(!1, s.context, [null, "error", n.error])) : (a = function() {
                var i = v.extend({}, s),
                    r = i._progress.loaded;
                i.blob = d.call(n, u, u + c, n.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + u + "-" + (u + i.chunkSize - 1) + "/" + l, o._initXHRData(i), o._initProgressListener(i), t = (!1 !== o._trigger("chunksend", null, i) && v.ajax(i) || o._getXHRPromise(!1, i.context)).done(function(e, t, n) {
                    u = o._getUploadedBytes(n) || u + i.chunkSize, r + i.chunkSize - i._progress.loaded && o._onProgress(v.Event("progress", {
                        lengthComputable: !0,
                        loaded: u - i.uploadedBytes,
                        total: u - i.uploadedBytes
                    }), i), s.uploadedBytes = i.uploadedBytes = u, i.result = e, i.textStatus = t, i.jqXHR = n, o._trigger("chunkdone", null, i), o._trigger("chunkalways", null, i), u < l ? a() : h.resolveWith(i.context, [e, t, n])
                }).fail(function(e, t, n) {
                    i.jqXHR = e, i.textStatus = t, i.errorThrown = n, o._trigger("chunkfail", null, i), o._trigger("chunkalways", null, i), h.rejectWith(i.context, [e, t, n])
                })
            }, this._enhancePromise(i), i.abort = function() {
                return t.abort()
            }, a(), i)))
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
        },
        _onDone: function(e, t, n, i) {
            var r = i._progress.total,
                s = i._response;
            i._progress.loaded < r && this._onProgress(v.Event("progress", {
                lengthComputable: !0,
                loaded: r,
                total: r
            }), i), s.result = i.result = e, s.textStatus = i.textStatus = t, s.jqXHR = i.jqXHR = n, this._trigger("done", null, i)
        },
        _onFail: function(e, t, n, i) {
            var r = i._response;
            i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), r.jqXHR = i.jqXHR = e, r.textStatus = i.textStatus = t, r.errorThrown = i.errorThrown = n, this._trigger("fail", null, i)
        },
        _onAlways: function(e, t, n, i) {
            this._trigger("always", null, i)
        },
        _onSend: function(e, t) {
            t.submit || this._addConvenienceMethods(e, t);
            var n, i, r, s, a = this,
                o = a._getAJAXSettings(t),
                l = function() {
                    return a._sending += 1, o._bitrateTimer = new a._BitrateTimer, n = n || ((i || !1 === a._trigger("send", v.Event("send", {
                        delegatedEvent: e
                    }), o)) && a._getXHRPromise(!1, o.context, i) || a._chunkedUpload(o) || v.ajax(o)).done(function(e, t, n) {
                        a._onDone(e, t, n, o)
                    }).fail(function(e, t, n) {
                        a._onFail(e, t, n, o)
                    }).always(function(e, t, n) {
                        if (a._onAlways(e, t, n, o), a._sending -= 1, a._active -= 1, o.limitConcurrentUploads && o.limitConcurrentUploads > a._sending)
                            for (var i = a._slots.shift(); i;) {
                                if ("pending" === a._getDeferredState(i)) {
                                    i.resolve();
                                    break
                                }
                                i = a._slots.shift()
                            }
                        0 === a._active && a._trigger("stop")
                    })
                };
            return this._beforeSend(e, o), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (r = v.Deferred(), this._slots.push(r), s = r.pipe(l)) : (this._sequence = this._sequence.pipe(l, l), s = this._sequence), s.abort = function() {
                return i = [undefined, "abort", "abort"], n ? n.abort() : (r && r.rejectWith(o.context, i), l())
            }, this._enhancePromise(s)) : l()
        },
        _onAdd: function(i, r) {
            var s, e, a, t, o = this,
                l = !0,
                n = v.extend({}, this.options, r),
                u = r.files,
                c = u.length,
                d = n.limitMultiFileUploads,
                h = n.limitMultiFileUploadSize,
                f = n.limitMultiFileUploadSizeOverhead,
                p = 0,
                m = this._getParamName(n),
                g = 0;
            if (!h || c && u[0].size !== undefined || (h = undefined), (n.singleFileUploads || d || h) && this._isXHRUpload(n))
                if (n.singleFileUploads || h || !d)
                    if (!n.singleFileUploads && h)
                        for (a = [], s = [], t = 0; t < c; t += 1) p += u[t].size + f, (t + 1 === c || p + u[t + 1].size + f > h || d && d <= t + 1 - g) && (a.push(u.slice(g, t + 1)), (e = m.slice(g, t + 1)).length || (e = m), s.push(e), g = t + 1, p = 0);
                    else s = m;
            else
                for (a = [], s = [], t = 0; t < c; t += d) a.push(u.slice(t, t + d)), (e = m.slice(t, t + d)).length || (e = m), s.push(e);
            else a = [u], s = [m];
            return r.originalFiles = u, v.each(a || u, function(e, t) {
                var n = v.extend({}, r);
                return n.files = a ? t : [t], n.paramName = s[e], o._initResponseObject(n), o._initProgressObject(n), o._addConvenienceMethods(i, n), l = o._trigger("add", v.Event("add", {
                    delegatedEvent: i
                }), n)
            }), l
        },
        _replaceFileInput: function(n) {
            var i = n.clone(!0);
            v("<form></form>").append(i)[0].reset(), n.after(i).detach(), v.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(e, t) {
                return t === n[0] ? i[0] : t
            }), n[0] === this.element[0] && (this.element = i)
        },
        _handleFileTreeEntry: function(t, n) {
            var i = this,
                r = v.Deferred(),
                s = function(e) {
                    e && !e.entry && (e.entry = t), r.resolve([e])
                };
            return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, r.resolve(t._file)) : t.file(function(e) {
                e.relativePath = n, r.resolve(e)
            }, s) : t.isDirectory ? t.createReader().readEntries(function(e) {
                i._handleFileTreeEntries(e, n + t.name + "/").done(function(e) {
                    r.resolve(e)
                }).fail(s)
            }, s) : r.resolve([]), r.promise()
        },
        _handleFileTreeEntries: function(e, t) {
            var n = this;
            return v.when.apply(v, v.map(e, function(e) {
                return n._handleFileTreeEntry(e, t)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(e) {
            var t = (e = e || {}).items;
            return t && t.length && (t[0].webkitGetAsEntry || t[0].getAsEntry) ? this._handleFileTreeEntries(v.map(t, function(e) {
                var t;
                return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : v.Deferred().resolve(v.makeArray(e.files)).promise()
        },
        _getSingleFileInputFiles: function(e) {
            var t, n, i = (e = v(e)).prop("webkitEntries") || e.prop("entries");
            if (i && i.length) return this._handleFileTreeEntries(i);
            if ((t = v.makeArray(e.prop("files"))).length) t[0].name === undefined && t[0].fileName && v.each(t, function(e, t) {
                t.name = t.fileName, t.size = t.fileSize
            });
            else {
                if (!(n = e.prop("value"))) return v.Deferred().resolve([]).promise();
                t = [{
                    name: n.replace(/^.*\\/, "")
                }]
            }
            return v.Deferred().resolve(t).promise()
        },
        _getFileInputFiles: function(e) {
            return e instanceof v && 1 !== e.length ? v.when.apply(v, v.map(e, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(e)
        },
        _onChange: function(t) {
            var n = this,
                i = {
                    fileInput: v(t.target),
                    form: v(t.target.form)
                };
            this._getFileInputFiles(i.fileInput).always(function(e) {
                i.files = e, n.options.replaceFileInput && n._replaceFileInput(i.fileInput), !1 !== n._trigger("change", v.Event("change", {
                    delegatedEvent: t
                }), i) && n._onAdd(t, i)
            })
        },
        _onPaste: function(e) {
            var t = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                i = {
                    files: []
                };
            t && t.length && (v.each(t, function(e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && i.files.push(n)
            }), !1 !== this._trigger("paste", v.Event("paste", {
                delegatedEvent: e
            }), i) && this._onAdd(e, i))
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var n = this,
                e = t.dataTransfer,
                i = {};
            e && e.files && e.files.length && (t.preventDefault(), this._getDroppedFiles(e).always(function(e) {
                i.files = e, !1 !== n._trigger("drop", v.Event("drop", {
                    delegatedEvent: t
                }), i) && n._onAdd(t, i)
            }))
        },
        _onDragOver: function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var t = e.dataTransfer;
            t && -1 !== v.inArray("Files", t.types) && !1 !== this._trigger("dragover", v.Event("dragover", {
                delegatedEvent: e
            })) && (e.preventDefault(), t.dropEffect = "copy")
        },
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })), v.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        },
        _setOption: function(e, t) {
            var n = -1 !== v.inArray(e, this._specialOptions);
            n && this._destroyEventHandlers(), this._super(e, t), n && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var e = this.options;
            e.fileInput === undefined ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof v || (e.fileInput = v(e.fileInput)), e.dropZone instanceof v || (e.dropZone = v(e.dropZone)), e.pasteZone instanceof v || (e.pasteZone = v(e.pasteZone))
        },
        _getRegExp: function(e) {
            var t = e.split("/"),
                n = t.pop();
            return t.shift(), new RegExp(t.join("/"), n)
        },
        _isRegExpOption: function(e, t) {
            return "url" !== e && "string" === v.type(t) && /^\/.*\/[igm]{0,3}$/.test(t)
        },
        _initDataAttributes: function() {
            var i = this,
                r = this.options,
                s = v(this.element[0].cloneNode(!1));
            v.each(s.data(), function(e, t) {
                var n = "data-" + e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                s.attr(n) && (i._isRegExpOption(e, t) && (t = i._getRegExp(t)), r[e] = t)
            })
        },
        _create: function() {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(t) {
            var n = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e, n._onAdd(null, t)
            }) : (t.files = v.makeArray(t.files), this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var n, i, r = this,
                        s = v.Deferred(),
                        e = s.promise();
                    return e.abort = function() {
                        return i = !0, n ? n.abort() : (s.reject(null, "abort", "abort"), e)
                    }, this._getFileInputFiles(t.fileInput).always(function(e) {
                        i || (e.length ? (t.files = e, n = r._onSend(null, t).then(function(e, t, n) {
                            s.resolve(e, t, n)
                        }, function(e, t, n) {
                            s.reject(e, t, n)
                        })) : s.reject())
                    }), this._enhancePromise(e)
                }
                if (t.files = v.makeArray(t.files), t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.fileupload"], e) : e(window.jQuery)
}(function(a) {
    "use strict";
    var i = a.blueimp.fileupload.prototype.options.add;
    a.widget("blueimp.fileupload", a.blueimp.fileupload, {
        options: {
            processQueue: [],
            add: function(e, t) {
                var n = a(this);
                t.process(function() {
                    return n.fileupload("process", t)
                }), i.call(this, e, t)
            }
        },
        processActions: {},
        _processFile: function(e, i) {
            var r = this,
                s = a.Deferred().resolveWith(r, [e]).promise();
            return this._trigger("process", null, e), a.each(e.processQueue, function(e, t) {
                var n = function(e) {
                    return i.errorThrown ? a.Deferred().rejectWith(r, [i]).promise() : r.processActions[t.action].call(r, e, t)
                };
                s = s.pipe(n, t.always && n)
            }), s.done(function() {
                r._trigger("processdone", null, e), r._trigger("processalways", null, e)
            }).fail(function() {
                r._trigger("processfail", null, e), r._trigger("processalways", null, e)
            }), s
        },
        _transformProcessQueue: function(r) {
            var t = [];
            a.each(r.processQueue, function() {
                var n = {},
                    e = this.action,
                    i = !0 === this.prefix ? e : this.prefix;
                a.each(this, function(e, t) {
                    "string" === a.type(t) && "@" === t.charAt(0) ? n[e] = r[t.slice(1) || (i ? i + e.charAt(0).toUpperCase() + e.slice(1) : e)] : n[e] = t
                }), t.push(n)
            }), r.processQueue = t
        },
        processing: function() {
            return this._processing
        },
        process: function(i) {
            var r = this,
                s = a.extend({}, this.options, i);
            return s.processQueue && s.processQueue.length && (this._transformProcessQueue(s), 0 === this._processing && this._trigger("processstart"), a.each(i.files, function(e) {
                var t = e ? a.extend({}, s) : s,
                    n = function() {
                        return i.errorThrown ? a.Deferred().rejectWith(r, [i]).promise() : r._processFile(t, i)
                    };
                t.index = e, r._processing += 1, r._processingQueue = r._processingQueue.pipe(n, n).always(function() {
                    r._processing -= 1, 0 === r._processing && r._trigger("processstop")
                })
            })), this._processingQueue
        },
        _create: function() {
            this._super(), this._processing = 0, this._processingQueue = a.Deferred().resolveWith(this).promise()
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "load-image", "load-image-meta", "load-image-exif", "load-image-ios", "canvas-to-blob", "./jquery.fileupload-process"], e) : e(window.jQuery, window.loadImage)
}(function(o, l) {
    "use strict";
    o.blueimp.fileupload.prototype.options.processQueue.unshift({
        action: "loadImageMetaData",
        disableImageHead: "@",
        disableExif: "@",
        disableExifThumbnail: "@",
        disableExifSub: "@",
        disableExifGps: "@",
        disabled: "@disableImageMetaDataLoad"
    }, {
        action: "loadImage",
        prefix: !0,
        fileTypes: "@",
        maxFileSize: "@",
        noRevoke: "@",
        disabled: "@disableImageLoad"
    }, {
        action: "resizeImage",
        prefix: "image",
        maxWidth: "@",
        maxHeight: "@",
        minWidth: "@",
        minHeight: "@",
        crop: "@",
        orientation: "@",
        forceResize: "@",
        disabled: "@disableImageResize"
    }, {
        action: "saveImage",
        quality: "@imageQuality",
        type: "@imageType",
        disabled: "@disableImageResize"
    }, {
        action: "saveImageMetaData",
        disabled: "@disableImageMetaDataSave"
    }, {
        action: "resizeImage",
        prefix: "preview",
        maxWidth: "@",
        maxHeight: "@",
        minWidth: "@",
        minHeight: "@",
        crop: "@",
        orientation: "@",
        thumbnail: "@",
        canvas: "@",
        disabled: "@disableImagePreview"
    }, {
        action: "setImage",
        name: "@imagePreviewName",
        disabled: "@disableImagePreview"
    }, {
        action: "deleteImageReferences",
        disabled: "@disableImageReferencesDeletion"
    }), o.widget("blueimp.fileupload", o.blueimp.fileupload, {
        options: {
            loadImageFileTypes: /^image\/(gif|jpeg|png|svg\+xml)$/,
            loadImageMaxFileSize: 1e7,
            imageMaxWidth: 1920,
            imageMaxHeight: 1080,
            imageOrientation: !1,
            imageCrop: !1,
            disableImageResize: !0,
            previewMaxWidth: 80,
            previewMaxHeight: 80,
            previewOrientation: !0,
            previewThumbnail: !0,
            previewCrop: !1,
            previewCanvas: !0
        },
        processActions: {
            loadImage: function(t, e) {
                if (e.disabled) return t;
                var n = this,
                    i = t.files[t.index],
                    r = o.Deferred();
                return "number" === o.type(e.maxFileSize) && i.size > e.maxFileSize || e.fileTypes && !e.fileTypes.test(i.type) || !l(i, function(e) {
                    e.src && (t.img = e), r.resolveWith(n, [t])
                }, e) ? t : r.promise()
            },
            resizeImage: function(t, n) {
                if (n.disabled || !t.canvas && !t.img) return t;
                n = o.extend({
                    canvas: !0
                }, n);
                var e, i = this,
                    r = o.Deferred(),
                    s = n.canvas && t.canvas || t.img,
                    a = function(e) {
                        e && (e.width !== s.width || e.height !== s.height || n.forceResize) && (t[e.getContext ? "canvas" : "img"] = e), t.preview = e, r.resolveWith(i, [t])
                    };
                return t.exif && (!0 === n.orientation && (n.orientation = t.exif.get("Orientation")), n.thumbnail && (e = t.exif.get("Thumbnail"))) ? (l(e, a, n), r.promise()) : s ? (a(l.scale(s, n)), r.promise()) : t
            },
            saveImage: function(t, e) {
                if (!t.canvas || e.disabled) return t;
                var n = this,
                    i = t.files[t.index],
                    r = o.Deferred();
                return t.canvas.toBlob ? (t.canvas.toBlob(function(e) {
                    e.name || (i.type === e.type ? e.name = i.name : i.name && (e.name = i.name.replace(/\..+$/, "." + e.type.substr(6)))), i.type !== e.type && delete t.imageHead, t.files[t.index] = e, r.resolveWith(n, [t])
                }, e.type || i.type, e.quality), r.promise()) : t
            },
            loadImageMetaData: function(t, e) {
                if (e.disabled) return t;
                var n = this,
                    i = o.Deferred();
                return l.parseMetaData(t.files[t.index], function(e) {
                    o.extend(t, e), i.resolveWith(n, [t])
                }, e), i.promise()
            },
            saveImageMetaData: function(e, t) {
                if (!(e.imageHead && e.canvas && e.canvas.toBlob) || t.disabled) return e;
                var n = e.files[e.index],
                    i = new Blob([e.imageHead, this._blobSlice.call(n, 20)], {
                        type: n.type
                    });
                return i.name = n.name, e.files[e.index] = i, e
            },
            setImage: function(e, t) {
                return e.preview && !t.disabled && (e.files[e.index][t.name || "preview"] = e.preview), e
            },
            deleteImageReferences: function(e, t) {
                return t.disabled || (delete e.img, delete e.canvas, delete e.preview, delete e.imageHead), e
            }
        }
    })
}),
function(a) {
    "use strict";
    a.event.special.swipe = a.event.special.swipe || {
        scrollSupressionThreshold: 10,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 75,
        setup: function() {
            var s = a(this);
            s.bind("touchstart", function(e) {
                function t(e) {
                    if (r) {
                        var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                        n = {
                            time: (new Date).getTime(),
                            coords: [t.pageX, t.pageY]
                        }, Math.abs(r.coords[0] - n.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && e.preventDefault()
                    }
                }
                var n, i = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                    r = {
                        time: (new Date).getTime(),
                        coords: [i.pageX, i.pageY],
                        origin: a(e.target)
                    };
                s.bind("touchmove", t).one("touchend", function() {
                    s.unbind("touchmove", t), r && n && n.time - r.time < a.event.special.swipe.durationThreshold && Math.abs(r.coords[0] - n.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(r.coords[1] - n.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && r.origin.trigger("swipe").trigger(r.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"), r = n = void 0
                })
            })
        }
    }, a.event.special.swipeleft = a.event.special.swipeleft || {
        setup: function() {
            a(this).bind("swipe", a.noop)
        }
    }, a.event.special.swiperight = a.event.special.swiperight || a.event.special.swipeleft
}(jQuery),
function(u) {
    "use strict";

    function l(e) {
        return (e || "").toLowerCase()
    }
    var e = "20130409";
    u.fn.cycle = function(o) {
        var e;
        return 0 !== this.length || u.isReady ? this.each(function() {
            var e, n, t, i, r = u(this),
                s = u.fn.cycle.log;
            if (!r.data("cycle.opts")) {
                for (var a in (!1 === r.data("cycle-log") || o && !1 === o.log || n && !1 === n.log) && (s = u.noop), s("--c2 init--"), e = r.data()) e.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (i = e[a], s((t = a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, l)) + ":", i, "(" + typeof i + ")"), e[t] = i);
                (n = u.extend({}, u.fn.cycle.defaults, e, o || {})).timeoutId = 0, n.paused = n.paused || !1, n.container = r, n._maxZ = n.maxZ, n.API = u.extend({
                    _container: r
                }, u.fn.cycle.API), n.API.log = s, n.API.trigger = function(e, t) {
                    return n.container.trigger(e, t), n.API
                }, r.data("cycle.opts", n), r.data("cycle.API", n.API), n.API.trigger("cycle-bootstrap", [n, n.API]), n.API.addInitialSlides(), n.API.preInitSlideshow(), n.slides.length && n.API.initSlideshow()
            }
        }) : (e = {
            s: this.selector,
            c: this.context
        }, u.fn.cycle.log("requeuing slideshow (dom not ready)"), u(function() {
            u(e.s, e.c).cycle(o)
        }), this)
    }, u.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var e = this.opts(),
                t = e.slides;
            e.slideCount = 0, e.slides = u(), t = t.jquery ? t : e.container.find(t), e.random && t.sort(function() {
                return Math.random() - .5
            }), e.API.add(t)
        },
        preInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-pre-initialize", [e]);
            var t = u.fn.cycle.transitions[e.fx];
            t && u.isFunction(t.preInit) && t.preInit(e), e._preInitialized = !0
        },
        postInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-post-initialize", [e]);
            var t = u.fn.cycle.transitions[e.fx];
            t && u.isFunction(t.postInit) && t.postInit(e)
        },
        initSlideshow: function() {
            var e, t = this.opts(),
                n = t.container;
            t.API.calcFirstSlide(), "static" == t.container.css("position") && t.container.css("position", "relative"), u(t.slides[t.currSlide]).css("opacity", 1).show(), t.API.stackSlides(t.slides[t.currSlide], t.slides[t.nextSlide], !t.reverse), t.pauseOnHover && (!0 !== t.pauseOnHover && (n = u(t.pauseOnHover)), n.hover(function() {
                t.API.pause(!0)
            }, function() {
                t.API.resume(!0)
            })), t.timeout && (e = t.API.getSlideOpts(t.nextSlide), t.API.queueTransition(e, e.timeout + t.delay)), t._initialized = !0, t.API.updateView(!0), t.API.trigger("cycle-initialized", [t]), t.API.postInitSlideshow()
        },
        pause: function(e) {
            var t = this.opts(),
                n = t.API.getSlideOpts(),
                i = t.hoverPaused || t.paused;
            e ? t.hoverPaused = !0 : t.paused = !0, i || (t.container.addClass("cycle-paused"), t.API.trigger("cycle-paused", [t]).log("cycle-paused"), n.timeout && (clearTimeout(t.timeoutId), t.timeoutId = 0, t._remainingTimeout -= u.now() - t._lastQueue, (t._remainingTimeout < 0 || isNaN(t._remainingTimeout)) && (t._remainingTimeout = void 0)))
        },
        resume: function(e) {
            var t = this.opts(),
                n = !t.hoverPaused && !t.paused;
            e ? t.hoverPaused = !1 : t.paused = !1, n || (t.container.removeClass("cycle-paused"), t.API.queueTransition(t.API.getSlideOpts(), t._remainingTimeout), t.API.trigger("cycle-resumed", [t, t._remainingTimeout]).log("cycle-resumed"))
        },
        add: function(e, n) {
            var t, i = this.opts(),
                r = i.slideCount;
            "string" == u.type(e) && (e = u.trim(e)), u(e).each(function() {
                var e, t = u(this);
                n ? i.container.prepend(t) : i.container.append(t), i.slideCount++, e = i.API.buildSlideOpts(t), i.slides = n ? u(t).add(i.slides) : i.slides.add(t), i.API.initSlide(e, t, --i._maxZ), t.data("cycle.opts", e), i.API.trigger("cycle-slide-added", [i, e, t])
            }), i.API.updateView(!0), i._preInitialized && r < 2 && 1 <= i.slideCount && (i._initialized ? i.timeout && (t = i.slides.length, i.nextSlide = i.reverse ? t - 1 : 1, i.timeoutId || i.API.queueTransition(i)) : i.API.initSlideshow())
        },
        calcFirstSlide: function() {
            var e, t = this.opts();
            ((e = parseInt(t.startingSlide || 0, 10)) >= t.slides.length || e < 0) && (e = 0), t.currSlide = e, t.reverse ? (t.nextSlide = e - 1, t.nextSlide < 0 && (t.nextSlide = t.slides.length - 1)) : (t.nextSlide = e + 1, t.nextSlide == t.slides.length && (t.nextSlide = 0))
        },
        calcNextSlide: function() {
            var e, t = this.opts();
            t.reverse ? (e = t.nextSlide - 1 < 0, t.nextSlide = e ? t.slideCount - 1 : t.nextSlide - 1, t.currSlide = e ? 0 : t.nextSlide + 1) : (e = t.nextSlide + 1 == t.slides.length, t.nextSlide = e ? 0 : t.nextSlide + 1, t.currSlide = e ? t.slides.length - 1 : t.nextSlide - 1)
        },
        calcTx: function(e, t) {
            var n, i = e;
            return t && i.manualFx && (n = u.fn.cycle.transitions[i.manualFx]), n || (n = u.fn.cycle.transitions[i.fx]), n || (n = u.fn.cycle.transitions.fade, i.API.log('Transition "' + i.fx + '" not found.  Using fade.')), n
        },
        prepareTx: function(e, t) {
            var n, i, r, s, a, o = this.opts();
            return o.slideCount < 2 ? void(o.timeoutId = 0) : (!e || o.busy && !o.manualTrump || (o.API.stopTransition(), o.busy = !1, clearTimeout(o.timeoutId), o.timeoutId = 0), void(o.busy || (0 !== o.timeoutId || e) && (i = o.slides[o.currSlide], r = o.slides[o.nextSlide], s = o.API.getSlideOpts(o.nextSlide), a = o.API.calcTx(s, e), o._tx = a, e && void 0 !== s.manualSpeed && (s.speed = s.manualSpeed), o.nextSlide != o.currSlide && (e || !o.paused && !o.hoverPaused && o.timeout) ? (o.API.trigger("cycle-before", [s, i, r, t]), a.before && a.before(s, i, r, t), n = function() {
                o.busy = !1, o.container.data("cycle.opts") && (a.after && a.after(s, i, r, t), o.API.trigger("cycle-after", [s, i, r, t]), o.API.queueTransition(s), o.API.updateView(!0))
            }, o.busy = !0, a.transition ? a.transition(s, i, r, t, n) : o.API.doTransition(s, i, r, t, n), o.API.calcNextSlide(), o.API.updateView()) : o.API.queueTransition(s))))
        },
        doTransition: function(e, t, n, i, r) {
            var s = e,
                a = u(t),
                o = u(n),
                l = function() {
                    o.animate(s.animIn || {
                        opacity: 1
                    }, s.speed, s.easeIn || s.easing, r)
                };
            o.css(s.cssBefore || {}), a.animate(s.animOut || {}, s.speed, s.easeOut || s.easing, function() {
                a.css(s.cssAfter || {}), s.sync || l()
            }), s.sync && l()
        },
        queueTransition: function(e, t) {
            var n = this.opts(),
                i = void 0 !== t ? t : e.timeout;
            return 0 === n.nextSlide && 0 == --n.loop ? (n.API.log("terminating; loop=0"), n.timeout = 0, i ? setTimeout(function() {
                n.API.trigger("cycle-finished", [n])
            }, i) : n.API.trigger("cycle-finished", [n]), void(n.nextSlide = n.currSlide)) : void(i && (n._lastQueue = u.now(), void 0 === t && (n._remainingTimeout = e.timeout), n.paused || n.hoverPaused || (n.timeoutId = setTimeout(function() {
                n.API.prepareTx(!1, !n.reverse)
            }, i))))
        },
        stopTransition: function() {
            var e = this.opts();
            e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger("cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
        },
        advanceSlide: function(e) {
            var t = this.opts();
            return clearTimeout(t.timeoutId), t.timeoutId = 0, t.nextSlide = t.currSlide + e, t.nextSlide < 0 ? t.nextSlide = t.slides.length - 1 : t.nextSlide >= t.slides.length && (t.nextSlide = 0), t.API.prepareTx(!0, 0 <= e), !1
        },
        buildSlideOpts: function(e) {
            var t, n, i = this.opts(),
                r = e.data() || {};
            for (var s in r) r.hasOwnProperty(s) && /^cycle[A-Z]+/.test(s) && (t = r[s], n = s.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, l), i.API.log("[" + (i.slideCount - 1) + "]", n + ":", t, "(" + typeof t + ")"), r[n] = t);
            (r = u.extend({}, u.fn.cycle.defaults, i, r)).slideNum = i.slideCount;
            try {
                delete r.API, delete r.slideCount, delete r.currSlide, delete r.nextSlide, delete r.slides
            } catch (a) {}
            return r
        },
        getSlideOpts: function(e) {
            var t = this.opts();
            void 0 === e && (e = t.currSlide);
            var n = t.slides[e],
                i = u(n).data("cycle.opts");
            return u.extend({}, t, i)
        },
        initSlide: function(e, t, n) {
            var i = this.opts();
            t.css(e.slideCss || {}), 0 < n && t.css("zIndex", n), isNaN(e.speed) && (e.speed = u.fx.speeds[e.speed] || u.fx.speeds._default), e.sync || (e.speed = e.speed / 2), t.addClass(i.slideClass)
        },
        updateView: function(e) {
            var t = this.opts();
            if (t._initialized) {
                var n = t.API.getSlideOpts(),
                    i = t.slides[t.currSlide];
                !e && (t.API.trigger("cycle-update-view-before", [t, n, i]), t.updateView < 0) || (t.slideActiveClass && t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass), e && t.hideNonActive && t.slides.filter(":not(." + t.slideActiveClass + ")").hide(), t.API.trigger("cycle-update-view", [t, n, i, e]), t.API.trigger("cycle-update-view-after", [t, n, i]))
            }
        },
        getComponent: function(e) {
            var t = this.opts(),
                n = t[e];
            return "string" == typeof n ? /^\s*[\>|\+|~]/.test(n) ? t.container.find(n) : u(n) : n.jquery ? n : u(n)
        },
        stackSlides: function(e, t, n) {
            var i = this.opts();
            e || (e = i.slides[i.currSlide], t = i.slides[i.nextSlide], n = !i.reverse), u(e).css("zIndex", i.maxZ);
            var r, s = i.maxZ - 2,
                a = i.slideCount;
            if (n) {
                for (r = i.currSlide + 1; r < a; r++) u(i.slides[r]).css("zIndex", s--);
                for (r = 0; i.currSlide > r; r++) u(i.slides[r]).css("zIndex", s--)
            } else {
                for (r = i.currSlide - 1; 0 <= r; r--) u(i.slides[r]).css("zIndex", s--);
                for (r = a - 1; r > i.currSlide; r--) u(i.slides[r]).css("zIndex", s--)
            }
            u(t).css("zIndex", i.maxZ - 1)
        },
        getSlideIndex: function(e) {
            return this.opts().slides.index(e)
        }
    }, u.fn.cycle.log = function() {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, u.fn.cycle.version = function() {
        return "Cycle2: " + e
    }, u.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(e, t, n, i) {
                e.API.stackSlides(n, t, i), e.cssBefore = {
                    opacity: 1,
                    display: "block"
                }
            }
        },
        fade: {
            before: function(e, t, n, i) {
                var r = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(t, n, i), e.cssBefore = u.extend(r, {
                    opacity: 0,
                    display: "block"
                }), e.animIn = {
                    opacity: 1
                }, e.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(e, t, n, i) {
                var r = e.API.getSlideOpts(e.nextSlide).slideCss || {};
                e.API.stackSlides(t, n, i), e.cssBefore = u.extend(r, {
                    opacity: 1,
                    display: "block"
                }), e.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(e, t, n, i) {
                e.API.stackSlides(t, n, i);
                var r = e.container.css("overflow", "hidden").width();
                e.cssBefore = {
                    left: i ? r : -r,
                    top: 0,
                    opacity: 1,
                    display: "block"
                }, e.cssAfter = {
                    zIndex: e._maxZ - 2,
                    left: 0
                }, e.animIn = {
                    left: 0
                }, e.animOut = {
                    left: i ? -r : r
                }
            }
        }
    }, u.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: -1
    }, u(document).ready(function() {
        u(u.fn.cycle.defaults.autoSelector).cycle()
    })
}(jQuery),
function(o) {
    "use strict";

    function l(e, t) {
        var n, i, r, s = t.autoHeight;
        if ("container" == s) i = o(t.slides[t.currSlide]).outerHeight(), t.container.height(i);
        else if (t._autoHeightRatio) t.container.height(t.container.width() / t._autoHeightRatio);
        else if ("calc" === s || "number" == o.type(s) && 0 <= s) {
            if ((r = "calc" === s ? a(e, t) : s >= t.slides.length ? 0 : s) == t._sentinelIndex) return;
            t._sentinelIndex = r, t._sentinel && t._sentinel.remove(), (n = o(t.slides[r].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), n.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(t.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), n.find("*").css("visibility", "hidden"), t._sentinel = n
        }
    }

    function a(e, t) {
        var n = 0,
            i = -1;
        return t.slides.each(function(e) {
            var t = o(this).height();
            i < t && (i = t, n = e)
        }), n
    }

    function u(e, t, n, i) {
        var r = o(i).outerHeight(),
            s = t.sync ? t.speed / 2 : t.speed;
        t.container.animate({
            height: r
        }, s)
    }

    function c(e, t) {
        t._autoHeightOnResize && (o(window).off("resize orientationchange", t._autoHeightOnResize), t._autoHeightOnResize = null), t.container.off("cycle-slide-added cycle-slide-removed", l), t.container.off("cycle-destroyed", c), t.container.off("cycle-before", u), t._sentinel && (t._sentinel.remove(), t._sentinel = null)
    }
    o.extend(o.fn.cycle.defaults, {
        autoHeight: 0
    }), o(document).on("cycle-initialized", function(e, t) {
        function n() {
            l(e, t)
        }
        var i, r = t.autoHeight,
            s = o.type(r),
            a = null;
        ("string" === s || "number" === s) && (t.container.on("cycle-slide-added cycle-slide-removed", l), t.container.on("cycle-destroyed", c), "container" == r ? t.container.on("cycle-before", u) : "string" === s && /\d+\:\d+/.test(r) && (i = (i = r.match(/(\d+)\:(\d+)/))[1] / i[2], t._autoHeightRatio = i), "number" !== s && (t._autoHeightOnResize = function() {
            clearTimeout(a), a = setTimeout(n, 50)
        }, o(window).on("resize orientationchange", t._autoHeightOnResize)), setTimeout(n, 30))
    })
}(jQuery),
function(t) {
    "use strict";
    t.extend(t.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), t(document).on("cycle-update-view", function(e, i, r, s) {
        "caption" === i.captionModule && t.each(["caption", "overlay"], function() {
            var e = this,
                t = r[e + "Template"],
                n = i.API.getComponent(e);
            n.length && t ? (n.html(i.API.tmpl(t, r, i, s)), n.show()) : n.hide()
        })
    }), t(document).on("cycle-destroyed", function(e, n) {
        t.each(["caption", "overlay"], function() {
            var e = this,
                t = n[e + "Template"];
            n[e] && t && n.API.getComponent("caption").empty()
        })
    })
}(jQuery),
function(o) {
    "use strict";
    var a = o.fn.cycle;
    o.fn.cycle = function(t) {
        var n, i, r, s = o.makeArray(arguments);
        return "number" == o.type(t) ? this.cycle("goto", t) : "string" == o.type(t) ? this.each(function() {
            var e;
            return n = t, void 0 === (r = o(this).data("cycle.opts")) ? void a.log('slideshow must be initialized before sending commands; "' + n + '" ignored') : (n = "goto" == n ? "jump" : n, i = r.API[n], o.isFunction(i) ? ((e = o.makeArray(s)).shift(), i.apply(r.API, e)) : void a.log("unknown command: ", n))
        }) : a.apply(this, arguments)
    }, o.extend(o.fn.cycle, a), o.extend(a.API, {
        next: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? -1 : 1;
                !1 === e.allowWrap && e.currSlide + t >= e.slideCount || (e.API.advanceSlide(t), e.API.trigger("cycle-next", [e]).log("cycle-next"))
            }
        },
        prev: function() {
            var e = this.opts();
            if (!e.busy || e.manualTrump) {
                var t = e.reverse ? 1 : -1;
                !1 === e.allowWrap && e.currSlide + t < 0 || (e.API.advanceSlide(t), e.API.trigger("cycle-prev", [e]).log("cycle-prev"))
            }
        },
        destroy: function() {
            this.stop();
            var e = this.opts(),
                t = o.isFunction(o._data) ? o._data : o.noop;
            clearTimeout(e.timeoutId), e.timeoutId = 0, e.API.stop(), e.API.trigger("cycle-destroyed", [e]).log("cycle-destroyed"), e.container.removeData(), t(e.container[0], "parsedAttrs", !1), e.retainStylesOnDestroy || (e.container.removeAttr("style"), e.slides.removeAttr("style"), e.slides.removeClass("cycle-slide-active")), e.slides.each(function() {
                o(this).removeData(), t(this, "parsedAttrs", !1)
            })
        },
        jump: function(e) {
            var t, n = this.opts();
            if (!n.busy || n.manualTrump) {
                var i = parseInt(e, 10);
                if (isNaN(i) || i < 0 || i >= n.slides.length) return void n.API.log("goto: invalid slide index: " + i);
                if (i == n.currSlide) return void n.API.log("goto: skipping, already on slide", i);
                n.nextSlide = i, clearTimeout(n.timeoutId), n.timeoutId = 0, n.API.log("goto: ", i, " (zero-index)"), t = n.currSlide < n.nextSlide, n.API.prepareTx(!0, t)
            }
        },
        stop: function() {
            var e = this.opts(),
                t = e.container;
            clearTimeout(e.timeoutId), e.timeoutId = 0, e.API.stopTransition(), e.pauseOnHover && (!0 !== e.pauseOnHover && (t = o(e.pauseOnHover)), t.off("mouseenter mouseleave")), e.API.trigger("cycle-stopped", [e]).log("cycle-stopped")
        },
        reinit: function() {
            var e = this.opts();
            e.API.destroy(), e.container.cycle()
        },
        remove: function(e) {
            for (var t, n, i = this.opts(), r = [], s = 1, a = 0; i.slides.length > a; a++) t = i.slides[a], a == e ? n = t : (r.push(t), o(t).data("cycle.opts").slideNum = s, s++);
            n && (i.slides = o(r), i.slideCount--, o(n).remove(), e == i.currSlide && i.API.advanceSlide(1), i.API.trigger("cycle-slide-removed", [i, e, n]).log("cycle-slide-removed"), i.API.updateView())
        }
    }), o(document).on("click.cycle", "[data-cycle-cmd]", function(e) {
        e.preventDefault();
        var t = o(this),
            n = t.data("cycle-cmd"),
            i = t.data("cycle-context") || ".cycle-slideshow";
        o(i).cycle(n, t.data("cycle-arg"))
    })
}(jQuery),
function(r) {
    "use strict";

    function n(t, n) {
        var i;
        return t._hashFence ? void(t._hashFence = !1) : (i = window.location.hash.substring(1), void t.slides.each(function(e) {
            return r(this).data("cycle-hash") == i ? (!0 === n ? t.startingSlide = e : (t.nextSlide = e, t.API.prepareTx(!0, !1)), !1) : void 0
        }))
    }
    r(document).on("cycle-pre-initialize", function(e, t) {
        n(t, !0), t._onHashChange = function() {
            n(t, !1)
        }, r(window).on("hashchange", t._onHashChange)
    }), r(document).on("cycle-update-view", function(e, t, n) {
        n.hash && (t._hashFence = !0, window.location.hash = n.hash)
    }), r(document).on("cycle-destroyed", function(e, t) {
        t._onHashChange && r(window).off("hashchange", t._onHashChange)
    })
}(jQuery),
function(d) {
    "use strict";
    d.extend(d.fn.cycle.defaults, {
        loader: !1
    }), d(document).on("cycle-bootstrap", function(e, u) {
        function t(e, s) {
            function a(e) {
                var t;
                "wait" == u.loader ? (o.push(e), 0 === l && (o.sort(n), c.apply(u.API, [o, s]), u.container.removeClass("cycle-loading"))) : (t = d(u.slides[u.currSlide]), c.apply(u.API, [e, s]), t.show(), u.container.removeClass("cycle-loading"))
            }

            function n(e, t) {
                return e.data("index") - t.data("index")
            }
            var o = [];
            if ("string" == d.type(e)) e = d.trim(e);
            else if ("array" === d.type(e))
                for (var t = 0; e.length > t; t++) e[t] = d(e[t])[0];
            var l = (e = d(e)).length;
            l && (e.hide().appendTo("body").each(function(e) {
                function t() {
                    0 == --n && (--l, a(i))
                }
                var n = 0,
                    i = d(this),
                    r = i.is("img") ? i : i.find("img");
                return i.data("index", e), (r = r.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length ? (n = r.length, void r.each(function() {
                    this.complete ? t() : d(this).load(function() {
                        t()
                    }).error(function() {
                        0 == --n && (u.API.log("slide skipped; img not loaded:", this.src), 0 == --l && "wait" == u.loader && c.apply(u.API, [o, s]))
                    })
                })) : (--l, void o.push(i))
            }), l && u.container.addClass("cycle-loading"))
        }
        var c;
        u.loader && (c = u.API.add, u.API.add = t)
    })
}(jQuery),
function(a) {
    "use strict";

    function i(n, i, r) {
        var s;
        n.API.getComponent("pager").each(function() {
            var t = a(this);
            if (i.pagerTemplate) {
                var e = n.API.tmpl(i.pagerTemplate, i, n, r[0]);
                s = a(e).appendTo(t)
            } else s = t.children().eq(n.slideCount - 1);
            s.on(n.pagerEvent, function(e) {
                e.preventDefault(), n.API.page(t, e.currentTarget)
            })
        })
    }

    function r(e, t) {
        var n = this.opts();
        if (!n.busy || n.manualTrump) {
            var i = e.children().index(t),
                r = i > n.currSlide;
            n.currSlide != i && (n.nextSlide = i, n.API.prepareTx(!0, r), n.API.trigger("cycle-pager-activated", [n, e, t]))
        }
    }
    a.extend(a.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerTemplate: "<span>&bull;</span>"
    }), a(document).on("cycle-bootstrap", function(e, t, n) {
        n.buildPagerLink = i
    }), a(document).on("cycle-slide-added", function(e, t, n, i) {
        t.pager && (t.API.buildPagerLink(t, n, i), t.API.page = r)
    }), a(document).on("cycle-slide-removed", function(e, t, n) {
        t.pager && t.API.getComponent("pager").each(function() {
            var e = a(this);
            a(e.children()[n]).remove()
        })
    }), a(document).on("cycle-update-view", function(e, t) {
        t.pager && t.API.getComponent("pager").each(function() {
            a(this).children().removeClass(t.pagerActiveClass).eq(t.currSlide).addClass(t.pagerActiveClass)
        })
    }), a(document).on("cycle-destroyed", function(e, t) {
        var n = t.API.getComponent("pager");
        n && (n.children().off(t.pagerEvent), t.pagerTemplate && n.empty())
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(e.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), e(document).on("cycle-initialized", function(e, t) {
        if (t.API.getComponent("next").on(t.nextEvent, function(e) {
                e.preventDefault(), t.API.next()
            }), t.API.getComponent("prev").on(t.prevEvent, function(e) {
                e.preventDefault(), t.API.prev()
            }), t.swipe) {
            var n = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
                i = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            t.container.on(n, function() {
                t.API.next()
            }), t.container.on(i, function() {
                t.API.prev()
            })
        }
    }), e(document).on("cycle-update-view", function(e, t) {
        if (!t.allowWrap) {
            var n = t.disabledClass,
                i = t.API.getComponent("next"),
                r = t.API.getComponent("prev"),
                s = t._prevBoundry || 0,
                a = t._nextBoundry || t.slideCount - 1;
            t.currSlide == a ? i.addClass(n).prop("disabled", !0) : i.removeClass(n).prop("disabled", !1), t.currSlide === s ? r.addClass(n).prop("disabled", !0) : r.removeClass(n).prop("disabled", !1)
        }
    }), e(document).on("cycle-destroyed", function(e, t) {
        t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery),
function(c) {
    "use strict";
    c.extend(c.fn.cycle.defaults, {
        progressive: !1
    }), c(document).on("cycle-pre-initialize", function(e, r) {
        if (r.progressive) {
            var s, t, n = r.API,
                i = n.next,
                a = n.prev,
                o = n.prepareTx,
                l = c.type(r.progressive);
            if ("array" == l) s = r.progressive;
            else if (c.isFunction(r.progressive)) s = r.progressive(r);
            else if ("string" == l) {
                if (t = c(r.progressive), !(s = c.trim(t.html()))) return;
                if (/^(\[)/.test(s)) try {
                    s = c.parseJSON(s)
                } catch (u) {
                    return void n.log("error parsing progressive slides", u)
                } else(s = s.split(RegExp(t.data("cycle-split") || "\n")))[s.length - 1] || s.pop()
            }
            o && (n.prepareTx = function(e, t) {
                var n, i;
                return e || 0 === s.length ? void o.apply(r.API, [e, t]) : void(t && r.currSlide == r.slideCount - 1 ? (i = s[0], s = s.slice(1), r.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.API.advanceSlide(1)
                    }, 50)
                }), r.API.add(i)) : t || 0 !== r.currSlide ? o.apply(r.API, [e, t]) : (n = s.length - 1, i = s[n], s = s.slice(0, n), r.container.one("cycle-slide-added", function(e, t) {
                    setTimeout(function() {
                        t.currSlide = 1, t.API.advanceSlide(-1)
                    }, 50)
                }), r.API.add(i, !0)))
            }), i && (n.next = function() {
                var e = this.opts();
                if (s.length && e.currSlide == e.slideCount - 1) {
                    var t = s[0];
                    s = s.slice(1), e.container.one("cycle-slide-added", function(e, t) {
                        i.apply(t.API), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(t)
                } else i.apply(e.API)
            }), a && (n.prev = function() {
                var e = this.opts();
                if (s.length && 0 === e.currSlide) {
                    var t = s.length - 1,
                        n = s[t];
                    s = s.slice(0, t), e.container.one("cycle-slide-added", function(e, t) {
                        t.currSlide = 1, t.API.advanceSlide(-1), t.container.removeClass("cycle-loading")
                    }), e.container.addClass("cycle-loading"), e.API.add(n, !0)
                } else a.apply(e.API)
            })
        }
    })
}(jQuery),
function(l) {
    "use strict";
    l.extend(l.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    }), l.extend(l.fn.cycle.API, {
        tmpl: function(e, t) {
            var n = RegExp(t.tmplRegex || l.fn.cycle.defaults.tmplRegex, "g"),
                o = l.makeArray(arguments);
            return o.shift(), e.replace(n, function(e, t) {
                var n, i, r, s, a = t.split(".");
                for (n = 0; o.length > n; n++)
                    if (r = o[n]) {
                        if (1 < a.length)
                            for (s = r, i = 0; a.length > i; i++) s = (r = s)[a[i]] || t;
                        else s = r[t];
                        if (l.isFunction(s)) return s.apply(r, o);
                        if (null != s && s != t) return s
                    } return t
            })
        }
    })
}(jQuery),
function(o, i, r, l) {
    var u = o(i);
    o.fn.lazyload = function(e) {
        function t() {
            var t = 0;
            s.each(function() {
                var e = o(this);
                if (!a.skip_invisible || e.is(":visible"))
                    if (o.abovethetop(this, a) || o.leftofbegin(this, a));
                    else if (o.belowthefold(this, a) || o.rightoffold(this, a)) {
                    if (++t > a.failure_limit) return !1
                } else e.trigger("appear"), t = 0
            })
        }
        var n, s = this,
            a = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: i,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return e && (l !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), l !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), o.extend(a, e)), n = a.container === l || a.container === i ? u : o(a.container), 0 === a.event.indexOf("scroll") && n.bind(a.event, function() {
            return t()
        }), this.each(function() {
            var i = this,
                r = o(i);
            i.loaded = !1, (r.attr("src") === l || !1 === r.attr("src")) && r.is("img") && r.attr("src", a.placeholder), r.one("appear", function() {
                if (!this.loaded) {
                    if (a.appear) {
                        var e = s.length;
                        a.appear.call(i, e, a)
                    }
                    o("<img />").bind("load", function() {
                        var e = r.attr("data-" + a.data_attribute);
                        r.hide(), r.is("img") ? r.attr("src", e) : r.css("background-image", "url('" + e + "')"), r[a.effect](a.effect_speed), i.loaded = !0;
                        var t = o.grep(s, function(e) {
                            return !e.loaded
                        });
                        if (s = o(t), a.load) {
                            var n = s.length;
                            a.load.call(i, n, a)
                        }
                    }).attr("src", r.attr("data-" + a.data_attribute))
                }
            }), 0 !== a.event.indexOf("scroll") && r.bind(a.event, function() {
                i.loaded || r.trigger("appear")
            })
        }), u.bind("resize", function() {
            t()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && s.each(function() {
                o(this).trigger("appear")
            })
        }), o(r).ready(function() {
            t()
        }), this
    }, o.belowthefold = function(e, t) {
        return (t.container === l || t.container === i ? (i.innerHeight ? i.innerHeight : u.height()) + u.scrollTop() : o(t.container).offset().top + o(t.container).height()) <= o(e).offset().top - t.threshold
    }, o.rightoffold = function(e, t) {
        return (t.container === l || t.container === i ? u.width() + u.scrollLeft() : o(t.container).offset().left + o(t.container).width()) <= o(e).offset().left - t.threshold
    }, o.abovethetop = function(e, t) {
        return (t.container === l || t.container === i ? u.scrollTop() : o(t.container).offset().top) >= o(e).offset().top + t.threshold + o(e).height()
    }, o.leftofbegin = function(e, t) {
        return (t.container === l || t.container === i ? u.scrollLeft() : o(t.container).offset().left) >= o(e).offset().left + t.threshold + o(e).width()
    }, o.inviewport = function(e, t) {
        return !(o.rightoffold(e, t) || o.leftofbegin(e, t) || o.belowthefold(e, t) || o.abovethetop(e, t))
    }, o.extend(o.expr[":"], {
        "below-the-fold": function(e) {
            return o.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !o.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return o.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !o.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return o.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !o.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return o.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !o.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
function(c) {
    var l = {
            sort: !1,
            "sort-attr": "data-priority",
            "sort-desc": !1,
            autoselect: !0,
            "alternative-spellings": !0,
            "alternative-spellings-attr": "data-alternative-spellings",
            "remove-valueless-options": !0,
            "copy-attributes-to-text-field": !0,
            "autocomplete-plugin": "jquery_ui",
            "relevancy-sorting": !0,
            "relevancy-sorting-partial-match-value": 1,
            "relevancy-sorting-strict-match-value": 5,
            "relevancy-sorting-booster-attr": "data-relevancy-booster",
            minLength: 0,
            delay: 0,
            autoFocus: !0,
            handle_invalid_input: function(e) {
                var t = "option:selected:first";
                e.settings["remove-valueless-options"] && (t = 'option:selected[value!=""]:first'), e.$text_field.val(e.$select_field.find(t).text())
            },
            handle_select_field: function(e) {
                return e.hide()
            },
            insert_text_field: function(t) {
                var n = c('<input type="text"></input>');
                if (l["copy-attributes-to-text-field"]) {
                    for (var e = {}, i = t.$select_field[0].attributes, r = 0; r < i.length; r++) {
                        var s = i[r].nodeName,
                            a = i[r].nodeValue;
                        "name" !== s && "id" !== s && void 0 !== t.$select_field.attr(s) && (e[s] = a)
                    }
                    n.attr(e)
                }
                n.blur(function() {
                    var e = t.$select_field.find("option").map(function(e, t) {
                        return c(t).text()
                    });
                    c.inArray(n.val(), e) < 0 && "function" == typeof l.handle_invalid_input && l.handle_invalid_input(t)
                }), t.settings.autoselect && n.click(function() {
                    this.select()
                });
                var o = "option:selected:first";
                return t.settings["remove-valueless-options"] && (o = 'option:selected[value!=""]:first'), n.val(t.$select_field.find(o).text()).insertAfter(t.$select_field)
            },
            extract_options: function(e) {
                var s = [],
                    t = e.find("option"),
                    a = t.length;
                return t.each(function() {
                    var e = c(this),
                        t = {
                            "real-value": e.attr("value"),
                            label: e.text()
                        };
                    if (l["remove-valueless-options"] && "" === t["real-value"]);
                    else {
                        t.matches = t.label;
                        var n = e.attr(l["alternative-spellings-attr"]);
                        if (n && (t.matches += " " + n), l.sort) {
                            var i = parseInt(e.attr(l["sort-attr"]), 10);
                            t.weight = i || a
                        }
                        if (l["relevancy-sorting"]) {
                            t["relevancy-score"] = 0, t["relevancy-score-booster"] = 1;
                            var r = parseFloat(e.attr(l["relevancy-sorting-booster-attr"]));
                            r && (t["relevancy-score-booster"] = r)
                        }
                        s.push(t)
                    }
                }), l.sort && (l["sort-desc"] ? s.sort(function(e, t) {
                    return t.weight - e.weight
                }) : s.sort(function(e, t) {
                    return e.weight - t.weight
                })), s
            }
        },
        t = {
            init: function(e) {
                return /msie/.test(navigator.userAgent.toLowerCase()) && parseInt(navigator.appVersion, 10) <= 6 ? this : (l = c.extend(l, e), this.each(function() {
                    var e = c(this),
                        t = {
                            $select_field: e,
                            options: l.extract_options(e),
                            settings: l
                        };
                    t.$text_field = l.insert_text_field(t), l.handle_select_field(e), "string" == typeof l["autocomplete-plugin"] ? n[l["autocomplete-plugin"]](t) : l["autocomplete-plugin"](t)
                }))
            }
        },
        n = {
            jquery_ui: function(u) {
                var i = function(o) {
                        for (var e = o.split(" "), l = [], t = 0; t < e.length; t++)
                            if (0 < e[t].length) {
                                var n = {};
                                n.partial = new RegExp(c.ui.autocomplete.escapeRegex(e[t]), "i"), u.settings["relevancy-sorting"] && (n.strict = new RegExp("^" + c.ui.autocomplete.escapeRegex(e[t]), "i")), l.push(n)
                            } return c.grep(u.options, function(e) {
                            var t = 0;
                            if (u.settings["relevancy-sorting"]) var n = !1,
                                i = e.matches.split(" ");
                            for (var r = 0; r < l.length; r++)
                                if (l[r].partial.test(e.matches) && t++, u.settings["relevancy-sorting"])
                                    for (var s = 0; s < i.length; s++)
                                        if (l[r].strict.test(i[s])) {
                                            n = !0;
                                            break
                                        } if (u.settings["relevancy-sorting"]) {
                                var a = 0;
                                a += t * u.settings["relevancy-sorting-partial-match-value"], n && (a += u.settings["relevancy-sorting-strict-match-value"]), a *= e["relevancy-score-booster"], e["relevancy-score"] = a
                            }
                            return !o || l.length === t
                        })
                    },
                    n = function(e) {
                        if (e) u.$select_field.val() !== e["real-value"] && (u.$select_field.val(e["real-value"]), u.$select_field.change());
                        else {
                            for (var t = u.$text_field.val().toLowerCase(), n = {
                                    "real-value": !1
                                }, i = 0; i < u.options.length; i++)
                                if (t === u.options[i].label.toLowerCase()) {
                                    n = u.options[i];
                                    break
                                } u.$select_field.val() !== n["real-value"] && (u.$select_field.val(n["real-value"] || ""), u.$select_field.change()), n["real-value"] && u.$text_field.val(n.label), "function" == typeof u.settings.handle_invalid_input && "" === u.$select_field.val() && u.settings.handle_invalid_input(u)
                        }
                    };
                u.$text_field.autocomplete({
                    minLength: u.settings.minLength,
                    delay: u.settings.delay,
                    autoFocus: u.settings.autoFocus,
                    source: function(e, t) {
                        var n = i(e.term);
                        u.settings["relevancy-sorting"] && (n = n.sort(function(e, t) {
                            return t["relevancy-score"] == e["relevancy-score"] ? t.label < e.label ? 1 : -1 : t["relevancy-score"] - e["relevancy-score"]
                        })), t(n)
                    },
                    select: function(e, t) {
                        n(t.item)
                    },
                    change: function(e, t) {
                        n(t.item)
                    }
                }), u.$text_field.parents("form:first").submit(function() {
                    n()
                }), n()
            }
        };
    c.fn.selectToAutocomplete = function(e) {
        return t[e] ? t[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void c.error("Method " + e + " does not exist on jQuery.fn.selectToAutocomplete") : t.init.apply(this, arguments)
    }
}(jQuery),
function(u) {
    u.extend(u.fn, {
        validate: function(e) {
            if (this.length) {
                var n = u.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new u.validator(e, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), u(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function e() {
                        var e;
                        return !n.settings.submitHandler || (n.submitButton && (e = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && e.remove(), !1)
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, e()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : e() : (n.focusInvalid(), !1)
                })), n)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            if (u(this[0]).is("form")) return this.validate().form();
            var e = !0,
                t = u(this[0].form).validate();
            return this.each(function() {
                e = e && t.element(this)
            }), e
        },
        removeAttrs: function(e) {
            var n = {},
                i = this;
            return u.each(e.split(/\s/), function(e, t) {
                n[t] = i.attr(t), i.removeAttr(t)
            }), n
        },
        rules: function(e, t) {
            var n = this[0];
            if (e) {
                var i = u.data(n.form, "validator").settings,
                    r = i.rules,
                    s = u.validator.staticRules(n);
                switch (e) {
                    case "add":
                        u.extend(s, u.validator.normalizeRule(t)), delete s.messages, r[n.name] = s, t.messages && (i.messages[n.name] = u.extend(i.messages[n.name], t.messages));
                        break;
                    case "remove":
                        if (!t) return delete r[n.name], s;
                        var a = {};
                        return u.each(t.split(/\s/), function(e, t) {
                            a[t] = s[t], delete s[t]
                        }), a
                }
            }
            var o = u.validator.normalizeRules(u.extend({}, u.validator.classRules(n), u.validator.attributeRules(n), u.validator.dataRules(n), u.validator.staticRules(n)), n);
            if (o.required) {
                var l = o.required;
                delete o.required, o = u.extend({
                    required: l
                }, o)
            }
            return o
        }
    }), u.extend(u.expr[":"], {
        blank: function(e) {
            return !u.trim("" + u(e).val())
        },
        filled: function(e) {
            return !!u.trim("" + u(e).val())
        },
        unchecked: function(e) {
            return !u(e).prop("checked")
        }
    }), u.validator = function(e, t) {
        this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init()
    }, u.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = u.makeArray(arguments);
            return e.unshift(n), u.validator.format.apply(this, e)
        } : (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function(e, t) {
            n = n.replace(RegExp("\\{" + e + "\\}", "g"), function() {
                return t
            })
        }), n)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : u(e).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : u(e).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            u.extend(u.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var t = u.data(this[0].form, "validator"),
                        n = "on" + e.type.replace(/^validate/, "");
                    t.settings[n] && t.settings[n].call(t, this[0], e)
                }
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                u.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)), u.each(e, function(e, t) {
                        i[t] = n
                    })
                });
                var n = this.settings.rules;
                u.each(n, function(e, t) {
                    n[e] = u.validator.normalizeRule(t)
                }), u(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && u(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = u(e);
                var t = !1 !== this.check(e);
                return t ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t
            },
            showErrors: function(t) {
                if (t) {
                    for (var e in u.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
                        message: t[e],
                        element: this.findByName(e)[0]
                    });
                    this.successList = u.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t = 0;
                for (var n in e) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === u.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var e = this,
                    t = {};
                return u(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in t || !e.objectLength(u(this).rules())) && (t[this.name] = !0)
                })
            },
            clean: function(e) {
                return u(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return u(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([]), this.currentElements = u([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t = u(e).attr("type"),
                    n = u(e).val();
                return "radio" === t || "checkbox" === t ? u("input[name='" + u(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, n = u(e).rules(),
                    i = !1,
                    r = this.elementValue(e);
                for (var s in n) {
                    var a = {
                        method: s,
                        parameters: n[s]
                    };
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[s].call(this, r, e, a.parameters))) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, a), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", o), o
                    }
                }
                return i ? void 0 : (this.objectLength(n) && this.successList.push(e), !0)
            },
            customDataMessage: function(e, t) {
                return u(e).data("msg-" + t.toLowerCase()) || e.attributes && u(e).attr("data-msg-" + t.toLowerCase())
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; arguments.length > e; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(e, t) {
                return this.findDefined(this.customMessage(e.name, t), this.customDataMessage(e, t), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
                    message: n,
                    element: e
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t;
                for (e = 0; this.errorList[e]; e++) {
                    var n = this.errorList[e];
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return u(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n = this.errorsFor(e);
                n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(t)) : (n = u("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, u(e)) : n.insertAfter(e))), !t && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
            },
            errorsFor: function(e) {
                var t = this.idOrName(e);
                return this.errors().filter(function() {
                    return u(this).attr("for") === t
                })
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return u(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case "select":
                        return u("option:selected", t).length;
                    case "input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!u(e, t.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--, this.pendingRequest < 0 && (
                    this.pendingRequest = 0), delete this.pending[e.name], t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return u.data(e, "previousValue") || u.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {},
                n = u(e).attr("class");
            return n && u.each(n.split(" "), function() {
                this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this])
            }), t
        },
        attributeRules: function(e) {
            var t = {},
                n = u(e),
                i = n[0].getAttribute("type");
            for (var r in u.validator.methods) {
                var s;
                "required" === r ? ("" === (s = n.get(0).getAttribute(r)) && (s = !0), s = !!s) : s = n.attr(r), /min|max/.test(r) && (null === i || /number|range|text/.test(i)) && (s = Number(s)), s ? t[r] = s : i === r && "range" !== i && (t[r] = !0)
            }
            return t.maxlength && /-1|2147483647|524288/.test(t.maxlength) && delete t.maxlength, t
        },
        dataRules: function(e) {
            var t, n, i = {},
                r = u(e);
            for (t in u.validator.methods) void 0 !== (n = r.data("rule-" + t.toLowerCase())) && (i[t] = n);
            return i
        },
        staticRules: function(e) {
            var t = {},
                n = u.data(e.form, "validator");
            return n.settings.rules && (t = u.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function(i, r) {
            return u.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                            case "string":
                                n = !!u(t.depends, r.form).length;
                                break;
                            case "function":
                                n = t.depends.call(r, r)
                        }
                        n ? i[e] = void 0 === t.param || t.param : delete i[e]
                    }
                } else delete i[e]
            }), u.each(i, function(e, t) {
                i[e] = u.isFunction(t) ? t(r) : t
            }), u.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }), u.each(["rangelength", "range"], function() {
                var e;
                i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
            }), u.validator.autoCreateRanges && (i.min && i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), i.minlength && i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var t = {};
                u.each(e.split(/\s/), function() {
                    t[this] = !0
                }), e = t
            }
            return e
        },
        addMethod: function(e, t, n) {
            u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== n ? n : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t)) return "dependency-mismatch";
                if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < u.trim(e).length;
                var i = u(t).val();
                return i && 0 < i.length
            },
            email: function(e, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                for (var n = 0, i = 0, r = !1, s = (e = e.replace(/\D/g, "")).length - 1; 0 <= s; s--) {
                    var a = e.charAt(s);
                    i = parseInt(a, 10), r && 9 < (i *= 2) && (i -= 9), n += i, r = !r
                }
                return 0 == n % 10
            },
            minlength: function(e, t, n) {
                var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
                return this.optional(t) || n <= i
            },
            maxlength: function(e, t, n) {
                var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
                return this.optional(t) || i <= n
            },
            rangelength: function(e, t, n) {
                var i = u.isArray(e) ? e.length : this.getLength(u.trim(e), t);
                return this.optional(t) || i >= n[0] && n[1] >= i
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && n[1] >= e
            },
            equalTo: function(e, t, n) {
                var i = u(n);
                return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    u(t).valid()
                }), e === i.val()
            },
            remote: function(s, a, e) {
                if (this.optional(a)) return "dependency-mismatch";
                var o = this.previousValue(a);
                if (this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), o.originalMessage = this.settings.messages[a.name].remote, this.settings.messages[a.name].remote = o.message, e = "string" == typeof e && {
                        url: e
                    } || e, o.old === s) return o.valid;
                o.old = s;
                var l = this;
                this.startRequest(a);
                var t = {};
                return t[a.name] = s, u.ajax(u.extend(!0, {
                    url: e,
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: t,
                    success: function(e) {
                        l.settings.messages[a.name].remote = o.originalMessage;
                        var t = !0 === e || "true" === e;
                        if (t) {
                            var n = l.formSubmitted;
                            l.prepareElement(a), l.formSubmitted = n, l.successList.push(a), delete l.invalid[a.name], l.showErrors()
                        } else {
                            var i = {},
                                r = e || l.defaultMessage(a, "remote");
                            i[a.name] = o.message = u.isFunction(r) ? r(s) : r, l.invalid[a.name] = !0, l.showErrors(i)
                        }
                        o.valid = t, l.stopRequest(a, t)
                    }
                }, e)), "pending"
            }
        }
    }), u.format = u.validator.format
}(jQuery),
function(i) {
    var r = {};
    if (i.ajaxPrefilter) i.ajaxPrefilter(function(e, t, n) {
        var i = e.port;
        "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n)
    });
    else {
        var s = i.ajax;
        i.ajax = function(e) {
            var t = ("mode" in e ? e : i.ajaxSettings).mode,
                n = ("port" in e ? e : i.ajaxSettings).port;
            return "abort" === t ? (r[n] && r[n].abort(), r[n] = s.apply(this, arguments), r[n]) : s.apply(this, arguments)
        }
    }
}(jQuery),
function(r) {
    r.extend(r.fn, {
        validateDelegate: function(n, e, i) {
            return this.bind(e, function(e) {
                var t = r(e.target);
                return t.is(n) ? i.apply(t, arguments) : void 0
            })
        }
    })
}(jQuery),
function(y) {
    function b(e, t, n) {
        var i = e[t];
        return delete e[t], void 0 === i ? n : i
    }

    function _(e) {
        return y.isArray(e) ? e : [e]
    }

    function w(e) {
        return void 0 !== e && 0 < ("" + e).length
    }

    function k(e) {
        var t = e.width,
            n = e.height,
            i = b(e, "size");
        if (i) {
            var r = i.split("x");
            e.width = t = r[0], e.height = n = r[1]
        }
        var s = e.overlay || e.underlay,
            a = b(e, "crop"),
            o = _(b(e, "angle")).join("."),
            l = s || w(o) || "fit" == a || "limit" == a;
        t && (l || parseFloat(t) < 1) && delete e.width, n && (l || parseFloat(n) < 1) && delete e.height, a || s || (t = n = undefined);
        var u = b(e, "background");
        u = u && u.replace(/^#/, "rgb:");
        var c = _(b(e, "transformation", [])),
            d = [];
        0 < y.grep(c, function(e) {
            return "object" == typeof e
        }).length ? c = y.map(c, function(e) {
            return k("object" == typeof e ? y.extend({}, e) : {
                transformation: e
            })
        }) : (d = y.grep(c, function() {
            return null != this && "" != this
        }).join("."), c = []);
        var h = b(e, "effect");
        y.isArray(h) && (h = h.join(":"));
        var f = b(e, "border");
        y.isPlainObject(f) && (f = "" + (f.width || 2) + "px_solid_" + (f.color || "black").replace(/^#/, "rgb:"));
        var p = [
                ["c", a],
                ["t", d],
                ["w", t],
                ["h", n],
                ["b", u],
                ["e", h],
                ["a", o],
                ["bo", f],
                ["fl", _(b(e, "flags")).join(".")]
            ],
            m = {
                x: "x",
                y: "y",
                radius: "r",
                gravity: "g",
                quality: "q",
                prefix: "p",
                default_image: "d",
                underlay: "u",
                overlay: "l",
                fetch_format: "f",
                density: "dn",
                page: "pg",
                color_space: "cl",
                delay: "dl",
                opacity: "o"
            };
        for (var g in m) p.push([m[g], b(e, g)]);
        p.sort(function(e, t) {
            return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
        }), p.push([b(e, "raw_transformation")]);
        var v = y.map(y.grep(p, function(e) {
            return w(e[e.length - 1])
        }), function(e) {
            return e.join("_")
        }).join(",");
        return c.push(v), y.grep(c, w).join("/")
    }

    function m(e) {
        return t || (t = document.createElement("img")), t.src = e, e = t.src, t.src = null, e
    }

    function i(e, t) {
        var n = b(t = t || {}, "type", "upload");
        "fetch" == n && (t.fetch_format = t.fetch_format || b(t, "format"));
        var i = k(t),
            r = b(t, "resource_type", "image"),
            s = b(t, "version"),
            a = b(t, "format"),
            o = b(t, "cloud_name", y.cloudinary.config().cloud_name);
        if (!o) throw "Unknown cloud_name";
        var l = b(t, "private_cdn", y.cloudinary.config().private_cdn),
            u = b(t, "secure_distribution", y.cloudinary.config().secure_distribution),
            c = b(t, "cname", y.cloudinary.config().cname),
            d = b(t, "cdn_subdomain", y.cloudinary.config().cdn_subdomain),
            h = b(t, "secure", "https:" == window.location.protocol);
        if (h && !u) {
            if (l) throw "secure_distribution not defined";
            u = g
        }
        if ("fetch" == n && (e = m(e)), e.match(/^https?:/)) {
            if ("upload" == n || "asset" == n) return e;
            e = encodeURIComponent(e).replace(/%3A/g, ":").replace(/%2F/g, "/")
        } else a && (e += "." + a);
        var f = "file:" == window.location.protocol ? "file://" : h ? "https://" : "http://";
        if (o.match(/^\//) && !h) f = "/res" + o;
        else {
            var p = d ? "a" + (crc32(e) % 5 + 1) + "." : "";
            h ? f += u : (host = c || (l ? o + "-res.cloudinary.com" : "res.cloudinary.com"), f += p + host), l || (f += "/" + o)
        }
        return [f, r, n, i, s ? "v" + s : "", e].join("/").replace(/([^:])\/+/g, "$1/")
    }

    function r(e) {
        var t = b(e, "html_width"),
            n = b(e, "html_height");
        t && (e.width = t), n && (e.height = n)
    }
    var g = "d3jpl91pxevbkh.cloudfront.net",
        t = undefined,
        n = undefined;
    y.cloudinary = {
        config: function(e, t) {
            if (n || (n = {}, y('meta[name^="cloudinary_"]').each(function() {
                    n[y(this).attr("name").replace("cloudinary_", "")] = y(this).attr("content")
                })), void 0 !== t) n[e] = t;
            else {
                if ("string" == typeof e) return n[e];
                e && (n = e)
            }
            return n
        },
        url: function(e, t) {
            return i(e, t = y.extend({}, t))
        },
        url_internal: i,
        transformation_string: k,
        image: function(e, t) {
            var n = i(e, t = y.extend({}, t));
            return r(t), y("<img/>").attr(t).attr("src", n)
        },
        facebook_profile_image: function(e, t) {
            return y.cloudinary.image(e, y.extend({
                type: "facebook"
            }, t))
        },
        twitter_profile_image: function(e, t) {
            return y.cloudinary.image(e, y.extend({
                type: "twitter"
            }, t))
        },
        twitter_name_profile_image: function(e, t) {
            return y.cloudinary.image(e, y.extend({
                type: "twitter_name"
            }, t))
        },
        gravatar_image: function(e, t) {
            return y.cloudinary.image(e, y.extend({
                type: "gravatar"
            }, t))
        },
        fetch_image: function(e, t) {
            return y.cloudinary.image(e, y.extend({
                type: "fetch"
            }, t))
        }
    }, y.fn.cloudinary = function(n) {
        return this.filter("img").each(function() {
            var e = y.extend({
                    width: y(this).attr("width"),
                    height: y(this).attr("height"),
                    src: y(this).attr("src")
                }, y.extend(y(this).data(), n)),
                t = i(b(e, "source", b(e, "src")), e);
            r(e), y(this).attr({
                src: t,
                width: e.width,
                height: e.height
            })
        }), this
    }, y.fn.fetchify = function(e) {
        return this.cloudinary(y.extend(e, {
            type: "fetch"
        }))
    }
}(jQuery),
function(r) {
    r.fn.fileupload && (r.fn.cloudinary_fileupload = function(e) {
        if (e = r.extend({
                maxFileSize: 1e7,
                dataType: "json",
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }, e), this.fileupload(e).bind("fileuploaddone", function(e, t) {
                if (!t.result.error) {
                    if (t.result.path = ["v", t.result.version, "/", t.result.public_id, t.result.format ? "." + t.result.format : ""].join(""), t.cloudinaryField && 0 < t.form.length) {
                        var n = [t.result.resource_type, "upload", t.result.path].join("/") + "#" + t.result.signature,
                            i = r(t.form).find('input[name="' + t.cloudinaryField + '"]');
                        0 < i.length ? i.val(n) : r("<input></input>").attr({
                            type: "hidden",
                            name: t.cloudinaryField
                        }).val(n).appendTo(t.form)
                    }
                    r(e.target).trigger("cloudinarydone", t)
                }
            }), !this.fileupload("option").url) {
            var t = "https://api.cloudinary.com/v1_1/" + r.cloudinary.config().cloud_name + "/upload";
            this.fileupload("option", "url", t)
        }
        return this
    }, r(function() {
        r("input.cloudinary-fileupload[type=file]").cloudinary_fileupload()
    }))
}(jQuery),
function(t) {
    function n(e, t) {
        if (!(1 < e.originalEvent.touches.length)) {
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0],
                i = document.createEvent("MouseEvents");
            i.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
        }
    }
    if (t.support.touch = "ontouchend" in document, t.support.touch) {
        var i, e = t.ui.mouse.prototype,
            r = e._mouseInit,
            s = e._mouseDestroy;
        e._touchStart = function(e) {
            var t = this;
            !i && t._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, t._touchMoved = !1, n(e, "mouseover"), n(e, "mousemove"), n(e, "mousedown"))
        }, e._touchMove = function(e) {
            i && (this._touchMoved = !0, n(e, "mousemove"))
        }, e._touchEnd = function(e) {
            i && (n(e, "mouseup"), n(e, "mouseout"), this._touchMoved || n(e, "click"), i = !1)
        }, e._mouseInit = function() {
            var e = this;
            e.element.bind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), r.call(e)
        }, e._mouseDestroy = function() {
            var e = this;
            e.element.unbind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), s.call(e)
        }
    }
}(jQuery);
var Sticky = function() {
    function r(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            i = 1 < arguments.length && void 0 !== t ? t : {};
        _classCallCheck(this, r), this.selector = n, this.elements = [], this.version = "1.2.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
            wrap: i.wrap || !1,
            marginTop: i.marginTop || 0,
            stickyFor: i.stickyFor || 0,
            stickyClass: i.stickyClass || null,
            stickyContainer: i.stickyContainer || "body"
        }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run()
    }
    return r.prototype.run = function() {
        var t = this,
            n = setInterval(function() {
                if ("complete" === document.readyState) {
                    clearInterval(n);
                    var e = document.querySelectorAll(t.selector);
                    t.forEach(e, function(e) {
                        return t.renderElement(e)
                    })
                }
            }, 10)
    }, r.prototype.renderElement = function(e) {
        var t = this;
        e.sticky = {}, e.sticky.active = !1, e.sticky.marginTop = parseInt(e.getAttribute("data-margin-top")) || this.options.marginTop, e.sticky.stickyFor = parseInt(e.getAttribute("data-sticky-for")) || this.options.stickyFor, e.sticky.stickyClass = e.getAttribute("data-sticky-class") || this.options.stickyClass, e.sticky.wrap = !!e.hasAttribute("data-sticky-wrap") || this.options.wrap, e.sticky.stickyContainer = this.options.stickyContainer, e.sticky.container = this.getStickyContainer(e), e.sticky.container.rect = this.getRectangle(e.sticky.container), e.sticky.rect = this.getRectangle(e), "img" === e.tagName.toLowerCase() && (e.onload = function() {
            return e.sticky.rect = t.getRectangle(e)
        }), e.sticky.wrap && this.wrapElement(e), this.activate(e)
    }, r.prototype.wrapElement = function(e) {
        e.insertAdjacentHTML("beforebegin", "<span></span>"), e.previousSibling.appendChild(e)
    }, r.prototype.activate = function(e) {
        e.sticky.rect.top + e.sticky.rect.height < e.sticky.container.rect.top + e.sticky.container.rect.height && e.sticky.stickyFor < this.vp.width && !e.sticky.active && (e.sticky.active = !0), this.elements.indexOf(e) < 0 && this.elements.push(e), e.sticky.resizeEvent || (this.initResizeEvents(e), e.sticky.resizeEvent = !0), e.sticky.scrollEvent || (this.initScrollEvents(e), e.sticky.scrollEvent = !0), this.setPosition(e)
    }, r.prototype.initResizeEvents = function(e) {
        var t = this;
        e.sticky.resizeListener = function() {
            return t.onResizeEvents(e)
        }, window.addEventListener("resize", e.sticky.resizeListener)
    }, r.prototype.destroyResizeEvents = function(e) {
        window.removeEventListener("resize", e.sticky.resizeListener)
    }, r.prototype.onResizeEvents = function(e) {
        this.vp = this.getViewportSize(), e.sticky.rect = this.getRectangle(e), e.sticky.container.rect = this.getRectangle(e.sticky.container), e.sticky.rect.top + e.sticky.rect.height < e.sticky.container.rect.top + e.sticky.container.rect.height && e.sticky.stickyFor < this.vp.width && !e.sticky.active ? e.sticky.active = !0 : (e.sticky.rect.top + e.sticky.rect.height >= e.sticky.container.rect.top + e.sticky.container.rect.height || e.sticky.stickyFor >= this.vp.width && e.sticky.active) && (e.sticky.active = !1), this.setPosition(e)
    }, r.prototype.initScrollEvents = function(e) {
        var t = this;
        e.sticky.scrollListener = function() {
            return t.onScrollEvents(e)
        }, window.addEventListener("scroll", e.sticky.scrollListener)
    }, r.prototype.destroyScrollEvents = function(e) {
        window.removeEventListener("scroll", e.sticky.scrollListener)
    }, r.prototype.onScrollEvents = function(e) {
        e.sticky.active && this.setPosition(e)
    }, r.prototype.setPosition = function(e) {
        this.css(e, {
            position: "",
            width: "",
            top: "",
            left: ""
        }), this.vp.height < e.sticky.rect.height || !e.sticky.active || (e.sticky.rect.width || (e.sticky.rect = this.getRectangle(e)), e.sticky.wrap && this.css(e.parentNode, {
            display: "block",
            width: e.sticky.rect.width + "px",
            height: e.sticky.rect.height + "px"
        }), 0 === e.sticky.rect.top && e.sticky.container === this.body ? this.css(e, {
            position: "fixed",
            top: e.sticky.rect.top + "px",
            left: e.sticky.rect.left + "px",
            width: e.sticky.rect.width + "px"
        }) : this.scrollTop > e.sticky.rect.top - e.sticky.marginTop ? (this.css(e, {
            position: "fixed",
            width: e.sticky.rect.width + "px",
            left: e.sticky.rect.left + "px"
        }), this.scrollTop + e.sticky.rect.height + e.sticky.marginTop > e.sticky.container.rect.top + e.sticky.container.offsetHeight ? (e.sticky.stickyClass && e.classList.remove(e.sticky.stickyClass), this.css(e, {
            top: e.sticky.container.rect.top + e.sticky.container.offsetHeight - (this.scrollTop + e.sticky.rect.height) + "px"
        })) : (e.sticky.stickyClass && e.classList.add(e.sticky.stickyClass), this.css(e, {
            top: e.sticky.marginTop + "px"
        }))) : (e.sticky.stickyClass && e.classList.remove(e.sticky.stickyClass), this.css(e, {
            position: "",
            width: "",
            top: "",
            left: ""
        }), e.sticky.wrap && this.css(e.parentNode, {
            display: "",
            width: "",
            height: ""
        })))
    }, r.prototype.update = function() {
        var t = this;
        this.forEach(this.elements, function(e) {
            e.sticky.rect = t.getRectangle(e), e.sticky.container.rect = t.getRectangle(e.sticky.container), t.activate(e), t.setPosition(e)
        })
    }, r.prototype.destroy = function() {
        var t = this;
        this.forEach(this.elements, function(e) {
            t.destroyResizeEvents(e), t.destroyScrollEvents(e), delete e.sticky
        })
    }, r.prototype.getStickyContainer = function(e) {
        for (var t = e.parentNode; !t.hasAttribute("data-sticky-container") && !t.parentNode.querySelector(e.sticky.stickyContainer) && t !== this.body;) t = t.parentNode;
        return t
    }, r.prototype.getRectangle = function(e) {
        this.css(e, {
            position: "",
            width: "",
            top: "",
            left: ""
        });
        for (var t = Math.max(e.offsetWidth, e.clientWidth, e.scrollWidth), n = Math.max(e.offsetHeight, e.clientHeight, e.scrollHeight), i = 0, r = 0; i += e.offsetTop || 0, r += e.offsetLeft || 0, e = e.offsetParent;);
        return {
            top: i,
            left: r,
            width: t,
            height: n
        }
    }, r.prototype.getViewportSize = function() {
        return {
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }
    }, r.prototype.updateScrollTopPosition = function() {
        this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0
    }, r.prototype.forEach = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) t(e[n])
    }, r.prototype.css = function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
    }, r
}();
! function(e, t) {
    "undefined" != typeof exports ? module.exports = t : "function" == typeof define && define.amd ? define([], t) : e.Sticky = t
}(this, Sticky),
function() {
    var s;
    (s = jQuery).attachinary = {
        index: 0,
        config: {
            disableWith: "Uploading...",
            indicateProgress: !0,
            invalidFormatMessage: "Invalid file format",
            template: '<ul>\n  <% for(var i=0; i<files.length; i++){ %>\n    <li>\n      <% if(files[i].resource_type == "raw") { %>\n        <div class="raw-file"></div>\n      <% } else { %>\n        <img\n          src="<%= $.cloudinary.url(files[i].public_id, { "version": files[i].version, "format": \'jpg\', "crop": \'fill\', "width": 75, "height": 75 }) %>"\n          alt="" width="75" height="75" />\n      <% } %>\n      <a href="#" data-remove="<%= files[i].public_id %>">Remove</a>\n    </li>\n  <% } %>\n</ul>',
            render: function(e) {
                return s.attachinary.Templating.template(this.template, {
                    files: e
                })
            }
        }
    }, s.fn.attachinary = function(e) {
        var t;
        return t = s.extend({}, s.attachinary.config, e), this.each(function() {
            var e;
            if (!(e = s(this)).data("attachinary-bond")) return e.data("attachinary-bond", new s.attachinary.Attachinary(e, t))
        })
    }, s.attachinary.Attachinary = function() {
        function e(e, t) {
            var n;
            this.$input = e, this.config = t, this.options = this.$input.data("attachinary"), this.files = this.options.files, this.$form = this.$input.closest("form"), this.$submit = this.$form.find(null != (n = this.options.submit_selector) ? n : "input[type=submit]"), null != this.options.wrapper_container_selector && (this.$wrapper = this.$input.closest(this.options.wrapper_container_selector)), this.initFileUpload(), this.addFilesContainer(), this.bindEventHandlers(), this.redraw(), this.checkMaximum()
        }
        return e.prototype.initFileUpload = function() {
            var e;
            return this.options.field_name = this.$input.attr("name"), e = {
                dataType: "json",
                paramName: "file",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                dropZone: this.config.dropZone || this.$input,
                sequentialUploads: !0
            }, this.$input.attr("accept") && (e.acceptFileTypes = new RegExp("^" + this.$input.attr("accept").split(",").join("|") + "$", "i")), this.$input.fileupload(e)
        }, e.prototype.bindEventHandlers = function() {
            var e, n, t, i, r;
            return this.$input.bind("fileuploadsend", (e = this, function() {
                return e.$input.addClass("uploading"), null != e.$wrapper && e.$wrapper.addClass("uploading"), e.$form.addClass("uploading"), e.$input.prop("disabled", !0), e.config.disableWith && (e.$submit.each(function(e, t) {
                    var n;
                    if (null == (n = s(t)).data("old-val")) return n.data("old-val", n.val())
                }), e.$submit.val(e.config.disableWith), e.$submit.prop("disabled", !0)), !e.maximumReached()
            })), this.$input.bind("fileuploaddone", (n = this, function(e, t) {
                return n.addFile(t.result)
            })), this.$input.bind("fileuploadstart", (t = this, function(e) {
                return t.$input = s(e.target)
            })), this.$input.bind("fileuploadalways", (i = this, function() {
                if (i.$input.removeClass("uploading"), null != i.$wrapper && i.$wrapper.removeClass("uploading"), i.$form.removeClass("uploading"), i.checkMaximum(), i.config.disableWith) return i.$submit.each(function(e, t) {
                    var n;
                    return (n = s(t)).val(n.data("old-val"))
                }), i.$submit.prop("disabled", !1)
            })), this.$input.bind("fileuploadprogressall", (r = this, function(e, t) {
                var n;
                if (n = parseInt(t.loaded / t.total * 100, 10), r.config.disableWith && r.config.indicateProgress) return r.$submit.val("[" + n + "%] " + r.config.disableWith)
            }))
        }, e.prototype.addFile = function(e) {
            return this.options.accept && -1 === s.inArray(e.format, this.options.accept) && -1 === s.inArray(e.resource_type, this.options.accept) ? alert(this.config.invalidFormatMessage) : (this.files.push(e), this.redraw(), this.checkMaximum(), this.$input.trigger("attachinary:fileadded", [e]))
        }, e.prototype.removeFile = function(e) {
            var t, n, i, r, s, a;
            for (t = [], a = null, i = 0, r = (s = this.files).length; i < r; i++)(n = s[i]).public_id === e ? a = n : t.push(n);
            return this.files = t, this.redraw(), this.checkMaximum(), this.$input.trigger("attachinary:fileremoved", [a])
        }, e.prototype.checkMaximum = function() {
            return this.maximumReached() ? (null != this.$wrapper && this.$wrapper.addClass("disabled"), this.$input.prop("disabled", !0)) : (null != this.$wrapper && this.$wrapper.removeClass("disabled"), this.$input.prop("disabled", !1))
        }, e.prototype.maximumReached = function() {
            return this.options.maximum && this.files.length >= this.options.maximum
        }, e.prototype.addFilesContainer = function() {
            return null != this.options.files_container_selector && 0 < s(this.options.files_container_selector).length ? this.$filesContainer = s(this.options.files_container_selector) : (this.$filesContainer = s('<div class="attachinary_container">'), this.$input.after(this.$filesContainer))
        }, e.prototype.redraw = function() {
            return this.$filesContainer.empty(), 0 < this.files.length ? (this.$filesContainer.append(this.makeHiddenField(JSON.stringify(this.files))), this.$filesContainer.append(this.config.render(this.files)), this.$filesContainer.find("[data-remove]").on("click", (t = this, function(e) {
                return e.preventDefault(), t.removeFile(s(e.target).data("remove"))
            })), this.$filesContainer.show()) : (this.$filesContainer.append(this.makeHiddenField(null)), this.$filesContainer.hide());
            var t
        }, e.prototype.makeHiddenField = function(e) {
            var t;
            return (t = s('<input type="hidden">')).attr("name", this.options.field_name), t.val(e), t
        }, e
    }(), s.attachinary.Templating = {
        settings: {
            start: "<%",
            end: "%>",
            interpolate: /<%=(.+?)%>/g
        },
        escapeRegExp: function(e) {
            return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        template: function(e, t) {
            var n, i, r;
            return n = this.settings, i = new RegExp("'(?=[^" + n.end.substr(0, 1) + "]*" + this.escapeRegExp(n.end) + ")", "g"), r = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj||{}){p.push('" + e.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(i, "\u2704").split("'").join("\\'").split("\u2704").join("'").replace(n.interpolate, "',$1,'").split(n.start).join("');").split(n.end).join("p.push('") + "');}return p.join('');"), t ? r(t) : r
        }
    }
}.call(this), $(document).ready(function() {
        styleSelectBoxes(), $("select.to-autocomplete").each(function(e, t) {
            $(t).selectToAutocomplete()
        }), $(".html-select").each(function(e, t) {
            Object.create(HTMLSelect).setup(t)
        })
    }), HTMLSelect = {
        handleEl: null,
        parentEl: null,
        linkedSelectEl: null,
        setup: function(e) {
            this.parentEl = $(e), this.linkedSelectEl = $("." + this.parentEl.attr("data-select")), this.handleEl = this.linkedSelectEl.find(".handle").first(), this.bindHandle(), this.bindOptions(), this.renderHandles(this)
        },
        isOpen: function() {
            return this.parentEl.hasClass("open")
        },
        bindHandle: function() {
            var t = this;
            t.parentEl.find(".handle").on("click", function(e) {
                e.stopPropagation(), t.isOpen() ? t.renderState("close", t) : t.renderState("open", t)
            })
        },
        bindOptions: function() {
            var n = this;
            this.parentEl.find(".option-container").on("click", function(e) {
                var t = $(e.target).closest(".option-container").attr("data-select-id");
                n.linkedSelectEl.find("option:selected").removeAttr("selected"), n.linkedSelectEl.find('option[value="' + t + '"]').prop("selected", !0), n.renderState("close", n)
            })
        },
        renderHandles: function(n) {
            n.selectOptions().each(function(e, t) {
                $(t).attr("data-select-id") != n.linkedSelectEl.find(":selected").val() ? ($(t).addClass("hidden"), $(t).find(".handle").addClass("hidden")) : $(t).find(".handle").removeClass("hidden")
            })
        },
        renderState: function(e, t) {
            "close" === e ? t.isOpen() && (t.renderHandles(t), t.parentEl.removeClass("open")) : (t.selectOptions().each(function(e, t) {
                $(t).removeClass("hidden")
            }), t.parentEl.addClass("open"))
        },
        selectOptions: function() {
            return this.parentEl.find(".option-container")
        }
    },
    function(e, l) {
        "use strict";

        function a(e) {
            return null != e && "" !== e && "hasOwnProperty" !== e && t.test("." + e)
        }

        function f(e, t) {
            if (!a(t)) throw R("badmember", 'Dotted member path "@{0}" is invalid.', t);
            for (var n = t.split("."), i = 0, r = n.length; i < r && l.isDefined(e); i++) {
                var s = n[i];
                e = null !== e ? e[s] : undefined
            }
            return e
        }

        function N(e, n) {
            for (var t in n = n || {}, l.forEach(n, function(e, t) {
                    delete n[t]
                }), e) !e.hasOwnProperty(t) || "$" === t.charAt(0) && "$" === t.charAt(1) || (n[t] = e[t]);
            return n
        }
        var R = l.$$minErr("$resource"),
            t = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
        l.module("ngResource", ["ng"]).info({
            angularVersion: "1.6.8"
        }).provider("$resource", function n() {
            var h = /^https?:\/\/\[[^\]]*][^/]*/,
                o = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                cancellable: !1,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                }
            }, this.$get = ["$http", "$log", "$q", "$timeout", function(j, r, T, A) {
                function s(e, t) {
                    this.template = e, this.defaults = I({}, o.defaults, t), this.urlParams = {}
                }

                function e(e, t, n, i) {
                    function C(n, e) {
                        var i = {};
                        return e = I({}, t, e), M(e, function(e, t) {
                            O(e) && (e = e(n)), i[t] = e && e.charAt && "@" === e.charAt(0) ? f(n, e.substr(1)) : e
                        }), i
                    }

                    function S(e) {
                        return e.resource
                    }

                    function $(e) {
                        N(e || {}, this)
                    }
                    var D = new s(e, i);
                    return n = I({}, o.defaults.actions, n), $.prototype.toJSON = function() {
                        var e = I({}, this);
                        return delete e.$promise, delete e.$resolved, delete e.$cancelRequest, e
                    }, M(n, function(b, _) {
                        var w = !0 === b.hasBody || !1 !== b.hasBody && /^(POST|PUT|PATCH)$/i.test(b.method),
                            k = b.timeout,
                            x = u(b.cancellable) ? b.cancellable : D.defaults.cancellable;
                        k && !a(k) && (r.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete b.timeout, k = null), $[_] = function(e, t, n, i) {
                            function r(e) {
                                y["catch"](F), null !== u && u.resolve(e)
                            }
                            var s, a, o, l = {};
                            switch (arguments.length) {
                                case 4:
                                    o = i, a = n;
                                case 3:
                                case 2:
                                    if (!O(t)) {
                                        l = e, s = t, a = n;
                                        break
                                    }
                                    if (O(e)) {
                                        a = e, o = t;
                                        break
                                    }
                                    a = t, o = n;
                                case 1:
                                    O(e) ? a = e : w ? s = e : l = e;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw R("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var u, c, d = this instanceof $,
                                h = d ? s : b.isArray ? [] : new $(s),
                                f = {},
                                p = b.interceptor && b.interceptor.response || S,
                                m = b.interceptor && b.interceptor.responseError || undefined,
                                g = !!o,
                                v = !!m;
                            M(b, function(e, t) {
                                switch (t) {
                                    default:
                                        f[t] = E(e);
                                        break;
                                    case "params":
                                    case "isArray":
                                    case "interceptor":
                                    case "cancellable":
                                }
                            }), !d && x && (u = T.defer(), f.timeout = u.promise, k && (c = A(u.resolve, k))), w && (f.data = s), D.setUrlParams(f, I({}, C(s, b.params || {}), l), b.url);
                            var y = j(f).then(function(e) {
                                var t = e.data;
                                if (t) {
                                    if (P(t) !== !!b.isArray) throw R("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", _, b.isArray ? "array" : "object", P(t) ? "array" : "object", f.method, f.url);
                                    if (b.isArray) h.length = 0, M(t, function(e) {
                                        "object" == typeof e ? h.push(new $(e)) : h.push(e)
                                    });
                                    else {
                                        var n = h.$promise;
                                        N(t, h), h.$promise = n
                                    }
                                }
                                return e.resource = h, e
                            }, function(e) {
                                return e.resource = h, T.reject(e)
                            });
                            return y = (y = y["finally"](function() {
                                h.$resolved = !0, !d && x && (h.$cancelRequest = F, A.cancel(c), u = c = f.timeout = null)
                            })).then(function(e) {
                                var t = p(e);
                                return (a || F)(t, e.headers, e.status, e.statusText), t
                            }, g || v ? function(e) {
                                return g && !v && y["catch"](F), g && o(e), v ? m(e) : T.reject(e)
                            } : undefined), d ? y : (h.$promise = y, h.$resolved = !1, x && (h.$cancelRequest = r), h)
                        }, $.prototype["$" + _] = function(e, t, n) {
                            O(e) && (n = t, t = e, e = {});
                            var i = $[_].call(this, e, this, t, n);
                            return i.$promise || i
                        }
                    }), $
                }
                var F = l.noop,
                    M = l.forEach,
                    I = l.extend,
                    E = l.copy,
                    P = l.isArray,
                    u = l.isDefined,
                    O = l.isFunction,
                    a = l.isNumber,
                    c = l.$$encodeUriQuery,
                    d = l.$$encodeUriSegment;
                return s.prototype = {
                    setUrlParams: function(n, i, e) {
                        var r, s, a = this,
                            o = e || a.template,
                            t = "",
                            l = a.urlParams = Object.create(null);
                        M(o.split(/\W/), function(e) {
                            if ("hasOwnProperty" === e) throw R("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(e) && e && new RegExp("(^|[^\\\\]):" + e + "(\\W|$)").test(o) && (l[e] = {
                                isQueryParamValue: new RegExp("\\?.*=:" + e + "(?:\\W|$)").test(o)
                            })
                        }), o = (o = o.replace(/\\:/g, ":")).replace(h, function(e) {
                            return t = e, ""
                        }), i = i || {}, M(a.urlParams, function(e, t) {
                            r = i.hasOwnProperty(t) ? i[t] : a.defaults[t], u(r) && null !== r ? (s = e.isQueryParamValue ? c(r, !0) : d(r), o = o.replace(new RegExp(":" + t + "(\\W|$)", "g"), function(e, t) {
                                return s + t
                            })) : o = o.replace(new RegExp("(/?):" + t + "(\\W|$)", "g"), function(e, t, n) {
                                return "/" === n.charAt(0) ? n : t + n
                            })
                        }), a.defaults.stripTrailingSlashes && (o = o.replace(/\/+$/, "") || "/"), o = o.replace(/\/\.(?=\w+($|\?))/, "."), n.url = t + o.replace(/\/(\\|%5C)\./, "/."), M(i, function(e, t) {
                            a.urlParams[t] || (n.params = n.params || {}, n.params[t] = e)
                        })
                    }
                }, e
            }]
        })
    }(window, window.angular),
    function(C, S) {
        "use strict";

        function e() {
            function e(e, t) {
                var n, i = {},
                    r = e.split(",");
                for (n = 0; n < r.length; n++) i[t ? A(r[n]) : r[n]] = !0;
                return i
            }

            function t(e, t) {
                null === e || e === undefined ? e = "" : "string" != typeof e && (e = "" + e);
                var n = x(e);
                if (!n) return "";
                var i = 5;
                do {
                    if (0 === i) throw P("uinput", "Failed to sanitize html because the input is unstable");
                    i--, e = n.innerHTML, n = x(e)
                } while (e !== n.innerHTML);
                for (var r = n.firstChild; r;) {
                    switch (r.nodeType) {
                        case 1:
                            t.start(r.nodeName.toLowerCase(), a(r.attributes));
                            break;
                        case 3:
                            t.chars(r.textContent)
                    }
                    var s;
                    if (!((s = r.firstChild) || (1 === r.nodeType && t.end(r.nodeName.toLowerCase()), s = u("nextSibling", r))))
                        for (; null == s && (r = u("parentNode", r)) !== n;) s = u("nextSibling", r), 1 === r.nodeType && t.end(r.nodeName.toLowerCase());
                    r = s
                }
                for (; r = n.firstChild;) n.removeChild(r)
            }

            function a(e) {
                for (var t = {}, n = 0, i = e.length; n < i; n++) {
                    var r = e[n];
                    t[r.name] = r.value
                }
                return t
            }

            function o(e) {
                return e.replace(/&/g, "&amp;").replace(r, function(e) {
                    return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(s, function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function n(e, s) {
                var t = !1,
                    a = $(e, e.push);
                return {
                    start: function(r, e) {
                        r = A(r), !t && v[r] && (t = r), t || !0 !== y[r] || (a("<"), a(r), j(e, function(e, t) {
                            var n = A(t),
                                i = "img" === r && "src" === n || "background" === n;
                            !0 !== k[n] || !0 === b[n] && !s(e, i) || (a(" "), a(t), a('="'), a(o(e)), a('"'))
                        }), a(">"))
                    },
                    end: function(e) {
                        e = A(e), t || !0 !== y[e] || !0 === c[e] || (a("</"), a(e), a(">")), e == t && (t = !1)
                    },
                    chars: function(e) {
                        t || a(o(e))
                    }
                }
            }

            function l(e) {
                for (; e;) {
                    if (e.nodeType === C.Node.ELEMENT_NODE)
                        for (var t = e.attributes, n = 0, i = t.length; n < i; n++) {
                            var r = t[n],
                                s = r.name.toLowerCase();
                            "xmlns:ns1" !== s && 0 !== s.lastIndexOf("ns1:", 0) || (e.removeAttributeNode(r), n--, i--)
                        }
                    var a = e.firstChild;
                    a && l(a), e = u("nextSibling", e)
                }
            }

            function u(e, t) {
                var n = t[e];
                if (n && M.call(t, n)) throw P("elclob", "Failed to sanitize html because the element is clobbered: {0}", t.outerHTML || t.outerText);
                return n
            }
            var i = !1;
            this.$get = ["$$sanitizeUri", function(n) {
                return i && D(y, g),
                    function(e) {
                        var t = [];
                        return I(e, E(t, function(e, t) {
                            return !/^unsafe:/.test(n(e, t))
                        })), t.join("")
                    }
            }], this.enableSvg = function(e) {
                return T(e) ? (i = e, this) : i
            }, $ = S.bind, D = S.extend, j = S.forEach, T = S.isDefined, A = S.lowercase, F = S.noop, I = t, E = n, M = C.Node.prototype.contains || function(e) {
                return !!(16 & this.compareDocumentPosition(e))
            };
            var r = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                s = /([^#-~ |!])/g,
                c = e("area,br,col,hr,img,wbr"),
                d = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                h = e("rp,rt"),
                f = D({}, h, d),
                p = D({}, d, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
                m = D({}, h, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
                g = e("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
                v = e("script,style"),
                y = D({}, c, p, m, f),
                b = e("background,cite,href,longdesc,src,xlink:href"),
                _ = e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
                w = e("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
                k = D({}, b, w, _),
                x = function(r, t) {
                    function e(e) {
                        e = "<remove></remove>" + e;
                        try {
                            e = encodeURI(e)
                        } catch (i) {
                            return undefined
                        }
                        var t = new r.XMLHttpRequest;
                        t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(null);
                        var n = t.response.body;
                        return n.firstChild.remove(), n
                    }

                    function n(e) {
                        e = "<remove></remove>" + e;
                        try {
                            var t = (new r.DOMParser).parseFromString(e, "text/html").body;
                            return t.firstChild.remove(), t
                        } catch (n) {
                            return undefined
                        }
                    }

                    function i(e) {
                        return a.innerHTML = e, t.documentMode && l(a), a
                    }
                    var s;
                    if (!t || !t.implementation) throw P("noinert", "Can't create an inert html document");
                    var a = ((s = t.implementation.createHTMLDocument("inert")).documentElement || s.getDocumentElement()).querySelector("body");
                    return a.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', a.querySelector("svg") ? (a.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', a.querySelector("svg img") ? n : i) : e
                }(C, C.document)
        }

        function w(e) {
            var t = [];
            return E(t, F).chars(e), t.join("")
        }
        var $, D, j, T, A, F, M, I, E, P = S.$$minErr("$sanitize");
        S.module("ngSanitize", []).provider("$sanitize", e).info({
            angularVersion: "1.6.8"
        }), S.module("ngSanitize").filter("linky", ["$sanitize", function(f) {
            var p = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
                m = /^mailto:/i,
                g = S.$$minErr("linky"),
                v = S.isDefined,
                y = S.isFunction,
                b = S.isObject,
                _ = S.isString;
            return function(e, r, t) {
                function s(e) {
                    e && c.push(w(e))
                }

                function n(e, t) {
                    var n, i = l(e);
                    for (n in c.push("<a "), i) c.push(n + '="' + i[n] + '" ');
                    !v(r) || "target" in i || c.push('target="', r, '" '), c.push('href="', e.replace(/"/g, "&quot;"), '">'), s(t), c.push("</a>")
                }
                if (null == e || "" === e) return e;
                if (!_(e)) throw g("notstring", "Expected string but received: {0}", e);
                for (var i, a, o, l = y(t) ? t : b(t) ? function d() {
                        return t
                    } : function h() {
                        return {}
                    }, u = e, c = []; i = u.match(p);) a = i[0], i[2] || i[4] || (a = (i[3] ? "http://" : "mailto:") + a), o = i.index, s(u.substr(0, o)), n(a, i[0].replace(m, "")), u = u.substring(o + i[0].length);
                return s(u), f(c.join(""))
            }
        }])
    }(window, window.angular),
    function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            var t;
            "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.yayson = e()
        }
    }(function() {
        return function c(s, a, o) {
            function l(n, e) {
                if (!a[n]) {
                    if (!s[n]) {
                        var t = "function" == typeof require && require;
                        if (!e && t) return t(n, !0);
                        if (u) return u(n, !0);
                        var i = new Error("Cannot find module '" + n + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var r = a[n] = {
                        exports: {}
                    };
                    s[n][0].call(r.exports, function(e) {
                        var t = s[n][1][e];
                        return l(t || e)
                    }, r, r.exports, c, s, a, o)
                }
                return a[n].exports
            }
            for (var u = "function" == typeof require && require, e = 0; e < o.length; e++) l(o[e]);
            return l
        }({
            1: [function(n, e) {
                var i, t, r, s, a, o, l, u;
                "undefined" != typeof window && null !== window && (t = window.Q, r = window._), t || (t = function() {
                    try {
                        return "function" == typeof n ? n("q") : void 0
                    } catch (e) {}
                }()), r || (r = function() {
                    try {
                        return "function" == typeof n ? n("lodash") : void 0
                    } catch (e) {}
                }()), r || (r = function() {
                    try {
                        return "function" == typeof n ? n("underscore") : void 0
                    } catch (e) {}
                }()), u = n("./yayson/utils")(r, t), i = n("./yayson/adapter"), s = n("./yayson/adapters"), l = n("./yayson/presenter"), a = function(e) {
                    return "default" === e ? i : s[e] || e || i
                }, o = function(e) {
                    var t;
                    return null == e && (e = {}), t = a(e.adapter), l(u, t)
                }, e.exports = function(e) {
                    var t;
                    return t = (null != e ? e : {}).adapter, {
                        Store: n("./yayson/store")(u),
                        Presenter: o({
                            adapter: t
                        }),
                        Adapter: i
                    }
                }
            }, {
                "./yayson/adapter": 3,
                "./yayson/adapters": 4,
                "./yayson/presenter": 6,
                "./yayson/store": 7,
                "./yayson/utils": 8,
                lodash: 2,
                q: 2,
                underscore: 2
            }],
            2: [function() {}, {}],
            3: [function(e, t) {
                var n;
                n = function() {
                    function e() {}
                    return e.get = function(e, t) {
                        return t ? e[t] : e
                    }, e.id = function(e) {
                        var t;
                        return void 0 === (t = this.get(e, "id")) ? t : "" + t
                    }, e
                }(), t.exports = n
            }, {}],
            4: [function(e, t) {
                t.exports = {
                    sequelize: e("./sequelize")
                }
            }, {
                "./sequelize": 5
            }],
            5: [function(e, t) {
                var n, i, r = function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        for (var i in t) s.call(t, i) && (e[i] = t[i]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    },
                    s = {}.hasOwnProperty;
                n = e("../adapter"), i = function() {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return r(e, n), e.get = function(e, t) {
                        if (null != e) return e.get(t)
                    }, e
                }(), t.exports = i
            }, {
                "../adapter": 3
            }],
            6: [function(e, n) {
                n.exports = function(h, t) {
                    var e;
                    return e = function() {
                        function e(e) {
                            null == e && (e = {}), this.scope = e
                        }
                        var u;
                        return u = function(e) {
                            if (null != e) return null != e.self || null != e.related ? e : {
                                self: e
                            }
                        }, e.adapter = t, e.prototype.type = "objects", e.prototype.id = function(e) {
                            return this.constructor.adapter.id(e)
                        }, e.prototype.selfLinks = function() {}, e.prototype.links = function() {}, e.prototype.relationships = function() {}, e.prototype.attributes = function(e) {
                            var t, n;
                            if (null == e) return null;
                            for (n in delete(t = h.clone(this.constructor.adapter.get(e))).id, delete t.type, this.relationships()) delete t[n];
                            return t
                        }, e.prototype.includeRelationships = function(e, t) {
                            var n, i, r, s, a;
                            for (i in a = [], s = this.relationships()) r = new(s[i] || function() {
                                throw new Error("Presenter for " + i + " in " + this.type + " is not defined")
                            }.call(this))(e), null != (n = this.constructor.adapter.get(t, i)) ? a.push(r.toJSON(n, {
                                include: !0
                            })) : a.push(void 0);
                            return a
                        }, e.prototype.buildRelationships = function(e) {
                            var t, n, i, r, s, a, o, l;
                            if (null == e) return null;
                            for (r in l = this.relationships(), s = this.links(e) || {}, o = null, l) i = this.constructor.adapter.get(e, r), a = l[r], n = function(t) {
                                return function(e) {
                                    return i = {
                                        id: t.constructor.adapter.id(e),
                                        type: a.prototype.type
                                    }
                                }
                            }(this), t = function(e) {
                                var t;
                                return t = {}, null != e && (t.data = n(e)), null != s[r] ? t.links = u(s[r]) : null == e && (t.data = null), t
                            }, o || (o = {}), o[r] || (o[r] = {}), i instanceof Array ? (o[r].data = i.map(n), null != s[r] && (o[r].links = u(s[r]))) : o[r] = t(i);
                            return o
                        }, e.prototype.buildSelfLink = function(e) {
                            return u(this.selfLinks(e))
                        }, e.prototype.toJSON = function(e, t) {
                            var n, i, r, s, a, o, l, u, c, d;
                            return null == t && (t = {}), null != t.meta && (this.scope.meta = t.meta), (i = this.scope).data || (i.data = null), null == e || (e instanceof Array ? (a = e, (r = this.scope).data || (r.data = []), a.forEach((d = this, function(e) {
                                return d.toJSON(e, t)
                            }))) : (o = e, n = !0, void 0 === (u = {
                                id: this.id(o),
                                type: this.type,
                                attributes: this.attributes(o)
                            }).id && delete u.id, null != (c = this.buildRelationships(o)) && (u.relationships = c), null != (l = this.buildSelfLink(o)) && (u.links = l), t.include ? ((s = this.scope).included || (s.included = []), h.any(this.scope.included.concat(this.scope.data), function(e) {
                                return e.id === u.id && e.type === u.type
                            }) ? n = !1 : this.scope.included.push(u)) : null != this.scope.data ? this.scope.data instanceof Array && h.any(this.scope.data, function(e) {
                                return e.id === u.id
                            }) ? n = !1 : this.scope.data.push(u) : this.scope.data = u, n && this.includeRelationships(this.scope, o))), this.scope
                        }, e.prototype.render = function(e, t) {
                            return h.isPromise(e) ? e.then((n = this, function(e) {
                                return n.toJSON(e, t)
                            })) : this.toJSON(e, t);
                            var n
                        }, e.toJSON = function() {
                            var e;
                            return (e = new this).toJSON.apply(e, arguments)
                        }, e.render = function() {
                            var e;
                            return (e = new this).render.apply(e, arguments)
                        }, e
                    }(), n.exports = e
                }
            }, {}],
            7: [function(e, t) {
                t.exports = function(p) {
                    var o;
                    return o = function() {
                            function e(e) {
                                this.id = e.id, this.type = e.type, this.attributes = e.attributes, this.relationships = e.relationships, this.links = e.links, this.meta = e.meta
                            }
                            return e
                        }(),
                        function() {
                            function e() {
                                this.reset()
                            }
                            return e.prototype.reset = function() {
                                return this.records = [], this.relations = {}
                            }, e.prototype.toModel = function(e, t, r) {
                                var n, i, s, a, o, l, u, c, d, h, f;
                                if ((u = p.clone(e.attributes) || {}).id = e.id, u.type = e.type, r[t] || (r[t] = {}), (n = r[t])[c = e.id] || (n[c] = u), u.hasOwnProperty("meta") && (u.attributes = {
                                        meta: u.meta
                                    }, delete u.meta), null != e.meta && (u.meta = e.meta), null != e.links && (u.links = e.links), null != e.relationships)
                                    for (a in d = e.relationships) s = (h = d[a]).data, o = h.links, l = h.meta, (u[a] = null) == s && null == o || (f = function(i) {
                                        return function(e) {
                                            var t, n;
                                            return n = e.type, t = e.id, i.find(n, t, r)
                                        }
                                    }(this), u[a] = s instanceof Array ? s.map(f) : null != s ? f(s) : {}, null != (i = u[a]) && (i._links = o || {}, i._meta = l || {}));
                                return u
                            }, e.prototype.findRecord = function(t, n) {
                                return p.find(this.records, function(e) {
                                    return e.type === t && e.id === n
                                })
                            }, e.prototype.findRecords = function(t) {
                                return p.filter(this.records, function(e) {
                                    return e.type === t
                                })
                            }, e.prototype.find = function(e, t, n) {
                                var i;
                                return null == n && (n = {}), null == (i = this.findRecord(e, t)) ? null : (n[e] || (n[e] = {}), n[e][t] || this.toModel(i, e, n))
                            }, e.prototype.findAll = function(t, n) {
                                var e, i;
                                return null == n && (n = {}), null == (e = this.findRecords(t)) ? [] : (e.forEach((i = this, function(e) {
                                    return n[t] || (n[t] = {}), i.toModel(e, t, n)
                                })), p.values(n[t]))
                            }, e.prototype.remove = function(e, t) {
                                var n, i;
                                return i = this, n = function(e) {
                                    var t;
                                    if (!((t = i.records.indexOf(e)) < 0)) return i.records.splice(t, 1)
                                }, null != t ? n(this.findRecord(e, t)) : this.findRecords(e).map(n)
                            }, e.prototype.sync = function(e) {
                                var t, n, i, r, s, a;
                                return s = this, (r = function(e) {
                                    var t;
                                    return null == e ? null : (t = function(e) {
                                        var t, n, i;
                                        return i = e.type, t = e.id, s.remove(i, t), n = new o(e), s.records.push(n), n
                                    }, e instanceof Array ? e.map(t) : t(e))
                                })(e.included), null == (n = r(e.data)) ? null : (t = {}, i = null, i = n instanceof Array ? n.map((a = this, function(e) {
                                    return a.toModel(e, e.type, t)
                                })) : this.toModel(n, n.type, t), e.hasOwnProperty("links") && (i.links = e.links), e.hasOwnProperty("meta") && (i.meta = e.meta), i)
                            }, e
                        }()
                }
            }, {}],
            8: [function(e, t) {
                t.exports = function(e, t) {
                    var n;
                    return null == e && (e = {}), null == t && (t = {}), n = {
                        find: e.find || function(e, t) {
                            var n, i, r;
                            for (i = 0, r = e.length; i < r; i++)
                                if (t(n = e[i])) return n
                        },
                        filter: e.filter || function(e, t) {
                            var n, i, r, s;
                            for (s = [], i = 0, r = e.length; i < r; i++) t(n = e[i]) && s.push(n);
                            return s
                        },
                        values: e.values || function(t) {
                            return null == t && (t = {}), Object.keys(t).map(function(e) {
                                return t[e]
                            })
                        },
                        clone: e.clone || function(e) {
                            var t, n, i;
                            for (n in null == e && (e = {}), t = {}, e) i = e[n], t[n] = i;
                            return t
                        },
                        any: e.any || function(e, t) {
                            return null != n.find(e, t)
                        },
                        isPromise: t.isPromise || function(e) {
                            return e === Object(e) && "function" == typeof e.promiseDispatch && "function" == typeof e.inspect
                        }
                    }
                }
            }, {}]
        }, {}, [1])(1)
    }),
    function(e, t) {
        "use strict";
        "object" == typeof module && module.exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains, e)
    }(this, function(o, t, u, n) {
        "use strict";

        function v(e, t) {
            var n = 1 <= arguments.length,
                i = 2 <= arguments.length;
            if (!(this instanceof v)) return n ? i ? new v(e, t) : new v(e) : new v;
            if (e === undefined) {
                if (n) throw new TypeError("undefined is not a valid argument for URI");
                e = "undefined" != typeof location ? location.href + "" : ""
            }
            if (null === e && n) throw new TypeError("null is not a valid argument for URI");
            return this.href(e), t !== undefined ? this.absoluteTo(t) : this
        }

        function i(e) {
            return /^[0-9]+$/.test(e)
        }

        function l(e) {
            return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }

        function a(e) {
            return e === undefined ? "Undefined" : String(Object.prototype.toString.call(e)).slice(8, -1)
        }

        function c(e) {
            return "Array" === a(e)
        }

        function d(e, t) {
            var n, i, r = {};
            if ("RegExp" === a(t)) r = null;
            else if (c(t))
                for (n = 0, i = t.length; n < i; n++) r[t[n]] = !0;
            else r[t] = !0;
            for (n = 0, i = e.length; n < i; n++) {
                (r && r[e[n]] !== undefined || !r && t.test(e[n])) && (e.splice(n, 1), i--, n--)
            }
            return e
        }

        function h(e, t) {
            var n, i;
            if (c(t)) {
                for (n = 0, i = t.length; n < i; n++)
                    if (!h(e, t[n])) return !1;
                return !0
            }
            var r = a(t);
            for (n = 0, i = e.length; n < i; n++)
                if ("RegExp" === r) {
                    if ("string" == typeof e[n] && e[n].match(t)) return !0
                } else if (e[n] === t) return !0;
            return !1
        }

        function f(e, t) {
            if (!c(e) || !c(t)) return !1;
            if (e.length !== t.length) return !1;
            e.sort(), t.sort();
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        }

        function p(e) {
            var t = /^\/+|\/+$/g;
            return e.replace(t, "")
        }

        function r(e) {
            return escape(e)
        }

        function s(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, r).replace(/\*/g, "%2A")
        }

        function e(n) {
            return function(e, t) {
                return e === undefined ? this._parts[n] || "" : (this._parts[n] = e || null, this.build(!t), this)
            }
        }

        function m(n, i) {
            return function(e, t) {
                return e === undefined ? this._parts[n] || "" : (null !== e && (e += "").charAt(0) === i && (e = e.substring(1)), this._parts[n] = e, this.build(!t), this)
            }
        }
        var g = n && n.URI;
        v.version = "1.19.1";
        var y = v.prototype,
            b = Object.prototype.hasOwnProperty;
        v._parts = function() {
            return {
                protocol: null,
                username: null,
                password: null,
                hostname: null,
                urn: null,
                port: null,
                path: null,
                query: null,
                fragment: null,
                preventInvalidHostname: v.preventInvalidHostname,
                duplicateQueryParameters: v.duplicateQueryParameters,
                escapeQuerySpace: v.escapeQuerySpace
            }
        }, v.preventInvalidHostname = !1, v.duplicateQueryParameters = !1, v.escapeQuerySpace = !0, v.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, v.idn_expression = /[^a-z0-9\._-]/i, v.punycode_expression = /(xn--)/i, v.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, v.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, v.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi, v.findUri = {
            start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
            end: /[\s\r\n]|$/,
            trim: /[`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u201e\u2018\u2019]+$/,
            parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
        }, v.defaultPorts = {
            http: "80",
            https: "443",
            ftp: "21",
            gopher: "70",
            ws: "80",
            wss: "443"
        }, v.hostProtocols = ["http", "https"], v.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/, v.domAttributes = {
            a: "href",
            blockquote: "cite",
            link: "href",
            base: "href",
            script: "src",
            form: "action",
            img: "src",
            area: "href",
            iframe: "src",
            embed: "src",
            source: "src",
            track: "src",
            input: "src",
            audio: "src",
            video: "src"
        }, v.getDomAttribute = function(e) {
            if (!e || !e.nodeName) return undefined;
            var t = e.nodeName.toLowerCase();
            return "input" === t && "image" !== e.type ? undefined : v.domAttributes[t]
        }, v.encode = s, v.decode = decodeURIComponent, v.iso8859 = function() {
            v.encode = escape, v.decode = unescape
        }, v.unicode = function() {
            v.encode = s, v.decode = decodeURIComponent
        }, v.characters = {
            pathname: {
                encode: {
                    expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                    map: {
                        "%24": "$",
                        "%26": "&",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%3A": ":",
                        "%40": "@"
                    }
                },
                decode: {
                    expression: /[\/\?#]/g,
                    map: {
                        "/": "%2F",
                        "?": "%3F",
                        "#": "%23"
                    }
                }
            },
            reserved: {
                encode: {
                    expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                    map: {
                        "%3A": ":",
                        "%2F": "/",
                        "%3F": "?",
                        "%23": "#",
                        "%5B": "[",
                        "%5D": "]",
                        "%40": "@",
                        "%21": "!",
                        "%24": "$",
                        "%26": "&",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "="
                    }
                }
            },
            urnpath: {
                encode: {
                    expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                    map: {
                        "%21": "!",
                        "%24": "$",
                        "%27": "'",
                        "%28": "(",
                        "%29": ")",
                        "%2A": "*",
                        "%2B": "+",
                        "%2C": ",",
                        "%3B": ";",
                        "%3D": "=",
                        "%40": "@"
                    }
                },
                decode: {
                    expression: /[\/\?#:]/g,
                    map: {
                        "/": "%2F",
                        "?": "%3F",
                        "#": "%23",
                        ":": "%3A"
                    }
                }
            }
        }, v.encodeQuery = function(e, t) {
            var n = v.encode(e + "");
            return t === undefined && (t = v.escapeQuerySpace), t ? n.replace(/%20/g, "+") : n
        }, v.decodeQuery = function(e, t) {
            e += "", t === undefined && (t = v.escapeQuerySpace);
            try {
                return v.decode(t ? e.replace(/\+/g, "%20") : e)
            } catch (n) {
                return e
            }
        };
        var _, w = {
                encode: "encode",
                decode: "decode"
            },
            k = function(n, i) {
                return function(e) {
                    try {
                        return v[i](e + "").replace(v.characters[n][i].expression, function(e) {
                            return v.characters[n][i].map[e]
                        })
                    } catch (t) {
                        return e
                    }
                }
            };
        for (_ in w) v[_ + "PathSegment"] = k("pathname", w[_]), v[_ + "UrnPathSegment"] = k("urnpath", w[_]);
        var x = function(s, a, o) {
            return function(e) {
                var t;
                t = o ? function(e) {
                    return v[a](v[o](e))
                } : v[a];
                for (var n = (e + "").split(s), i = 0, r = n.length; i < r; i++) n[i] = t(n[i]);
                return n.join(s)
            }
        };
        v.decodePath = x("/", "decodePathSegment"), v.decodeUrnPath = x(":", "decodeUrnPathSegment"), v.recodePath = x("/", "encodePathSegment", "decode"), v.recodeUrnPath = x(":", "encodeUrnPathSegment", "decode"), v.encodeReserved = k("reserved", "encode"), v.parse = function(e, t) {
            var n;
            return t || (t = {
                preventInvalidHostname: v.preventInvalidHostname
            }), -1 < (n = e.indexOf("#")) && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), -1 < (n = e.indexOf("?")) && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = null, e = e.substring(2), e = v.parseAuthority(e, t)) : -1 < (n = e.indexOf(":")) && (t.protocol = e.substring(0, n) || null, t.protocol && !t.protocol.match(v.protocol_expression) ? t.protocol = undefined : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = v.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0)), t.path = e, t
        }, v.parseHost = function(e, t) {
            e || (e = "");
            var n, i, r = (e = e.replace(/\\/g, "/")).indexOf("/");
            if (-1 === r && (r = e.length), "[" === e.charAt(0)) n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, r) || null, "/" === t.port && (t.port = null);
            else {
                var s = e.indexOf(":"),
                    a = e.indexOf("/"),
                    o = e.indexOf(":", s + 1); - 1 !== o && (-1 === a || o < a) ? (t.hostname = e.substring(0, r) || null, t.port = null) : (i = e.substring(0, r).split(":"), t.hostname = i[0] || null, t.port = i[1] || null)
            }
            return t.hostname && "/" !== e.substring(r).charAt(0) && (r++, e = "/" + e), t.preventInvalidHostname && v.ensureValidHostname(t.hostname, t.protocol), t.port && v.ensureValidPort(t.port), e.substring(r) || "/"
        }, v.parseAuthority = function(e, t) {
            return e = v.parseUserinfo(e, t), v.parseHost(e, t)
        }, v.parseUserinfo = function(e, t) {
            var n, i = e.indexOf("/"),
                r = e.lastIndexOf("@", -1 < i ? i : e.length - 1);
            return -1 < r && (-1 === i || r < i) ? (n = e.substring(0, r).split(":"), t.username = n[0] ? v.decode(n[0]) : null, n.shift(), t.password = n[0] ? v.decode(n.join(":")) : null, e = e.substring(r + 1)) : (t.username = null, t.password = null), e
        }, v.parseQuery = function(e, t) {
            if (!e) return {};
            if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""))) return {};
            for (var n, i, r, s = {}, a = e.split("&"), o = a.length, l = 0; l < o; l++) n = a[l].split("="), i = v.decodeQuery(n.shift(), t), r = n.length ? v.decodeQuery(n.join("="), t) : null, b.call(s, i) ? ("string" != typeof s[i] && null !== s[i] || (s[i] = [s[i]]), s[i].push(r)) : s[i] = r;
            return s
        }, v.build = function(e) {
            var t = "";
            return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += v.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
        }, v.buildHost = function(e) {
            var t = "";
            return e.hostname ? (v.ip6_expression.test(e.hostname) ? t += "[" + e.hostname + "]" : t += e.hostname, e.port && (t += ":" + e.port), t) : ""
        }, v.buildAuthority = function(e) {
            return v.buildUserinfo(e) + v.buildHost(e)
        }, v.buildUserinfo = function(e) {
            var t = "";
            return e.username && (t += v.encode(e.username)), e.password && (t += ":" + v.encode(e.password)), t && (t += "@"), t
        }, v.buildQuery = function(e, t, n) {
            var i, r, s, a, o = "";
            for (r in e)
                if (b.call(e, r) && r)
                    if (c(e[r]))
                        for (i = {}, s = 0, a = e[r].length; s < a; s++) e[r][s] !== undefined && i[e[r][s] + ""] === undefined && (o += "&" + v.buildQueryParameter(r, e[r][s], n), !0 !== t && (i[e[r][s] + ""] = !0));
                    else e[r] !== undefined && (o += "&" + v.buildQueryParameter(r, e[r], n));
            return o.substring(1)
        }, v.buildQueryParameter = function(e, t, n) {
            return v.encodeQuery(e, n) + (null !== t ? "=" + v.encodeQuery(t, n) : "")
        }, v.addQuery = function(e, t, n) {
            if ("object" == typeof t)
                for (var i in t) b.call(t, i) && v.addQuery(e, i, t[i]);
            else {
                if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                if (e[t] === undefined) return void(e[t] = n);
                "string" == typeof e[t] && (e[t] = [e[t]]), c(n) || (n = [n]), e[t] = (e[t] || []).concat(n)
            }
        }, v.setQuery = function(e, t, n) {
            if ("object" == typeof t)
                for (var i in t) b.call(t, i) && v.setQuery(e, i, t[i]);
            else {
                if ("string" != typeof t) throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");
                e[t] = n === undefined ? null : n
            }
        }, v.removeQuery = function(e, t, n) {
            var i, r, s;
            if (c(t))
                for (i = 0, r = t.length; i < r; i++) e[t[i]] = undefined;
            else if ("RegExp" === a(t))
                for (s in e) t.test(s) && (e[s] = undefined);
            else if ("object" == typeof t)
                for (s in t) b.call(t, s) && v.removeQuery(e, s, t[s]);
            else {
                if ("string" != typeof t) throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
                n !== undefined ? "RegExp" === a(n) ? !c(e[t]) && n.test(e[t]) ? e[t] = undefined : e[t] = d(e[t], n) : e[t] !== String(n) || c(n) && 1 !== n.length ? c(e[t]) && (e[t] = d(e[t], n)) : e[t] = undefined : e[t] = undefined
            }
        }, v.hasQuery = function(e, t, n, i) {
            switch (a(t)) {
                case "String":
                    break;
                case "RegExp":
                    for (var r in e)
                        if (b.call(e, r) && t.test(r) && (n === undefined || v.hasQuery(e, r, n))) return !0;
                    return !1;
                case "Object":
                    for (var s in t)
                        if (b.call(t, s) && !v.hasQuery(e, s, t[s])) return !1;
                    return !0;
                default:
                    throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")
            }
            switch (a(n)) {
                case "Undefined":
                    return t in e;
                case "Boolean":
                    return n === Boolean(c(e[t]) ? e[t].length : e[t]);
                case "Function":
                    return !!n(e[t], t, e);
                case "Array":
                    return !!c(e[t]) && (i ? h : f)(e[t], n);
                case "RegExp":
                    return c(e[t]) ? !!i && h(e[t], n) : Boolean(e[t] && e[t].match(n));
                case "Number":
                    n = String(n);
                case "String":
                    return c(e[t]) ? !!i && h(e[t], n) : e[t] === n;
                default:
                    throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
            }
        }, v.joinPaths = function() {
            for (var e = [], t = [], n = 0, i = 0; i < arguments.length; i++) {
                var r = new v(arguments[i]);
                e.push(r);
                for (var s = r.segment(), a = 0; a < s.length; a++) "string" == typeof s[a] && t.push(s[a]), s[a] && n++
            }
            if (!t.length || !n) return new v("");
            var o = new v("").segment(t);
            return "" !== e[0].path() && "/" !== e[0].path().slice(0, 1) || o.path("/" + o.path()), o.normalize()
        }, v.commonPath = function(e, t) {
            var n, i = Math.min(e.length, t.length);
            for (n = 0; n < i; n++)
                if (e.charAt(n) !== t.charAt(n)) {
                    n--;
                    break
                } return n < 1 ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" === e.charAt(n) && "/" === t.charAt(n) || (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
        }, v.withinString = function(e, t, n) {
            n || (n = {});
            var i = n.start || v.findUri.start,
                r = n.end || v.findUri.end,
                s = n.trim || v.findUri.trim,
                a = n.parens || v.findUri.parens,
                o = /[a-z0-9-]=["']?$/i;
            for (i.lastIndex = 0;;) {
                var l = i.exec(e);
                if (!l) break;
                var u = l.index;
                if (n.ignoreHtml) {
                    var c = e.slice(Math.max(u - 3, 0), u);
                    if (c && o.test(c)) continue
                }
                for (var d = u + e.slice(u).search(r), h = e.slice(u, d), f = -1;;) {
                    var p = a.exec(h);
                    if (!p) break;
                    var m = p.index + p[0].length;
                    f = Math.max(f, m)
                }
                if (!((h = -1 < f ? h.slice(0, f) + h.slice(f).replace(s, "") : h.replace(s, "")).length <= l[0].length || n.ignore && n.ignore.test(h))) {
                    var g = t(h, u, d = u + h.length, e);
                    g !== undefined ? (g = String(g), e = e.slice(0, u) + g + e.slice(d), i.lastIndex = u + g.length) : i.lastIndex = d
                }
            }
            return i.lastIndex = 0, e
        }, v.ensureValidHostname = function(e, t) {
            var n = !!e,
                i = !1;
            if (!!t && (i = h(v.hostProtocols, t)), i && !n) throw new TypeError("Hostname cannot be empty, if protocol is " + t);
            if (e && e.match(v.invalid_hostname_characters)) {
                if (!o) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
                if (o.toASCII(e).match(v.invalid_hostname_characters)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-:_]')
            }
        }, v.ensureValidPort = function(e) {
            if (e) {
                var t = Number(e);
                if (!(i(t) && 0 < t && t < 65536)) throw new TypeError('Port "' + e + '" is not a valid port')
            }
        }, v.noConflict = function(e) {
            if (e) {
                var t = {
                    URI: this.noConflict()
                };
                return n.URITemplate && "function" == typeof n.URITemplate.noConflict && (t.URITemplate = n.URITemplate.noConflict()), n.IPv6 && "function" == typeof n.IPv6.noConflict && (t.IPv6 = n.IPv6.noConflict()), n.SecondLevelDomains && "function" == typeof n.SecondLevelDomains.noConflict && (t.SecondLevelDomains = n.SecondLevelDomains.noConflict()), t
            }
            return n.URI === this && (n.URI = g), this
        }, y.build = function(e) {
            return !0 === e ? this._deferred_build = !0 : (e === undefined || this._deferred_build) && (this._string = v.build(this._parts), this._deferred_build = !1), this
        }, y.clone = function() {
            return new v(this)
        }, y.valueOf = y.toString = function() {
            return this.build(!1)._string
        }, y.protocol = e("protocol"), y.username = e("username"), y.password = e("password"), y.hostname = e("hostname"), y.port = e("port"), y.query = m("query", "?"), y.fragment = m("fragment", "#"), y.search = function(e, t) {
            var n = this.query(e, t);
            return "string" == typeof n && n.length ? "?" + n : n
        }, y.hash = function(e, t) {
            var n = this.fragment(e, t);
            return "string" == typeof n && n.length ? "#" + n : n
        }, y.pathname = function(e, t) {
            if (e !== undefined && !0 !== e) return this._parts.urn ? this._parts.path = e ? v.recodeUrnPath(e) : "" : this._parts.path = e ? v.recodePath(e) : "/", this.build(!t), this;
            var n = this._parts.path || (this._parts.hostname ? "/" : "");
            return e ? (this._parts.urn ? v.decodeUrnPath : v.decodePath)(n) : n
        }, y.path = y.pathname, y.href = function(e, t) {
            var n;
            if (e === undefined) return this.toString();
            this._string = "", this._parts = v._parts();
            var i = e instanceof v,
                r = "object" == typeof e && (e.hostname || e.path || e.pathname);
            e.nodeName && (e = e[v.getDomAttribute(e)] || "", r = !1);
            if (!i && r && e.pathname !== undefined && (e = e.toString()), "string" == typeof e || e instanceof String) this._parts = v.parse(String(e), this._parts);
            else {
                if (!i && !r) throw new TypeError("invalid input");
                var s = i ? e._parts : e;
                for (n in s) "query" !== n && b.call(this._parts, n) && (this._parts[n] = s[n]);
                s.query && this.query(s.query, !1)
            }
            return this.build(!t), this
        }, y.is = function(e) {
            var t = !1,
                n = !1,
                i = !1,
                r = !1,
                s = !1,
                a = !1,
                o = !1,
                l = !this._parts.urn;
            switch (this._parts.hostname && (l = !1, n = v.ip4_expression.test(this._parts.hostname), i = v.ip6_expression.test(this._parts.hostname), s = (r = !(t = n || i)) && u && u.has(this._parts.hostname), a = r && v.idn_expression.test(this._parts.hostname), o = r && v.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
                case "relative":
                    return l;
                case "absolute":
                    return !l;
                case "domain":
                case "name":
                    return r;
                case "sld":
                    return s;
                case "ip":
                    return t;
                case "ip4":
                case "ipv4":
                case "inet4":
                    return n;
                case "ip6":
                case "ipv6":
                case "inet6":
                    return i;
                case "idn":
                    return a;
                case "url":
                    return !this._parts.urn;
                case "urn":
                    return !!this._parts.urn;
                case "punycode":
                    return o
            }
            return null
        };
        var C = y.protocol,
            S = y.port,
            $ = y.hostname;
        y.protocol = function(e, t) {
            if (e && !(e = e.replace(/:(\/\/)?$/, "")).match(v.protocol_expression)) throw new TypeError('Protocol "' + e + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
            return C.call(this, e, t)
        }, y.scheme = y.protocol, y.port = function(e, t) {
            return this._parts.urn ? e === undefined ? "" : this : (e !== undefined && (0 === e && (e = null), e && (":" === (e += "").charAt(0) && (e = e.substring(1)), v.ensureValidPort(e))), S.call(this, e, t))
        }, y.hostname = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e !== undefined) {
                var n = {
                    preventInvalidHostname: this._parts.preventInvalidHostname
                };
                if ("/" !== v.parseHost(e, n)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
                e = n.hostname, this._parts.preventInvalidHostname && v.ensureValidHostname(e, this._parts.protocol)
            }
            return $.call(this, e, t)
        }, y.origin = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined) {
                var n = this.protocol();
                return this.authority() ? (n ? n + "://" : "") + this.authority() : ""
            }
            var i = v(e);
            return this.protocol(i.protocol()).authority(i.authority()).build(!t), this
        }, y.host = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined) return this._parts.hostname ? v.buildHost(this._parts) : "";
            if ("/" !== v.parseHost(e, this._parts)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
            return this.build(!t), this
        }, y.authority = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined) return this._parts.hostname ? v.buildAuthority(this._parts) : "";
            if ("/" !== v.parseAuthority(e, this._parts)) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
            return this.build(!t), this
        }, y.userinfo = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e !== undefined) return "@" !== e[e.length - 1] && (e += "@"), v.parseUserinfo(e, this._parts), this.build(!t), this;
            var n = v.buildUserinfo(this._parts);
            return n ? n.substring(0, n.length - 1) : n
        }, y.resource = function(e, t) {
            var n;
            return e === undefined ? this.path() + this.search() + this.hash() : (n = v.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
        }, y.subdomain = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var n = this._parts.hostname.length - this.domain().length - 1;
                return this._parts.hostname.substring(0, n) || ""
            }
            var i = this._parts.hostname.length - this.domain().length,
                r = this._parts.hostname.substring(0, i),
                s = new RegExp("^" + l(r));
            if (e && "." !== e.charAt(e.length - 1) && (e += "."), -1 !== e.indexOf(":")) throw new TypeError("Domains cannot contain colons");
            return e && v.ensureValidHostname(e, this._parts.protocol), this._parts.hostname = this._parts.hostname.replace(s, e), this.build(!t), this
        }, y.domain = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if ("boolean" == typeof e && (t = e, e = undefined), e === undefined) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var n = this._parts.hostname.match(/\./g);
                if (n && n.length < 2) return this._parts.hostname;
                var i = this._parts.hostname.length - this.tld(t).length - 1;
                return i = this._parts.hostname.lastIndexOf(".", i - 1) + 1, this._parts.hostname.substring(i) || ""
            }
            if (!e) throw new TypeError("cannot set domain empty");
            if (-1 !== e.indexOf(":")) throw new TypeError("Domains cannot contain colons");
            if (v.ensureValidHostname(e, this._parts.protocol), !this._parts.hostname || this.is("IP")) this._parts.hostname = e;
            else {
                var r = new RegExp(l(this.domain()) + "$");
                this._parts.hostname = this._parts.hostname.replace(r, e)
            }
            return this.build(!t), this
        }, y.tld = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if ("boolean" == typeof e && (t = e, e = undefined), e === undefined) {
                if (!this._parts.hostname || this.is("IP")) return "";
                var n = this._parts.hostname.lastIndexOf("."),
                    i = this._parts.hostname.substring(n + 1);
                return !0 !== t && u && u.list[i.toLowerCase()] && u.get(this._parts.hostname) || i
            }
            var r;
            if (!e) throw new TypeError("cannot set TLD empty");
            if (e.match(/[^a-zA-Z0-9-]/)) {
                if (!u || !u.is(e)) throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]');
                r = new RegExp(l(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(r, e)
            } else {
                if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
                r = new RegExp(l(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(r, e)
            }
            return this.build(!t), this
        }, y.directory = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined || !0 === e) {
                if (!this._parts.path && !this._parts.hostname) return "";
                if ("/" === this._parts.path) return "/";
                var n = this._parts.path.length - this.filename().length - 1,
                    i = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
                return e ? v.decodePath(i) : i
            }
            var r = this._parts.path.length - this.filename().length,
                s = this._parts.path.substring(0, r),
                a = new RegExp("^" + l(s));
            return this.is("relative") || (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)), e && "/" !== e.charAt(e.length - 1) && (e += "/"), e = v.recodePath(e), this._parts.path = this._parts.path.replace(a, e), this.build(!t), this
        }, y.filename = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if ("string" != typeof e) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var n = this._parts.path.lastIndexOf("/"),
                    i = this._parts.path.substring(n + 1);
                return e ? v.decodePathSegment(i) : i
            }
            var r = !1;
            "/" === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (r = !0);
            var s = new RegExp(l(this.filename()) + "$");
            return e = v.recodePath(e), this._parts.path = this._parts.path.replace(s, e), r ? this.normalizePath(t) : this.build(!t), this
        }, y.suffix = function(e, t) {
            if (this._parts.urn) return e === undefined ? "" : this;
            if (e === undefined || !0 === e) {
                if (!this._parts.path || "/" === this._parts.path) return "";
                var n, i, r = this.filename(),
                    s = r.lastIndexOf(".");
                return -1 === s ? "" : (n = r.substring(s + 1), i = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? v.decodePathSegment(i) : i)
            }
            "." === e.charAt(0) && (e = e.substring(1));
            var a, o = this.suffix();
            if (o) a = e ? new RegExp(l(o) + "$") : new RegExp(l("." + o) + "$");
            else {
                if (!e) return this;
                this._parts.path += "." + v.recodePath(e)
            }
            return a && (e = v.recodePath(e), this._parts.path = this._parts.path.replace(a, e)), this.build(!t), this
        }, y.segment = function(e, t, n) {
            var i = this._parts.urn ? ":" : "/",
                r = this.path(),
                s = "/" === r.substring(0, 1),
                a = r.split(i);
            if (e !== undefined && "number" != typeof e && (n = t, t = e, e = undefined), e !== undefined && "number" != typeof e) throw new Error('Bad segment "' + e + '", must be 0-based integer');
            if (s && a.shift(), e < 0 && (e = Math.max(a.length + e, 0)), t === undefined) return e === undefined ? a : a[e];
            if (null === e || a[e] === undefined)
                if (c(t)) {
                    a = [];
                    for (var o = 0, l = t.length; o < l; o++)(t[o].length || a.length && a[a.length - 1].length) && (a.length && !a[a.length - 1].length && a.pop(), a.push(p(t[o])))
                } else(t || "string" == typeof t) && (t = p(t), "" === a[a.length - 1] ? a[a.length - 1] = t : a.push(t));
            else t ? a[e] = p(t) : a.splice(e, 1);
            return s && a.unshift(""), this.path(a.join(i), n)
        }, y.segmentCoded = function(e, t, n) {
            var i, r, s;
            if ("number" != typeof e && (n = t, t = e, e = undefined), t === undefined) {
                if (c(i = this.segment(e, t, n)))
                    for (r = 0, s = i.length; r < s; r++) i[r] = v.decode(i[r]);
                else i = i !== undefined ? v.decode(i) : undefined;
                return i
            }
            if (c(t))
                for (r = 0, s = t.length; r < s; r++) t[r] = v.encode(t[r]);
            else t = "string" == typeof t || t instanceof String ? v.encode(t) : t;
            return this.segment(e, t, n)
        };
        var D = y.query;
        return y.query = function(e, t) {
            if (!0 === e) return v.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            if ("function" != typeof e) return e !== undefined && "string" != typeof e ? (this._parts.query = v.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this) : D.call(this, e, t);
            var n = v.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                i = e.call(this, n);
            return this._parts.query = v.buildQuery(i || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this
        }, y.setQuery = function(e, t, n) {
            var i = v.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            if ("string" == typeof e || e instanceof String) i[e] = t !== undefined ? t : null;
            else {
                if ("object" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                for (var r in e) b.call(e, r) && (i[r] = e[r])
            }
            return this._parts.query = v.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
        }, y.addQuery = function(e, t, n) {
            var i = v.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return v.addQuery(i, e, t === undefined ? null : t), this._parts.query = v.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
        }, y.removeQuery = function(e, t, n) {
            var i = v.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return v.removeQuery(i, e, t), this._parts.query = v.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
        }, y.hasQuery = function(e, t, n) {
            var i = v.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            return v.hasQuery(i, e, t, n)
        }, y.setSearch = y.setQuery, y.addSearch = y.addQuery, y.removeSearch = y.removeQuery, y.hasSearch = y.hasQuery, y.normalize = function() {
            return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
        }, y.normalizeProtocol = function(e) {
            return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
        }, y.normalizeHostname = function(e) {
            return this._parts.hostname && (this.is("IDN") && o ? this._parts.hostname = o.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!e)), this
        }, y.normalizePort = function(e) {
            return "string" == typeof this._parts.protocol && this._parts.port === v.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
        }, y.normalizePath = function(e) {
            var t, n = this._parts.path;
            if (!n) return this;
            if (this._parts.urn) return this._parts.path = v.recodeUrnPath(this._parts.path), this.build(!e), this;
            if ("/" === this._parts.path) return this;
            var i, r, s = "";
            for ("/" !== (n = v.recodePath(n)).charAt(0) && (t = !0, n = "/" + n), "/.." !== n.slice(-3) && "/." !== n.slice(-2) || (n += "/"), n = n.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"), t && (s = n.substring(1).match(/^(\.\.\/)+/) || "") && (s = s[0]); - 1 !== (i = n.search(/\/\.\.(\/|$)/));) 0 !== i ? (-1 === (r = n.substring(0, i).lastIndexOf("/")) && (r = i), n = n.substring(0, r) + n.substring(i + 3)) : n = n.substring(3);
            return t && this.is("relative") && (n = s + n.substring(1)), this._parts.path = n, this.build(!e), this
        }, y.normalizePathname = y.normalizePath, y.normalizeQuery = function(e) {
            return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(v.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!e)), this
        }, y.normalizeFragment = function(e) {
            return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
        }, y.normalizeSearch = y.normalizeQuery, y.normalizeHash = y.normalizeFragment, y.iso8859 = function() {
            var e = v.encode,
                t = v.decode;
            v.encode = escape, v.decode = decodeURIComponent;
            try {
                this.normalize()
            } finally {
                v.encode = e, v.decode = t
            }
            return this
        }, y.unicode = function() {
            var e = v.encode,
                t = v.decode;
            v.encode = s, v.decode = unescape;
            try {
                this.normalize()
            } finally {
                v.encode = e, v.decode = t
            }
            return this
        }, y.readable = function() {
            var e = this.clone();
            e.username("").password("").normalize();
            var t = "";
            if (e._parts.protocol && (t += e._parts.protocol + "://"), e._parts.hostname && (e.is("punycode") && o ? (t += o.toUnicode(e._parts.hostname), e._parts.port && (t += ":" + e._parts.port)) : t += e.host()), e._parts.hostname && e._parts.path && "/" !== e._parts.path.charAt(0) && (t += "/"), t += e.path(!0), e._parts.query) {
                for (var n = "", i = 0, r = e._parts.query.split("&"), s = r.length; i < s; i++) {
                    var a = (r[i] || "").split("=");
                    n += "&" + v.decodeQuery(a[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), a[1] !== undefined && (n += "=" + v.decodeQuery(a[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
                }
                t += "?" + n.substring(1)
            }
            return t += v.decodeQuery(e.hash(), !0)
        }, y.absoluteTo = function(e) {
            var t, n, i, r = this.clone(),
                s = ["protocol", "username", "password", "hostname", "port"];
            if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
            if (e instanceof v || (e = new v(e)), r._parts.protocol) return r;
            if (r._parts.protocol = e._parts.protocol, this._parts.hostname) return r;
            for (n = 0; i = s[n]; n++) r._parts[i] = e._parts[i];
            return r._parts.path ? (".." === r._parts.path.substring(-2) && (r._parts.path += "/"), "/" !== r.path().charAt(0) && (t = (t = e.directory()) || (0 === e.path().indexOf("/") ? "/" : ""), r._parts.path = (t ? t + "/" : "") + r._parts.path, r.normalizePath())) : (r._parts.path = e._parts.path, r._parts.query || (r._parts.query = e._parts.query)), r.build(), r
        }, y.relativeTo = function(e) {
            var t, n, i, r, s, a = this.clone().normalize();
            if (a._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
            if (e = new v(e).normalize(), t = a._parts, n = e._parts, r = a.path(), s = e.path(), "/" !== r.charAt(0)) throw new Error("URI is already relative");
            if ("/" !== s.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
            if (t.protocol === n.protocol && (t.protocol = null), t.username !== n.username || t.password !== n.password) return a.build();
            if (null !== t.protocol || null !== t.username || null !== t.password) return a.build();
            if (t.hostname !== n.hostname || t.port !== n.port) return a.build();
            if (t.hostname = null, t.port = null, r === s) return t.path = "", a.build();
            if (!(i = v.commonPath(r, s))) return a.build();
            var o = n.path.substring(i.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
            return t.path = o + t.path.substring(i.length) || "./", a.build()
        }, y.equals = function(e) {
            var t, n, i, r = this.clone(),
                s = new v(e),
                a = {},
                o = {},
                l = {};
            if (r.normalize(), s.normalize(), r.toString() === s.toString()) return !0;
            if (t = r.query(), n = s.query(), r.query(""), s.query(""), r.toString() !== s.toString()) return !1;
            if (t.length !== n.length) return !1;
            for (i in a = v.parseQuery(t, this._parts.escapeQuerySpace), o = v.parseQuery(n, this._parts.escapeQuerySpace), a)
                if (b.call(a, i)) {
                    if (c(a[i])) {
                        if (!f(a[i], o[i])) return !1
                    } else if (a[i] !== o[i]) return !1;
                    l[i] = !0
                } for (i in o)
                if (b.call(o, i) && !l[i]) return !1;
            return !0
        }, y.preventInvalidHostname = function(e) {
            return this._parts.preventInvalidHostname = !!e, this
        }, y.duplicateQueryParameters = function(e) {
            return this._parts.duplicateQueryParameters = !!e, this
        }, y.escapeQuerySpace = function(e) {
            return this._parts.escapeQuerySpace = !!e, this
        }, v
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function u() {
            return En.apply(null, arguments)
        }

        function e(e) {
            En = e
        }

        function r(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function n(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function a(e, t) {
            for (var n in t) o(t, n) && (e[n] = t[n]);
            return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function l(e, t, n, i) {
            return je(e, t, n, i, !0).utc()
        }

        function t() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function c(e) {
            return null == e._pf && (e._pf = t()), e._pf
        }

        function d(e) {
            if (null == e._isValid) {
                var t = c(e);
                e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && t.bigHour === undefined)
            }
            return e._isValid
        }

        function i(e) {
            var t = l(NaN);
            return null != e ? a(c(t), e) : c(t).userInvalidated = !0, t
        }

        function h(e, t) {
            var n, i, r;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = c(t)), "undefined" != typeof t._locale && (e._locale = t._locale), 0 < On.length)
                for (n in On) void 0 !== (r = t[i = On[n]]) && (e[i] = r);
            return e
        }

        function f(e) {
            h(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !1 === Nn && (Nn = !0, u.updateOffset(this), Nn = !1)
        }

        function p(e) {
            return e instanceof f || null != e && null != e._isAMomentObject
        }

        function m(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function g(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = m(t)), n
        }

        function v(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                s = Math.abs(e.length - t.length),
                a = 0;
            for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && g(e[i]) !== g(t[i])) && a++;
            return a + s
        }

        function y() {}

        function b(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function _(e) {
            for (var t, n, i, r, s = 0; s < e.length;) {
                for (t = (r = b(e[s]).split("-")).length, n = (n = b(e[s + 1])) ? n.split("-") : null; 0 < t;) {
                    if (i = w(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                    t--
                }
                s++
            }
            return null
        }

        function w(e) {
            var t = null;
            if (!Rn[e] && "undefined" != typeof module && module && module.exports) try {
                t = Pn._abbr, require("./locale/" + e), k(t)
            } catch (n) {}
            return Rn[e]
        }

        function k(e, t) {
            var n;
            return e && (n = void 0 === t ? C(e) : x(e, t)) && (Pn = n), Pn._abbr
        }

        function x(e, t) {
            return null !== t ? (t.abbr = e, Rn[e] = Rn[e] || new y, Rn[e].set(t), k(e), Rn[e]) : (delete Rn[e], null)
        }

        function C(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Pn;
            if (!r(e)) {
                if (t = w(e)) return t;
                e = [e]
            }
            return _(e)
        }

        function S(e, t) {
            var n = e.toLowerCase();
            Hn[n] = Hn[n + "s"] = Hn[t] = e
        }

        function $(e) {
            return "string" == typeof e ? Hn[e] || Hn[e.toLowerCase()] : undefined
        }

        function D(e) {
            var t, n, i = {};
            for (n in e) o(e, n) && (t = $(n)) && (i[t] = e[n]);
            return i
        }

        function j(t, n) {
            return function(e) {
                return null != e ? (A(this, t, e), u.updateOffset(this, n), this) : T(this, t)
            }
        }

        function T(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function A(e, t, n) {
            return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function F(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else if ("function" == typeof this[e = $(e)]) return this[e](t);
            return this
        }

        function M(e, t, n) {
            var i = "" + Math.abs(e),
                r = t - i.length;
            return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function I(e, t, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), e && (qn[e] = r), t && (qn[t[0]] = function() {
                return M(r.apply(this, arguments), t[1], t[2])
            }), n && (qn[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            })
        }

        function E(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function P(n) {
            var i, r, s = n.match(Ln);
            for (i = 0, r = s.length; i < r; i++) qn[s[i]] ? s[i] = qn[s[i]] : s[i] = E(s[i]);
            return function(e) {
                var t = "";
                for (i = 0; i < r; i++) t += s[i] instanceof Function ? s[i].call(e, n) : s[i];
                return t
            }
        }

        function O(e, t) {
            return e.isValid() ? (t = N(t, e.localeData()), Bn[t] = Bn[t] || P(t), Bn[t](e)) : e.localeData().invalidDate()
        }

        function N(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (zn.lastIndex = 0; 0 <= i && zn.test(e);) e = e.replace(zn, n), zn.lastIndex = 0, i -= 1;
            return e
        }

        function R(e) {
            return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
        }

        function H(e, t, n) {
            ri[e] = R(t) ? t : function(e) {
                return e && n ? n : t
            }
        }

        function L(e, t) {
            return o(ri, e) ? ri[e](t._strict, t._locale) : new RegExp(z(e))
        }

        function z(e) {
            return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                return t || n || i || r
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function B(e, n) {
            var t, i = n;
            for ("string" == typeof e && (e = [e]), "number" == typeof n && (i = function(e, t) {
                    t[n] = g(e)
                }), t = 0; t < e.length; t++) si[e[t]] = i
        }

        function q(e, r) {
            B(e, function(e, t, n, i) {
                n._w = n._w || {}, r(e, n._w, n, i)
            })
        }

        function W(e, t, n) {
            null != t && o(si, e) && si[e](t, n._a, n, e)
        }

        function V(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function U(e) {
            return this._months[e.month()]
        }

        function Y(e) {
            return this._monthsShort[e.month()]
        }

        function Q(e, t, n) {
            var i, r, s;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (r = l([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }

        function G(e, t) {
            var n;
            return "string" == typeof t && "number" != typeof(t = e.localeData().monthsParse(t)) || (n = Math.min(e.date(), V(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n)), e
        }

        function X(e) {
            return null != e ? (G(this, e), u.updateOffset(this, !0), this) : T(this, "Month")
        }

        function Z() {
            return V(this.year(), this.month())
        }

        function K(e) {
            var t, n = e._a;
            return n && -2 === c(e).overflow && (t = n[oi] < 0 || 11 < n[oi] ? oi : n[li] < 1 || n[li] > V(n[ai], n[oi]) ? li : n[ui] < 0 || 24 < n[ui] || 24 === n[ui] && (0 !== n[ci] || 0 !== n[di] || 0 !== n[hi]) ? ui : n[ci] < 0 || 59 < n[ci] ? ci : n[di] < 0 || 59 < n[di] ? di : n[hi] < 0 || 999 < n[hi] ? hi : -1, c(e)._overflowDayOfYear && (t < ai || li < t) && (t = li), c(e).overflow = t), e
        }

        function J(e) {
            !1 === u.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function ee(e, t) {
            var n = !0;
            return a(function() {
                return n && (J(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
            }, t)
        }

        function te(e, t) {
            mi[e] || (J(t), mi[e] = !0)
        }

        function ne(e) {
            var t, n, i = e._i,
                r = gi.exec(i);
            if (r) {
                for (c(e).iso = !0, t = 0, n = vi.length; t < n; t++)
                    if (vi[t][1].exec(i)) {
                        e._f = vi[t][0];
                        break
                    } for (t = 0, n = yi.length; t < n; t++)
                    if (yi[t][1].exec(i)) {
                        e._f += (r[6] || " ") + yi[t][0];
                        break
                    } i.match(ti) && (e._f += "Z"), we(e)
            } else e._isValid = !1
        }

        function ie(e) {
            var t = bi.exec(e._i);
            null === t ? (ne(e), !1 === e._isValid && (delete e._isValid, u.createFromInputFallback(e))) : e._d = new Date(+t[1])
        }

        function re(e, t, n, i, r, s, a) {
            var o = new Date(e, t, n, i, r, s, a);
            return e < 1970 && o.setFullYear(e), o
        }

        function se(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 1970 && t.setUTCFullYear(e), t
        }

        function ae(e) {
            return oe(e) ? 366 : 365
        }

        function oe(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function le() {
            return oe(this.year())
        }

        function ue(e, t, n) {
            var i, r = n - t,
                s = n - e.day();
            return r < s && (s -= 7), s < r - 7 && (s += 7), i = Te(e).add(s, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function ce(e) {
            return ue(e, this._week.dow, this._week.doy).week
        }

        function de() {
            return this._week.dow
        }

        function he() {
            return this._week.doy
        }

        function fe(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function pe(e) {
            var t = ue(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function me(e, t, n, i, r) {
            var s, a = 6 + r - i,
                o = se(e, 0, 1 + a).getUTCDay();
            return o < r && (o += 7), {
                year: 0 < (s = 1 + a + 7 * (t - 1) - o + (n = null != n ? 1 * n : r)) ? e : e - 1,
                dayOfYear: 0 < s ? s : ae(e - 1) + s
            }
        }

        function ge(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function ve(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function ye(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function be(e) {
            var t, n, i, r, s = [];
            if (!e._d) {
                for (i = ye(e), e._w && null == e._a[li] && null == e._a[oi] && _e(e), e._dayOfYear && (r = ve(e._a[ai], i[ai]), e._dayOfYear > ae(r) && (c(e)._overflowDayOfYear = !0), n = se(r, 0, e._dayOfYear), e._a[oi] = n.getUTCMonth(), e._a[li] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = i[t];
                for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[ui] && 0 === e._a[ci] && 0 === e._a[di] && 0 === e._a[hi] && (e._nextDay = !0, e._a[ui] = 0), e._d = (e._useUTC ? se : re).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ui] = 24)
            }
        }

        function _e(e) {
            var t, n, i, r, s, a, o;
            null != (t = e._w).GG || null != t.W || null != t.E ? (s = 1, a = 4, n = ve(t.GG, e._a[ai], ue(Te(), 1, 4).year), i = ve(t.W, 1), r = ve(t.E, 1)) : (s = e._locale._week.dow, a = e._locale._week.doy, n = ve(t.gg, e._a[ai], ue(Te(), s, a).year), i = ve(t.w, 1), null != t.d ? (r = t.d) < s && ++i : r = null != t.e ? t.e + s : s), o = me(n, i, r, a, s), e._a[ai] = o.year, e._dayOfYear = o.dayOfYear
        }

        function we(e) {
            if (e._f !== u.ISO_8601) {
                e._a = [], c(e).empty = !0;
                var t, n, i, r, s, a = "" + e._i,
                    o = a.length,
                    l = 0;
                for (i = N(e._f, e._locale).match(Ln) || [], t = 0; t < i.length; t++) r = i[t], (n = (a.match(L(r, e)) || [])[0]) && (0 < (s = a.substr(0, a.indexOf(n))).length && c(e).unusedInput.push(s), a = a.slice(a.indexOf(n) + n.length), l += n.length), qn[r] ? (n ? c(e).empty = !1 : c(e).unusedTokens.push(r), W(r, n, e)) : e._strict && !n && c(e).unusedTokens.push(r);
                c(e).charsLeftOver = o - l, 0 < a.length && c(e).unusedInput.push(a), !0 === c(e).bigHour && e._a[ui] <= 12 && 0 < e._a[ui] && (c(e).bigHour = undefined), e._a[ui] = ke(e._locale, e._a[ui], e._meridiem), be(e), K(e)
            } else ne(e)
        }

        function ke(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0)), t)
        }

        function xe(e) {
            var t, n, i, r, s;
            if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) s = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], we(t), d(t) && (s += c(t).charsLeftOver, s += 10 * c(t).unusedTokens.length, c(t).score = s, (null == i || s < i) && (i = s, n = t));
            a(e, n || t)
        }

        function Ce(e) {
            if (!e._d) {
                var t = D(e._i);
                e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], be(e)
            }
        }

        function Se(e) {
            var t = new f(K($e(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t
        }

        function $e(e) {
            var t = e._i,
                n = e._f;
            return e._locale = e._locale || C(e._l), null === t || n === undefined && "" === t ? i({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new f(K(t)) : (r(n) ? xe(e) : n ? we(e) : s(t) ? e._d = t : De(e), e))
        }

        function De(e) {
            var t = e._i;
            t === undefined ? e._d = new Date : s(t) ? e._d = new Date(+t) : "string" == typeof t ? ie(e) : r(t) ? (e._a = n(t.slice(0), function(e) {
                return parseInt(e, 10)
            }), be(e)) : "object" == typeof t ? Ce(e) : "number" == typeof t ? e._d = new Date(t) : u.createFromInputFallback(e)
        }

        function je(e, t, n, i, r) {
            var s = {};
            return "boolean" == typeof n && (i = n, n = undefined), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = e, s._f = t, s._strict = i, Se(s)
        }

        function Te(e, t, n, i) {
            return je(e, t, n, i, !1)
        }

        function Ae(e, t) {
            var n, i;
            if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Te();
            for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
            return n
        }

        function Fe() {
            return Ae("isBefore", [].slice.call(arguments, 0))
        }

        function Me() {
            return Ae("isAfter", [].slice.call(arguments, 0))
        }

        function Ie(e) {
            var t = D(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                s = t.week || 0,
                a = t.day || 0,
                o = t.hour || 0,
                l = t.minute || 0,
                u = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * o, this._days = +a + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = C(), this._bubble()
        }

        function Ee(e) {
            return e instanceof Ie
        }

        function Pe(e, n) {
            I(e, 0, 0, function() {
                var e = this.utcOffset(),
                    t = "+";
                return e < 0 && (e = -e, t = "-"), t + M(~~(e / 60), 2) + n + M(~~e % 60, 2)
            })
        }

        function Oe(e) {
            var t = (e || "").match(ti) || [],
                n = ((t[t.length - 1] || []) + "").match(Ci) || ["-", 0, 0],
                i = 60 * n[1] + g(n[2]);
            return "+" === n[0] ? i : -i
        }

        function Ne(e, t) {
            var n, i;
            return t._isUTC ? (n = t.clone(), i = (p(e) || s(e) ? +e : +Te(e)) - +n, n._d.setTime(+n._d + i), u.updateOffset(n, !1), n) : Te(e).local()
        }

        function Re(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function He(e, t) {
            var n, i = this._offset || 0;
            return null != e ? ("string" == typeof e && (e = Oe(e)), Math.abs(e) < 16 && (e *= 60), !this._isUTC && t && (n = Re(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!t || this._changeInProgress ? tt(this, Xe(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Re(this)
        }

        function Le(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function ze(e) {
            return this.utcOffset(0, e)
        }

        function Be(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Re(this), "m")), this
        }

        function qe() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Oe(this._i)), this
        }

        function We(e) {
            return e = e ? Te(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0
        }

        function Ve() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Ue() {
            if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
            var e = {};
            if (h(e, this), (e = $e(e))._a) {
                var t = e._isUTC ? l(e._a) : Te(e._a);
                this._isDSTShifted = this.isValid() && 0 < v(e._a, t.toArray())
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Ye() {
            return !this._isUTC
        }

        function Qe() {
            return this._isUTC
        }

        function Ge() {
            return this._isUTC && 0 === this._offset
        }

        function Xe(e, t) {
            var n, i, r, s = e,
                a = null;
            return Ee(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = Si.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: 0,
                d: g(a[li]) * n,
                h: g(a[ui]) * n,
                m: g(a[ci]) * n,
                s: g(a[di]) * n,
                ms: g(a[hi]) * n
            }) : (a = $i.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: Ze(a[2], n),
                M: Ze(a[3], n),
                d: Ze(a[4], n),
                h: Ze(a[5], n),
                m: Ze(a[6], n),
                s: Ze(a[7], n),
                w: Ze(a[8], n)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = Je(Te(s.from), Te(s.to)), (s = {}).ms = r.milliseconds, s.M = r.months), i = new Ie(s), Ee(e) && o(e, "_locale") && (i._locale = e._locale), i
        }

        function Ze(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Ke(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Je(e, t) {
            var n;
            return t = Ne(t, e), e.isBefore(t) ? n = Ke(e, t) : ((n = Ke(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function et(i, r) {
            return function(e, t) {
                var n;
                return null === t || isNaN(+t) || (te(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period)."), n = e, e = t, t = n), tt(this, Xe(e = "string" == typeof e ? +e : e, t), i), this
            }
        }

        function tt(e, t, n, i) {
            var r = t._milliseconds,
                s = t._days,
                a = t._months;
            i = null == i || i, r && e._d.setTime(+e._d + r * n), s && A(e, "Date", T(e, "Date") + s * n), a && G(e, T(e, "Month") + a * n), i && u.updateOffset(e, s || a)
        }

        function nt(e, t) {
            var n = e || Te(),
                i = Ne(n, this).startOf("day"),
                r = this.diff(i, "days", !0),
                s = r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
            return this.format(t && t[s] || this.localeData().calendar(s, this, Te(n)))
        }

        function it() {
            return new f(this)
        }

        function rt(e, t) {
            return "millisecond" === (t = $(void 0 !== t ? t : "millisecond")) ? +(e = p(e) ? e : Te(e)) < +this : (p(e) ? +e : +Te(e)) < +this.clone().startOf(t)
        }

        function st(e, t) {
            var n;
            return "millisecond" === (t = $(void 0 !== t ? t : "millisecond")) ? +this < +(e = p(e) ? e : Te(e)) : (n = p(e) ? +e : +Te(e), +this.clone().endOf(t) < n)
        }

        function at(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        }

        function ot(e, t) {
            var n;
            return "millisecond" === (t = $(t || "millisecond")) ? +this == +(e = p(e) ? e : Te(e)) : (n = +Te(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        }

        function lt(e, t, n) {
            var i, r, s = Ne(e, this),
                a = 6e4 * (s.utcOffset() - this.utcOffset());
            return "year" === (t = $(t)) || "month" === t || "quarter" === t ? (r = ut(this, s), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - s, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i), n ? r : m(r)
        }

        function ut(e, t) {
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                i = e.clone().add(n, "months");
            return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i)))
        }

        function ct() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function dt() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : O(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : O(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function ht(e) {
            var t = O(this, e || u.defaultFormat);
            return this.localeData().postformat(t)
        }

        function ft(e, t) {
            return this.isValid() ? Xe({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function pt(e) {
            return this.from(Te(), e)
        }

        function mt(e, t) {
            return this.isValid() ? Xe({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function gt(e) {
            return this.to(Te(), e)
        }

        function vt(e) {
            var t;
            return e === undefined ? this._locale._abbr : (null != (t = C(e)) && (this._locale = t), this)
        }

        function yt() {
            return this._locale
        }

        function bt(e) {
            switch (e = $(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function _t(e) {
            return (e = $(e)) === undefined || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        }

        function wt() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function kt() {
            return Math.floor(+this / 1e3)
        }

        function xt() {
            return this._offset ? new Date(+this) : this._d
        }

        function Ct() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function St() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function $t() {
            return d(this)
        }

        function Dt() {
            return a({}, c(this))
        }

        function jt() {
            return c(this).overflow
        }

        function Tt(e, t) {
            I(0, [e, e.length], 0, t)
        }

        function At(e, t, n) {
            return ue(Te([e, 11, 31 + t - n]), t, n).week
        }

        function Ft(e) {
            var t = ue(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function Mt(e) {
            var t = ue(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        }

        function It() {
            return At(this.year(), 1, 4)
        }

        function Et() {
            var e = this.localeData()._week;
            return At(this.year(), e.dow, e.doy)
        }

        function Pt(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function Ot(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }

        function Nt(e) {
            return this._weekdays[e.day()]
        }

        function Rt(e) {
            return this._weekdaysShort[e.day()]
        }

        function Ht(e) {
            return this._weekdaysMin[e.day()]
        }

        function Lt(e) {
            var t, n, i;
            for (this._weekdaysParse = this._weekdaysParse || [], t = 0; t < 7; t++)
                if (this._weekdaysParse[t] || (n = Te([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        }

        function zt(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Ot(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Bt(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function qt(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        }

        function Wt(e, t) {
            I(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Vt(e, t) {
            return t._meridiemParse
        }

        function Ut(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Yt(e, t, n) {
            return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Qt(e, t) {
            t[hi] = g(1e3 * ("0." + e))
        }

        function Gt() {
            return this._isUTC ? "UTC" : ""
        }

        function Xt() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Zt(e) {
            return Te(1e3 * e)
        }

        function Kt() {
            return Te.apply(null, arguments).parseZone()
        }

        function Jt(e, t, n) {
            var i = this._calendar[e];
            return "function" == typeof i ? i.call(t, n) : i
        }

        function en(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function tn() {
            return this._invalidDate
        }

        function nn(e) {
            return this._ordinal.replace("%d", e)
        }

        function rn(e) {
            return e
        }

        function sn(e, t, n, i) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(e, t, n, i) : r.replace(/%d/i, e)
        }

        function an(e, t) {
            var n = this._relativeTime[0 < e ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        }

        function on(e) {
            var t, n;
            for (n in e) "function" == typeof(t = e[n]) ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function ln(e, t, n, i) {
            var r = C(),
                s = l().set(i, t);
            return r[n](s, e)
        }

        function un(e, t, n, i, r) {
            if ("number" == typeof e && (t = e, e = undefined), e = e || "", null != t) return ln(e, t, n, r);
            var s, a = [];
            for (s = 0; s < i; s++) a[s] = ln(e, s, n, r);
            return a
        }

        function cn(e, t) {
            return un(e, t, "months", 12, "month")
        }

        function dn(e, t) {
            return un(e, t, "monthsShort", 12, "month")
        }

        function hn(e, t) {
            return un(e, t, "weekdays", 7, "day")
        }

        function fn(e, t) {
            return un(e, t, "weekdaysShort", 7, "day")
        }

        function pn(e, t) {
            return un(e, t, "weekdaysMin", 7, "day")
        }

        function mn() {
            var e = this._data;
            return this._milliseconds = Gi(this._milliseconds), this._days = Gi(this._days), this._months = Gi(this._months), e.milliseconds = Gi(e.milliseconds), e.seconds = Gi(e.seconds), e.minutes = Gi(e.minutes), e.hours = Gi(e.hours), e.months = Gi(e.months), e.years = Gi(e.years), this
        }

        function gn(e, t, n, i) {
            var r = Xe(t, n);
            return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
        }

        function vn(e, t) {
            return gn(this, e, t, 1)
        }

        function yn(e, t) {
            return gn(this, e, t, -1)
        }

        function bn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function _n() {
            var e, t, n, i, r, s = this._milliseconds,
                a = this._days,
                o = this._months,
                l = this._data;
            return 0 <= s && 0 <= a && 0 <= o || s <= 0 && a <= 0 && o <= 0 || (s += 864e5 * bn(kn(o) + a), o = a = 0), l.milliseconds = s % 1e3, e = m(s / 1e3), l.seconds = e % 60, t = m(e / 60), l.minutes = t % 60, n = m(t / 60), l.hours = n % 24, o += r = m(wn(a += m(n / 24))), a -= bn(kn(r)), i = m(o / 12), o %= 12, l.days = a, l.months = o, l.years = i, this
        }

        function wn(e) {
            return 4800 * e / 146097
        }

        function kn(e) {
            return 146097 * e / 4800
        }

        function xn(e) {
            var t, n, i = this._milliseconds;
            if ("month" === (e = $(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + wn(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(kn(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function Cn() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
        }

        function Sn(e) {
            return function() {
                return this.as(e)
            }
        }

        function $n(e) {
            return this[(e = $(e)) + "s"]()
        }

        function Dn(e) {
            return function() {
                return this._data[e]
            }
        }

        function jn() {
            return m(this.days() / 7)
        }

        function Tn(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }

        function An(e, t, n) {
            var i = Xe(e).abs(),
                r = dr(i.as("s")),
                s = dr(i.as("m")),
                a = dr(i.as("h")),
                o = dr(i.as("d")),
                l = dr(i.as("M")),
                u = dr(i.as("y")),
                c = r < hr.s && ["s", r] || 1 === s && ["m"] || s < hr.m && ["mm", s] || 1 === a && ["h"] || a < hr.h && ["hh", a] || 1 === o && ["d"] || o < hr.d && ["dd", o] || 1 === l && ["M"] || l < hr.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
            return c[2] = t, c[3] = 0 < +e, c[4] = n, Tn.apply(null, c)
        }

        function Fn(e, t) {
            return hr[e] !== undefined && (t === undefined ? hr[e] : (hr[e] = t, !0))
        }

        function Mn(e) {
            var t = this.localeData(),
                n = An(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function In() {
            var e, t, n = fr(this._milliseconds) / 1e3,
                i = fr(this._days),
                r = fr(this._months);
            t = m((e = m(n / 60)) / 60), n %= 60, e %= 60;
            var s = m(r / 12),
                a = r %= 12,
                o = i,
                l = t,
                u = e,
                c = n,
                d = this.asSeconds();
            return d ? (d < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (o ? o + "D" : "") + (l || u || c ? "T" : "") + (l ? l + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
        }
        var En, Pn, On = u.momentProperties = [],
            Nn = !1,
            Rn = {},
            Hn = {},
            Ln = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            zn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Bn = {},
            qn = {},
            Wn = /\d/,
            Vn = /\d\d/,
            Un = /\d{3}/,
            Yn = /\d{4}/,
            Qn = /[+-]?\d{6}/,
            Gn = /\d\d?/,
            Xn = /\d{1,3}/,
            Zn = /\d{1,4}/,
            Kn = /[+-]?\d{1,6}/,
            Jn = /\d+/,
            ei = /[+-]?\d+/,
            ti = /Z|[+-]\d\d:?\d\d/gi,
            ni = /[+-]?\d+(\.\d{1,3})?/,
            ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ri = {},
            si = {},
            ai = 0,
            oi = 1,
            li = 2,
            ui = 3,
            ci = 4,
            di = 5,
            hi = 6;
        I("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), I("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), I("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), S("month", "M"), H("M", Gn), H("MM", Gn, Vn), H("MMM", ii), H("MMMM", ii), B(["M", "MM"], function(e, t) {
            t[oi] = g(e) - 1
        }), B(["MMM", "MMMM"], function(e, t, n, i) {
            var r = n._locale.monthsParse(e, i, n._strict);
            null != r ? t[oi] = r : c(n).invalidMonth = e
        });
        var fi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            pi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            mi = {};
        u.suppressDeprecationWarnings = !1;
        var gi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            vi = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            yi = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            bi = /^\/?Date\((\-?\d+)/i;
        u.createFromInputFallback = ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), I(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), S("year", "y"), H("Y", ei), H("YY", Gn, Vn), H("YYYY", Zn, Yn), H("YYYYY", Kn, Qn), H("YYYYYY", Kn, Qn), B(["YYYYY", "YYYYYY"], ai), B("YYYY", function(e, t) {
            t[ai] = 2 === e.length ? u.parseTwoDigitYear(e) : g(e)
        }), B("YY", function(e, t) {
            t[ai] = u.parseTwoDigitYear(e)
        });
        var _i = j("FullYear", !(u.parseTwoDigitYear = function(e) {
            return g(e) + (68 < g(e) ? 1900 : 2e3)
        }));
        I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), S("week", "w"), S("isoWeek", "W"), H("w", Gn), H("ww", Gn, Vn), H("W", Gn), H("WW", Gn, Vn), q(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = g(e)
        });
        var wi = {
            dow: 0,
            doy: 6
        };
        I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), S("dayOfYear", "DDD"), H("DDD", Xn), H("DDDD", Un), B(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = g(e)
        }), u.ISO_8601 = function() {};
        var ki = ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Te.apply(null, arguments);
                return e < this ? this : e
            }),
            xi = ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Te.apply(null, arguments);
                return this < e ? this : e
            });
        Pe("Z", ":"), Pe("ZZ", ""), H("Z", ti), H("ZZ", ti), B(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Oe(e)
        });
        var Ci = /([\+\-]|\d\d)/gi;
        u.updateOffset = function() {};
        var Si = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            $i = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Xe.fn = Ie.prototype;
        var Di = et(1, "add"),
            ji = et(-1, "subtract");
        u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Ti = ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return e === undefined ? this.localeData() : this.locale(e)
        });
        I(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), I(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Tt("gggg", "weekYear"), Tt("ggggg", "weekYear"), Tt("GGGG", "isoWeekYear"), Tt("GGGGG", "isoWeekYear"), S("weekYear", "gg"), S("isoWeekYear", "GG"), H("G", ei), H("g", ei), H("GG", Gn, Vn), H("gg", Gn, Vn), H("GGGG", Zn, Yn), H("gggg", Zn, Yn), H("GGGGG", Kn, Qn), H("ggggg", Kn, Qn), q(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = g(e)
        }), q(["gg", "GG"], function(e, t, n, i) {
            t[i] = u.parseTwoDigitYear(e)
        }), I("Q", 0, 0, "quarter"), S("quarter", "Q"), H("Q", Wn), B("Q", function(e, t) {
            t[oi] = 3 * (g(e) - 1)
        }), I("D", ["DD", 2], "Do", "date"), S("date", "D"), H("D", Gn), H("DD", Gn, Vn), H("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), B(["D", "DD"], li), B("Do", function(e, t) {
            t[li] = g(e.match(Gn)[0], 10)
        });
        var Ai = j("Date", !0);
        I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), I("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), I("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), S("day", "d"), S("weekday", "e"), S("isoWeekday", "E"), H("d", Gn), H("e", Gn), H("E", Gn), H("dd", ii), H("ddd", ii), H("dddd", ii), q(["dd", "ddd", "dddd"], function(e, t, n) {
            var i = n._locale.weekdaysParse(e);
            null != i ? t.d = i : c(n).invalidWeekday = e
        }), q(["d", "e", "E"], function(e, t, n, i) {
            t[i] = g(e)
        });
        var Fi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Mi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Ii = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, function() {
            return this.hours() % 12 || 12
        }), Wt("a", !0), Wt("A", !1), S("hour", "h"), H("a", Vt), H("A", Vt), H("H", Gn), H("h", Gn), H("HH", Gn, Vn), H("hh", Gn, Vn), B(["H", "HH"], ui), B(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), B(["h", "hh"], function(e, t, n) {
            t[ui] = g(e), c(n).bigHour = !0
        });
        var Ei = /[ap]\.?m?\.?/i,
            Pi = j("Hours", !0);
        I("m", ["mm", 2], 0, "minute"), S("minute", "m"), H("m", Gn), H("mm", Gn, Vn), B(["m", "mm"], ci);
        var Oi = j("Minutes", !1);
        I("s", ["ss", 2], 0, "second"), S("second", "s"), H("s", Gn), H("ss", Gn, Vn), B(["s", "ss"], di);
        var Ni, Ri = j("Seconds", !1);
        for (I("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), I(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), I(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), I(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), I(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), I(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), I(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), S("millisecond", "ms"), H("S", Xn, Wn), H("SS", Xn, Vn), H("SSS", Xn, Un), Ni = "SSSS"; Ni.length <= 9; Ni += "S") H(Ni, Jn);
        for (Ni = "S"; Ni.length <= 9; Ni += "S") B(Ni, Qt);
        var Hi = j("Milliseconds", !1);
        I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
        var Li = f.prototype;
        Li.add = Di, Li.calendar = nt, Li.clone = it, Li.diff = lt, Li.endOf = _t, Li.format = ht, Li.from = ft, Li.fromNow = pt, Li.to = mt, Li.toNow = gt, Li.get = F, Li.invalidAt = jt, Li.isAfter = rt, Li.isBefore = st, Li.isBetween = at, Li.isSame = ot, Li.isValid = $t, Li.lang = Ti, Li.locale = vt, Li.localeData = yt, Li.max = xi, Li.min = ki, Li.parsingFlags = Dt, Li.set = F, Li.startOf = bt, Li.subtract = ji, Li.toArray = Ct, Li.toObject = St, Li.toDate = xt, Li.toISOString = dt, Li.toJSON = dt, Li.toString = ct, Li.unix = kt, Li.valueOf = wt, Li.year = _i, Li.isLeapYear = le, Li.weekYear = Ft, Li.isoWeekYear = Mt, Li.quarter = Li.quarters = Pt, Li.month = X, Li.daysInMonth = Z, Li.week = Li.weeks = fe, Li.isoWeek = Li.isoWeeks = pe, Li.weeksInYear = Et, Li.isoWeeksInYear = It, Li.date = Ai, Li.day = Li.days = zt, Li.weekday = Bt, Li.isoWeekday = qt, Li.dayOfYear = ge, Li.hour = Li.hours = Pi, Li.minute = Li.minutes = Oi, Li.second = Li.seconds = Ri, Li.millisecond = Li.milliseconds = Hi, Li.utcOffset = He, Li.utc = ze, Li.local = Be, Li.parseZone = qe, Li.hasAlignedHourOffset = We, Li.isDST = Ve, Li.isDSTShifted = Ue, Li.isLocal = Ye, Li.isUtcOffset = Qe, Li.isUtc = Ge, Li.isUTC = Ge, Li.zoneAbbr = Gt, Li.zoneName = Xt, Li.dates = ee("dates accessor is deprecated. Use date instead.", Ai), Li.months = ee("months accessor is deprecated. Use month instead", X), Li.years = ee("years accessor is deprecated. Use year instead", _i), Li.zone = ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Le);
        var zi = Li,
            Bi = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            qi = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Wi = "Invalid date",
            Vi = "%d",
            Ui = /\d{1,2}/,
            Yi = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Qi = y.prototype;
        Qi._calendar = Bi, Qi.calendar = Jt, Qi._longDateFormat = qi, Qi.longDateFormat = en, Qi._invalidDate = Wi, Qi.invalidDate = tn, Qi._ordinal = Vi, Qi.ordinal = nn, Qi._ordinalParse = Ui, Qi.preparse = rn, Qi.postformat = rn, Qi._relativeTime = Yi, Qi.relativeTime = sn, Qi.pastFuture = an, Qi.set = on, Qi.months = U, Qi._months = fi, Qi.monthsShort = Y, Qi._monthsShort = pi, Qi.monthsParse = Q, Qi.week = ce, Qi._week = wi, Qi.firstDayOfYear = he, Qi.firstDayOfWeek = de, Qi.weekdays = Nt, Qi._weekdays = Fi, Qi.weekdaysMin = Ht, Qi._weekdaysMin = Ii, Qi.weekdaysShort = Rt, Qi._weekdaysShort = Mi, Qi.weekdaysParse = Lt, Qi.isPM = Ut, Qi._meridiemParse = Ei, Qi.meridiem = Yt, k("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), u.lang = ee("moment.lang is deprecated. Use moment.locale instead.", k), u.langData = ee("moment.langData is deprecated. Use moment.localeData instead.", C);
        var Gi = Math.abs,
            Xi = Sn("ms"),
            Zi = Sn("s"),
            Ki = Sn("m"),
            Ji = Sn("h"),
            er = Sn("d"),
            tr = Sn("w"),
            nr = Sn("M"),
            ir = Sn("y"),
            rr = Dn("milliseconds"),
            sr = Dn("seconds"),
            ar = Dn("minutes"),
            or = Dn("hours"),
            lr = Dn("days"),
            ur = Dn("months"),
            cr = Dn("years"),
            dr = Math.round,
            hr = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            fr = Math.abs,
            pr = Ie.prototype;
        return pr.abs = mn, pr.add = vn, pr.subtract = yn, pr.as = xn, pr.asMilliseconds = Xi, pr.asSeconds = Zi, pr.asMinutes = Ki, pr.asHours = Ji, pr.asDays = er, pr.asWeeks = tr, pr.asMonths = nr, pr.asYears = ir, pr.valueOf = Cn, pr._bubble = _n, pr.get = $n, pr.milliseconds = rr, pr.seconds = sr, pr.minutes = ar, pr.hours = or, pr.days = lr, pr.weeks = jn, pr.months = ur, pr.years = cr, pr.humanize = Mn, pr.toISOString = In, pr.toString = In, pr.toJSON = In, pr.locale = vt, pr.localeData = yt, pr.toIsoString = ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", In), pr.lang = Ti, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), H("x", ei), H("X", ni), B("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), B("x", function(e, t, n) {
            n._d = new Date(g(e))
        }), u.version = "2.10.6", e(Te), u.fn = zi, u.min = Fe, u.max = Me, u.utc = l, u.unix = Zt, u.months = cn, u.isDate = s, u.locale = k, u.invalid = i, u.duration = Xe, u.isMoment = p, u.weekdays = hn, u.parseZone = Kt, u.localeData = C, u.isDuration = Ee, u.monthsShort = dn, u.weekdaysMin = pn, u.defineLocale = x, u.weekdaysShort = fn, u.normalizeUnits = $, u.relativeTimeThreshold = Fn, u
    }), Address = {
        putVerifiedAddressInForm: function() {
            $(".js-bordered-option.selected.js-verified_address_form").length && (newAddress = $(".js-verified_address_form span"), Address.updateFormWithAddress(newAddress))
        },
        updateFormWithAddress: function(e) {
            e.each(function() {
                var e = $(this).text(),
                    t = $(this).data("js");
                $(".js-address-verification-fields .js-" + t).val(e)
            })
        },
        updatePostalCodeValidation: function(e) {
            $("#shipping_address_postal_code").attr("pattern", countryPostalRegex[e]), $("#shipping_address_postal_code").attr("required", "required"), $("#shipping_address_postal_code").attr("title", "You must enter a valid zip code")
        },
        updateRegions: function(e, t) {
            var i = $(".js-verified_region[data-address-fields-key=" + t + "]");
            i.empty(), $.each(e, function(e, t) {
                var n = new Option(t[0], t[1]);
                i.append(n)
            }), Address.updatePostalCodeValidation($(".js-verified_country_code_alpha2")[0].value)
        },
        showSubscriptionConfirmationModal: function() {
            $(".js-address-verify-modal").modal("hide"), $(".js-subscription-address-confirm-modal").modal()
        },
        submitAddressForm: function() {
            $(".js-use-address").button("loading"), $(".js-new-address-verification").submit()
        },
        verifyAddress: function() {
            var e = $(".js-address-verify").closest("form");
            if (e.valid()) {
                if ($(".js-address-verify").button("loading"), $(".js-verified_country_code_alpha2").length && "US" !== $(".js-verified_country_code_alpha2")[0].value || 1 == $("#use_shipping_address_id").val()) return $("body.my_addresses-edit").length && !0 === $(".js-subscription-address-confirm-modal").data("show") ? void Address.showSubscriptionConfirmationModal() : ($(".js-new-address-verification").submit(), !0);
                Address.clearModalFields();
                var t = $(".js-address-verification-fields :input").serialize();
                $.ajax({
                    url: "/address_verification/verify",
                    data: t,
                    type: "GET",
                    error: function() {
                        $(".js-address-verify").button("reset"), alert("Whoops, there was a problem. Please review your address.")
                    },
                    success: function(e) {
                        $(".js-address-verify").button("reset"), Address.showVerificationModal(e)
                    }
                })
            } else e.find(":submit").button("reset").removeAttr("disabled")
        },
        clearModalFields: function() {
            $(".js-use-address").button("reset").addClass("hidden"), $(".js-address-modal-fields span").empty(), $(".js-bordered-option").removeClass("selected")
        },
        showVerificationModal: function(e) {
            if (e.force_submit) return $(".js-new-address-verification").submit(), $(".js-address-verify-modal").modal("hide"), !0;
            $.each(e.original_address, function(e, t) {
                $("[data-js='" + e + "']").text(t), $("input[data-js='" + e + "']").val(t)
            }), e.error ? ($(".js-verified_address_form").hide(), $(".js-no_verified_address_error").text(e.error), $(".js-address-error").show()) : e.verified_address && $.each(e.verified_address, function(e, t) {
                $(".js-address-error").hide(), $("[data-js='" + e + "']").text(t), $("input[data-js='" + e + "']").val(t), $(".js-verified_address_form").show(), $(".js-bordered-option").removeClass("selected"), $(".js-verified_address_form.js-bordered-option").addClass("selected"), $(".js-use-address").removeClass("hidden")
            }), Address.positionAndShowModal()
        },
        positionAndShowModal: function() {
            var e = $(document).scrollTop(),
                t = $(window).height(),
                n = $(".js-address-verify-modal");
            n.css("top", e + t / 2 - n.outerHeight() / 2), n.modal()
        }
    }, $(function() {
        $("#braintree-payment-form").length || $(document).on("click", ".js-address-verify", function(e) {
            e.preventDefault(), Address.verifyAddress()
        }), $(document).on("click", ".js-bordered-option", function() {
            $(".js-bordered-option").removeClass("selected"), $(this).addClass("selected"), $(".js-use-address").removeClass("hidden")
        }), $(document).on("click", ".js-circle-checkmark", function(e) {
            e.preventDefault()
        }), $(document).on("click", ".js-edit-address", function(e) {
            Address.putVerifiedAddressInForm(), e.preventDefault()
        }), $(document).on("click", ".js-use-address", function(e) {
            e.preventDefault(), Address.putVerifiedAddressInForm(), $("body.my_addresses-edit").length && !0 === $(".js-subscription-address-confirm-modal").data("show") ? Address.showSubscriptionConfirmationModal() : Address.submitAddressForm()
        }), $(".address-region-select, #address_region").length && (countryPostalRegex = {
            AU: "^\\d{4}$",
            CA: "^[ABCEGHJKLMNPRSTVXY]{1}\\d{1}[A-Z]{1}[ -]?\\d{1}[A-Z]{1}\\d{1}$",
            DE: "^\\d{5}$",
            FR: "^\\d{5}$",
            IT: "^\\d{5}$",
            JP: "^(\\d{7}s|\\d{3}-\\d{4})$",
            NL: "^(NL-)?\\d{4}s{0,1}[A-Za-z]{2}$",
            NZ: "^\\d{4}$",
            CH: "^(\\d{4}|\\d{6})$",
            GB: "^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$",
            US: "^\b\\d{5}\b(?:[- ]{1}\\d{4})?$"
        }, $(document).on("change", ".js-verified_country_code_alpha2", function(t) {
            $.ajax({
                url: "/region_selections",
                type: "GET",
                data: {
                    country: t.target.value
                },
                success: function(e) {
                    Address.updateRegions(e, t.target.dataset.addressFieldsKey)
                },
                error: function() {
                    location.reload()
                }
            })
        }))
    }), $(document).ready(function() {
        $("body.orders.admin").length && $(".js-order-note").on("click", function(e) {
            e.preventDefault(), $(".js-order-note-form").toggleClass("dn")
        })
    });
var AnalyticsProductViewed = {
    track: function track(e) {
        this.doOnce(e, this.performTrack)
    },
    doOnce: function trackOnce(e, t) {
        this.lastVariantId !== e && (t(this.variantData(e)), this.lastVariantId = e)
    },
    variantData: function variantData(e) {
        return this.trackingData()[e]
    },
    trackingData: function trackingData() {
        return JSON.parse($("body").find("[data-tracking-product-viewed]").attr("data-tracking-product-viewed"))
    },
    performTrack: function performTrack(e) {
        window.analytics && window.analytics.track("Product Viewed", {
            source: "web",
            orderId: e.order_id,
            productId: e.product_id,
            name: e.name,
            variantId: e.variant_id,
            variant: e.variant,
            price: e.price,
            discount: e.discount,
            currency: e.currency,
            url: e.url
        })
    }
};
(function() {
    "use strict";
    angular.module("admin.accounts", ["ngResource", "blocks.exception"])
})(),
function() {
    "use strict";

    function e(t, e, n) {
        function i() {
            c.getData()
        }

        function r(e) {
            c.accountType = e, c.getData()
        }

        function s() {
            e.getOrders(c.accountType).then(function(e) {
                c.data = e
            })["catch"](a)
        }

        function a() {
            n.catcher("AdminAccounts", "OrdersController failed to fetch account data")
        }

        function o(e) {
            switch (e) {
                case "No Order":
                    return "yellow";
                case "On Time":
                    return "green";
                case "Late":
                    return "red"
            }
        }

        function l(e) {
            if ("N" === e) return "red"
        }

        function u(e) {
            return t.trustAsHtml(e)
        }
        var c = this;
        c.accountType = "Retail", c.sortType = "description", c.sortReverse = !1, c.changeAccountType = r, c.getData = s, c.statusClass = o, c.retailBeanClass = l, c.htmlSafe = u, i()
    }
    angular.module("admin.accounts").controller("OrdersController", e), e.$inject = ["$sce", "dataFactory", "exceptionFactory"]
}(),
function() {
    "use strict";

    function e(i, r, s) {
        function e(e) {
            function t(e) {
                return e
            }

            function n(e) {
                return r.error("GET expected_orders error: " + e.statusText), s.reject(e)
            }
            return i("/api/expected_orders.json").get({
                account_type: e
            }).$promise.then(t)["catch"](n)
        }
        return {
            getOrders: e
        }
    }
    angular.module("admin.accounts").factory("dataFactory", e), e.$inject = ["$resource", "$log", "$q"]
}(),
function() {
    "use strict";

    function e(e) {
        e.decorator("$exceptionHandler", t)
    }

    function t(n) {
        return function(e, t) {
            n(e, t), "undefined" != typeof Honeybadger && Honeybadger.notify(e, {
                message: e.message
            })
        }
    }
    angular.module("blocks.exception", []).config(e), e.$inject = ["$provide"], t.$inject = ["$delegate"]
}(),
function() {
    "use strict";

    function e() {
        function i(e, t) {
            var n = new Error(t);
            return n.name = e, Error.captureStackTrace && Error.captureStackTrace(n, i), n
        }
        var e = {
            customError: i
        };
        return i.prototype = Object.create(Error.prototype, {
            constructor: {
                value: Error,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e
    }
    angular.module("blocks.exception").factory("customErrorFactory", e)
}(),
function() {
    "use strict";

    function e(i, r) {
        function e(e, t) {
            var n = r.customError(e, t);
            i(n)
        }
        return {
            catcher: e
        }
    }
    angular.module("blocks.exception").factory("exceptionFactory", e), e.$inject = ["$exceptionHandler", "customErrorFactory"]
}(), ApplePaySupport = {
    enabledBrowser: function() {
        return "https:" === location.protocol && window.ApplePaySession && ApplePaySession.canMakePayments()
    }
}, $(document).ready(function() {
    $(".js-apple-pay-promo").length && ApplePaySupport.enabledBrowser() && $(".js-apple-pay-promo").show()
}), $(document).ready(function() {
    if ($("body.assortment_scheduling-new").length || $("body.assortment_scheduling-edit").length) {
        var n = $(".js-roast-date-options").data("valid-dates");
        $(".js-roast-date-datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: n[0],
            maxDate: n[n.length - 1],
            beforeShowDay: function(e) {
                var t = $.datepicker.formatDate("yy-mm-dd", e);
                return [-1 != $.inArray(t, n)]
            }
        }), $(".js-roast-date-datepicker-cal").on("click", function() {
            $(this).siblings(".js-roast-date-datepicker").datepicker("show")
        })
    }
}), $(document).ready(function() {
    $("[data-load]").each(function() {
        $(this).load($(this).attr("data-load"))
    })
}), $(".promo-code-errors").modal({
    backdrop: "static",
    keyboard: !1
}), $(document).ready(function() {
    $(".at_home_gift_subscriptions").length && (AtHomeGift.setup(), $(".js-gift-form").validate())
}), AtHomeGift = {
    bindDeliverySelection: function() {
        var n = this;
        $(".js-delivery-selection").bind("click", function(e) {
            e.preventDefault();
            var t = $(this).data("delivery-method");
            n.displaySelected(".js-delivery-selection", this), $("#gift_delivery_method").val(t), $(".js-proceed-to-checkout-button").show(), $(".js-note-total").show(), $(".js-checkout-option").hide(), $("." + $(this).data("toggle")).show(), AtHomeGift.calculateRecipientCount(t)
        })
    },
    bindSignIn: function() {
        $(".js-gift-form").bind("submit", function(e) {
            !user_logged_in && $("form#new_gift").valid() && (e.preventDefault(), $(".js-address-verify-modal").modal("hide"), $(".signup.modal #js-sign-up-return-url").attr("value", $(this).attr("href")), $(".signup.modal").modal())
        })
    },
    bindToggleSignIn: function() {
        $(".sign_in_toggle").bind("click", function(e) {
            e.preventDefault(), $(".signup .signup-field").toggle(), $(".signup .signin-field").toggle()
        })
    },
    bindSignInXhr: function() {
        $("#new_sign_up").on("ajax:start", function() {
            $("#new_sign_up .errors").html("")
        }).on("ajax:success", function() {
            $.rails.enableFormElement($(".js-add-to-cart")), user_logged_in = !0, $(".js-add-to-cart").trigger("click")
        }).on("ajax:error", function(e, t) {
            $.rails.enableFormElement($(".js-add-to-cart")), $("#new_sign_up .errors .error").remove(), errorMessage = t.responseJSON.message || "There was a problem with your login. Try again.", $("#new_sign_up .errors").prepend("<div class='error'>" + errorMessage + "</div>")
        })
    },
    bindReadMore: function() {
        $(".js-read-more-toggle").on("click", function() {
            $(".js-read-more-text-" + $(this).data("id")).show(), $(this).hide()
        })
    },
    calculateRecipientCount: function(e) {
        var t = 1;
        "Print" === e ? t = $(".js-print-recipient-count").val() ? $(".js-print-recipient-count").val() : 0 : "Email" === e && (t = AtHomeGift.countValidEmails($(".js-email-recipient-count").val().split(","))), AtHomeGift.setRecipientCount(t)
    },
    bindRecipientCount: function() {
        $(".js-print-recipient-count").on("change keyup paste", function() {
            AtHomeGift.calculateRecipientCount("Print")
        }), $(".js-email-recipient-count").on("change keyup paste", function() {
            AtHomeGift.calculateRecipientCount("Email")
        })
    },
    setRecipientCount: function(e) {
        e > $(".js-gift-subscription-checkout-limit").data("limit") && (e = 0), $(".js-recipient-count").html(e), AtHomeGift.displayTotalPrice(e)
    },
    displayTotalPrice: function(e) {
        $(".js-total-price").html("$" + Number(parseFloat($(".js-price-per-subscription").data("price")) * e).toLocaleString())
    },
    countValidEmails: function(e) {
        var t = 0;
        return e.forEach(function(e) {
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($.trim(e)) && t++
        }), t
    },
    displaySelected: function(e, t) {
        $(e).addClass("not-selected"), $(e).removeClass("selected"), $(t).removeClass("not-selected"), $(t).addClass("selected")
    },
    setup: function() {
        this.bindDeliverySelection(), this.bindSignIn(), this.bindToggleSignIn(), this.bindSignInXhr(), this.bindReadMore(), this.bindRecipientCount(), this.setRecipientCount(0)
    }
}, $(document).ready(function() {
    if (0 < $(".at_home_gift_subscription_add_ons").length) {
        var t = new AtHomeGiftAddOns;
        t.initialize(new AtHomeGiftSelectedAddOn, new AtHomeGiftAddOnsTotalPrice), $.map($('input[name="add_on_variants[]"]:checked'), function(e) {
            e = $(e);
            t.setAddOn(e.val(), e.attr("id"), !0), t.updateView()
        }), $(".js-gift-subscription-add-ons-show-learn-more").on("click", function(e) {
            e.preventDefault(), t.openModal($(this).data("variantId"))
        }), $(".js-modal-select-add-on-variant").on("click", function(e) {
            e.preventDefault(), t.simulateClick($(this), !0)
        }), $(".js-remove-add-on-variant").on("click", function(e) {
            e.preventDefault(), t.simulateClick($(this), !1)
        }), $(".js-skip-add-ons").on("click", function() {
            t.clearSelectedCheckboxes()
        }), $('input[name="add_on_variants[]"]').on("change", function() {
            var e = $(this);
            t.setAddOn(e.val(), e.attr("id"), e.prop("checked")), t.updateView()
        })
    }
});
var selectedCountry = $(".js-country-select select option:selected");
$(".at_home_billing_details-show").length && $(".js-country-select select").bind("change", function() {
    if ($("option:selected", this).val() !== selectedCountry.val()) {
        var e = $(".js-package-unavailable a.update-subscription").attr("href");
        (e = e.replace(/[\?|&]locale=../, "")).match(/\?/) ? e += "&locale=" + $("option:selected", this).val() : e += "?locale=" + $("option:selected", this).val(), $(".js-package-unavailable a.update-subscription").attr("href", e), $(".js-package-unavailable").modal({
            backdrop: "static",
            keyboard: !1
        }), selectedCountry.attr("selected", !0), $(".js-address-verify").prop("disabled", !0)
    } else $(".js-address-verify").prop("disabled", !1)
}), $(document).ready(function() {
    $(".attachinary-input").attachinary(), $(".resize-client-size").length && $(".resize-client-size").each(function(e, t) {
        var n = parseInt($(t).attr("maxwidth"));
        $(t).fileupload("option", {
            disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator && navigator.userAgent),
            imageMaxWidth: n
        }), $(t).attr("accept", "image/*")
    })
}), $(document).ready(function() {
    $(".js-attribution-survey-response").length && $(document).on("change", "#sign_up_attribution_survey_response_response", function() {
        $(".js-attribution-survey-response-feedback").toggle("other" === $(this).val())
    })
}), app = angular.module("cafeSearch", ["ngResource", "ngSanitize"]), app.config(["$locationProvider", function(e) {
    e.html5Mode({
        enabled: !0,
        requireBase: !1,
        rewriteLinks: !1
    })
}]), angular.module("cafeSearch").component("searchLoadingButton", {
    bindings: {
        loading: "<"
    },
    controller: ["$element", function(e) {
        var t = this,
            n = $(e.children()[0]);
        t.$onChanges = function(e) {
            e.loading && (!0 === e.loading.currentValue ? n.button("loading") : n.button("reset"))
        }
    }]
}), angular.module("cafeSearch").component("searchScroll", {
    bindings: {
        fixedElement: "@",
        fixedElementContainer: "@",
        cafes: "@"
    },
    controller: function() {
        var s = this;
        this.$onInit = function() {
            var t = $(s.fixedElementContainer),
                n = "pos-fix top-0",
                i = $(s.fixedElement),
                r = i.offset().top - 139;
            angular.element(window).bind("scroll", function() {
                if (s.cafes) {
                    var e = function() {
                        return $(this).scrollTop() + i.height() < $("footer.site-footer").offset().top
                    };
                    this.innerWidth < 767 ? i.removeClass(n) : i.toggleClass(n, $(this).scrollTop() > r && t.height() > i.height() && e())
                }
            })
        }
    }
}), angular.module("cafeSearch").controller("CafeController", ["$scope", "$location", "SearchService", "SearchVarService", function(n, i, t, r) {
    var e = "all";
    n.loading = {}, n.results = {}, n.settings = {
        coords: null,
        geolocation: navigator.geolocation,
        showCafes: !0,
        showCafesComingSoon: !0,
        location: "" !== i.hash() ? i.hash() : e,
        query: i.search().q || "",
        showMap: !1
    };
    var s = function(e) {
            t.cafes().get(e, function(e) {
                e && (n.results.cafes = e.cafes, n.results.noCafeResults = e.no_results)
            })
        },
        a = function() {
            n.results.geolocationError = null, n.results.cafes = {}, n.results.noResults = null
        },
        o = function() {
            var e = r.queryVars(n.settings);
            a(), s(e), n.loading.querySet = !1, n.loading.geolocationSet = !1, window.mapManager && !mapManager.loaded && ("" !== n.settings.query || "all" !== n.settings.location || n.settings.coords) && mapManager.loadScript()
        },
        l = function() {
            if (n.settings.locationOptions) return $.grep(n.settings.locationOptions, function(e) {
                return e.name === n.settings.location
            })[0]
        },
        u = function() {
            n.settings.showMap = !1
        },
        c = function(e) {
            mapManager.init && (n.settings.showMap = !0, mapManager.placeHitMarkers(e, !1))
        },
        d = function() {
            t.setup().get({}, function(e) {
                n.settings.locationOptions = e.location_options, n.settings.mobileLocation = l()
            }), n.settings.query || o(), window.mapManager = new SearchMapWrapper
        };
    n.updateRegionResults = function(e) {
        i.hash(e || n.settings.mobileLocation.name)
    }, n.$on("$locationChangeStart", function() {
        i.hash() && "" !== i.hash() ? (n.settings.location = i.hash(), n.settings.mobileLocation = l(), n.settings.query = "", n.settings.coords = "", i.search({}), o()) : n.settings.location = e
    }), n.$watch("settings.coords", function(e, t) {
        e && (JSON.stringify(e) === JSON.stringify(t) ? (n.loading.querySet = !1, n.loading.geolocationSet = !1) : (n.settings.query.length && i.search({
            q: n.settings.query
        }), i.hash(""), o()))
    }), n.$watch("settings.showCafesComingSoon", function() {
        o()
    }), n.$watch("settings.showCafes", function() {
        o()
    }), n.$watch("results.cafes", function(e) {
        if (e && !$.isEmptyObject(e)) {
            var t = [],
                n = function(e) {
                    t.push(e)
                };
            for (region in e) e.hasOwnProperty(region) && e[region].map(n);
            0 === t.length ? u() : c(t)
        }
    }), d()
}]), angular.module("cafeSearch").controller("CoordinatesController", ["$scope", "$location", "SearchService", function(i, r, e) {
    i.fetchCoordinates = function() {
        i.$parent.settings.query && (i.$parent.loading.querySet = !0, e.coordinates().get({
            location: i.$parent.settings.query
        }, function(e) {
            i.$parent.settings.coords = {
                latitude: e.coords.latitude,
                longitude: e.coords.longitude
            }
        }))
    }, i.getGeolocation = function(e) {
        if (e.preventDefault(), i.$parent.settings.geolocation) {
            i.$parent.loading.geolocationSet = !0, i.$parent.settings.query = "", r.search({});
            var t = function(e) {
                    i.$apply(function() {
                        i.$parent.settings.coords = {
                            latitude: e.coords.latitude,
                            longitude: e.coords.longitude
                        }
                    })
                },
                n = function() {
                    i.$apply(function() {
                        i.$parent.settings.coords = null, i.$parent.results.geolocationError = "We couldn't find any locations for you.", i.$parent.loading.geolocationSet = !1
                    })
                };
            i.$parent.settings.geolocation.getCurrentPosition(t, n)
        }
    }, i.$parent.settings.query && i.fetchCoordinates()
}]), angular.module("cafeSearch").factory("SearchService", ["$resource", function(e) {
    var t = {
        coordinates: function() {
            return e("/find_cafes.json")
        },
        cafes: function() {
            return e("/api/cafe_search/fetch.json")
        },
        setup: function() {
            return e("/api/cafe_search/setup.json")
        }
    };
    return t
}]), angular.module("cafeSearch").factory("SearchVarService", [function() {
    var e = {},
        n = function(e) {
            return {
                query: !0,
                coordinates: !1,
                search_value: e
            }
        },
        i = function(e, t, n) {
            return {
                query: !1,
                coordinates: !0,
                search_value: e,
                latitude: t,
                longitude: n
            }
        },
        r = function(e, t) {
            return {
                query: !1,
                coordinates: !0,
                search_value: "you",
                latitude: e,
                longitude: t
            }
        },
        s = function() {
            return {
                query: !0,
                coordinates: !1,
                search_value: "all"
            }
        },
        a = function(e) {
            return e.showCafes && !e.showCafesComingSoon ? "opened_to_public" : !e.showCafes && e.showCafesComingSoon ? "coming_soon" : "all"
        };
    return e.queryVars = function(e) {
        var t = {};
        return (t = e.query.length ? i(e.query, e.coords.latitude, e.coords.longitude) : e.coords ? r(e.coords.latitude, e.coords.longitude) : e.location.length ? n(e.location) : s()).cafe_type = a(e), t
    }, e
}]), $(document).ready(function() {
    $("body.carts").length && QuantityInput.registerAll(), $(".js-guest-checkout-form").length && ($(".signup .signup-field").toggle(), $(".signup .signin-field").toggle(), user_logged_in || $(".js-checkout-now").bind("click", function(e) {
        e.preventDefault(), $(".signup.modal").modal()
    }), $(".sign_in_toggle").bind("click", function(e) {
        e.preventDefault(), $(".signup .signup-field").toggle(), $(".signup .signin-field").toggle()
    }))
}), $(function() {
    function e() {
        $(
            "input.js-check-all").prop("checked", !0), $("input.js-check-single").prop("checked", !0)
    }

    function t() {
        0 === $("input.js-check-single:checked").length ? ($(".js-check-all-button").prop("disabled", !0), $(".js-check-all-button").addClass("disabled"), $(".js-schedule-all-roasts-button").addClass("disabled")) : ($(".js-check-all-button").prop("disabled", !1), $(".js-check-all-button").removeClass("disabled"), $(".js-schedule-all-roasts-button").removeClass("disabled"))
    }($("body.fulfillment_estimations-show")[0] || $("body.culinary_production_queues-index")[0]) && ($("input.js-check-all").change(function() {
        $(this).is(":checked") ? e() : $("input.js-check-single").prop("checked", !1), t()
    }), $("input.js-check-single").change(function() {
        t()
    }))
}), "undefined" == typeof invoiceableCustomer && (invoiceableCustomer = !1), "undefined" == typeof containsCoffeeJourney && (containsCoffeeJourney = !1), $(".js-same-as-shipping input").bind("click", function() {
    $(".billing-address-fields").toggle()
}), $('.signup input[type="submit"], .at_home_billing_details input[type="submit"], .checkouts input[type="submit"]').bind("click", function() {
    $("input[required]:hidden, select[required]:hidden").removeAttr("required")
}), $("#js-add-shipping-address").bind("click", function(e) {
    e.preventDefault(), $(".shipping-address-fields").removeClass("hide"), $("#use_shipping_address_id").val("0"), $("#checkout_use_shipping_address_id").val("0"), $(".shipping-address-select").addClass("hide"), $(this).addClass("hide"), $("#js-use-existing-shipping-address").removeClass("hide")
}), $("#js-use-existing-shipping-address").bind("click", function(e) {
    e.preventDefault(), $(".shipping-address-fields").addClass("hide"), $("#use_shipping_address_id").val("1"), $("#checkout_use_shipping_address_id").val("1"), $(".shipping-address-select").removeClass("hide"), $(this).addClass("hide"), $("#js-add-shipping-address").removeClass("hide")
}), $(document).ready(function() {
    ($("body.checkouts").length || $("body.reviews").length || $("body.subscription_billing_details").length || $("body.guest_checkouts").length) && ($(".js-new-subscription-credit-card").on("click", function(e) {
        $(e.target).addClass("hidden"), $(".js-existing-subscription-credit-cards").addClass("hidden"), $(".js-new-subscription-credit-card-form").removeClass("hidden")
    }), containsCoffeeJourney || "$0.00" !== $("#js-checkout-total").text().trim() && !invoiceableCustomer || ($(".js-billing-partials").hide(), $(".js-no-payment-info-required").show()), $(".js-toggle-gift-code").length && $(document).on("click", ".js-toggle-gift-code", function() {
        $(".js-display-gift-code").toggle()
    }))
}), angular.module("coffeeMatch", ["ngResource"]), angular.module("coffeeMatch").component("coffeeMatchScrollToTop", {
    bindings: {
        view: "<"
    },
    controller: function() {
        this.$onChanges = function(e) {
            e.view && window.scrollTo(0, 0)
        }
    }
}), angular.module("coffeeMatch").controller("BackButtonController", ["$scope", function(e) {
    e.goBackToLastQuestion = function() {
        e.step = "question" + (parseInt(e.index) - 1)
    }, e.shouldDisplayBackButton = function() {
        return 1 < e.index
    }
}]), angular.module("coffeeMatch").controller("CoffeeMatchController", ["$scope", function(n) {
    n.current = {}, n.current.view = "question1", n.help = {}, n.responses = {}, n.toggleHelpModal = function(e, t) {
        e.preventDefault(), n.help.content ? n.help.content = "" : n.help.content = t
    }
}]), angular.module("coffeeMatch").controller("ContinueButtonController", ["$scope", "CoffeeMatchService", function(t, e) {
    t.responses = {};
    var n = function(e) {
            return "question" + e
        },
        i = function() {
            return parseInt(t.index) + 1
        },
        r = function() {
            e.answers().save({
                answer_keys: t.$parent.responses[t.$parent.current.view],
                question_group: t.questionGroup,
                quiz_id: t.$parent.quiz_id,
                authenticity_token: $('meta[name="csrf-token"]').attr("content")
            }, function() {
                "question10" === t.$parent.current.view ? ("undefined" != typeof heap && heap.track("View Coffee Match results", {
                    question: t.$parent.current.view
                }), window.location = "/match/results?quiz_id=" + t.$parent.quiz_id) : t.step = n(i())
            })
        };
    t.answerQuestionAndContinue = function(e) {
        t.questionGroup = e, this.disableContinue() || ("undefined" != typeof heap && heap.track("Hit Coffee Match continue", {
            question: t.$parent.current.view
        }), r(t.questionGroup))
    }, t.skipQuestionAndContinue = function(e) {
        t.questionGroup = e, t.$parent.responses[t.$parent.current.view] = [], "undefined" != typeof heap && heap.track("Hit Coffee Match skip", {
            question: t.$parent.current.view
        }), r()
    }, t.disableContinue = function() {
        var e = n(t.index);
        return 0 === t.$parent.responses[e].length
    }
}]), angular.module("coffeeMatch").controller("MultiSelectController", ["$scope", function(t) {
    t.question = {};
    var n = function(e) {
            return 0 <= t.$parent.responses[t.question.value].indexOf(e)
        },
        i = function(e) {
            t.$parent.responses[t.question.value].push(e)
        },
        r = function(e) {
            return t.$parent.responses[t.question.value].indexOf(e)
        },
        s = function(e) {
            t.$parent.responses[t.question.value].splice(r(e), 1)
        };
    t.recordResponse = function(e, t) {
        e.preventDefault(), n(t) ? s(t) : i(t)
    }, t.responseSelected = function(e) {
        return n(e)
    }
}]), angular.module("coffeeMatch").controller("SingleSelectController", ["$scope", function(n) {
    n.question = {}, n.recordResponse = function(e, t) {
        e.preventDefault(), n.$parent.responses[n.question.value] = [t]
    }, n.responseSelected = function(e) {
        return 0 <= n.$parent.responses[n.question.value].indexOf(e)
    }
}]), angular.module("coffeeMatch").controller("SliderController", ["$scope", function(i) {
    var e = function() {
        for (var e = parseInt(i.sliderMaxIndex), t = [], n = 0; n < e; n++) t.push({
            label: n + 1
        });
        return t
    };
    i.labelValues = e()
}]), angular.module("coffeeMatch").directive("coffeeMatchBackButton", function() {
    return {
        restrict: "A",
        scope: {
            step: "=",
            index: "@"
        },
        templateUrl: "back_button.html",
        controller: "BackButtonController"
    }
}), angular.module("coffeeMatch").directive("coffeeMatchContinueButton", function() {
    return {
        restrict: "A",
        scope: {
            step: "=",
            index: "@",
            skippable: "@",
            key: "@"
        },
        templateUrl: "continue_button.html",
        controller: "ContinueButtonController"
    }
}), angular.module("coffeeMatch").directive("coffeeMatchSlider", function() {
    return {
        restrict: "A",
        scope: {
            sliderMinIndex: "@",
            sliderMaxIndex: "@",
            sliderDefaultIndex: "@",
            sliderQuestion: "=",
            sliderKey: "@",
            sliderValues: "="
        },
        templateUrl: "slider_labels.html",
        controller: "SliderController",
        link: function(n, e) {
            $(e).slider({
                min: parseInt(n.sliderMinIndex),
                max: parseInt(n.sliderMaxIndex),
                value: parseInt(n.sliderDefaultIndex),
                slide: function(e, t) {
                    n.$apply(function() {
                        n.sliderQuestion = [n.sliderKey + "__" + n.sliderValues[t.value]]
                    })
                }
            }), n.sliderQuestion = [n.sliderKey + "__" + n.sliderValues[n.sliderDefaultIndex]]
        }
    }
}), angular.module("coffeeMatch").directive("coffeeMatchSliderLabel", function() {
    return {
        restrict: "A",
        scope: {
            sliderLabelNumber: "@"
        },
        template: '<span class="ui-slider-label f7 gray">{{sliderLabelNumber}}</span>'
    }
}), angular.module("coffeeMatch").factory("CoffeeMatchService", ["$resource", function(e) {
    var t = {
        answers: function() {
            return e("/api/coffee_match_answers")
        }
    };
    return t
}]);
var CoffeeNotes = {
    _roasterRecipeId: null,
    hideAllModals: function() {
        $(".js-coffee-notes-roaster-recipe-id").hide()
    },
    displayModal: function() {
        $(".js-coffee-notes-roaster-recipe-id-" + _roasterRecipeId).show()
    },
    setupModal: function(e) {
        _roasterRecipeId = $(e).closest(".js-recommended-roaster-recipe").data("id"), this.hideAllModals(), this.displayModal()
    },
    triggerModal: function() {
        $(".js-coffee-notes-modal").modal()
    }
};
$(document).ready(function() {
    $(".js-open-coffee-notes").on("click", function(e) {
        e.preventDefault(), CoffeeNotes.setupModal(this), CoffeeNotes.triggerModal()
    })
});
var CommunityMap = {
    loadScript: function() {
        if (0 == this.init) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDESrVmW1bexqmXiZc-7QfzYeOaEscEYxw&v=3.exp&callback=initCommunityMap", document.body.appendChild(e)
        }
    },
    placeMarkers: function() {
        var e = [];
        for (var t in results) results.hasOwnProperty(t) && e.push(results[t]);
        this.placeHitMarkers(e, !0)
    },
    placeHitMarkers: function(e, t) {
        if (this.init) {
            this.isActive = !0;
            for (var n = this, i = new google.maps.LatLngBounds, r = 0; r < e.length; r++) {
                var s, a = e[r],
                    o = new google.maps.LatLng(parseFloat(a.latitude), parseFloat(a.longitude));
                i.extend(o), s = new google.maps.Marker({
                    map: n.map,
                    icon: n.iconHit,
                    position: o,
                    zIndex: 1
                });
                var l = "<p class='f6 ma0 pa5 pb0 book' style='font-family: Avenir Next, Roboto, sans-serif;'>" + ("<span class='f5 mb10' style='font-family: Georgia, Garamond, serif;'>" + a.name + "</span>") + (a.description ? "<span class='db mt5 mw5'>" + a.description + "</span>" : "") + (a.url ? "<a href=" + a.url + " target='_blank' rel='noopener' class='blue-text-link db mt5'>" + a.url + "</a>" : "") + "</p>";
                this.bindInfoWindow(s, n.map, n.infoWindow, l), n.markers.push(s)
            }
            this.map.fitBounds(i)
        } else "object" == typeof google && "object" == typeof google.maps ? this.setupMap() : t && this.loadScript()
    },
    bindInfoWindow: function(e, t, n, i) {
        instance = this, google.maps.event.addListener(e, "click", function() {
            instance.activeMarker && (instance.activeMarker.setIcon(instance.iconHit), instance.activeMarker.setZIndex(1)), (instance.activeMarker = e).setIcon(instance.iconActiveHit), e.setZIndex(100), n.setContent(i), n.open(this.map, e), t.setCenter(n.position), 5 == instance.map.getZoom() && t.setZoom(8)
        }), google.maps.event.addListener(n, "closeclick", function() {
            e.setIcon(instance.iconHit), e.setZIndex(1), instance.activeMarker = null
        })
    },
    setupMap: function() {
        if (0 == this.init) {
            this.map = new google.maps.Map(document.getElementById("js-map-canvas"), {
                styles: this.mapStyles,
                disableDefaultUI: !0,
                zoomControl: !0,
                scrollwheel: !1
            });
            var e = new google.maps.LatLngBounds(new google.maps.LatLng(25.82, -124.39), new google.maps.LatLng(49.38, -66.94));
            this.map.fitBounds(e), this.infoWindow = new google.maps.InfoWindow, this.activeMarker = null, this.iconActiveHit = {
                path: "M7.5,10.8498292 C5.65809979,10.8498292 4.16480281,9.36061965 4.16480281,7.52376105 C4.16480281,5.68675526 5.65809979,4.19769289 7.5,4.19769289 C9.3420478,4.19769289 10.8351972,5.68675526 10.8351972,7.52376105 C10.8351972,9.36061965 9.3420478,10.8498292 7.5,10.8498292 M14.9967405,7.28282054 C14.9923128,7.16271825 14.9824244,7.04791458 14.9684036,6.93737926 C14.7890839,3.07673815 11.5101178,0 7.49011159,0 C3.35528176,0 0.00325951429,3.2549782 0.00325951429,7.27030988 C0.00325951429,7.27340075 0.00340710245,7.27649162 0.00340710245,7.27972967 C0.00340710245,7.28075996 0.00325951429,7.28179025 0.00325951429,7.28282054 C-0.180782919,12.2932645 7.49011159,24 7.49011159,24 L7.5,23.8819583 L7.50988841,24 C7.50988841,24 15.1807829,12.2932645 14.9967405,7.28282054",
                fillColor: "#01a1dd",
                size: new google.maps.Size(15, 24),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 24),
                fillOpacity: 1,
                scale: 1,
                strokeWeight: 0
            }, this.iconHit = {
                path: "M7.5,10.8498292 C5.65809979,10.8498292 4.16480281,9.36061965 4.16480281,7.52376105 C4.16480281,5.68675526 5.65809979,4.19769289 7.5,4.19769289 C9.3420478,4.19769289 10.8351972,5.68675526 10.8351972,7.52376105 C10.8351972,9.36061965 9.3420478,10.8498292 7.5,10.8498292 M14.9967405,7.28282054 C14.9923128,7.16271825 14.9824244,7.04791458 14.9684036,6.93737926 C14.7890839,3.07673815 11.5101178,0 7.49011159,0 C3.35528176,0 0.00325951429,3.2549782 0.00325951429,7.27030988 C0.00325951429,7.27340075 0.00340710245,7.27649162 0.00340710245,7.27972967 C0.00340710245,7.28075996 0.00325951429,7.28179025 0.00325951429,7.28282054 C-0.180782919,12.2932645 7.49011159,24 7.49011159,24 L7.5,23.8819583 L7.50988841,24 C7.50988841,24 15.1807829,12.2932645 14.9967405,7.28282054",
                fillColor: "#999",
                fillOpacity: 1,
                size: new google.maps.Size(15, 24),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 24),
                scale: 1,
                strokeWeight: 1,
                strokeOpacity: .3,
                strokeColor: "#ccc"
            }, this.init = !0, this.placeMarkers()
        }
    },
    setup: function() {
        this.init = !1, this.isActive = !1, this.map = [], this.markers = [], this.mapStyles = [{
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "geometry",
            stylers: [{
                color: "#e5e5e5"
            }, {
                visibility: "simplified"
            }]
        }, {
            elementType: "geometry.fill",
            stylers: [{
                color: "#e5e5e5"
            }, {
                visibility: "simplified"
            }]
        }, {
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            stylers: [{
                color: "#e5e5e5"
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#e5e5e5"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "poi",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee"
            }]
        }, {
            featureType: "road",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#ffffff"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }]
    }
};
$(function() {
    0 < $("body.about_details-community").length && $("#js-map-canvas").length && (CommunityMap.setup(), CommunityMap.loadScript())
}), $(document).ready(function() {
    if ($("body.service_account_inventory_counts").length) {
        var e = function() {
            var e = $(this).closest("tr.table-body-row"),
                t = e.find("td.js-total"),
                n = 0;
            n = e.find("input.js-count").toArray().reduce(function(e, t) {
                return e + (parseInt($(t).val()) || 0)
            }, 0), t.text(n)
        };
        $(document).on("change keyup paste", ".js-count", e), $(".js-add-roast-date").on("click", function() {
            var e = $(this).data("table-type"),
                n = $("th.js-" + e + "-roast-day").toArray().reduce(function(e, t) {
                    return e.push($(t).data("date")), e
                }, []),
                t = "service" === e ? 2 : 1;
            $(".js-add-roast-date-modal").modal(), $(".js-roast-date-picker").datepicker("destroy"), $(".js-roast-date-picker").datepicker({
                minDate: moment().subtract(t, "weeks").toDate(),
                maxDate: "0",
                dateFormat: "yy-mm-dd",
                beforeShowDay: function(e) {
                    var t = $.datepicker.formatDate("yy-mm-dd", e);
                    return [-1 === n.indexOf(t)]
                }
            }), $("input.js-roast-table-type").val(e)
        }), $(".js-roast-date-picker").on("click", function() {
            $("#ui-datepicker-div").css("z-index", "9999")
        });
        var t = function() {
                $(document).off("change keyup paste", "td input.js-count", e).on("change keyup paste", "td input.js-count", e)
            },
            n = function() {
                $(".js-add-roast-date-modal").modal("hide"), $(".js-roast-date-picker").val("")
            };
        $(".js-select-roast-date").on("click", function() {
            var r = $(".js-roast-date-picker").val();
            tableType = $("input.js-roast-table-type").val(), columnIndex = $("table.js-" + tableType + "-table tr.table-header-row th").last().index() - 1, dateMatch = /\d{4}-\d{2}-\d{2}/, moment(r, "YYYY-MM-DD", !0).isValid() && ($("table.js-" + tableType + "-table tr").each(function(e, t) {
                var n = $(t).children().eq(columnIndex).clone();
                if (n.is("td")) {
                    var i = n.find("input");
                    i.attr({
                        name: i.attr("name").replace(dateMatch, r),
                        id: i.attr("id").replace(dateMatch, r),
                        "class": i.attr("class").replace(dateMatch, r),
                        value: ""
                    }), i.val("")
                } else n.is("th") && (n.text(moment(r).format("M/D")), n.data("date", moment(r).format("YYYY-MM-DD")));
                n.addClass("highlighted-yellow"), $("table.js-" + tableType + "-table tr:nth-child(" + (e + 1) + ") :nth-child(" + (columnIndex + 1) + ")").after(n)
            }), t()), n()
        })
    }
}), $("body.service_account_culinary_counts").length && $(".js-add-an-item").on("click", function(e) {
    e.preventDefault(), $(".js-add-an-item-modal").modal()
});
var ForecastApi = {
        setup: function(e) {
            return this.branchNumber = e.branchNumber, this.serviceAccountId = e.serviceAccountId, this.itemType = e.itemType, this.endpoint = "https://forecasts.bluebottlecoffee.com/forecasts", this.recordType = "forecasts", this.dateIdAttribute = "forecast_date_id", this
        },
        requestUrl: function(e) {
            var t = e.dateId,
                n = e.sku,
                i = e.subcategory,
                r = this.endpoint + "?filter[sku]=" + n + "&filter[forecast_date_id]=" + t + "&filter[branch_number]=" + this.branchNumber + "&filter[item_type]=" + this.itemType + "&filter[model]=gluon-ts,constant";
            return i ? r + "&filter[item_subcategory]=" + i : r
        }
    },
    SparkSalesApi = {
        setup: function(e) {
            return this.branchNumber = e.branchNumber, this.serviceAccountId = e.serviceAccountId, this.endpoint = "https://spark.bluebottlecoffee.com/api/v1/sales.json", this
        },
        requestUrl: function(e) {
            var t = e.itemIds,
                n = e.date;
            return this.endpoint + "?filter[sku]=" + t + "&filter[since]=" + moment(n).subtract(1, "month").format("YYYY-MM-DD") + "&filter[before]=" + moment(n).format("YYYY-MM-DD") + "&filter[branch_number]=" + this.branchNumber
        }
    },
    SparkInsightsApi = {
        setup: function(e) {
            return this.branchNumber = e.branchNumber, this.endpoint = "https://spark.bluebottlecoffee.com/api/v1/insights.json", this.recordType = "insights", this.dateIdAttribute = "date_id", this
        },
        requestUrl: function(e) {
            return this.endpoint + "?filter[sku]=" + e.sku + "&filter[branch_number]=" + this.branchNumber + "&filter[date]=" + e.date + "&filter[aggregated_subcategory]=" + e.aggregated_subcategory
        }
    },
    SparkOrderHistoryApi = {
        setup: function(e) {
            return this.branchNumber = e.branchNumber, this.endpoint = "https://spark.bluebottlecoffee.com/api/v1/order_history.json", this.recordType = "order_history", this.dateIdAttribute = "date_id", this
        },
        requestUrl: function(e) {
            return this.endpoint + "?filter[sku]=" + e.sku + "&filter[branch_number]=" + this.branchNumber + "&filter[start_date]=" + e.start_date + "&filter[end_date]=" + e.end_date + "&filter[aggregated_subcategory]=false"
        }
    },
    SparkCulinaryMetricsApi = {
        setup: function(e) {
            return this.branchNumber = e.branchNumber, this.endpoint = "https://spark.bluebottlecoffee.com/api/v1/culinary_metrics.json", this.recordType = "culinary_metrics", this.dateIdAttribute = "date_id", this
        },
        requestUrl: function(e) {
            return this.endpoint + "?filter[sku]=" + e.itemIds + "&filter[branch_number]=" + this.branchNumber + "&filter[date]=" + moment(e.date).format("YYYYMMDD")
        }
    },
    OpApi = {
        setup: function(e) {
            return this.endpoint = "/api/variant_order_history.json", this.branchNumber = e.branchNumber, this.serviceAccountId = e.serviceAccountId, this.orderedUnit = "", this
        },
        requestUrl: function(e) {
            var t = e.itemIds,
                n = e.date;
            return this.endpoint + "?variant_ids=" + t + "&since=" + moment(n).subtract(1, "month").format("YYYY-MM-DD") + "&before=" + moment(n).format("YYYY-MM-DD") + "&ordered_unit=" + this.orderedUnit
        }
    },
    opPresenter = {
        setup: function(e) {
            this.store = jsonStore, this.api = OpApi.setup(e)
        },
        display: function(e, t, n, i) {
            var r = /.*SVC$/.exec(t) ? "weight" : "count";
            this.api.orderedUnit = r;
            var s = {
                itemIds: e,
                date: n
            };
            this.store.fetch(s, this, function(e) {
                $.isEmptyObject(e) || i.fillCalendarData(e, ".js-ordered")
            })
        }
    },
    sparkPresenter = {
        setup: function(e) {
            this.store = jsonStore, this.api = SparkSalesApi.setup(e)
        },
        display: function(e, t, n) {
            var i = {
                itemIds: e,
                date: t
            };
            this.store.fetch(i, this, function(e) {
                $.isEmptyObject(e) || n.fillCalendarData(e, ".js-sold")
            })
        }
    },
    sparkCulinaryMetricsPresenter = {
        setup: function(e) {
            this.store = jsonStore, this.api = SparkCulinaryMetricsApi.setup(e)
        },
        display: function(e, t, r) {
            var n = {
                itemIds: e,
                date: t
            };
            this.store.fetch(n, this, function(e, t) {
                if (!$.isEmptyObject(e)) {
                    var n = r.find(".js-stock-out"),
                        i = r.find(".js-utilization");
                    n.text(t.getPercentage(e, "stockout")), i.text(t.getPercentage(e, "utilization"))
                }
            })
        },
        getPercentage: function(e, t) {
            var n = null;
            return e.data[0].metrics.forEach(function(e) {
                e.type === t && (n = e)
            }), n ? n.attributes.percentage + "%" : ""
        }
    },
    forecastPresenter = {
        setup: function(e) {
            this.store = jsonApiStore, this.api = ForecastApi.setup(e)
        },
        display: function(e, t, n, i) {
            if (moment(t) > moment().add(8, "days")) this.showUnavailableMessaging(i);
            else {
                var r = {
                    sku: e,
                    date: t,
                    subcategory: n
                };
                this.store.fetch(r, this, function(e, t) {
                    if ($.isEmptyObject(e)) t.showUnavailableMessaging(i);
                    else {
                        var n = i.find(".js-forecast-suggested-order");
                        t.clearUnavailableMessaging(i), n.text(" " + e.first_quartile + "-" + e.third_quartile)
                    }
                })
            }
        },
        showUnavailableMessaging: function(e) {
            e.find(".js-forecast-data").hide(), e.find(".js-forecast-data-error").text("Forecast is not available for this item")
        },
        clearUnavailableMessaging: function(e) {
            e.find(".js-forecast-data").show(), e.find(".js-forecast-data-error").text("")
        },
        onHandQuantity: function(e) {
            return "culinary" !== e.data("item-type") ? "-" === e.text() ? 0 : parseInt(e.text()) : 0
        }
    },
    Store = yayson().Store,
    jsonApiStore = {
        setup: function() {
            this.store = new Store
        },
        sync: function(e) {
            this.store.sync(e)
        },
        toDateId: function(e) {
            return parseInt(e.replace(/-/g, ""))
        },
        fetch: function(t, n, i) {
            var r = this;
            t.dateId = r.toDateId(t.date || t.start_date);
            var e = r.find(t, n.api);
            e ? i(e, n) : $.ajax({
                url: n.api.requestUrl(t),
                method: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                }
            }).then(function(e) {
                r.sync(e), i(r.find(t, n.api), n)
            }).fail(function() {
                i(null, n)
            })
        },
        find: function(t, n) {
            return $.grep(this.store.findAll(n.recordType), function(e) {
                return (e.aggregated_subcategory ? e.sku.replace("WB - ", "") === t.subcategory : e.sku === t.sku) && Number(e[n.dateIdAttribute]) === Number(t.dateId)
            })[0]
        }
    },
    jsonStore = {
        setup: function() {
            this.store = window.sessionStorage, this.checkAndResetStore()
        },
        checkAndResetStore: function() {
            var e = 2097152;
            e <= e - unescape(encodeURIComponent(JSON.stringify(this.store))).length && this.store.clear()
        },
        toDate: function(e) {
            return moment(e).format("YYYY-MM-DD")
        },
        storeKey: function(e, t, n) {
            return this.toDate(e) + "--" + n + "--" + t
        },
        sync: function(e, t, n, i) {
            this.store.setItem(this.storeKey(t, n, i), JSON.stringify(e))
        },
        fetch: function(e, t, n) {
            var i = this;
            e.dateId = i.toDate(e.date);
            var r = e.date,
                s = e.itemIds,
                a = i.find(e, t.api.serviceAccountId);
            a ? n(a, t) : $.ajax({
                url: t.api.requestUrl(e),
                method: "GET",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                }
            }).then(function(e) {
                i.sync(e, r, s, t.api.serviceAccountId), n(e, t)
            }).fail(function() {
                n({}, t)
            })
        },
        find: function(e, t) {
            return JSON.parse(this.store.getItem(this.storeKey(e.date, e.itemIds, t)))
        }
    },
    dashboardStores = {
        setup: function() {
            jsonApiStore.setup(), jsonStore.setup()
        }
    };
DistanceCalculator = {
    calculate: function(e, t, n, i, r) {
        var s = Math.PI * e / 180,
            a = Math.PI * n / 180,
            o = t - i,
            l = Math.PI * o / 180,
            u = Math.sin(s) * Math.sin(a) + Math.cos(s) * Math.cos(a) * Math.cos(l);
        return u = 60 * (u = 180 * (u = Math.acos(u)) / Math.PI) * 1.1515, "K" == r && (u *= 1.609344), u
    }
}, $(document).ready(function() {
    0 < $("body.dynamic_homes-show").length && $(".newsletter-sign-up").delay(2e3).animate({
        height: 292
    }, 1e3, function() {
        $(".newsletter-sign-up").css("height", "auto")
    })
}), AdminFilters = {
    addExistingFilterOption: function(e) {
        var t = $("div.filter-option").length,
            n = $("div.filter-option:visible").first().clone(!0);
        return n.find("input").first().attr("name", "filter[filter_options_attributes][" + t + "][name]"), n.find("input").first().attr("id", "filter_filter_options_attributes_" + t + "_name"), n.find("input").last().attr("name", "filter[filter_options_attributes][" + t + "][_destroy]"), n.find("input").last().attr("id", "filter_filter_options_attributes_" + t + "__destroy"), n.find("input").val(""), $(n).insertBefore(".js-add-existing-filter-option"), e.preventDefault()
    },
    addNewFilterOption: function(e) {
        var t = $(".filter-option").first().clone(!0);
        return t.find("input").val(""), $(t).insertBefore(".js-add-new-filter-option"), e.preventDefault()
    },
    deleteExistingFilterOption: function(e) {
        return $("div.filter-option:visible").length <= 1 ? alert("Filters need at least 1 option") : ($(e.target.parentElement).find("input:hidden").attr("value", "1"), $(e.target.parentElement).find(".filter-option").removeAttr("required"), e.target.parentElement.style.display = "none"), e.preventDefault()
    },
    deleteNewFilterOption: function(e) {
        return $("div.filter-option:visible").length <= 1 ? alert("Filters need at least 1 option") : e.target.parentElement.remove(), e.preventDefault()
    },
    setListeners: function() {
        $("#js-admin-filter-form").length && ($(document).on("keypress", function(e) {
            if (13 == e.keyCode) return !1
        }), $(".js-add-existing-filter-option").click(AdminFilters.addExistingFilterOption), $(".js-add-new-filter-option").click(AdminFilters.addNewFilterOption), $(".js-delete-existing-filter").click(AdminFilters.deleteExistingFilterOption), $(".js-delete-new-filter").click(AdminFilters.deleteNewFilterOption))
    }
}, $(document).ready(function() {
    AdminFilters.setListeners()
});
var modalManager = {
        modalToScrape: function(e) {
            return "create" === e ? $(".js-add-order-note-modal") : $(".js-edit-order-note-modal")
        },
        notesForExistingOrders: function(e) {
            return this.modalToScrape(e).find(".js-note-form-box").filter(function() {
                return 0 < $(this).val().length && $(this).attr("data-order-id")
            })
        },
        notesForAnyOrders: function(e) {
            return this.modalToScrape(e).find(".js-note-form-box").filter(function() {
                return 0 < $(this).val().length
            })
        },
        clearAndHideModal: function() {
            $(".js-note-container").html(""), $(".js-add-order-note-modal, .js-edit-order-note-modal").modal("hide"), $(".js-submit-note, .js-delete-note").attr({
                "data-id": "",
                "data-date-id": ""
            })
        },
        editableDatesWithoutNotes: function() {
            return $(".js-note-form-box").filter(function() {
                return 0 === $(this).val().length && "" === $(this).attr("data-id")
            })
        },
        cloneReuseableForm: function(e, t) {
            container = this.modalToScrape(t).find(".js-note-container"), e.find(".js-repeatable-form").clone().removeClass("dn").appendTo(container)
        },
        showCreateModal: function() {
            notableDates = this.editableDatesWithoutNotes(), notableDates.each(function(e, t) {
                parentContainer = $(t).parents(".js-order-note"), modalManager.cloneReuseableForm(parentContainer, "create"), $(".js-add-order-note-modal").modal("show")
            })
        },
        showEditModal: function(e) {
            parentContainer = e.parents(".js-order-note"), noteId = e.attr("data-id"), dateId = e.attr("data-date-id"), this.cloneReuseableForm(parentContainer, "edit"), $(".js-submit-note, .js-delete-note").attr({
                "data-date-id": dateId,
                "data-id": noteId
            }), $(".js-edit-order-note-modal").modal("show")
        }
    },
    noteFormManager = {
        updateVisibleText: function(e, t) {
            $parent = $(".js-order-note[data-date-id=" + e + "]"), $parent.find(".js-note-note, .js-note-form-box").html(t), $parent.show()
        },
        updateNoteId: function(e, t) {
            $parent = $(".js-order-note[data-date-id=" + e + "]"), $parent.find(".js-edit-note-link, .js-note-form-box").attr("data-id", t)
        },
        addNoteUiUpdate: function(e) {
            e.each(function(e, t) {
                noteFormManager.updateVisibleText($(t).attr("data-date-id"), $(t).val())
            })
        },
        clearDeletedNoteForDate: function(e) {
            noteContainer = $(".js-order-note[data-date-id=" + e + "]"), noteContainer.find(".js-note-form-box, .js-edit-note-link").attr("data-id", ""), noteContainer.find(".js-note-form-box, .js-note-note").html(""), noteContainer.hide(), modalManager.clearAndHideModal()
        },
        checkAvailableDatesStatus: function() {
            modalManager.editableDatesWithoutNotes().length ? $(".js-add-order-note-comment").removeClass("disabled-btn") : $(".js-add-order-note-comment").addClass("disabled-btn")
        }
    },
    noteCrudActions = {
        serializeNewNoteParams: function(e) {
            return params = [], e.each(function(e, t) {
                orderId = $(t).attr("data-order-id"), noteText = $(t).val(), params.push({
                    note: noteText,
                    order_id: orderId
                })
            }), JSON.stringify({
                order_notes: params
            })
        },
        addNoteCreateRequest: function(e) {
            $.ajax({
                type: "POST",
                url: "/api/order_notes/",
                contentType: "application/json",
                data: noteCrudActions.serializeNewNoteParams(e),
                success: function(e) {
                    jQuery.each(e, function(e, t) {
                        $parent = $(".js-order-note[data-order-id=" + t.order_id + "]"), noteFormManager.updateNoteId($parent.attr("data-date-id"), t.id)
                    })
                }
            })
        },
        createOrUpdateInputForNewNote: function(e) {
            unsubmittableNotes = modalManager.notesForAnyOrders(e), submittableNewNotes = modalManager.notesForExistingOrders(e), unsubmittableNotes.length && noteFormManager.addNoteUiUpdate(unsubmittableNotes), submittableNewNotes.length && this.addNoteCreateRequest(submittableNewNotes)
        },
        editNoteRequest: function(e, t) {
            dateId = $(t).attr("data-date-id"), noteText = $(t).val(), noteFormManager.updateVisibleText(dateId, noteText), $.ajax({
                type: "PUT",
                url: "/api/order_notes/" + e,
                data: {
                    note: noteText
                }
            })
        },
        editOrUpdateInputForNote: function(e) {
            submittableNote = modalManager.notesForExistingOrders("edit"), submittableNote.length && this.editNoteRequest(e, submittableNote), modalManager.clearAndHideModal()
        }
    };
$(function() {
    $("body.forecast_orderings").length && (noteFormManager.checkAvailableDatesStatus(), $(document).on("click", ".js-add-order-note-comment", function(e) {
        e.preventDefault(), modalManager.clearAndHideModal(), modalManager.showCreateModal()
    }), $(document).on("click", ".js-edit-note-link", function(e) {
        e.preventDefault(), modalManager.clearAndHideModal(), modalManager.showEditModal($(this))
    }), $(document).on("click", ".js-submit-note", function(e) {
        e.preventDefault(), $(this).attr("data-id").length ? noteCrudActions.editOrUpdateInputForNote($(this).attr("data-id")) : (noteCrudActions.createOrUpdateInputForNewNote($(this).attr("data-submit-type")), modalManager.clearAndHideModal()), noteFormManager.checkAvailableDatesStatus()
    }), $(document).on("click", ".js-delete-note", function(e) {
        e.preventDefault(), noteId = $(this).attr("data-id"), dateId = $(this).attr("data-date-id"), noteId.length && $.ajax({
            type: "DELETE",
            url: "/api/order_notes/" + noteId,
            dataType: "json"
        }), noteFormManager.clearDeletedNoteForDate(dateId), noteFormManager.checkAvailableDatesStatus()
    }))
});
var CafeConfig = {
    setup: function() {
        return this.branchNumber = branchNumber, this.serviceAccountId = serviceAccountId, this.itemType = itemType, this
    }
};
$(function() {
    if ($("body.forecast_orderings").length) {
        dashboardStores.setup();
        var e = CafeConfig.setup();
        forecastPresenter.setup(e), sparkPresenter.setup(e), sparkCulinaryMetricsPresenter.setup(e), opPresenter.setup(e), $(document).on("focusin", ".js-order-input", function() {
            var e = $(this).data("variant-id"),
                t = $(this).data("date-id"),
                n = $(this).data("styled-date"),
                i = $(this).data("variant-sku"),
                r = $(this).data("variant-subcategory"),
                s = $.map($(this).closest("td").children(), function(e) {
                    return $(e).data("variant-id")
                }),
                a = OpCalendar.setup(t);
            resetAndAddGreenBorder(e);
            var o = toggleForecastRow(e, t, n);
            o.length && (a.replaceDates(o.find(".js-op-calendar"), t), forecastPresenter.display(i, t, r, o), sparkPresenter.display(i, mostRecentUneditableDate(o), a), sparkCulinaryMetricsPresenter.display(i, t, o), opPresenter.display(s, i, mostRecentUneditableDate(o), a))
        }), $(document).on("focusout", ".js-order-input", function() {
            clearHighlightedRow()
        }), $(document).on("change keyup", ".js-order-input", function() {
            recalculateTotalsForTable($(this).data("variant-id"), $(this).data("date-id"))
        }), $(document).on("click", ".js-dismiss-order-message", function(e) {
            e.preventDefault(), $(this).parent(".js-order-message-container").fadeOut("50")
        }), $("#js-order_form").on("submit", function() {
            var e = $(this).attr("submitted");
            typeof e != typeof undefined && !1 !== e || $(this).valid() && ($(this).attr("submitted", "submitted"), $(this).submit())
        })
    }
}), FormManager = {
    setup: function() {
        document.querySelector("#braintree-payment-form").addEventListener("submit", function(e) {
            e.preventDefault(), $(".js-payment-submit").button("loading"), $(".js-payment-submit").prop("disabled", !0), $("#js-braintree-client-authorization").is(":visible") && BraintreeEntry.hostedFieldsInstance && "new-credit-card" === $(".js-selected-payment-method").val() ? BraintreeEntry.fetchPaymentMethodNonce(FormManager.verifyAddress) : FormManager.verifyAddress()
        })
    },
    verifyAddress: function() {
        $(".js-address-verify").length ? Address.verifyAddress() : FormManager.submit()
    },
    setupApplePayBillingFields: function(e) {
        var t = FormManager.mapBillingContactToHiddenFields(e);
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var i = "billing_address[" + n + "]";
                FormManager.createApplePayBillingField(i, t[n])
            } return !0
    },
    mapBillingContactToHiddenFields: function(e) {
        var t, n;
        return e.familyName || (t = e.givenName.split(" ")[0], n = e.givenName.split(" ")[1]), {
            first_name: t || e.givenName,
            last_name: n || e.familyName,
            street_address: e.addressLines[0],
            extended_address: e.addressLines[1] || "",
            locality: e.locality,
            region: e.administrativeArea,
            country_code_alpha2: e.countryCode.toUpperCase(),
            postal_code: e.postalCode
        }
    },
    createApplePayBillingField: function(e, t) {
        var n = document.querySelector("#braintree-payment-form"),
            i = FormManager.createInput("hidden", e, t);
        return n.appendChild(i), !0
    },
    createInput: function(e, t, n) {
        var i = document.createElement("input");
        return i.setAttribute("type", e), i.setAttribute("name", t), i.setAttribute("value", n), i
    },
    submit: function() {
        $("#braintree-payment-form").submit()
    }
}, $(document).ready(function() {
    $("#braintree-payment-form").length && FormManager.setup()
}), $(document).ready(function() {
    function n(e) {
        var t = $(e),
            n = t.val().replace(/\r(?!\n)|\n(?!\r)/g, "\r\n").length;
        return t.parents().eq(2).find(".js-character-count-label").text(r(t) - n), n
    }

    function i() {
        $(".js-character-count-field").each(function(e, t) {
            n(t)
        })
    }

    function r(e) {
        return e.attr("maxlength")
    }

    function e() {
        if ($(".js-gift-note-checkbox").is(":checked")) {
            if ($(".js-gift-note-form").removeClass("hide"), "" === $(".js-gift-note-gifted-from").val()) {
                var e = $(".js-guest-firstname").val();
                $(".js-gift-note-gifted-from").val(e)
            }
            if ("" === $(".js-gift-note-gifted-to").val()) {
                var t = $(".js-shipping-to").val();
                $(".js-gift-note-gifted-to").val(t)
            }
            i()
        } else $(".js-gift-note-form").addClass("hide"), $(".js-gift-note-message").text(""), $(".js-gift-note-gifted-to, .js-gift-note-gifted-from").val(""), n($(".js-gift-note-message"))
    }
    $(".js-gift-note-message").length && (i(), 0 < n($(".js-gift-note-message")) && ($(".js-gift-note-checkbox").attr("checked", !0), $(".js-gift-note-form").removeClass("hide")), $(".js-gift-note-checkbox").on("click", function() {
        e()
    }), $(".js-character-count-field").on("keyup", function() {
        n($(this))
    }))
});
var selectedGiftSize = null,
    selectedGiftFrequency = null;
$(document).ready(function() {
    function t(e, t) {
        $(e).addClass("not-selected"), $(e).removeClass("selected"), $(t).removeClass("not-selected"), $(t).addClass("selected")
    }
    $(".at_home_gift_subscriptions-new").length && (selectionsFromParams(), $(".js-plan-size-select").on("click", function(e) {
        e.preventDefault(), selectedGiftSize = $(this).attr("data-size"), $(".js-plan-size-select.selected").removeClass("selected"), $(this).addClass("selected"), $(".js-frequency").removeClass("dn"), selectedGiftFrequency && showMatchingPlans()
    }), $(".js-frequency-selection").on("click", function(e) {
        e.preventDefault(), selectedGiftFrequency = $(this).attr("data-days"), $(".js-frequency-selection.selected").removeClass("selected"), $(this).addClass("selected"),
            showMatchingPlans()
    }), $(".js-delivery-selection").on("click", function(e) {
        e.preventDefault(), t(".js-delivery-selection", this), $("#gift_delivery_method").val($(this).data("delivery-method")), $(".js-checkout-button").removeClass("hidden"), $(".js-checkout-option").addClass("hidden"), $("." + $(this).data("toggle")).removeClass("hidden")
    }), $("#gift_delivery_method").length && 0 < $("#gift_delivery_method").val().length && (selected_delivery = $("#gift_delivery_method").val(), $(".js-delivery-selection[data-delivery-method=" + selected_delivery).trigger("click"))), $("#js-gift-recipient-name").on("keypress", function(e) {
        if (13 === e.keyCode) return !1
    })
}), $(function() {
    $(".js-label-scanning").length && LabelScanning.setup()
}), LabelScanning = {
    setup: function() {
        this.clearInput(), this.bindPrintButton(), this.watchLabelQueue(), this.watchInputField(), this.bindPrintDelayButton(), $("input.js-print-delay-time-input").val(this.printDelayTime)
    },
    testMode: "undefined" != typeof testMode ? testMode : "false",
    csrfToken: "undefined" != typeof csrfToken ? csrfToken : "",
    packageInsertPath: "undefined" != typeof packageInsertPath ? packageInsertPath : "",
    printDelayTime: 2e3,
    watchInputField: function() {
        var e = this;
        setTimeout(function() {
            30 == $(".js-tracking-number-input").val().length ? $(".js-tracking-number-input").val($(".js-tracking-number-input").val().substring(8)) : 22 == $(".js-tracking-number-input").val().length && e.queueTrackingNumber(), e.watchInputField()
        }, 100)
    },
    bindPrintButton: function() {
        var t = this;
        $(".js-print-button").bind("click", function() {
            t.queueTrackingNumber()
        }), $("input.js-tracking-number-input").keypress(function(e) {
            13 === e.keyCode && t.queueTrackingNumber()
        }), $(".js-tracking-number-input").change(function() {
            30 !== $(this).val().length && 22 !== $(this).val().length || t.clearInput()
        })
    },
    printDelayTimeInputVal: function() {
        return $("input.js-print-delay-time-input").val()
    },
    bindPrintDelayButton: function() {
        var t = this;
        $(".js-print-delay-time-button").bind("click", function() {
            t.setPrintDelayTime(t.printDelayTimeInputVal())
        }), $("input.js-print-delay-time-input").keypress(function(e) {
            13 === e.keyCode && t.setPrintDelayTime(t.printDelayTimeInputVal())
        })
    },
    setPrintDelayTime: function(e) {
        this.printDelayTime = e
    },
    clearInput: function() {
        $(".js-tracking-number-input").val("").focus()
    },
    queueTrackingNumber: function() {
        var e = $(".js-tracking-number-input").val(),
            t = this;
        !0 === t.validateTrackingNumber(e) && $(".js-tracking-number-queue ul").append("<li>" + e + "</li>"), t.clearInput()
    },
    validateTrackingNumber: function(e) {
        return 0 === $(".js-tracking-number-queue ul li").filter(function() {
            return $(this).text() === e
        }).length
    },
    fetchInsertData: function(e) {
        var t = this;
        $.ajax({
            url: t.packageInsertPath,
            headers: {
                "X-CSRF-Token": t.csrfToken
            },
            data: {
                tracking_number: e
            },
            dataType: "json",
            type: "POST",
            success: function(e) {
                !0 === e.success ? t.loadInsertData(e) : t.clearPrintedTrackingNumber()
            },
            error: function() {}
        })
    },
    loadInsertData: function(e) {
        var t = this,
            n = $.extend({}, e.insert_data, {
                package_id: e.package_id,
                note_length: "short"
            });
        null === e.insert_data.note || 0 === e.insert_data.note.length ? n.note_length = "empty" : 125 < e.insert_data.note.length && e.insert_data.note.length < 250 ? n.note_length = "long" : 250 <= e.insert_data.note.length && e.insert_data.note.length < 350 ? n.note_length = "super-long" : 350 <= e.insert_data.note.length && (n.note_length = "painfully-long"), "first_gift" === e.insert_data.template ? $(".js-insert-data").html(firstGiftInsert(n)) : "last_gift" === e.insert_data.template ? $(".js-insert-data").html(lastGiftInsert(n)) : "order_gift" === e.insert_data.template && $(".js-insert-data").html(orderGiftInsert(n)), null == e.insert_data.recipient_name || 0 === e.insert_data.recipient_name.length ? $(".js-gifted-to-name").hide() : $(".js-gifted-to-name").show(), setTimeout(function() {
            "true" !== t.testMode && window.print(), t.clearPrintedTrackingNumber()
        }, t.printDelayTime)
    },
    clearPrintedTrackingNumber: function() {
        $(".js-tracking-number-queue ul li.printing").remove()
    },
    watchLabelQueue: function() {
        var t = this;
        setTimeout(function() {
            if (1 <= $(".js-tracking-number-queue ul li").length && 0 === $(".js-tracking-number-queue ul li.printing").length) {
                var e = $(".js-tracking-number-queue ul li").first();
                !0 == !e.hasClass("printing") && (e.addClass("printing"), t.fetchInsertData(e.text()))
            } else 0 === $(".js-tracking-number-queue ul li.printing").length && $(".js-insert-data").html("");
            t.watchLabelQueue()
        }, 100)
    }
}, $(document).ready(function() {
    $("#set-language").on("click", function(e) {
        e.preventDefault();
        var t = $("#selected-language").val(),
            n = window.location.toString(); - 1 < (n = n.replace(/(\?|&)lang=[A-Za-z]+/, "")).indexOf("?") ? window.location = n + "&lang=" + t : window.location = n + "?lang=" + t
    })
}), $(document).ready(function() {
    $("img.lazy").length && $("img.lazy").lazyload({
        threshold: 500
    })
}), $(document).ready(function() {
    var e = new Clipboard(".js-copy-link");
    $(".js-copy-link").on("click", function(e) {
        e.preventDefault()
    }), e.on("success", function() {
        $(".js-copy-link").html("Copied!")
    }), e.on("error", function() {
        $(".js-copy-link-error").html("Please hold or press Cmd + C to copy.")
    })
}), $(function() {
    if ($("body.events-index").length) {
        var t = new SearchManager({
            type: "event",
            url: "/events/find"
        });
        t.setup(), $(document).on("click", ".js-search-filter-region", function(e) {
            e.preventDefault(), t.regionListClick($(this))
        }), $(document).on("change", ".js-search-filter-region-select", function() {
            t.regionSelectChange($(this))
        }), $(document).on("click", ".js-search-use-location", function(e) {
            e.preventDefault(), t.geolocateClick()
        }), $(document).on("submit", ".js-search-form", function(e) {
            e.preventDefault(), t.searchFormSubmit()
        }), $(document).on("click", ".js-view-all-locations", function(e) {
            e.preventDefault(), t.overrideToAllLocations()
        })
    }
}), $(document).ready(function() {
    $(".js-toggle-modal").on("click", function(e) {
        var t = $(this).data().modal;
        e.preventDefault(), $(t).modal()
    })
}), MyAddressesPage = {
    changeForAllAndSubmit: function() {
        $("#address_change_for_all").val("true"), this.submitForm()
    },
    changeForOneAndSubmit: function() {
        $("#address_change_for_all").val("false"), this.submitForm()
    },
    showAll: function() {
        $(".js-my-address-container").removeClass("dn"), $(".js-my-address-container").addClass("df"), $(".js-show-all-addresses, .js-hide-more-addresses").toggle()
    },
    hideModal: function() {
        $(".js-default-address-notice-modal").modal("hide")
    },
    hideSome: function() {
        $(".js-my-address-container").map(function(e) {
            1 < e && ($(this).removeClass("df"), $(this).addClass("dn"))
        }), $(".js-show-all-addresses, .js-hide-more-addresses").toggle(), $("html, body").animate({
            scrollTop: 0
        }, "slow")
    },
    showModal: function() {
        $(".js-default-address-notice-modal").modal()
    },
    showSubscriptionModal: function() {
        $(".js-subscription-address-confirm-modal").modal()
    },
    submitForm: function() {
        $(".js-new-address-verification").submit()
    }
}, $(document).ready(function() {
    $("body.my_addresses-index").length && ($(".js-show-all-addresses").on("click", function(e) {
        e.preventDefault(), MyAddressesPage.showAll()
    }), $(".js-hide-more-addresses").on("click", function(e) {
        e.preventDefault(), MyAddressesPage.hideSome()
    }), $(".js-default-address-notice").on("click", function() {
        $(".js-default-address-notice-address-path").attr("href", $(this).data("address-path")), MyAddressesPage.showModal()
    })), ($("body.my_addresses-new").length || $("body.my_addresses-edit").length) && ($(".js-default-address-notice input#address_default").on("click", function() {
        $(this).is(":checked") && MyAddressesPage.showModal()
    }), $(".js-default-address-notice-address-path").on("click", function(e) {
        e.preventDefault(), MyAddressesPage.hideModal()
    }), $(".js-dismiss-default-address-modal").on("click", function() {
        $(".js-default-address-notice input#address_default").prop("checked", !1), MyAddressesPage.hideModal()
    })), $("body.my_addresses-edit").length && ($(".js-show-subscription_address_confirm_modal").on("click", function(e) {
        e.preventDefault(), !0 === $(".js-subscription-address-confirm-modal").data("show") ? MyAddressesPage.showSubscriptionModal() : MyAddressesPage.submitForm()
    }), $(".js-change-for-this-instance-only").on("click", function(e) {
        e.preventDefault(), MyAddressesPage.changeForOneAndSubmit()
    }), $(".js-change-for-associated-subscriptions").on("click", function(e) {
        e.preventDefault(), MyAddressesPage.changeForAllAndSubmit()
    }))
});
var adminLayout = $("body.admin").length && $(".js-main-nav").length,
    resizeNav = debounce(function() {
        width = window.innerWidth, 1023 < width ? ($(".js-main-nav").removeAttr("style"), $(".js-expand-carot").removeClass("dn"), $(".js-collapse-carot").addClass("dn"), $(".js-subnav-child:visible").addClass("dn")) : adminLayout && $(".js-main-nav").css("width", width)
    }, 250);
$(document).ready(function() {
    adminLayout && resizeNav(), window.addEventListener("resize", resizeNav), $(document).on("click", ".js-menu-icon, .js-bg-nav-screen", function() {
        toggleResponsiveNavMenu()
    }), $(document).on("click", ".js-subnav-toggle", function() {
        $(this).parent().find(".js-collapse-carot, .js-expand-carot").toggleClass("dn"), $(this).siblings(".js-subnav-child").toggleClass("dn")
    }), window.innerWidth <= 1023 && $(".js-shop-menu .js-subnav-toggle").trigger("click")
}), NewsletterSignupModule = {}, $(document).ready(function() {
    0 < $(".js-newsletter-signup-module").length && $(document).on("click", ".js-x-out", function(e) {
        e.preventDefault(), $(".js-newsletter-signup-module").fadeOut(400), $.post("/hide_newsletter_module")
    })
});
var OpCalendar = {
    setup: function(e) {
        return _this = this, _this.endDate = e, _this.weeksBack = 3, _this.dayOrder = [1, 2, 3, 4, 5, 6, 7], _this.weeks = {}, _this.setupDates(), _this
    },
    weekSetter: function(n, i) {
        return function(e, t) {
            _this.weeks[-i][t] = moment(n.isoWeekday(t))
        }
    },
    setupDates: function() {
        for (var e = _this.weeksBack + 1; e--; 0 === e) {
            var t = moment(_this.endDate).subtract(e, "week");
            _this.weeks[-e] = {}, $.each(_this.dayOrder, _this.weekSetter(t, e))
        }
        return _this.weeks
    },
    cellClasses: function(e) {
        var t = e.format("YYYY-MM-DD");
        return "spec-calendar-date-" + t + " js-calendar-date-" + t
    },
    setupDay: function(l, u) {
        return function(e, t) {
            var n = $(t),
                i = n.data("day-index"),
                r = _this.weeks[l][i],
                s = $(n.closest(".js-history-data")),
                a = $(_this.calendarSection).find(".js-weather-data").data("weather-data"),
                o = a && a[r.format("YYYY-MM-DD")];
            _this.styleDate(s, r, u), s.removeClass(_this.cellClasses(r)), s.addClass(_this.cellClasses(r)), n.text(r.format("D")), o && o.low && o.high ? _this.displayWeather(s, o) : _this.hideWeather(s)
        }
    },
    setCalendarSection: function(e) {
        _this.calendarSection = e
    },
    replaceDates: function(e, i) {
        _this.setCalendarSection(e), _this.clearTableOrderData(e), $.each(e.find(".js-week-row"), function(e, t) {
            var n = $(t).data("week-index");
            $.each($(t).find(".js-date"), _this.setupDay(n, i))
        })
    },
    styleDate: function(e, t, n) {
        n === t.format("YYYY-MM-DD") ? e.css("background-color", "#00B4E4") : moment().month() !== t.month() ? e.css("background-color", "#E5E5E5") : e.css("background-color", "#FFFFFF")
    },
    clearTableOrderData: function(e) {
        e.find(".js-ordered,.js-sold").map(function(e, t) {
            $(t).html("&nbsp;")
        }), $.each(e.find("div[class*=' spec-calendar-date-'],div[class*=' js-calendar-date-']"), function(e, t) {
            var n = $(t).attr("class");
            $(t).removeClass(n.match(/[a-z]*-calendar-date-\d{4}-\d{2}-\d{2}/g).join(" "))
        })
    },
    fillCalendarData: function(e, i) {
        var r = $(_this.calendarSection);
        $.each(e, function(e, t) {
            var n = r.find(".js-calendar-date-" + moment(t.date).format("YYYY-MM-DD"));
            n.length && n.find(i).text(t.quantity)
        })
    },
    displayWeather: function(e, t) {
        e.find(".js-weather-container").show(), e.find(".js-weather-low").text(t.low), e.find(".js-weather-high").text(t.high), e.find(".js-weather-icon").attr("src", t.icon)
    },
    hideWeather: function(e) {
        e.find(".js-weather-container").hide()
    }
};
app = angular.module("OrderCheckIn", ["ngResource"]), app.config(["$httpProvider", function(e) {
    e.defaults.withCredentials = !0, "undefined" != typeof csrfToken && (e.defaults.headers.post["X-CSRF-Token"] = csrfToken)
}]), angular.module("OrderCheckIn").controller("TransferOrderController", ["$scope", "NSProxyService", "RoastOptionService", "NetsuiteSkuService", "itemTypeTableService", "ItemReceiptFactory", "TransferOrderService", "SettingsFactory", "TotalsService", "UserLogService", function(r, e, n, t, i, s, a, o, l, u) {
    var c = yayson().Store;
    r.sortReverse = !1, r.activeTables = [], r.coffeeToAdd = {}, r.transferOrderList = {}, r.confirmationClass = null, r.orderDataLoaded = !1, r.itemReceipt = {
        possibleTransactionDates: [],
        receivedAt: null
    };
    var d = function() {
            r.transferOrderList = {
                receiving: [],
                processing: [],
                received: []
            }, $.each(r.dataStore.findAll("transfer_orders"), function(e, t) {
                if (validator = new TransferValidator(t), t.validator = validator, validator.validate()) switch (!0) {
                    case r.orderStatuses.receiving.includes(t.order_status) && !validator.hasReceipt():
                        r.transferOrderList.receiving.push(t);
                        break;
                    case validator.hasReceipt() && !validator.hasSyncedReceipts():
                        r.transferOrderList.processing.push(t);
                        break;
                    case validator.hasSyncedReceipts():
                        r.transferOrderList.received.push(t)
                }
            }), r.orderDataLoaded = !0, f()
        },
        h = function(e, t) {
            r.confirmationStatus = t, r.$root.$broadcast("MESSAGE_UPDATED", e)
        },
        f = function() {
            var e = Object.keys(r.transferOrderList).find(function(e) {
                return 0 < r.transferOrderList[e].length
            });
            $.isEmptyObject(e) || (r.activeTransferOrder = r.transferOrderList[e][0])
        },
        p = function() {
            a.loadReceivingTransferOrders().$promise.then(function(e) {
                r.dataStore = new c, r.dataStore.sync(e), a.loadReceivedTransferOrders().$promise.then(function(e) {
                    r.dataStore.sync(e), d()
                })
            }, function() {
                h(r.confirmationMessages.failed_to_fetch, "error")
            })
        },
        m = function() {
            r.activeTransferOrder && (r.activeTables = r.itemTables[r.activeItemType].map(function(e) {
                return i(e, r.activeTransferOrder.transfer_order_items)
            }).filter(function(e) {
                return 0 < e.transferOrderItems.length
            }))
        };
    r.fulfillDate = function() {
        return moment(s.getLastFulfillmentDate()).format("MMMM D")
    }, r.setActiveTransferOrder = function(e) {
        transferOrder = r.dataStore.find("transfer_orders", e.toString()), transferOrder.validator = new TransferValidator(transferOrder), r.activeTransferOrder = transferOrder
    };
    var g = function() {
            r.fromBranch && r.activeTransferOrder.from_branch_number === r.fromBranch.branch_number || e.locations().get({
                "filter[branch_number]": r.activeTransferOrder.from_branch_number
            }).$promise.then(function(e) {
                r.fromBranch = e.data[0].attributes, s.setFromBranchNumber(r.fromBranch.branch_number)
            }, function() {
                r.fromBranch = {
                    name: "Unknown",
                    branch_number: null
                }
            })
        },
        v = function(e, t) {
            return e.find(function(e) {
                return e.item.internal_id === t
            })
        },
        y = function(e) {
            for (var t in r.itemReceiptItems) !r.itemReceiptItems.hasOwnProperty(t) || e(r.itemReceiptItems[t], t)
        },
        b = function() {
            r.activeTransferOrder && (l.setActiveTables(r.activeTables), l.setFulfilledDisplay(r.formStatus, T(r.activeTransferOrder)), r.totalColumns = l.getTotalQuantities(), r.totalWeight = l.getTotalServiceWeight())
        },
        _ = function(n) {
            r.formReceivingDiscrepancy = !0, h(r.confirmationMessages.discrepancy, "error"), r.formStatus = r.orderStatuses.pending, y(function(e, t) {
                n.includes(t) && ($("#itemInternalId-" + t).parents("tr").css("background-color", "#FFD1CC"), $("#itemInternalId-" + t).addClass("red"))
            }), $("div.quantity_fulfilled").show()
        },
        w = function() {
            itemReceiptItemDiscrepancies = [], y(function(e, t) {
                var n = parseFloat(r.itemReceiptItems[t]),
                    i = v(r.activeTransferOrder.transfer_order_items, t);
                parseFloat(i.quantity_fulfilled) !== n && itemReceiptItemDiscrepancies.push(t)
            }), itemReceiptItemDiscrepancies.length && _(itemReceiptItemDiscrepancies)
        },
        k = function(e) {
            r.submitDisabled = !0, s.setTransactionDate(r.itemReceipt.receivedAt), s.create().$promise.then(function() {
                s.setConfirmationStatus("success"), h(s.getConfirmationMessage(), "success"), u.logs().save({}), e(), r.submitDisabled = !1
            }, function(e) {
                s.setConfirmationStatus("error"), e.hasOwnProperty("data") && e.data.hasOwnProperty("errors") ? (err_message = e.data.errors.map(function(e) {
                    return field_name = e.source.pointer.split("/").pop().replace(/_/, " "), "<br />" + field_name + ": " + e.detail
                }), err_message = "<strong>There was an error submitting your receipt:</strong>" + err_message) : err_message = s.getConfirmationMessage(), h(err_message, "error"), r.submitDisabled = !1
            })
        },
        x = function() {
            r.coffeeToAdd = {}, $(".js-add-transfer-order-item-modal").modal("hide")
        },
        C = function() {
            var e = r.transferOrderList.receiving.findIndex(function(e) {
                return e.id === r.activeTransferOrder.id
            });
            $(".js-item-row").css("background-color", ""), r.receiving = !1, r.transferOrderList.receiving.splice(e, 1), r.transferOrderList.processing.push(r.activeTransferOrder)
        };
    r.receiveTransferOrder = function() {
        r.submissionCount += 1, w(), (!r.formReceivingDiscrepancy || 1 < r.submissionCount) && (y(function(e, t) {
            s.addItemReceiptItem({
                item_internal_id: t,
                quantity: e
            })
        }), k(C))
    };
    var S = function() {
            s.setTransferOrder(r.activeTransferOrder), s.clearItemReceiptItems(), s.getFiscalMonth().$promise.then(function(e) {
                r.itemReceipt.possibleTransactionDates = s.setAvailableItemReceiptDates(e)
            })
        },
        D = function(e) {
            return {
                Service: "SVC",
                Retail: "RTL"
            } [e]
        };
    r.createUnexpectedItemReceipt = function() {
        r.coffeeToAdd.roaster_recipe_id = $("input#roaster_recipe_id").val(), r.coffeeToAdd.facility_id = $("input#facility_id").val(), r.coffeeToAdd.category_code = D(r.coffeeToAdd.item_type), t.sku().get({
            roaster_recipe_id: r.coffeeToAdd.roaster_recipe_id,
            facility_id: r.coffeeToAdd.facility_id,
            packaging_variant_id: r.coffeeToAdd.packaging_variant_id,
            category_code: r.coffeeToAdd.category_code
        }).$promise.then(function(e) {
            s.setTransferOrder({}), s.addItemReceiptItem({
                sku: e.sku,
                quantity: r.coffeeToAdd.quantity
            }), k(x), s.clearItemReceiptItems(), s.setTransferOrder(r.activeTransferOrder)
        })
    }, r.addCoffeeModal = function(e, t) {
        t.preventDefault(), r.coffeeToAdd.item_type = e, $(".js-add-transfer-order-item-modal").modal(), n.setItemType(e), n.setup(e)
    }, r.totalCountTitle = function(e) {
        return r.totalCountColumns[e.toLowerCase()]
    }, r.dismissConfirmation = function(e) {
        e.preventDefault, r.confirmationStatus = ""
    };
    var j = function() {
        r.itemReceiptItems = {}, r.activeTransferOrder.validator.hasReceipt() ? r.activeTransferOrder.item_receipts[0].item_receipt_items.forEach(function(e) {
            r.itemReceiptItems[e.item_internal_id] = e.quantity
        }) : r.activeTransferOrder.transfer_order_items.forEach(function(e) {
            r.itemReceiptItems[e.item.internal_id] = 0 < e.quantity_received ? e.quantity_received : null
        }), l.setItemReceiptItems(r.itemReceiptItems)
    };
    r.$watch("activeTransferOrder", function() {
        r.activeTransferOrder && (m(), j(), b(), g(), S(), r.receiving = T(r.activeTransferOrder), r.submissionCount = 0)
    }), r.$watch("itemReceiptItems", function() {
        l.setItemReceiptItems(r.itemReceiptItems), b()
    }, !0), r.$watch("formStatus", function() {
        b()
    }), r.$watch("confirmationStatus", function() {
        r.confirmationClass = r.confirmationStatus + "-confirmation"
    });
    var T = function(e) {
        return r.transferOrderList.receiving.map(function(e) {
            return e.id
        }).includes(e.id)
    };
    r.displaySidebar = function() {
        return !$.isEmptyObject(r.transferOrderList) && Object.keys(r.transferOrderList).some(function(e) {
            return 0 < r.transferOrderList[e].length
        })
    }, o.getSettings().$promise.then(function() {
        r.totalCountColumns = o.getTotalCountColumns(), r.orderStatuses = o.getOrderStatuses(), r.confirmationMessages = o.getConfirmationMessages(), r.activeItemType = o.getDefaultItemType(), r.enabledItemTypes = o.getEnabledItemTypes(), r.itemTables = o.getItemTables(), p()
    })
}]), angular.module("OrderCheckIn").directive("columnStyle", function() {
    return {
        restrict: "A",
        scope: !1,
        link: function(e, t, n) {
            var i = n.columnStyle.toLowerCase().includes("fulfilled") ? "highlighted" : "";
            t.addClass(i)
        }
    }
}), angular.module("OrderCheckIn").directive("confirmationMessage", ["$rootScope", function(t) {
    return {
        restrict: "A",
        replace: !0,
        scope: !1,
        link: function(e, n) {
            t.$on("MESSAGE_UPDATED", function(e, t) {
                n.html(t), window.scrollTo(0, $(".sub-navbar-tabs").offset().top)
            })
        }
    }
}]), angular.module("OrderCheckIn").directive("receivingTableField", ["$compile", function(s) {
    return {
        restrict: "A",
        scope: {
            itemField: "=",
            itemReceiptItems: "=",
            receivingOrder: "=",
            rowIndex: "=",
            receivingColumnIndex: "@",
            tableIndex: "="
        },
        link: function(t, n) {
            if (t.$watch("receivingOrder", function() {
                    var e;
                    t.receivingOrder || (e = "sales_unit_of_measure" === t.itemField.field || "quantity_fulfilled" === t.itemField.field ? t.itemField.value : $.isEmptyObject(t.itemField.item) ? "-" : t.itemReceiptItems[t.itemField.item.item.internal_id], n.html(e))
                }), "sales_unit_of_measure" !== t.itemField.field && t.receivingOrder) {
                if ("quantity_fulfilled" === t.itemField.field) n.html('<div class="quantity_fulfilled" style="display: none">' + t.itemField.value + "</div>");
                else if ("quantity_received" === t.itemField.field && t.itemField.item) {
                    var e = t.itemField.value,
                        i = t.itemField.item ? t.itemField.item.item.internal_id : "",
                        r = (t.receivingColumnIndex + t.rowIndex) * t.tableIndex + 1;
                    n.html("<input id='itemInternalId-" + i + "' class='fancy-input' min='0' inputmode='numeric' pattern='[0-9]+(.[0-9]{0,1})?%?' value=" + e + " ng-model-options='{updateOn: \"blur\"}' ng-model='itemReceiptItems[\"" + i + "\"]' tabindex=" + r + " required />")
                }
            } else n.html(t.itemField.value);
            s(n.contents())(t)
        }
    }
}]), angular.module("OrderCheckIn").directive("tableTotal", function() {
    return {
        restrict: "A",
        replace: !0,
        scope: {
            headerField: "=",
            totalColumns: "=",
            itemType: "="
        },
        template: "<td class='highlighted tc bold'>{{totalColumns[itemType + ' ' + headerField]}}</td>"
    }
}), angular.module("OrderCheckIn").factory("ItemReceiptFactory", ["NSProxyService", "SettingsFactory", "FiscalDayService", function(e, t, n) {
    var i = {},
        r = [],
        s = "",
        a = "",
        o = "",
        l = {},
        u = {},
        c = "",
        d = function(e, t) {
            return l[e].replace(/\$\{toNumber\}/, t)
        },
        h = function() {
            return "success" === _confirmationStatus
        },
        f = function() {
            c = u.item_fulfillments.map(function(e) {
                return moment(e.transaction_date)
            }).reduce(function(e, t) {
                return e.isAfter(t) ? e : moment(t)
            })
        };
    return i.getConfirmationMessage = function() {
        return h() ? h() && !u.id ? l.unexpected_receipt : h() ? d("received_to", u.transaction_number) : void 0 : l.submission_error
    }, i.getLastFulfillmentDate = function() {
        return c
    }, i.setConfirmationStatus = function(e) {
        _confirmationStatus = e
    }, i.setTransferOrder = function(e) {
        u = e, f()
    }, i.addItemReceiptItem = function(e) {
        r.push(e)
    }, i.setFromBranchNumber = function(e) {
        o = e
    }, i.clearItemReceiptItems = function() {
        r = []
    }, i.setTransactionDate = function(e) {
        a = e
    }, i.setAvailableItemReceiptDates = function(e) {
        var t = [],
            n = moment(e.fiscal_month_start);
        if (c.diff(n, "days") <= 1 || n < c) var i = c;
        else i = n;
        for (var r = moment(); r.isAfter(i, "day"); r.subtract(1, "day")) t.push(moment(r));
        return t.length ? t : [c.add(1, "day")]
    }, i.getFiscalMonth = function() {
        return n.fiscalDay().get({
            date: moment().format("YYYY-MM-DD")
        })
    }, i.create = function() {
        return e.itemReceipts().save({
            created_from_internal_id: u.internal_id,
            transaction_date: moment(a).format("YYYY-MM-DD HH:mm:ss"),
            to_branch_number: s,
            from_branch_number: o,
            item_receipt_items_attributes: r,
            employee_number: _employeeNumber
        })
    }, i.initialize = function() {
        return t.getSettings().$promise.then(function() {
            s = t.getBranchNumber(), l = t.getConfirmationMessages(), _employeeNumber = t.getEmployeeNumber()
        })
    }, i.initialize(), i
}]), angular.module("OrderCheckIn").factory("SettingsFactory", ["OrderCheckInService", function(e) {
    var t = {},
        n = null,
        i = {};
    return t.getEmployeeNumber = function() {
        return i.employeeNumber
    }, t.getDefaultItemType = function() {
        return i.defaultItemType
    }, t.getEnabledItemTypes = function() {
        return i.enabledItemTypes
    }, t.getItemTables = function() {
        return i.itemTables
    }, t.getBranchNumber = function() {
        return i.branchNumber
    }, t.getWeightUnit = function() {
        return i.weightUnit
    }, t.getOrderStatuses = function() {
        return i.orderStatuses
    }, t.getConfirmationMessages = function() {
        return i.confirmationMessages
    }, t.getTotalCountColumns = function() {
        return i.totalCountColumns
    }, t.getNSProxyUrl = function() {
        return i.nsProxyUrl
    }, t.getSettings = function() {
        return n || (n = e.initialize().get({}, function(e) {
            i.branchNumber = e.branch_number, i.employeeNumber = e.employee_number, i.weightUnit = e.weight_unit, i.orderStatuses = e.order_statuses, i.confirmationMessages = e.confirmation_messages, i.totalCountColumns = e.total_count_columns, i.nsProxyUrl = e.nsproxy_url, i.defaultItemType = e.default_item_type, i.enabledItemTypes = e.enabled_item_types, i.itemTables = e.item_tables
        })), n
    }, t
}]), angular.module("OrderCheckIn").filter("titleCase", function() {
    return function(e) {
        if (e) return e.replace(/\w\S*/g, function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
    }
}), angular.module("OrderCheckIn").factory("FiscalDayService", ["$resource", function(e) {
    var t = {
        fiscalDay: function() {
            return e("/api/fiscal_day.json")
        }
    };
    return t
}]);
var ColumnDetail = function(e, t) {
    var n = this;
    this.mergedRows = e, this.itemSizes = t, this.itemAttributes = [], n.mergedRows ? n.itemAttributes = ["quantity_fulfilled", "quantity_received"] : n.itemAttributes = ["sales_unit_of_measure", "quantity_fulfilled", "quantity_received"]
};
ColumnDetail.prototype.receivingColumnIndex = function(t) {
    var e = this;
    if (e.mergedRows && t) {
        var n = e.headers().find(function(e) {
            return e.includes(t.sales_unit_of_measure.unit_name)
        });
        return e.headers().indexOf(n)
    }
    return 0
}, ColumnDetail.prototype.headers = function() {
    var e = this,
        n = {
            sales_unit_of_measure: "Unit of Measure",
            quantity_fulfilled: "Fulfilled",
            quantity_received: "Received"
        };
    if (!0 !== e.mergedRows) return e.itemAttributes.map(function(e) {
        return n[e]
    });
    var i = [];
    return e.itemSizes.forEach(function(t) {
        i.push(e.itemAttributes.map(function(e) {
            return n[e] + " (" + t + ")"
        }))
    }), [].concat.apply([], i)
};
var ItemDetail = function(e, t) {
        function n(e) {
            return "sales_unit_of_measure" === e && r.transferOrderItem ? r.transferOrderItem.item.sales_unit_of_measure ? r.transferOrderItem.item.sales_unit_of_measure.unit_name : "N/A" : r.transferOrderItem ? r.transferOrderItem[e] : 0
        }

        function i() {
            return r.rowAttributes.map(function(e) {
                return {
                    field: e,
                    value: n(e),
                    item: r.transferOrderItem
                }
            })
        }
        var r = this;
        this.transferOrderItem = e, this.rowAttributes = t, this.fields = i()
    },
    RowDetail = function(e, t) {
        this.parsedName = pickReasonableName(e), this.rowItemAttributes = t.itemAttributes, this.columnDetail = t, this.sizes = {}, this.itemFields = [], this.size = e.item ? e.item.sales_unit_of_measure.unit_name : null, this.addItem(e)
    };
RowDetail.prototype.addItem = function(e) {
    var t = this,
        n = e.item ? e.item.sales_unit_of_measure.unit_name : null;
    t.sizes[n] = e, t.updateItemFields()
}, RowDetail.prototype.updateItemFields = function() {
    var i = this,
        r = [];
    if (i.columnDetail.mergedRows) i.columnDetail.itemSizes.forEach(function(e) {
        var t = null;
        if (i.sizes[e]) {
            var n = i.sizes[e];
            t = new ItemDetail(n, i.rowItemAttributes)
        } else t = new ItemDetail(null, i.rowItemAttributes);
        r.push(t.fields)
    });
    else {
        var e = Object.keys(i.sizes)[0],
            t = i.sizes[e];
        r = [new ItemDetail(t, i.rowItemAttributes).fields]
    }
    i.itemFields = [].concat.apply([], r)
};
var RowCollection = function(e, t) {
        function n(e) {
            var t = r.rows.map(function(e) {
                    return e.parsedName
                }),
                n = pickReasonableName(e),
                i = t.indexOf(n);
            return -1 !== i ? r.rows[i] : null
        }

        function i() {
            r.transferOrderItems.forEach(function(e) {
                null != n(e) ? n(e).addItem(e) : r.rows.push(new RowDetail(e, r.columnDetail))
            })
        }
        var r = this;
        return this.columnDetail = t, this.transferOrderItems = e, this.rows = [], !0 === t.mergedRows ? i() : r.transferOrderItems.forEach(function(e) {
            r.rows.push(new RowDetail(e, r.columnDetail))
        }), this.rows
    },
    ItemTypeTable = function(e, t) {
        function n() {
            return {
                Service: /SVC(?=\s|$)/,
                Retail: /RTL(?=\s|$)/,
                Other: /^((?!RTL|SVC).)*$/
            } [s.itemType]
        }

        function i() {
            return s.transferOrderItems.map(function(e) {
                if (e.item) return e.item.sales_unit_of_measure.unit_name
            }).filter(function(e, t, n) {
                return n.indexOf(e) === t
            })
        }

        function r() {
            return "Retail" === e || "Service" === e
        }
        var s = this;
        this.itemType = e, this.transferOrderItems = t.map(function(e) {
            if (e.sku.match(n())) return e
        }).filter(Boolean), this.uniqueItemSizes = i(), this.mergedRows = "Service" === e && i().length <= 2, this.columnDetail = new ColumnDetail(this.mergedRows, i()), this.itemTypeDescription = r() ? "Roast Name" : "Item Name", this.rowCollection = new RowCollection(this.transferOrderItems, this.columnDetail)
    };
angular.module("OrderCheckIn").factory("itemTypeTableService", function() {
    return function(e, t) {
        return new ItemTypeTable(e, t)
    }
}), angular.module("OrderCheckIn").factory("NSProxyService", ["$resource", "SettingsFactory", function(e, t) {
    var n = {},
        i = "";
    return n.transferOrders = function() {
        return e(i + "/transfer_orders")
    }, n.itemReceipts = function() {
        return e(i + "/item_receipts")
    }, n.locations = function() {
        return e(i + "/locations")
    }, n.initialize = function() {
        t.getSettings().$promise.then(function() {
            i = t.getNSProxyUrl()
        })
    }, n.initialize(), n
}]), angular.module("OrderCheckIn").factory("NetsuiteSkuService", ["$resource", function(e) {
    var t = {
        sku: function() {
            return e("/api/netsuite_sku.json")
        }
    };
    return t
}]), angular.module("OrderCheckIn").factory("OrderCheckInService", ["$resource", function(e) {
    var t = {
        initialize: function() {
            return e("/api/order_check_in.json")
        }
    };
    return t
}]), angular.module("OrderCheckIn").factory("RoastOptionService", ["$resource", function(e) {
    var t = {},
        n = {},
        i = {},
        r = "",
        s = function() {
            return e("/api/roast_options.json")
        },
        a = function(e) {
            $.isEmptyObject(n) && (n = e)
        },
        o = function(e) {
            i[r] || (i[r] = e)
        },
        l = function() {
            return i[r] && !$.isEmptyObject(n)
        },
        u = function() {
            $("input.js-do-autocomplete").autocomplete({
                source: n,
                select: function(e, t) {
                    e.preventDefault(), $("#roaster_recipe_name").val(t.item.label), $("#roaster_recipe_id").val(t.item.value)
                }
            }), $("select.js-add-packaging-size").empty(), i[r].forEach(function(e) {
                $("select.js-add-packaging-size").append(new Option(e.description, e.packaging_variant_id))
            })
        };
    return t.setItemType = function(e) {
        r = e
    }, t.setup = function() {
        l() ? u() : s().get({
            category: r
        }).$promise.then(function(e) {
            a(e.roaster_recipes), o(e.packaging_sizes), u()
        })
    }, t
}]), angular.module("OrderCheckIn").factory("TotalsService", ["SettingsFactory", function(e) {
    var t = {},
        a = {},
        n = [],
        i = !1,
        r = [],
        s = [],
        o = [],
        l = function() {
            n.forEach(function(t) {
                t.columnDetail.headers().forEach(function(e) {
                    a[t.itemType + " " + e] = null
                })
            })
        },
        u = function(e, t, n) {
            if (e.mergedRows) {
                var i = t.item.sales_unit_of_measure.unit_name;
                return e.itemType + " " + n + " (" + i + ")"
            }
            return e.itemType + " " + n
        },
        c = function(e) {
            for (var t in o) !o.hasOwnProperty(t) || e(o[t], t)
        },
        d = function(e, t) {
            return e.find(function(e) {
                return e.item.internal_id === t
            })
        },
        h = function(s) {
            c(function(e, t) {
                var n = parseFloat(e),
                    i = d(s.transferOrderItems, t);
                if (!i) return !1;
                var r = u(s, i, "Received");
                a[r] += n || 0
            })
        },
        f = function(n) {
            n.transferOrderItems.forEach(function(e) {
                var t = u(n, e, "Fulfilled");
                a[t] += parseFloat(e.quantity_fulfilled)
            })
        },
        p = function() {
            l(), n.forEach(function(e) {
                h(e), i && f(e)
            })
        };
    t.setActiveTables = function(e) {
        n = e
    }, t.setItemReceiptItems = function(e) {
        o = e
    }, t.getTotalQuantities = function() {
        return p(), a
    }, t.setFulfilledDisplay = function(e, t) {
        i = e === r.pending || !t
    };
    var m = function() {
        return n.filter(function(e) {
            return "Service" === e.itemType
        })[0]
    };
    return t.getTotalServiceWeight = function() {
        var e = m();
        if (o && e) {
            var i = 0;
            return e.transferOrderItems.forEach(function(e) {
                var t = o[e.item.internal_id];
                if (t) {
                    var n = parseFloat(e.item.sales_unit_of_measure.conversion_rate) * parseFloat(t);
                    "kg" === s && (n *= .453592), i += n
                }
            }), (Math.round(100 * i) / 100).toString() + " " + s
        }
    }, t.initialize = function() {
        e.getSettings().$promise.then(function() {
            s = e.getWeightUnit(), r = e.getOrderStatuses()
        })
    }, t.initialize(), t
}]), angular.module("OrderCheckIn").factory("TransferOrderService", ["NSProxyService", "SettingsFactory", function(e, t) {
    var n = {},
        i = "transfer_order_items,item_receipts,transfer_order_items.item,transfer_order_items.item.sales_unit_of_measure,item_fulfillments,item_receipts.item_receipt_items",
        r = "",
        s = "",
        a = function(e) {
            return moment().subtract(e, "days").format("YYYY-MM-DD")
        };
    return n.loadReceivingTransferOrders = function() {
        return e.transferOrders().get({
            "filter[to_branch_number]": s,
            "filter[order_status][]": r.receiving,
            "filter[dirty]": !1,
            include: i
        })
    }, n.loadReceivedTransferOrders = function() {
        return e.transferOrders().get({
            "filter[to_branch_number]": s,
            "filter[order_status][]": r.received,
            "filter[transaction_date_after]": a(2),
            "filter[transaction_date_before]": a(0),
            include: i
        })
    }, n.initialize = function() {
        t.getSettings().$promise.then(function() {
            r = t.getOrderStatuses(), s = t.getBranchNumber()
        })
    }, n.initialize(), n
}]), angular.module("OrderCheckIn").factory("UserLogService", ["$resource", function(e) {
    var t = {
        logs: function() {
            return e("/order_check_in")
        }
    };
    return t
}]);
var MERCH_BRANCH_NUMBERS = ["1017", "1076", "1151", "1129", "1145", "1011", "1031", "1102", "1216", "1217", "1218", "1192"];
$(document).ready(function() {
    function i(t, n) {
        40 <= n ? $(".js-order-cancellation").text("Failed!") : setTimeout(function() {
            $.ajax({
                url: "/api/v1/order_status/" + t,
                success: function(e) {
                    "canceled" === e.status ? location.reload() : i(t, ++n)
                }
            })
        }, 1500)
    }
    $("body.orders").length && ($(".js-order-cancellation").on("click", function() {
        if (!window.confirm("Are you sure?")) return !1;
        i($(this).data("order-id"), 0), $(this).text("Processing...")
    }), $culinaryFulfillmentDatePicker = $(".js-culinary-fulfillment-datepicker"), $culinaryFulfillmentDatePicker.length && ($(document).on("click", ".js-cul-fulfillment-cal", function() {
        $culinaryFulfillmentDatePicker.datepicker("show")
    }), min = $culinaryFulfillmentDatePicker.data("min-date"), max = $culinaryFulfillmentDatePicker.data("max-date"), $culinaryFulfillmentDatePicker.datepicker({
        dateFormat: "yy-mm-dd",
        maxDate: max + "d",
        minDate: min + "d"
    }))), $("body.orders-edit").length && $(".js-quantity-input").on("keyup change", function e() {
        768 <= $(window).width() && ($(this).val() === $(this).attr("value") || $(this).val() === $(".js-default-value").text().trim(" ") ? $(this).siblings(".js-update-cart").fadeOut("fast") : $(this).siblings(".js-update-cart").fadeIn("fast"))
    })
}), $(document).ready(function() {
    0 < $(".js-password-tooltip").length && $(".js-password-tooltip").focus(function() {
        $(".js-sign-in-header").is(":visible") || $(".js_password_info").show()
    }).blur(function() {
        $(".js-sign-in-header").is(":visible") || $(".js_password_info").hide()
    })
}), $(document).ready(function() {
    function t() {
        $("body").css("opacity", "0.3"), $("html").prepend("<span class='pos-abs top-0 bottom-0 left-0 right-0 tc' id='table-loader' style='margin-top:20%'>" + e("#01a1dd") + "</span>")
    }

    function e(e) {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="' + e + '"><path transform="translate(2)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(8)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(14)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(20)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(26)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path></svg>'
    }
    $("body.culinary_production_queues-index")[0] ? $("#js-culinary-date-select select#date").on("change", function() {
        var e = $(this).find(":selected").attr("value");
        t(), window.location.href = "/culinary_production_queues?date=" + e
    }) : $("body.production_queue_culinary_weekly_overviews-index")[0] && $("#js-culinary-week-select select#weeks_out").on("change", function() {
        var e = $(this).find(":selected").attr("value");
        t(), window.location.href = "/production_queue_culinary_weekly_overviews?week=" + e
    })
}), PaymentSelection = {
    switchToNewPaymentMethodModule: function() {
        $(".js-switch-to-new-payment-method-module").hide(), $(".js-switch-to-existing-payment-method-module").show(), $(".js-existing-payment-method-selector").hide(), $(".js-new-payment-method-selector").show(), PaymentSelection.selectPaymentMethod("new-credit-card")
    },
    switchToExistingPaymentMethodModule: function() {
        $(".js-switch-to-new-payment-method-module").show(), $(".js-switch-to-existing-payment-method-module").hide(), $(".js-existing-payment-method-selector").show(), $(".js-new-payment-method-selector").hide(), PaymentSelection.selectPaymentMethodWithinExistingPaymentMethodModule()
    },
    selectPaymentMethodWithinExistingPaymentMethodModule: function() {
        var e = $(".js-existing-payment-method-options").find(":selected").text();
        "apple-pay" !== e && "paypal" !== e && (e = "existing-credit-card"), PaymentSelection.selectPaymentMethod(e)
    },
    selectPaymentMethod: function(e) {
        $(".js-selected-payment-method").val(e), PaymentSelection.selectPaymentMethodWithinNewPaymentMethodModule(e), PaymentSelection.displayInitializePaymentButtonSpecificToPaymentMethod(e), "new-credit-card" === e ? PaymentSelection.showNewCreditCardFields() : PaymentSelection.hideNewCreditCardFields()
    },
    selectPaymentMethodWithinNewPaymentMethodModule: function(e) {
        "existing-credit-card" !== e && $(".js-select-payment-method[data-payment-method='" + e + "']").prop("checked", !0)
    },
    displayInitializePaymentButtonSpecificToPaymentMethod: function(e) {
        $(".js-place-order-button").hide();
        var t = e;
        "existing-credit-card" !== e && "new-credit-card" !== e || (t = "credit-card"), $(".js-place-order-button[data-payment-method='" + t + "']").show()
    },
    hideNewCreditCardFields: function() {
        $(".js-billing-address").hide(), $("[name^=billing_address]").attr("disabled", !0), $(".js-new-credit-card-fields").hide()
    },
    showNewCreditCardFields: function() {
        $("[name^=billing_address]").attr("disabled", !1), $(".js-billing-address").show(), $(".js-new-credit-card-fields").show()
    },
    setBindings: function() {
        $(".js-switch-to-new-payment-method-module").click(function() {
            PaymentSelection.switchToNewPaymentMethodModule()
        }), $(".js-switch-to-existing-payment-method-module").click(function() {
            PaymentSelection.switchToExistingPaymentMethodModule()
        }), $(".js-select-payment-method").click(function() {
            PaymentSelection.selectPaymentMethod(this.dataset.paymentMethod)
        }), $(".js-place-order-button").click(function() {
            $(this).button("loading")
        })
    }
}, $(document).ready(function() {
    $("#js-braintree-client-authorization").length && (PaymentSelection.setBindings(), PaymentSelection.selectPaymentMethod($(".js-selected-payment-method").val()))
}), $(document).ready(function() {
    $("body.postage_label_printing").length && $(".js-print .js-void-label").on("click", function() {
        $(this).text($(this).data("loading-text"))
    })
}), $(document).ready(function() {
    $("body.preparation_guides-show").length && $(document).on("click", ".js-guide-type-btn", function(e) {
        e.preventDefault(), $(this).hasClass("active") || ($(".js-guide-type-btn").removeClass("active"), $(this).addClass("active"), $(".js-guide-type-body").fadeToggle(), window.history.pushState("", "", window.location.pathname + $(this).attr("href")))
    })
}), $(function() {
    if ($(".js-product-allotable-type")[0]) {
        var n = $(".js-product-allotable-id").html().split("\n");
        return $(".js-product-allotable-type").change(function() {
            var t = $(".js-product-allotable-type :selected").text(),
                e = n.filter(function(e) {
                    if (0 <= e.toString().indexOf(t) || 0 <= e.toString().indexOf('value=""')) return e
                }).join("\n");
            $(".js-product-allotable-id").html(e), $(".ui-autocomplete-input").remove(), $(".js-product-allotable-id").selectToAutocomplete(), $(".ui-autocomplete-input").show()
        })
    }
}), $(document).ready(function() {
    $("body.product_groupings").length && $(".js-product-grouping-rename").on("click", function() {
        $(".js-product-grouping-name").toggle(), $(".js-product-grouping-rename-form").toggle()
    })
}), $(document).ready(function() {
    0 < $("body.admin.production_roast_histories").length && ($("#js-start-date-datepicker").datepicker({
        defaultDate: "-2weeks",
        minDate: "-6weeks",
        maxDate: "0",
        dateFormat: "yy-mm-dd"
    }), $("#js-end-date-datepicker").datepicker({
        defaultDate: "0",
        minDate: "-6weeks",
        maxDate: "0",
        dateFormat: "yy-mm-dd"
    }))
}), $(document).ready(function() {
    function t() {
        $(".js-more-options-link").toggleClass("dn"), $(".js-more-options").toggleClass("dn")
    }
    if ($("body.products_and_variants-index").length && ($(".control-label").addClass("dn"), ("All Locations" !== $(".js-more-options select option:selected").text() || 0 < $(".js-more-options input:checkbox:checked").length) && t(), $(".js-more-options-link").on("click", function(e) {
            e.preventDefault(), t()
        })), $("body.products, body.variants").length) {
        $(".js-version-collapse").on("click", function(e) {
            e.preventDefault(), "See all changes " === $(".js-version-collapse-copy").text() ? ($(".js-model-version").show(), $(".js-version-collapse-copy").text("Hide changes "), $(".js-icon-chevron").removeClass("icon-chevron-down"), $(".js-icon-chevron").addClass("icon-chevron-up")) : ($(".js-model-version:not(.js-version-0)").hide(), $(".js-version-collapse-copy").text("See all changes "), $(".js-icon-chevron").addClass("icon-chevron-down"), $(".js-icon-chevron").removeClass("icon-chevron-up"))
        });
        var e = {
                setup: function() {
                    this.afterSelection(), this.bindProductTypeSelection()
                },
                bindProductTypeSelection: function() {
                    var e = this;
                    $(".js-product-section-options input").bind("click", function() {
                        e.afterSelection()
                    })
                },
                hideSections: function() {
                    var e = this,
                        t = e.currentSection();
                    $.each(e.availableSections(), function() {
                        this != t && e.sectionByType(this).map(function() {
                            $(this).hide()
                        })
                    })
                },
                showSections: function() {
                    var e = this,
                        t = e.currentSection();
                    $.each(e.availableSections(), function() {
                        this == t && e.sectionByType(this).map(function() {
                            $(this).show()
                        })
                    })
                },
                currentSection: function() {
                    return $(".js-product-section-options input:checked").parent("label").text().toLowerCase()
                },
                availableSections: function() {
                    return $(".js-product-section-options label:not(.control-label)").map(function() {
                        return $(this).text().toLowerCase()
                    })
                },
                afterSelection: function() {
                    this.hideSections(), this.showSections(), this.filterCategories()
                },
                sectionByType: function(e) {
                    return $(".js-" + e + "-section")
                },
                filterCategories: function() {
                    "merch" === this.currentSection() ? this.toggleCategories(["Brewing", "Coffee", "Mugs and More"], ["Culinary"]) : "coffee" === this.currentSection() ? this.toggleCategories(["Coffee", "Mugs and More"], ["Brewing", "Culinary"]) : "bundled" === this.currentSection() ? this.toggleCategories(["Brewing", "Coffee", "Culinary", "Mugs and More"], []) : "culinary" === this.currentSection() && this.toggleCategories(["Culinary"], ["Brewing", "Coffee", "Mugs and More"])
                },
                toggleCategories: function(e, t) {
                    $.each(e, function() {
                        $(".js-category-section." + this).show()
                    }), $.each(t, function() {
                        $(".js-category-section." + this).hide(), $(".js-category-section." + this).find(".select2-selection__choice").remove()
                    })
                }
            },
            n = {
                setup: function() {
                    this.afterSelection(), this.bindAllotableSelection(), this.cleanForm(!1)
                },
                bindAllotableSelection: function() {
                    var e = this;
                    $(".js-allotable-options input").bind("click", function() {
                        e.afterSelection()
                    })
                },
                hideSections: function() {
                    var e = this,
                        t = e.currentSection();
                    $.each(e.availableSections(), function() {
                        this != t && e.sectionByType(this).map(function() {
                            $(this).hide()
                        })
                    })
                },
                showSections: function() {
                    var e = this,
                        t = e.currentSection();
                    $.each(e.availableSections(), function() {
                        this == t && e.sectionByType(this).map(function() {
                            $(this).show()
                        })
                    })
                },
                currentSection: function() {
                    return $(".js-allotable-options input:checked").parent("label").text().toLowerCase()
                },
                availableSections: function() {
                    return $(".js-allotable-options label:not(.control-label)").map(function() {
                        return $(this).text().toLowerCase()
                    })
                },
                afterSelection: function() {
                    this.hideSections(), this.showSections()
                },
                sectionByType: function(e) {
                    return $(".js-" + e + "-section")
                },
                allotableSelection: function() {
                    return $(".js-allotable-options:checked").first()
                },
                cleanForm: function(e) {
                    $(".js-allotable-options input:not(:checked)").each(function() {
                        unselected_allotable_type = $(this).parent("label").text().toLowerCase(), element = $(".js-" + unselected_allotable_type + "-section"), !0 === e ? element.remove() : element.find("input").val("")
                    })
                }
            },
            i = {
                setup: function() {
                    this.bindSubmit()
                },
                bindSubmit: function() {
                    var t = this;
                    $("form").submit(function(e) {
                        e.preventDefault(), t.cleanForm(), $(this).unbind().submit()
                    })
                },
                cleanForm: function() {
                    $("[class^=js]:hidden").each(function() {
                        $(this).find("input").val("").removeAttr("checked").removeAttr("selected")
                    }), n.cleanForm(!0)
                }
            },
            r = {
                setup: function(e) {
                    this.modelType = e, this.bindCheckbox()
                },
                csrfToken: "undefined" != typeof csrfToken ? csrfToken : "",
                bindCheckbox: function() {
                    var e = this;
                    $(".js-for-sale-checkbox").on("change", function() {
                        e.submit()
                    })
                },
                dataHash: function() {
                    var e = {};
                    return e[this.modelType] = {
                        for_sale: $(".js-for-sale-checkbox").get(0).checked
                    }, e
                },
                submit: function() {
                    var e = this;
                    $.ajax({
                        url: "/" + e.modelType + "s/" + modelId,
                        type: "PUT",
                        dataType: "json",
                        headers: {
                            "X-CSRF-Token": csrfToken
                        },
                        data: e.dataHash(),
                        success: function(e) {
                            "object" == typeof e && (!1 === e.success && $(".js-for-sale-toggle-error").show(), $(".js-for-sale-checkbox").prop("checked", e.for_sale)), $(".js-for-sale-toggle-error").hide(), s.setStateFromCheckbox()
                        }
                    })
                }
            },
            s = {
                setup: function() {
                    this.setStateFromCheckbox(), this.bindForSaleButtons()
                },
                setStateFromCheckbox: function() {
                    this.forSale = $(".js-for-sale-checkbox").get(0).checked, this.loadState()
                },
                forSale: !1,
                loadState: function() {
                    !0 === this.forSale ? ($(".js-for-sale-toggle.js-for-sale").addClass("current-state"), $(".js-for-sale-toggle.js-not-for-sale").removeClass("current-state")) : ($(".js-for-sale-toggle.js-for-sale").removeClass("current-state"), $(".js-for-sale-toggle.js-not-for-sale").addClass("current-state"))
                },
                bindForSaleButtons: function() {
                    var t = this;
                    $(".js-for-sale-toggle").on("click", function(e) {
                        e.preventDefault(), $(this).hasClass("current-state") || ($(this).hasClass("js-for-sale") ? t.forSale = !0 : t.forSale = !1, t.loadState(), $(".js-for-sale-checkbox").prop("checked", t.forSale), $(".js-for-sale-checkbox").trigger("change"))
                    })
                }
            }
    }
    $("body.products-show, body.variants-show") && {
        setup: function() {
            this.shorten(), this.bindLongDescriptions()
        },
        showChar: 150,
        ellipsesText: "...",
        moreText: "more",
        lessText: "less",
        shorten: function() {
            var r = this;
            $(".js-show-more").each(function() {
                var e = $(this).html();
                if (e.length > r.showChar) {
                    var t = e.substr(0, r.showChar),
                        n = e.substr(r.showChar - 1, e.length - r.showChar),
                        i = t + '<span class="js-content-ellipses">' + r.ellipsesText + '&nbsp;</span><span class="js-content-more"><span class="dn">' + n + '</span>&nbsp;&nbsp;<a href="" class="js-more-content-link">' + r.moreText + "</a></span>";
                    $(this).html(i)
                }
            })
        },
        bindLongDescriptions: function() {
            var e = this;
            $(".js-more-content-link").click(function() {
                return $(this).hasClass("js-less-content-link") ? ($(this).removeClass("js-less-content-link"), $(this).html(e.moreText)) : ($(this).addClass("js-less-content-link"), $(this).html(e.lessText)), $(this).parent().prev().toggle(), $(this).prev().toggle(), !1
            })
        }
    }.setup();
    if ($("body.products").length && (e.setup(), n.setup(), i.setup(), s.setup(), $("body").hasClass("products-show") && r.setup("product")), $("body.variants").length) {
        var a = 0 < $("form.new_variant").length;
        toggleConfigurations(), toggleAvailability(a), $(".js-bundle-select").select2({
            theme: "classic"
        }), $(".js-variant-datepicker").datepicker({
            minDate: "0",
            dateFormat: "yy-mm-dd"
        }), $("body.variants").length && (s.setup(), i.setup(), $("body").hasClass("variants-show") && r.setup("variant")), $(".variant_fulfillment_facility_id").change(function() {
            toggleSelection($(this), ".js-external-sku-section", ["Oakland - OWD", "Oakland - Ingram"])
        }), $("#variant_enable_restocked_notifications").change(function() {
            toggleSelection($(this).parents().eq(0), ".js-restocking-on", !0)
        }), $("#variant_fulfillment_strategy_type").change(function() {
            toggleConfigurations()
        }), $(".js-variant-visibility").change(function() {
            toggleAvailability(a)
        }), $(".js-for-sale-checkbox").change(function() {
            !0 === $(this).prop("checked") && 0 < $(".merch-product").length && $("input#variant_netsuite_item_name").prop("required", !0)
        }), $(".js-toggle-flat-rate-shipping").change(function() {
            !0 === $(this).prop("checked") ? $(".js-flat-rate-shipping-fields").show() : ($(".js-flat-rate-shipping-fields").hide(), $(".js-flat-rate-shipping-fields").find("input").val("0.00"))
        })
    }
    $("#js-product-form").length && $("#product_name").keyup(function() {
        $("#product_slug").val(this.value.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"))
    }), $(".js-filter-option-select").length && $(".js-filter-option-select").select2({
        theme: "classic"
    }), $(".js-filter-section").length && $(".js-category-section").each(function() {
        $(this).find("input.optional").first().is(":checked") || $(this).find("option:selected").length || $(this).find(".js-filter-section").hide(), this.querySelectorAll("input.optional")[0].addEventListener("change", function() {
            var e = "#js-parent-category-" + $(this).val();
            if ($(this).is(":checked")) $(e).show();
            else {
                if ($(e).find("option:selected").length) return;
                $(e).hide()
            }
        })
    })
});
var QuantityInput = {
    registerAll: function registerAll() {
        $(".js-quantity-input").on("change keyup datachange", function t(e) {
            this.refreshFields(e)
        }.bind(this)).trigger("change")
    },
    resetVariant: function resetVariant(e, t) {
        this.previousVariantId !== t && (this.previousVariantId = t, e.find(".js-quantity-input").attr("data-selected-variant-id", t), e.find(".js-quantity-input").trigger("datachange"))
    },
    refreshFields: function refreshFields(e) {
        this.context = e.target, this.isQuantityInputWrapperElement() ? this.handleWrapperEvent() : this.isDropdownSelectElement() ? this.handleDropdownEvent() : this.isNumberInputElement() && this.handleNumberFieldEvent()
    },
    handleWrapperEvent: function handleWrapperEvent() {
        this.shouldShowNumberField(this.dataAttributeQuantity()) ? this.showNumberInput(this.dataAttributeQuantity()) : this.showDropdown(this.dataAttributeQuantity())
    },
    handleDropdownEvent: function handleDropdownEvent() {
        this.shouldShowNumberField(this.dropdownSelectElementValue()) ? this.showNumberInput(this.dropdownMax()) : (this.syncFormFields(this.dropdownSelectElementValue()), this.submitUpdate())
    },
    handleNumberFieldEvent: function handleNumberFieldEvent() {
        this.showNumberInput(this.numberInputElementValue())
    },
    shouldShowNumberField: function shouldShowNumberField(e) {
        return 0 === e || e >= this.dropdownMax() && !this.purchaseableLimitIsDropdownMax()
    },
    wrapperElement: function wrapperElement() {
        return $(this.context).closest(".js-quantity-input")
    },
    allVariantData: function allVariantData() {
        return JSON.parse(this.wrapperElement().attr("data-variants"))
    },
    selectedVariantId: function selectedVariantId() {
        return parseInt(this.wrapperElement().attr("data-selected-variant-id"), 10)
    },
    variantData: function variantData() {
        return this.allVariantData()[this.selectedVariantId()]
    },
    dataAttributeQuantity: function dataAttributeQuantity() {
        return parseInt(this.wrapperElement().attr("data-quantity"), 10)
    },
    updateable: function updateable() {
        return "true" === this.wrapperElement().attr("data-updateable")
    },
    purchaseableLimit: function purchaseableLimit() {
        return this.variantData().purchaseable_limit
    },
    purchaseableLimitIsDropdownMax: function purchaseableLimitIsDropdownMax() {
        return this.variantData().purchaseable_limit_is_dropdown_max
    },
    dropdownOptions: function dropdownOptions() {
        return this.variantData().dropdown_options
    },
    dropdownMax: function dropdownMax() {
        return parseInt(this.wrapperElement().attr("data-dropdown-max"), 10)
    },
    numberInputElement: function numberInputElement() {
        return this.wrapperElement().find(".js-quantity-number-field")
    },
    numberInputElementValue: function numberInputElementValue() {
        return parseInt(this.numberInputElement().val(), 10)
    },
    dropdownWrapper: function dropdownWrapper() {
        return this.wrapperElement().find(".js-quantity-dropdown")
    },
    dropdownSelectElement: function dropdownSelectElement() {
        return this.wrapperElement().find(".js-quantity-select")
    },
    dropdownSelectElementValue: function dropdownSelectElementValue() {
        return parseInt(this.dropdownSelectElement().val(), 10)
    },
    updateButton: function updateButton() {
        return this.wrapperElement().find(".js-update-cart")
    },
    isElementWithClass: function isElementWithClass(e) {
        return this.context.classList.contains(e)
    },
    isNumberInputElement: function isNumberInputElement() {
        return this.isElementWithClass("js-quantity-number-field")
    },
    isDropdownSelectElement: function isDropdownSelectElement() {
        return this.isElementWithClass("js-quantity-select")
    },
    isQuantityInputWrapperElement: function isQuantityInputWrapperElement() {
        return this.isElementWithClass("js-quantity-input")
    },
    syncFormFields: function syncFormFields(e) {
        var t = isNaN(e) ? 1 : e;
        this.wrapperElement().attr("data-quantity", t), isNaN(e) || (this.dropdownSelectElement().val(e), this.numberInputElement().val(e))
    },
    insertOptions: function insertOptions() {
        var e = $.map(this.dropdownOptions(), function t(e) {
            return $("<option>", {
                value: e.value,
                text: e.text
            })
        });
        this.dropdownSelectElement().html(e)
    },
    selectOption: function selectOption() {
        var e = $.map(this.dropdownOptions(), function t(e) {
            return e.value
        });
        0 <= $.inArray(this.dataAttributeQuantity(), e) ? this.dropdownSelectElement().val(this.dataAttributeQuantity()) : this.dropdownSelectElement().val(1)
    },
    showNumberInput: function showNumberInput(e) {
        this.syncFormFields(e), this.teardownDropdown(), this.setupNumberInput()
    },
    showDropdown: function showDropdown(e) {
        this.syncFormFields(e), this.teardownNumberInput(), this.setupDropdown()
    },
    teardownDropdown: function teardownDropdown() {
        this.dropdownWrapper().hide(), this.dropdownSelectElement().prop("disabled", !0)
    },
    teardownNumberInput: function teardownNumberInput() {
        this.updateButton().hide(), this.numberInputElement().hide(), this.numberInputElement().prop("disabled", !0)
    },
    setupNumberInput: function setupNumberInput() {
        this.numberInputElement().prop("disabled", !1), this.setupNumberInputMaximum(), this.numberInputElement().show(), this.conditionallyShowUpdateButton()
    },
    setupDropdown: function setupDropdown() {
        this.dropdownSelectElement().prop("disabled", !1), this.insertOptions(), this.selectOption(), this.dropdownWrapper().show()
    },
    setupNumberInputMaximum: function setupNumberInputMaximum() {
        this.purchaseableLimit() ? this.numberInputElement().attr("max", this.purchaseableLimit()) : this.numberInputElement().attr("max", null)
    },
    conditionallyShowUpdateButton: function conditionallyShowUpdateButton() {
        this.updateable() ? this.numberInputElementValue() === parseInt(this.numberInputElement().attr("value"), 10) ? this.hideUpdateButton() : this.showUpdateButton() : this.hideUpdateButton()
    },
    showUpdateButton: function showUpdateButton() {
        this.updateButton().fadeIn("fast")
    },
    hideUpdateButton: function hideUpdateButton() {
        this.updateButton().fadeOut("fast")
    },
    submitUpdate: function submitUpdate() {
        this.updateable() && $(this.context).closest("form").submit()
    }
};
$(document).ready(function() {
    $("body.quick_stores").length && (stickyModule(), $(document).on("scroll", function() {
        stickyModule()
    }))
}), $(document).ready(function() {
    if (0 < $("body.retail_inventories").length || $(0 < "body.culinary_fulfillment_discrepancies".length)) {
        if (0 < $(".js-retail-inventory-header").length) {
            var e = $(window),
                t = $(".js-retail-inventory-header"),
                n = t.offset().top;
            e.scroll(function() {
                t.toggleClass("pos-fix top-0 bg-white left-0 z-index-999 pt25", e.scrollTop() > n)
            })
        }
        $(".js-date-change").on("click", function(e) {
            e.preventDefault();
            var t = $(".js-date-change-form");
            return t.is(":visible") ? (t.hide(), $(this).text("Change Date")) : (t.show(), $(this).text("Cancel")), !1
        }), $("#js-op-default-date").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: -28,
            maxDate: 0
        }), $(".js-op-date-cal").on("click", function() {
            $("#js-op-default-date").datepicker("show")
        })
    }
}), $(document).ready(function() {
    0 < $("body.roaster_recipe_builds").length && $(document).on("click", ".js-edit-component-link", function(e) {
        e.preventDefault(), $(".js-inner").html(), formData = $(this).siblings(".js-rrc-modal-data").html(), $(".js-inner").html(formData), $("#js-update-rrc-modal").modal()
    })
}), $(document).ready(function() {
    0 < $("body.roasts").length && $(".lot-option-select").each(function(e, t) {
        var n = $(t).find("option").not(":empty");
        1 === n.length && $(n[0]).prop("selected", !0)
    })
}), SearchManager = function(e) {
    this.type = e.type, this.url = e.url
}, SearchManager.prototype.setup = function() {
    window.mapManager = new SearchMapWrapper, navigator.geolocation || $(".js-search-use-location-btn").addClass("hidden")
}, SearchManager.prototype.regionListClick = function(e) {
    this.toggleRegionFilter(e), this.showResultsForRegion($(e).attr("data-js-region"))
}, SearchManager.prototype.regionSelectChange = function(e) {
    this.showResultsForRegion($(e).find(":selected").val().replace("#", ""))
}, SearchManager.prototype.geolocateClick = function() {
    $(".js-search-filter-region").removeClass("active"), $(".js-search-use-location-btn").button("loading"), this.clearForm(), this.getGeolocation()
}, SearchManager.prototype.searchFormSubmit = function() {
    var e = this.formValue();
    e.length ? ($(".js-search-filter-region").removeClass("active"), $(".js-search-form button").button("loading"), this.getLatLong(e)) : $(".js-search-form-text").addClass("error"), $(".js-search-form-text").blur()
}, SearchManager.prototype.overrideToAllLocations = function() {
    this.showResultsForRegion("all"), this.toggleFilterToAll(), this.clearForm()
}, SearchManager.prototype.checkUrlForHistory = function() {
    mapManager.init && (location.hash ? this.loadHashRegion() : location.search && this.loadSearchResults())
}, SearchManager.prototype.addLocationToStoresAndMap = function(e, t) {
    t.push(this.personMarker(e)), this.updateResultsText(), this.placeMarkers(t)
}, SearchManager.prototype.personMarker = function(e) {
    return {
        type: "person",
        latitude: e.latitude,
        longitude: e.longitude
    }
}, SearchManager.prototype.appendDistance = function(e) {
    var t = $(".js-all-locations .js-" + this.type + "-" + e.key).clone();
    $(".js-" + this.type + "-search-results").append(t), t.find(".js-" + this.type + "-distance-amt").text(e.distance.toFixed(1)), t.find(".js-" + this.type + "-distance").show()
}, SearchManager.prototype.clearForm = function() {
    $(".js-search-form-text").val("")
}, SearchManager.prototype.updateBrowserHistory = function() {
    history.replaceState({}, document.title, location.pathname)
}, SearchManager.prototype.getGeolocation = function() {
    this.updateBrowserHistory();
    var e = function(e) {
            this.updateResults(e)
        },
        t = function() {
            this.showError()
        };
    navigator.geolocation ? (navigator.geolocation.getCurrentPosition($.proxy(e, this), $.proxy(t, this)), $(".js-search-use-location").addClass("active")) : $(".js-search-use-location").addClass("hidden")
}, SearchManager.prototype.getLatLong = function(t) {
    $.ajax({
        url: this.url,
        context: this,
        data: "location=" + t,
        type: "GET",
        success: function(e) {
            history.pushState("", document.title, window.location.pathname + "?q=" + t), this.updateResults(e)
        },
        error: function() {
            $(".js-search-form button, .js-search-use-location-btn").button("reset"), this.updateBrowserHistory(), this.showAllResults()
        }
    })
}, SearchManager.prototype.hideResultsRegions = function() {
    $(".js-" + this.type + "-search-results, .js-" + this.type + "-regions, .js-search-message-box").hide()
}, SearchManager.prototype.loadHashRegion = function() {
    var e = $(".js-search-filter-region[href='" + location.hash + "']");
    e.length && ($(".js-search-filter-region:visible") ? e.click() : $(".js-search-filter-region-select:visible") && this.showResultsForRegion(location.hash))
}, SearchManager.prototype.loadSearchResults = function() {
    var e = location.search.match(/q=([^&]*)/);
    e && e[1] && ($(".js-search-form-text").val(decodeURIComponent(e[1])), this.searchFormSubmit())
}, SearchManager.prototype.noCoordsError = function() {
    this.updateResultsText(), $(".js-search-message-box").show()
}, SearchManager.prototype.orderByDistance = function(e) {
    var t = !0 === useMiles ? "M" : "K",
        n = [],
        i = [],
        r = [];
    for (var s in results) {
        var a = DistanceCalculator.calculate(e.latitude, e.longitude, results[s].latitude, results[s].longitude, t);
        results[s].key = s, results[s].distance = a, r.push(results[s]), a <= 20 ? n.push(results[s]) : a <= 250 && i.push(results[s])
    }
    return 0 < n.length ? (this.addLocationToStoresAndMap(e, n), n.sort(function(e, t) {
        return e.distance - t.distance
    })) : 0 < i.length ? (this.addLocationToStoresAndMap(e, i), i.sort(function(e, t) {
        return e.distance - t.distance
    })) : (this.toggleFilterToAll(), this.addLocationToStoresAndMap(e, r), r.sort(function(e, t) {
        return e.distance - t.distance
    }))
}, SearchManager.prototype.placeMarkers = function(e) {
    mapManager.placeHitMarkers(e.reverse(), !0)
}, SearchManager.prototype.resetSearchResults = function() {
    $(".js-search-form-text").removeClass("error"), $(".js-" + this.type + "-search-results, .js-search-message-box, .js-all-locations").hide(), $(".js-" + this.type + "-search-results > div").remove(), $(".js-your-location").text(""), $(".js-search-form button, .js-search-use-location-btn").button("reset")
}, SearchManager.prototype.scrollImage = function() {
    $("img.lazy").lazyload({
        threshold: 0
    }), $("img.lazy").trigger("scroll")
}, SearchManager.prototype.showAllResults = function() {
    this.showResultsForRegion("all"), this.toggleFilterToAll(), this.noCoordsError()
}, SearchManager.prototype.showAllStoresWithMap = function() {
    var e = [];
    for (var t in results) results.hasOwnProperty(t) && e.push(results[t]);
    this.placeMarkers(e)
}, SearchManager.prototype.showError = function() {
    $(".js-search-form button, .js-search-use-location-btn").button("reset"), $(".js-search-use-location").removeClass("active"), this.showAllResults()
}, SearchManager.prototype.showRegionalStoresWithMap = function(e) {
    var t = [];
    for (var n in results) results[n].region === e && t.push(results[n]);
    this.placeMarkers(t)
}, SearchManager.prototype.showResultsForRegion = function(e) {
    this.hideResultsRegions(), $(".js-all-locations").show(), this.scrollImage(), "all" === e ? (this.updateBrowserHistory(), $(".js-" + this.type + "-regions").show(), mapManager.isActive && this.showAllStoresWithMap()) : (history.pushState("", document.title, window.location.pathname + "#" + e), $(".js-" + this.type + "-region-" + e).show(), this.clearForm(), this.showRegionalStoresWithMap(e))
}, SearchManager.prototype.toggleFilterToAll = function() {
    this.toggleRegionFilter($('.js-search-filter-region[data-js-region="all"]')), $(".js-search-filter-region-select").val("#all")
}, SearchManager.prototype.toggleRegionFilter = function(e) {
    $(".js-search-filter-region").removeClass("active"), $(e).addClass("active")
}, SearchManager.prototype.updateResultListing = function(e) {
    for (var t = 0; t < e.length; t++) e[t].type === this.type && this.appendDistance(e[t]);
    $(".js-" + this.type + "-search-results").show()
}, SearchManager.prototype.updateResults = function(e) {
    var t = e.coords;
    if (this.resetSearchResults(), t) {
        var n = this.orderByDistance(t);
        this.updateResultListing(n)
    } else this.noCoordsError(), this.showAllResults(), mapManager.isActive && this.showAllStoresWithMap();
    this.scrollImage()
}, SearchManager.prototype.formValue = function() {
    return $(".js-search-form-text").val()
}, SearchManager.prototype.updateResultsText = function() {
    var e = this.formValue();
    $(".js-your-location").text(""), e.length ? $(".js-your-location").text(e) : $(".js-your-location").text("you")
}, $(window).load(function() {
    if ($("body.events-index").length) {
        if (window.mapManager) return mapManager.loadScript();
        window.mapManager = new SearchMapWrapper, mapManager.loadScript()
    }
}), SearchMapWrapper = function() {
    this.infoWindow = null, this.map = [], this.baseUrl = document.location.origin, this.init = !1, this.loaded = !1, this.isActive = !1, this.markers = [], this.mapStyles = [{
        featureType: "poi",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            lightness: 100
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "landscape",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{
            visibility: "off"
        }]
    }], this.iconPerson = null, this.iconHit = null
}, SearchMapWrapper.prototype.loadScript = function() {
    if (0 == this.init) {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDESrVmW1bexqmXiZc-7QfzYeOaEscEYxw&v=3.exp&callback=initMap", document.body.appendChild(e), this.loaded = !0
    }
}, SearchMapWrapper.prototype.manager = function() {
    if ($("body.events-index").length) return new SearchManager({
        type: "event",
        url: "/events/find"
    })
}, SearchMapWrapper.prototype.setupMap = function() {
    if (0 == this.init) {
        this.map = new google.maps.Map(document.getElementById("js-map-canvas"), {
            styles: this.mapStyles,
            disableDefaultUI: !0,
            zoomControl: !0,
            scrollwheel: !1
        });
        var e = new google.maps.LatLngBounds(new google.maps.LatLng(35.673343, 139.710388), new google.maps.LatLng(40.7033127, -73.979681));
        this.map.fitBounds(e), this.infoWindow = new google.maps.InfoWindow, this.iconPerson = {
            url: this.baseUrl + "/marker-person.png",
            size: new google.maps.Size(41, 52),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 52)
        }, this.iconHit = {
            url: this.baseUrl + "/marker-cafe.png",
            size: new google.maps.Size(41, 53),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 53)
        }, this.init = !0, this.manager() ? google.maps.event.addDomListener(window, "load", this.manager().checkUrlForHistory()) : google.maps.event.addDomListener(window, "load")
    }
}, SearchMapWrapper.prototype.placeHitMarkers = function(e, t) {
    if (this.init) {
        this.isActive = !0, this.cleanoutMap();
        for (var n = this, i = new google.maps.LatLngBounds, r = 0; r < e.length; r++) {
            var s, a = e[r],
                o = new google.maps.LatLng(parseFloat(a.latitude), parseFloat(a.longitude));
            if (i.extend(o), "cafe" === a.type) {
                s = new google.maps.Marker({
                    map: n.map,
                    icon: n.iconHit,
                    position: o
                });
                var l = a.name,
                    u = a.address,
                    c = n.baseUrl + "/cafes/" + a.slug;
                if (0 != a.coming_soon)
                    if (0 != a.community_day_link) var d = "<p class='f5 ma0 pa5 pb0 book' style='font-family: Avenir Next, Roboto, sans-serif;'><b><a href=" + a.community_day_link + " target='_blank' rel='noopener' class='no-underline blue-text-link'>" + l + "<span class='gray-aside-text pl5'>" + a.coming_soon + "</span></a></b> <br/>" + u + "</p>";
                    else d = "<p class='f5 ma0 pa5 pb0 book' style='font-family: Avenir Next, Roboto, sans-serif;'>" + l + "<span class='details-title pl5 mid-gray'>" + a.coming_soon + "</span><br/>" + u + "</p>";
                else d = "<p class='f5 ma0 pa5 pb0 book' style='font-family: Avenir Next, Roboto, sans-serif;'><b><a href=" + c + " target='_blank' rel='noopener' class='blue-text-link'>" + l + "</a></b> <br/>" + u + "</p>";
                this.bindInfoWindow(s, n.map, n.infoWindow, d)
            } else if ("event" === a.type) {
                s = new google.maps.Marker({
                    map: n.map,
                    icon: n.iconHit,
                    position: o
                });
                var h = a.name,
                    f = a.location_name,
                    p = "<p class='f5 ma0 pa5 pb0 book' style='font-family: Avenir Next, Roboto, sans-serif;'><b><a href=" + (n.baseUrl + "/events/" + a.slug) + " target='_blank' rel='noopener' class='blue-text-link'>" + h + "</a></b> <br/>" + f + "</p>";
                this.bindInfoWindow(s, n.map, n.infoWindow, p)
            } else s = new google.maps.Marker({
                map: n.map,
                icon: n.iconPerson,
                position: o
            });
            n.markers.push(s)
        }
        this.map.fitBounds(i), this.tightSearchFrame(i) && this.map.setZoom(16)
    } else "object" == typeof google && "object" == typeof google.maps ? this.setupMap() : t && this.loadScript()
}, SearchMapWrapper.prototype.tightSearchFrame = function(e) {
    var t = e.toJSON();
    return t.south.toFixed(3) === t.north.toFixed(3) && t.west.toFixed(3) === t.east.toFixed(3)
}, SearchMapWrapper.prototype.cleanoutMap = function() {
    this.removeMarkers(), $(".js-search-map").show(), $(".js-hero-bg").hide(), google.maps.event.trigger(this.map, "resize")
}, SearchMapWrapper.prototype.bindInfoWindow = function(e, t, n, i) {
    google.maps.event.addListener(e, "click", function() {
        n.setContent(i), n.open(this.map, e)
    })
}, SearchMapWrapper.prototype.removeMarkers = function() {
    for (var e = 0; e < this.markers.length; e++) this.markers[e].setMap(null);
    this.markers = []
}, window.searchMapWrapper = SearchMapWrapper, $(document).ready(function() {
    $("body.service_account_checkouts").length && $(".js-wholesale-shipping").length && ($("select#transport_method_id").length && (displayWholesaleShipping($("select#transport_method_id").find(":selected").text()), $("select#transport_method_id").on("change", function() {
        displayWholesaleShipping($(this).find(":selected").text())
    })))
}), app = angular.module("inventory", ["ngResource"]), app.config(["$httpProvider", function(e) {
    e.defaults.withCredentials = !0
}]), angular.module("inventory").controller("InventoryController", ["$scope", "$q", "SettingsFactory", "FormFactory", "VariantService", "DataFactory", "ProcessFormDataFactory", function(n, i, e, r, t, s, a) {
    n.selected = {
        retail: null,
        service: null
    }, n.variance = {
        retail: null,
        service: null
    }, n.data = {};
    var o = function() {
            s.initialize(n.date).then(function() {
                n.data.toAccount = t.getVariants()
            })
        },
        l = function() {
            e.getSettings().$promise.then(function() {
                n.selected.view = e.getActiveView(), n.sort = e.getSortOrder(), n.settings = e.getDateSettings(), n.formData = r.getForm(), n.formData.date = n.date, n.date && o()
            })
        };
    n.toggleDatePicker = function() {
        n.settings.showDatePicker = !n.settings.showDatePicker
    }, n.storeToRoastery = function(e, t) {
        r.setOrClearFormRoastDataEntry(e.sku, "roastery_transfer", {
            actionType: "roastery_transfer",
            quantity: e.toRoastery,
            sku: e.sku,
            weight: e.weight,
            roastType: t
        })
    }, n.storeToService = function(e, t) {
        r.setOrClearFormRoastDataEntry(e.sku, "service_transfer", {
            actionType: "service_transfer",
            quantity: e.toService,
            sku: e.sku,
            weight: e.weight,
            roastType: t,
            productId: e.productId
        })
    }, n.submitForm = function(e) {
        if (e.preventDefault(), n.error = "", n.editable) {
            var t = a.generatePromises(n.date, n.formData);
            i.all(t).then(function() {
                $("#finalCountdown").submit()
            }, function(e) {
                Honeybadger.notify(e, {
                    message: e
                }), n.error = "There was an error submitting the form"
            })
        } else n.error = "This form can only be submitted for the current fiscal month plus 2 days."
    }, l()
}]), angular.module("inventory").controller("RoastActionsController", ["$scope", "SettingsFactory", "FormFactory", function(r, e, n) {
    var t = 0,
        i = ["damaged_waste", "nola", "cold_brew", "oji"],
        s = ["cafe_transfer"],
        a = ["nola", "cold_brew", "oji"];
    r.data = {}, r.formData = [], r.cafeTransferQuantity = 0;
    var o = function() {
            e.getSettings().$promise.then(function() {
                r.data.otherActions = e.getOtherActions(), r.data.receivingCafes = e.getCafeBranchNumbers(), r.roastTypes = e.getRoastTypes()
            })
        },
        l = function(e) {
            "damaged_waste" === e.actionType ? r.roast.pendingDamagedWaste = e.quantity : -1 !== a.indexOf(e.actionType) ? (r.roast.pendingRebuilds.count += e.quantity, r.roast.pendingRebuilds[e.actionType] += e.quantity) : r.cafeTransferQuantity += e.quantity
        };
    r.addDefaultAction = function() {
        r.formData.push({
            actionType: r.data.otherActions[0].value,
            receivingCafe: r.data.receivingCafes[0].branch_number,
            quantity: t,
            variantId: r.roast.variantId,
            sku: r.roast.sku,
            weight: r.roast.weight,
            roastType: r.roastType
        })
    }, r.addSavedActions = function() {
        var e = n.getFormRoastEntry(r.roast.sku);
        $.each(e, function(e, t) {
            0 <= i.indexOf(e) ? r.formData.push(t) : 0 <= s.indexOf(e) && $.map(t, function(e) {
                r.formData.push(e)
            })
        })
    }, r.addActions = function() {
        r.cafeTransferQuantity = 0, r.addSavedActions(), $.isEmptyObject(r.formData) && r.addDefaultAction()
    }, r.isDisabled = function(n, i) {
        return !(0 <= s.indexOf(n.value)) && 0 < $.grep(r.formData, function(e, t) {
            return e.actionType === n.value && t !== i
        }).length
    }, r.submitActions = function() {
        var t = [];
        r.roast.pendingRebuilds = {
            count: 0
        }, $.each(a, function(e, t) {
            r.roast.pendingRebuilds[t] = 0
        }), $.map(r.formData, function(e) {
            l(e), "cafe_transfer" === e.actionType ? t.push(e) : n.setFormRoastDataEntry(r.roast.sku, e.actionType, e), t.length && (r.roast.pendingToCafe = r.cafeTransferQuantity, n.setFormRoastDataEntry(r.roast.sku, "cafe_transfer", t))
        })
    }, o()
}]), angular.module("inventory").controller("VarianceController", ["$scope", "SettingsFactory", function(e, t) {
    (function() {
        t.getSettings().$promise.then(function() {
            e.roastTypes = t.getRoastTypes()
        })
    })()
}]), angular.module("inventory").directive("invDatepicker", function() {
    return {
        restrict: "A",
        scope: {
            showDatePicker: "@",
            begin: "@",
            end: "@"
        },
        link: function(e, t, n) {
            $(t).datepicker({
                dateFormat: "yy-mm-dd",
                altField: n.altfield,
                minDate: moment(n.begin).toDate(),
                maxDate: moment(n.end).toDate()
            }), e.$watch("showDatePicker", function(e) {
                "true" === e ? $(t).show() : $(t).hide()
            })
        }
    }
}), angular.module("inventory").directive("invRoastActions", function() {
    return {
        restrict: "A",
        scope: {
            roast: "=",
            roastType: "@"
        },
        templateUrl: "roast_actions.html",
        controller: "RoastActionsController",
        link: function(t, n) {
            $(n).on("hidden", function() {
                $.isEmptyObject(t.formData) || t.$apply(function() {
                    t.formData = [], t.roast = null
                })
            }), t.$watch("roast", function(e) {
                e && ($(n).modal(), t.addActions())
            }), t.submitForm = function() {
                t.submitActions(), t.formData = [], t.roast = null, $(n).modal("hide")
            }
        }
    }
}), angular.module("inventory").directive("step", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(e, t, n, i) {
            i.$validators.step = function() {
                return !1 === t[0].validity.stepMismatch
            }
        }
    }
}), angular.module("inventory").directive("invSticky", ["$window", function(i) {
    return {
        restrict: "A",
        link: function(e, t) {
            var n = $(t).offset().top;
            angular.element(i).bind("scroll", function() {
                $(t).toggleClass("pos-fix top-0 bb b--light-silver", $(this).scrollTop() > n)
            })
        }
    }
}]), angular.module("inventory").directive("invVariance", ["FormFactory", function(r) {
    return {
        restrict: "A",
        scope: {
            roast: "=",
            roastType: "@"
        },
        templateUrl: "variance.html",
        controller: "VarianceController",
        link: function(t, n) {
            var i = "comment";
            $(n).on("hidden", function() {
                t.roast && t.$apply(function() {
                    t.roast = null
                })
            }), t.$watch("roast", function(e) {
                e && $(n).modal()
            }), t.saveChangedComment = function() {
                var e = t.roast.note;
                e.sku = t.roast.sku, r.setFormRoastDataEntry(t.roast.sku, i, e), t.roast = null, $(n).modal("hide")
            }
        }
    }
}]), angular.module("inventory").factory("AssemblyRebuildFactory", ["NSProxyService", "SettingsFactory", "QuantityToWeightService", "RetailToServiceSkuFactory", function(n, e, i, r) {
    var t = {},
        s = "",
        a = "",
        o = "",
        l = {
            nola: "CNOLA Beans",
            oji: "OJI Beans - Cafe",
            cold_brew: "Cold Brew Beans - Cafe"
        };
    return t.createToService = function(e, t) {
        return n.assemblyBuilds(a).save({
            starting_sku: t.sku,
            ending_sku: r.serviceSku(t),
            branch_number: s,
            quantity: i.run(t.roastType, t.quantity, t.weight, "assembly_rebuild"),
            employee_number: o,
            transaction_date: moment(e).toISOString()
        }).$promise.then(function(e) {
            return e
        }, function(e) {
            return Promise.reject(e)
        })
    }, t.createRebuild = function(e, t) {
        return n.assemblyBuilds(a).save({
            starting_sku: t.sku,
            ending_sku: l[t.actionType],
            branch_number: s,
            quantity: i.run(t.roastType, t.quantity, t.weight, "assembly_rebuild"),
            employee_number: o,
            transaction_date: moment(e).toISOString()
        }).$promise.then(function(e) {
            return e
        }, function(e) {
            return Promise.reject(e)
        })
    }, t.fromCurrentAccount = function(e) {
        return n.assemblyBuilds(a).get({
            "filter[transaction_date]": moment(e).toISOString(),
            "filter[branch_number]": s
        }).$promise.then(function(e) {
            return e
        })
    }, t.initialize = function() {
        return e.getSettings().$promise.then(function() {
            a = e.getNsProxyHost(), s = e.getBranchNumber(), o = e.getEmployeeNumber()
        })
    }, t.initialize(), t
}]), angular.module("inventory").factory("CompareWeightsFactory", function() {
    var e = {
        heavierRoast: function(e, t) {
            return parseFloat(e.weight) > parseFloat(t.weight) ? e : t
        },
        lighterRoast: function(e, t) {
            return parseFloat(e.weight) < parseFloat(t.weight) ? e : t
        }
    };
    return e
}), angular.module("inventory").factory("DataFactory", ["$q", "TransferOrderFactory", "AssemblyRebuildFactory", "VariantService", "InventoryService", function(t, e, n, i, r) {
    var s = {},
        a = "",
        o = function() {
            return r.fetchOpVariantData().get({
                date: a
            }, function(e) {
                $.map(e.variants, function(e) {
                    i.initializeVariant(e)
                })
            })
        },
        l = function() {
            return i.updateHiddenSkus()
        },
        u = function() {
            return e.fromCurrentAccount(a).then(function(e) {
                return $.map(e, function(e) {
                    return i.updateVariantWithTransferOrders(e)
                })
            })
        },
        c = function() {
            return n.fromCurrentAccount(a).then(function(e) {
                return $.map(e.data, function(e) {
                    return i.updateVariantWithAssemblyRebuilds(e)
                })
            })
        },
        d = function() {
            return [u(), c()]
        };
    return s.initialize = function(e) {
        return a = e, o().$promise.then(function() {
            return t.all(d()).then(function() {
                return l()
            })
        })
    }, s
}]), angular.module("inventory").factory("FormFactory", function() {
    var e = {},
        i = {};
    return e.formRoastEntryIsEmpty = function(e) {
        return $.isEmptyObject(i[e])
    }, e.getFormRoastEntry = function(e) {
        return i[e]
    }, e.getForm = function() {
        return i
    }, e.setOrClearFormRoastDataEntry = function(e, t, n) {
        $.isNumeric(n.quantity) ? this.setFormRoastDataEntry(e, t, n) : this.clearFormRoastDataEntry(e, t)
    }, e.clearFormRoastDataEntry = function(e, t) {
        this.formRoastEntryIsEmpty(e) || delete i[e][t]
    }, e.setFormRoastDataEntry = function(e, t, n) {
        this.formRoastEntryIsEmpty(e) && (i[e] = {}), i[e][t] = n
    }, e
}), angular.module("inventory").factory("ProcessCombinedSkusFactory", ["VariantFactory", "VariantTotalsService", function(a, n) {
    var e = {},
        o = function(e) {
            return e.replace("combined-", "")
        },
        i = function(e, t) {
            return n.totalAvailable(e) - n.totalUsed(e) - n.totalPending(e) - t < 0
        },
        r = function(e) {
            return n.totalAvailable(e) - n.totalUsed(e) - n.totalPending(e)
        },
        l = function(e, t) {
            var n = i(e, t) ? r(e) : t;
            return a.set({
                sku: e.sku,
                totalPending: n
            }), n
        },
        t = function(e) {
            var t = e,
                n = a.get(o(e.sku)),
                i = a.get(n.combinedWith);
            if (n && n.combined) {
                var r = e.quantity,
                    s = l(n, r);
                t.sku = n.sku, t.quantity = s, t.weight = n.weight, s < r && (t.combinedSku = i.sku, t.remainingQuantity = r - s, t.combinedSkuWeight = i.weight)
            }
            return t
        };
    return e.cleanData = function(e) {
        return t(e)
    }, e
}]), angular.module("inventory").factory("ProcessFormDataFactory", ["AssemblyRebuildFactory", "TransferOrderFactory", "ProcessCombinedSkusFactory", "WeightToQuantityService", function(i, r, s, a) {
    var e = {},
        o = [],
        l = {
            roastery_transfer: function(e, t) {
                var n = s.cleanData(t);
                n.transferOrderItems = [], n.combinedSku && n.transferOrderItems.push({
                    sku: n.combinedSku,
                    quantity: a.run(n.roastType, n.remainingQuantity, n.combinedSkuWeight, "transfer_order")
                }), n.transferOrderItems.push({
                    sku: n.sku,
                    quantity: a.run(n.roastType, n.quantity, n.weight, "transfer_order")
                }), o.push(r.createRoasteryTransfer(e, n))
            },
            service_transfer: function(e, t) {
                var n = s.cleanData(t);
                n.combinedSku && o.push(i.createToService(e, {
                    sku: n.combinedSku,
                    quantity: n.remainingQuantity,
                    roastType: n.roastType,
                    weight: n.combinedSkuWeight
                })), o.push(i.createToService(e, n))
            },
            rebuild: function(e, t) {
                var n = s.cleanData(t);
                n.combinedSku && o.push(i.createRebuild(e, {
                    sku: n.combinedSku,
                    quantity: n.remainingQuantity,
                    roastType: n.roastType,
                    weight: n.combinedSkuWeight,
                    actionType: t.actionType
                })), o.push(i.createRebuild(e, n))
            },
            cafe_transfer: function(e, t) {
                var n = s.cleanData(t);
                n.transferOrderItems = [], n.combinedSku && n.transferOrderItems.push({
                    sku: n.combinedSku,
                    quantity: a.run(n.roastType, n.remainingQuantity, n.combinedSkuWeight, "transfer_order")
                }), n.transferOrderItems.push({
                    sku: n.sku,
                    quantity: a.run(n.roastType, n.quantity, n.weight, "transfer_order")
                }), o.push(r.createCafeTransfer(e, n))
            }
        };
    return e.generatePromises = function(n, e) {
        return $.each(e, function(e, t) {
            "date" !== e && $.each(t, function(t, e) {
                switch (t) {
                    case "roastery_transfer":
                    case "service_transfer":
                        l[t](n, e);
                        break;
                    case "nola":
                    case "cold_brew":
                    case "oji":
                        l.rebuild(n, e);
                        break;
                    case "cafe_transfer":
                        $.map(e, function(e) {
                            l[t](n, e)
                        })
                }
            })
        }), o
    }, e
}]), angular.module("inventory").factory("RetailToServiceSkuFactory", ["VariantService", function(n) {
    var e = {
        serviceSku: function(t) {
            var e = n.getVariants().filter(function(e) {
                return "service" === e.type && e.productId === t.productId && !0 !== e.combinedEntry
            });
            return 0 < e.length ? e.sort(function(e, t) {
                return t.weight - e.weight
            })[0].sku : t.sku
        }
    };
    return e
}]), angular.module("inventory").factory("SettingsFactory", ["InventoryService", function(e) {
    var t = {},
        n = null,
        i = {};
    return t.getBranchNumber = function() {
        return i.branchNumber
    }, t.getOtherActions = function() {
        return i.otherActions
    }, t.getActiveView = function() {
        return i.activeView
    }, t.getNsProxyHost = function() {
        return i.nsProxyHost
    }, t.getCafeBranchNumbers = function() {
        return i.receivingCafes
    }, t.getRoasteryBranchNumber = function() {
        return i.roasteryBranchNumber
    }, t.getRoastTypes = function() {
        return i.roastTypes
    }, t.getSortOrder = function() {
        return i.sortOrder
    }, t.getDateSettings = function() {
        return i.dateSettings
    }, t.getEmployeeNumber = function() {
        return i.employeeNumber
    }, t.getSettings = function() {
        return n || (n = e.initialize().get({}, function(e) {
            i.branchNumber = e.branch_number, i.otherActions = e.other_actions, i.receivingCafes = e.cafe_branch_numbers, i.roasteryBranchNumber = e.roastery_branch_number, i.activeView = e.active_view, i.nsProxyHost = e.ns_proxy_host, i.roastTypes = e.roast_types, i.sortOrder = e.sort_order, i.dateSettings = e.date_settings, i.employeeNumber = e.employee_number
        })), n
    }, t
}]), angular.module("inventory").factory("SkuFactory", function() {
    var e = {
        facility: function(e) {
            return e ? e.split("-")[0] : ""
        },
        roast: function(e) {
            return e ? e.split("-")[1] : ""
        },
        isService: function(e) {
            return 0 <= e.indexOf("SVC")
        },
        isRetail: function(e) {
            return 0 <= e.indexOf("RTL")
        },
        isRoastMatch: function(e, t) {
            return this.facility(e) === this.facility(t) && this.roast(e) === this.roast(t) && (this.isService(e) && this.isService(t) || this.isRetail(e) && this.isRetail(t)) && e !== t
        }
    };
    return e
}), angular.module("inventory").factory("TransferOrderFactory", ["NSProxyService", "DataStoreService", "SettingsFactory", function(n, t, e) {
    var i = {},
        r = "",
        s = "",
        a = "";
    return i.fromCurrentAccount = function(e) {
        return n.transferOrders(s).get({
            include: "transfer_order_items",
            "filter[from_branch_number]": r,
            "filter[transaction_date]": moment(e).toISOString()
        }).$promise.then(function(e) {
            return t.organizeData(e, "transfer_order_items")
        })
    }, i.createRoasteryTransfer = function(e, t) {
        return n.transferOrders(s).save({
            from_branch_number: r,
            to_branch_number: _roasteryBranchNumber,
            transaction_date: moment(e).toISOString(),
            employee_number: a,
            transfer_order_items_attributes: t.transferOrderItems,
            auto_fulfill: !0,
            auto_receive: !0
        }).$promise.then(function(e) {
            return e
        }, function(e) {
            return Promise.reject(e)
        })
    }, i.createCafeTransfer = function(e, t) {
        return n.transferOrders(s).save({
            from_branch_number: r,
            to_branch_number: t.receivingCafe,
            transaction_date: moment(e).toISOString(),
            employee_number: a,
            transfer_order_items_attributes: t.transferOrderItems,
            auto_fulfill: !0
        }).$promise.then(function(e) {
            return e
        }, function(e) {
            return Promise.reject(e)
        })
    }, i.initialize = function() {
        return e.getSettings().$promise.then(function() {
            s = e.getNsProxyHost(), r = e.getBranchNumber(), _roasteryBranchNumber = e.getRoasteryBranchNumber(), a = e.getEmployeeNumber()
        })
    }, i.initialize(), i
}]), angular.module("inventory").factory("VariantFactory", ["SkuFactory", function(n) {
    var e = {},
        i = {};
    return e.empty = function(e) {
        return $.isEmptyObject(i[e])
    }, e.combinableWithSku = function(t) {
        var e = $.grep(Object.keys(i), function(e) {
            return n.isRoastMatch(t, e)
        });
        if (e.length) return e[0]
    }, e.get = function(e) {
        return i[e]
    }, e.getAll = function() {
        return i
    }, e.getAllValues = function() {
        var n = [];
        return $.each(i, function(e, t) {
            n.push(t)
        }), n
    }, e.set = function(t) {
        i[t.sku] || (i[t.sku] = {}), $.map(Object.keys(t), function(e) {
            i[t.sku].hasOwnProperty(e) ? $.isNumeric(i[t.sku][e]) && "variantId" !== e && (i[t.sku][e] += t[e]) : i[t.sku][e] = t[e]
        })
    }, e
}]), angular.module("inventory").filter("negativeVariance", function() {
    return function(e) {
        return "(" + ($.isNumeric(e) ? e : 0) + ")"
    }
}), angular.module("inventory").filter("positiveVariance", function() {
    return function(e) {
        return $.isNumeric(e) ? e : 0
    }
}), angular.module("inventory").filter("sumTotals", function() {
    return function(e, t) {
        if (!e || 0 === e.length) return 0;
        for (var n = 0, i = 0; i < e.length; i++)
            for (var r = 0; r < t.length; r++) e[i].hasOwnProperty(t[r]) && $.isNumeric(e[i][t[r]]) && !0 !== e[i].hidden && (n += parseFloat(e[i][t[r]]));
        return n
    }
}), angular.module("inventory").factory("DataStoreService", function() {
    var e = {},
        i = yayson().Store;
    return e.organizeData = function(e, t) {
        var n = new i;
        return n.sync(e), n.findAll(t)
    }, e
}), angular.module("inventory").factory("InventoryService", ["$resource", function(e) {
    var t = {
        initialize: function() {
            return e("/api/service_account_inventory.json")
        },
        fetchOpVariantData: function() {
            return e("/api/service_account_inventory/variants.json")
        }
    };
    return t
}]), angular.module("inventory").factory("NSProxyService", ["$resource", function(t) {
    var e = {
        transferOrders: function(e) {
            return t(e + "/transfer_orders")
        },
        assemblyBuilds: function(e) {
            return t(e + "/assembly_rebuilds")
        },
        inventoryTransfers: function(e) {
            return t(e + "/inventory_transfers")
        }
    };
    return e
}]), angular.module("inventory").factory("QuantityToWeightService", function() {
    var e = {
        run: function(e, t, n, i) {
            if (this.isConvertible(e, i)) {
                var r = parseFloat(t) * parseFloat(n);
                return parseFloat(Math.ceil(2 * r)) / 2
            }
            return parseFloat(t)
        },
        isConvertible: function(e, t) {
            return "retail" === e && "assembly_rebuild" === t || "service" === e && "assembly_rebuild" !== t
        }
    };
    return e
}), angular.module("inventory").service("TransferService", ["SettingsFactory", function(e) {
    var t, n = function(e) {
            return t === e
        },
        i = function(e) {
            return !n(e)
        },
        r = function(e) {
            return n(e)
        };
    this.initialize = function() {
        return e.getSettings().$promise.then(function() {
            t = e.getRoasteryBranchNumber()
        })
    }, this.toRoasteryQuantity = function(e) {
        if (r(e.transfer_order.to_branch_number)) return parseFloat(e.quantity)
    }, this.toCafeQuantity = function(e) {
        if (i(e.transfer_order.to_branch_number)) return parseFloat(e.quantity)
    }, this.initialize()
}]), angular.module("inventory").service("VariantService", ["$filter", "VariantFactory", "InventoryService", "TransferService", "QuantityToWeightService", "WeightToQuantityService", "CompareWeightsFactory", function(e, a, t, s, o, i, l) {
    this.getVariants = function() {
        return a.getAllValues()
    }, this.initializeVariant = function(e) {
        e.rawFromCafe ? e.fromCafe = o.run(e.type, e.rawFromCafe, e.weight, "transfer_order") : e.rawFromRoastery && (e.fromRoastery = o.run(e.type, e.rawFromRoastery, e.weight, "transfer_order"));
        var t = a.combinableWithSku(e.sku);
        t && (e.combined = !0, e.combinedWith = t, a.set({
            sku: t,
            combined: !0,
            combinedWith: e.sku
        })), a.set(e)
    }, this.updateVariantWithAssemblyRebuilds = function(e) {
        if (!a.empty(e.attributes.starting_sku)) {
            var t = a.get(e.attributes.starting_sku),
                n = {
                    sku: e.attributes.starting_sku
                };
            e.attributes.ending_sku ? n.submittedRebuilds = i.run(t.type, e.attributes.quantity, t.weight, "assembly_rebuild") : n.toService = i.run(t.type, e.attributes.quantity, t.weight, "assembly_rebuild"), a.set(n)
        }
    }, this.updateVariantWithTransferOrders = function(e) {
        if (!a.empty(e.sku)) {
            var t = a.get(e.sku),
                n = {
                    sku: e.sku
                };
            if (s.toCafeQuantity(e)) {
                var i = s.toCafeQuantity(e);
                n.submittedToCafe = o.run(t.type, i, t.weight, "transfer_order")
            } else if (s.toRoasteryQuantity(e)) {
                var r = s.toRoasteryQuantity(e);
                n.toRoastery = o.run(t.type, r, t.weight, "transfer_order")
            }
            a.set(n)
        }
    }, this.updateHiddenSkus = function() {
        $.each(a.getAll(), function(e, t) {
            if (t.combined) {
                var n = a.get(t.combinedWith),
                    i = l.heavierRoast(t, n),
                    r = l.lighterRoast(t, n),
                    s = $.extend({}, t, {
                        sku: "combined-" + i.sku,
                        combinedWith: r.sku,
                        combinedEntry: !0,
                        variantId: i.variantId,
                        note: {
                            text: i.note.text,
                            variantId: i.note.variantId
                        }
                    });
                a.set(s), a.set({
                    sku: t.sku,
                    hidden: !0
                })
            }
        })
    }
}]), angular.module("inventory").service("VariantTotalsService", ["$filter", function(t) {
    this.totalAvailable = function(e) {
        return t("positiveVariance")(e.yestOnHand) + t("positiveVariance")(e.fromRoastery) + t("positiveVariance")(e.fromCafe)
    }, this.totalUsed = function(e) {
        return t("positiveVariance")(e.toRoastery) + t("positiveVariance")(e.submittedDamagedWaste) + t("positiveVariance")(e.submittedRebuilds) + t("positiveVariance")(e.submittedToCafe) + t("positiveVariance")(e.onHand)
    }, this.totalPending = function(e) {
        return t("positiveVariance")(e.totalPending)
    }
}]), angular.module("inventory").factory("WeightToQuantityService", function() {
    var e = {
        run: function(e, t, n, i) {
            return this.isConvertible(e, i) ? parseFloat(t) / parseFloat(n) : parseFloat(t)
        },
        isConvertible: function(e, t) {
            return "retail" === e && "assembly_rebuild" === t || "service" === e && "assembly_rebuild" !== t
        }
    };
    return e
}), $("body.service_account_inventory_counts").length && ($("#js-op-inventory-cal").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: -1,
    maxDate: 0
}), $(".js-op-inventory-cal").on("click", function() {
    $("#js-op-inventory-date").datepicker("show")
}), $(".js-op-inventory-date").on("change", function() {
    $("form.js-date-form").submit()
})), $(document).ready(function() {
    return $("input[type=checkbox][name=allowed]").on("click", function(e) {
        var t, n, i;
        return i = (t = $(e.target)).parents("tr"), n = t.parent("form"), i.find("a").toggleClass("disabled"), i.find(".custom-price").toggleClass("muted"), $.post(n.attr("action"), {
            service_account_variant_exception: {
                allowed: t.prop("checked")
            },
            variant_id: t.data("variant-id"),
            id: t.data("account-id")
        })
    })
}), $(document).ready(function() {
    function t(e) {
        for (var t = parseFloat($("." + e + ':not(".history") table tr').not(".history").size() - 2), n = 0, i = 0; i < t - 1; i++) {
            var r = $("." + e + " table tbody td:nth-child(2) input")[i],
                s = $(r).val();
            "" == s || isNaN(parseFloat(s)) || (n += parseFloat(s))
        }
        $("." + e + " table tr:nth-child(" + t + ") td:nth-child(2)").text(n)
    }

    function n(e, t) {
        var n = e.parents().eq(3),
            i = e.index() + 1,
            r = n.find("table tbody tr:nth-child(" + n.find("table tbody tr").size() + ") td:nth-child(" + i + ")");
        "add" == t ? (n.find("table tr td:nth-child(" + i + ")").addClass("highlight-column"), r.addClass("highlight-base")) : (n.find("table tr td:nth-child(" + i + ")").removeClass("highlight-column"), r.removeClass("highlight-base"))
    }

    function r(e) {
        e = JSON.stringify(e), $.ajax({
            url: "/service_account_quick_order",
            type: "post",
            data: e,
            success: function() {
                document.location.reload(!0)
            }
        })
    }

    function i(e, t) {
        var n = {};
        return s(t.data("package-type")) ? n.variant_id = $(e).attr("id").split("-")[1] : (n.product_id = $(e).attr("id").split("-")[1], n.packaging_type = t.data("package-type")), n.quantity = e.val(), n
    }

    function s(e) {
        return -1 !== ["other", "consumer", "specialty", "culinary"].indexOf(e)
    }

    function a(e) {
        return '<svg xmlns="http://www.w3.org/2000/svg" class="u-center" viewBox="0 0 32 32" width="32" height="32" fill="' + e + '"><path transform="translate(2)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(8)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  /></path><path transform="translate(14)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(20)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path><path transform="translate(26)" d="M0 12 V20 H4 V12z"><animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" /></path></svg>'
    }

    function o(e) {
        e.find("table").prepend("<span class='pos-abs top-0 bottom-0 left-0 right-0 bg-near-white tc z-index-999' id='table-loader'><h3>Adding items to cart</h3><br> " + a("#01a1dd") + "</span>").fadeIn(500)
    }

    function l(e, t) {
        var n = {
            items: []
        };
        return e.find("table td:nth-child(" + t + ") input").each(function() {
            "" != $(this).val() && n.items.push(i($(this), e))
        }), n
    }
    $("body.service_accounts").length && ($('select[name="service_account[account_type]"]').change(function() {
        "Wholesale" === $(this).val() ? $(".service_account_branch_number input").prop("disabled", !0) : $(".service_account_branch_number input").prop("disabled", !1)
    }), $('select[name="service_account[account_type]"]').change()), $("body.service_account_order_histories").length && $(".js-datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    }), ($("body.service_account_overviews-show").length || $("body.quick_stores-index").length || $("body.retail_inventories").length) && ($(".js-new-add-to-cart").on("click", function(e) {
        e.preventDefault();
        var t = $(this),
            n = t.parents().eq(3),
            i = l(n, t.index() + 1);
        if (!(0 < i.items.length)) return !1;
        o(n), r(i)
    }), $(".js-highlight-column-filter").hover(function() {
        n($(this), "add")
    }, function() {
        n($(this), "remove")
    }), $("input[type='text'].js-new-dashboard-order").on("focus", function() {
        n($(this).parent(), "add")
    }), $("input[type='text'].js-new-dashboard-order").change(function() {
        t($(this).parents().eq(4).first().data("table-section"))
    }), $("input[type='text'].js-new-dashboard-order").on("keyup blur", function() {
        n($(this).parent(), "remove");
        var e = $(this).val().replace(/[A-Za-z]/g, "");
        isNaN(parseFloat(e)) ? $(this).val("") : $(this).val(e), t($(this).parents().eq(4).first().data("table-section"))
    }), sectionClickListener())
}), $(document).ready(function() {
    0 < $(".js-sign-in-shared").length && $(document).on("click", ".js-toggle-to-sign-up, .js-toggle-to-sign-in", function(e) {
        e.preventDefault(), $(".js-sign-up-view-shared, .js-sign-in-view-shared").toggle()
    })
}), CheckoutPage = {
    disable: function() {
        $(".js-place-order-button").prop("disabled", !0)
    },
    enable: function() {
        $(".js-place-order-button").prop("disabled", !1)
    },
    highlightSelectedOption: function(e) {
        e.parent().find(".js-shipping-service-label").removeClass("book").addClass("bold")
    },
    infoToggle: function() {
        $(".js-shipping-detailed-info").on("click", function() {
            var e = $(".js-display-label");
            "Show Details" === e.text().trim() ? e.text("Hide Details") : e.text("Show Details"), $(".js-description").toggleClass("dn")
        })
    },
    giftCodeApplication: function(e) {
        (e = $.parseJSON(e)).success ? ($(".js-remove-gift-code").data("code", e.coupon_code), $(".js-coupon-code-applied").html(e.coupon_code + " applied."), $(".js-apply-gift-code, .js-show-gift-code").toggle()) : $(".js-gift-code-error").html(e.error_message), this.enable(), this.showBillingInfo($("#js-checkout-total").html())
    },
    giftCodeRemoval: function(e) {
        (e = $.parseJSON(e)).success ? ($(".js-apply-gift-code, .js-show-gift-code").toggle(), this.enable(), this.showBillingInfo($("#js-checkout-total").html())) : location.reload()
    },
    showBillingInfo: function(e) {
        "$0.00" === e || invoiceableCustomer ? ($(".js-billing-partials").hide(), $(".js-no-payment-info-required").show()) : ($(".js-billing-partials").show(), $(".js-no-payment-info-required").hide())
    },
    toggleHighlight: function() {
        $(".js-shipping-service-label").toggleClass("book").toggleClass("bold")
    }
}, $(document).ready(function() {
    ($("body.reviews-show").length || $("body.payments-update").length) && (CheckoutPage.highlightSelectedOption($("input.js-shipping-options:checked")), $(".js-shipping-options").on("click", function() {
        CheckoutPage.toggleHighlight(), CheckoutPage.disable();
        var e = this.value,
            t = this.id;
        $.ajax({
            type: "PUT",
            url: "/my_orders/" + t + "/checkout/review",
            data: {
                transport_method_id: e
            },
            success: function() {
                $(".js-transport-method").val(e), CheckoutPage.showBillingInfo($("#js-checkout-total").html()), CheckoutPage.enable()
            },
            error: function() {
                location.reload()
            }
        })
    }), CheckoutPage.infoToggle()), ($("body.reviews-show").length || $("body.payments-update").length || $("body.guest_checkouts-review").length) && ($("#js-apply-gift-code").on("click", function(e) {
        e.preventDefault(), $(".js-gift-code-error").html(""), CheckoutPage.disable(), $.ajax({
            type: "POST",
            url: "/apply_order_coupon",
            data: {
                coupon: {
                    code: $(".js-gift-code-input").val(),
                    order_id: $(".js-order-id").val()
                }
            },
            dataType: "script",
            error: function() {
                location.reload()
            }
        })
    }), $(".js-remove-gift-code").on("click", function(e) {
        e.preventDefault(), CheckoutPage.disable(), $.ajax({
            type: "DELETE",
            url: "/apply_order_coupon",
            data: {
                coupon: {
                    code: $(".js-remove-gift-code").data("code"),
                    order_id: $(".js-remove-gift-code").data("orderId")
                }
            },
            dataType: "script",
            error: function() {
                location.reload()
            }
        })
    })), $("body.guest_checkouts-review").length && (CheckoutPage.highlightSelectedOption($("input.js-shipping-options:checked")), $(".js-shipping-options").on("click", function() {
        CheckoutPage.toggleHighlight(), CheckoutPage.disable();
        var e = this.value,
            t = this.id;
        $.ajax({
            type: "PUT",
            url: "/guest_checkout/change_shipping?order_id=" + t,
            data: {
                transport_method_id: e
            },
            success: function() {
                $(".js-transport-method").val(e), CheckoutPage.enable()
            },
            error: function() {
                location.reload()
            }
        })
    }), CheckoutPage.infoToggle())
}), $(document).ready(function() {
    0 < $("body.sign_ins").length && "" === $("#sign_in_email").val() && $("#sign_in_email").focus()
}), $('a.js-smooth-scroll[href^="#"]').on("click", function(e) {
    e.preventDefault();
    var t = this.hash,
        n = $(t);
    $("html, body").stop().animate({
        scrollTop: n.offset().top
    }, 900, "swing", function() {
        window.location.hash = t
    })
}), $(document).ready(function() {
    0 < $("body.special_orders").length && $(document).on("change keyup", ".js-quantity-input", function() {
        setTimeout(function() {
            recalculateTotals()
        }, 500)
    })
});
var UpdateTableHeaders = debounce(function() {
    $(".js-sticky-section").each(function() {
        var e = $(this),
            t = e.offset(),
            n = $(window).scrollTop(),
            i = $(".js-floating-header", this);
        n > t.top && n < t.top + (e.height() - i.height()) ? i.css({
            visibility: "visible",
            left: t.left + 1 - $(window).scrollLeft()
        }) : i.css({
            visibility: "hidden"
        })
    })
}, 15);
$(document).ready(function() {
    $(".js-sticky-section").length && $(".js-sticky-section").each(function(e, t) {
        $(t).each(function() {
            $(".js-sticky-header").children().each(function() {
                $(this).attr("style") || $(this).width($(this).width())
            });
            var e = $(".js-sticky-header", this);
            e.before(e.clone()).css("width", e.width() - 1).css("height", e.height()).addClass("floating-table-header js-floating-header"), e.children().css({
                height: e.height()
            })
        }), $(window).scroll(UpdateTableHeaders).trigger("scroll")
    })
});
var StoreShowNotes = {
        perfectlyGroundNotes: function() {
            return $(".js-ground-coffee-notes")
        },
        strategyButtonsExist: function() {
            return 0 < $(".js-strategy-buttons").length
        },
        wholeBeanNotes: function() {
            return $(".js-whole-bean-notes")
        },
        toggle: function(e) {
            this.strategyButtonsExist() && (this.perfectlyGroundNotes().toggle(e), this.wholeBeanNotes().toggle(!e))
        }
    },
    PieChartConfig = {
        setupPieChart: function() {
            pie = new d3pie("js-blend-pie-chart", this.options()), PieChartConfig.svgAddedlistener()
        },
        svgAddedlistener: function() {
            MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            var e = new MutationObserver(function(e, t) {
                    $("#blends-labelGroup0-inner").length && "0" !== $("#blends-labelGroup0-inner").css("opacity") && (setTimeout(PieChartConfig.resetViewBox, 10), t.disconnect())
                }),
                t = document.getElementById("js-blend-pie-chart"),
                n = {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["style"]
                };
            e.observe(t, n)
        },
        resetViewBox: function() {
            var e = $("#js-blend-pie-chart svg");
            e.addClass("db"), $("#blends-footer").remove(), e[0].setAttribute("viewBox", "0 0 600 350"), e.removeAttr("height").removeAttr("width");
            var t = e[0].getBBox(),
                n = [t.x, t.y, t.width + 10, t.height].join(" ");
            e[0].setAttribute("viewBox", n)
        },
        options: function() {
            return {
                size: {
                    canvasWidth: 600,
                    canvasHeight: 350
                },
                data: {
                    content: componentData
                },
                labels: {
                    outer: {
                        pieDistance: 30
                    },
                    inner: {
                        format: "percentage"
                    },
                    mainLabel: {
                        color: "#555",
                        font: "Avenir Next",
                        fontSize: 14
                    },
                    percentage: {
                        color: "#fff",
                        font: "Avenir Next",
                        fontSize: 14,
                        decimalPlaces: 0
                    },
                    value: {
                        color: "#fff",
                        font: "Avenir Next"
                    },
                    lines: {
                        enabled: !0,
                        color: "#CCC",
                        style: "straight"
                    },
                    truncation: {
                        enabled: !1
                    }
                },
                effects: {
                    pullOutSegmentOnClick: {
                        effect: "none"
                    },
                    load: {
                        effect: "none"
                    },
                    highlightSegmentOnMouseover: !1
                },
                misc: {
                    colors: {
                        segments: ["#777", "#CCC", "#999"]
                    },
                    cssPrefix: "blends-"
                }
            }
        }
    };
$(document).ready(function() {
    $("body.stores.stores-show").length && $("#js-blend-pie-chart").length && "undefined" != typeof d3pie && PieChartConfig.setupPieChart()
});
var StoreShowPurchaseType = {
        purchaseType: function() {
            return $("input[name='purchase_type']:checked")
        },
        purchaseTypeValue: function() {
            return this.purchaseType().val()
        },
        isRecurringPurchase: function() {
            return "subscribe_and_save" === this.purchaseTypeValue()
        },
        isSinglePurchase: function() {
            return "one_time_purchase" === this.purchaseTypeValue()
        },
        buttonElement: function() {
            return $(".js-purchase-type-buttons")
        },
        buttonsExist: function() {
            return 0 < this.buttonElement().length
        },
        toggle: function(e) {
            this.buttonsExist() && this.buttonElement().toggle(e)
        }
    },
    StoreShowSelectedStrategy = {
        purchaseType: function() {
            return StoreShowPurchaseType
        },
        value: function() {
            return $(".js-strategy-button:checked").val()
        },
        isGroundCoffee: function() {
            return "ground_coffee" === this.value()
        },
        isJiffy: function() {
            return "jiffy" === this.value()
        },
        addToCartFormElement: function() {
            return $(".js-add-to-cart-form")
        },
        groundCoffeeCartFormElement: function() {
            return $(".js-add-to-cart-form-ground_coffee")
        },
        jiffyCartFormElement: function() {
            return $(".js-add-to-cart-form-jiffy")
        },
        subscriptionFormElement: function() {
            return $(".js-subscription-form")
        },
        isSubscribable: function() {
            return 0 < $(
                ".js-purchase-type-buttons").length
        },
        showAddToCart: function() {
            return !this.isSubscribable() || this.isSubscribable() && this.purchaseType().isSinglePurchase()
        },
        showSubscribeNow: function() {
            return this.isSubscribable() && this.purchaseType().isRecurringPurchase()
        },
        showCartForm: function() {
            this.addToCartFormElement().hide(), this.subscriptionFormElement().hide(), this.isJiffy() ? (this.jiffyCartFormElement().toggle(this.showAddToCart()), this.subscriptionFormElement().toggle(this.showSubscribeNow())) : this.isGroundCoffee() ? this.groundCoffeeCartFormElement().show() : this.addToCartFormElement().show()
        }
    },
    StoreShowSelectedSubscriptionSize = {
        data: function() {
            return $(".js-subscription-form").find('input[type=radio][name="subscription_size"]:checked').data()
        },
        groupName: function() {
            return this.data().groupName
        },
        link: function() {
            return "/at-home/selection?size=" + this.planSize() + "&days_between_shipments=14&plan=" + this.groupName()
        },
        oneTimePrice: function() {
            return this.data().oneTimePrice
        },
        planSize: function() {
            return this.data().planSize
        },
        savings: function() {
            return this.data().savingsText.replace("%{savings}", this.subscriptionSavings()).replace("%{size}", this.variantSize())
        },
        subscriptionPrice: function() {
            return this.data().subscriptionPrice
        },
        subscriptionSavings: function() {
            return this.data().subscriptionSavings
        },
        variantId: function() {
            return this.data().subscriptionVariant
        },
        variantSize: function() {
            return this.data().variantSize
        },
        subscriptionPriceElement: function() {
            return $(".js-variant-subscription-price")
        },
        subscriptionSavingsElement: function() {
            return $(".js-subscription-savings")
        },
        oneTimePriceElement: function() {
            return $(".js-variant-one-time-price")
        },
        subscribeNowElement: function() {
            return $(".js-subscribe-now")
        },
        allShippingEstimateElements: function() {
            return $(".js-shipping-estimate")
        },
        selectedSubscriptionShippingEstimateElement: function() {
            return $(".js-shipping-estimate-subscription-" + this.variantId())
        },
        subscriptionFormElementExists: function() {
            return 0 < $(".js-subscription-form").length
        },
        setSubscriptionDetails: function(e, t) {
            e && t && this.subscriptionFormElementExists() && (this.subscriptionPriceElement().html(this.subscriptionPrice()), this.subscriptionSavingsElement().html(this.savings()), this.oneTimePriceElement().html(this.oneTimePrice()), this.subscribeNowElement().attr("href", this.link()), this.allShippingEstimateElements().hide(), this.selectedSubscriptionShippingEstimateElement().show())
        }
    },
    StoreShowSelectedVariant = {
        object: function() {
            return $(".js-add-to-cart-form:visible").find('input[type=radio][name="cart_item_[model_id]"]:checked')
        },
        value: function() {
            return this.object().val()
        },
        show: function() {
            return this.object().show()
        },
        isSoldOut: function() {
            return this.object().hasClass("js-variant-sold-out")
        },
        allSlideshowElements: function() {
            return $(".js-variant-slideshow")
        },
        selectedVariantSlideshowElement: function() {
            return $(".js-slideshow-" + this.value())
        },
        allDetailElements: function() {
            return $(".js-variant-details-box")
        },
        selectedVariantDetailElement: function() {
            return $(".js-variant-details-" + this.value())
        },
        allCartElements: function() {
            return $(".js-shipping-estimate, .js-add-to-cart-btn, .js-cart-quantity-input")
        },
        selectedVariantCartElements: function() {
            return $(".js-shipping-estimate-alc-" + this.value() + ", .js-add-to-cart-btn, .js-cart-quantity-input")
        },
        giftSubscriptionPromoElement: function() {
            return $(".js-gift-subscription-promo")
        },
        addOnVariantIds: function() {
            return $(".js-gift-subscription-promo").data("giftSubscriptionAddOns")
        },
        isAnGiftSubscriptionAddOnVariant: function() {
            return -1 < $.inArray(this.value(), this.addOnVariantIds())
        },
        giftSubscriptionPromoExists: function() {
            return 0 < this.giftSubscriptionPromoElement().length
        },
        toggleGiftSubscriptionPromo: function() {
            this.giftSubscriptionPromoExists() && this.giftSubscriptionPromoElement().toggle(this.isAnGiftSubscriptionAddOnVariant())
        },
        showSlideShow: function() {
            this.allSlideshowElements().hide(), this.selectedVariantSlideshowElement().show()
        },
        setDetails: function() {
            this.allDetailElements().hide(), this.toggleGiftSubscriptionPromo(), this.selectedVariantDetailElement().show(), QuantityInput.resetVariant($(".js-add-to-cart-form:visible"), this.value()), this.checkForSoldOut()
        },
        checkForSoldOut: function() {
            this.isSoldOut() ? this.allCartElements().hide() : this.selectedVariantCartElements().show()
        }
    },
    StoreShowServingSize = {
        selectedBrewMethod: function() {
            return $("input[type=radio][name=brew_method]:checked").val()
        },
        hideAllSizes: function() {
            $(".js-serving-size").hide()
        },
        showSizesForSelectedBrewMethod: function() {
            $(".js-serving-size-" + this.selectedBrewMethod()).show()
        },
        selectFirstSizeForSelectedBrewMethod: function() {
            $(".js-serving-size-" + this.selectedBrewMethod() + " :input").first().prop("checked", !0)
        },
        display: function() {
            this.selectedBrewMethod() && (this.hideAllSizes(), this.showSizesForSelectedBrewMethod(), this.selectFirstSizeForSelectedBrewMethod())
        }
    };
app = angular.module("subscription", ["ngResource", "ngSanitize"]), app.config(["$locationProvider", function(e) {
    e.html5Mode({
        enabled: !0,
        requireBase: !1,
        rewriteLinks: !1
    })
}]), angular.module("subscription").component("subFixedButton", {
    controller: ["$element", function(e) {
        var t = $(e).offset().top,
            n = "pos-fix bottom-0 left-0 wi-100",
            i = function() {
                return $(window).scrollTop() < t && t + $(e).height() > $(window).scrollTop() + window.innerHeight
            };
        $(window).scroll(function() {
            767 < window.innerWidth ? $(e).removeClass(n) : $(e).toggleClass(n, i())
        })
    }]
}), angular.module("subscription").controller("AtHomeController", ["$scope", "$location", "AtHomeFactory", function(t, n, e) {
    var i = function() {
        e.plans().get({}, function(e) {
            t.data = {
                plans: e
            }, t.setCollection(), t.trackSubscriptionSignupStarted()
        })
    };
    t.changeCollection = function(e) {
        t.collection = e
    }, t.shouldShowPlan = function(e) {
        return !$.isEmptyObject(t.collection) && ("All" === t.collection.title || 0 <= t.collection.values.indexOf(e))
    }, t.trackSubscriptionStepCompleted = function() {
        window.analytics && window.analytics.track("Subscription Step Completed", {
            step_name: "plan_selection"
        })
    }, t.trackSubscriptionSignupStarted = function() {
        window.analytics && window.analytics.track("Subscription Signup Started", {
            source: n.search().utm_source
        })
    }, t.setCollection = function() {
        var e = t.data.plans[n.hash()];
        $.isEmptyObject(e) ? t.collection = t.data.plans.recommended : t.collection = e, (0 < document.referrer.indexOf("/at-home/selection") || !$.isEmptyObject(e)) && (t.scroll = !0)
    }, i()
}]), angular.module("subscription").controller("AtHomeSelectionsController", ["$scope", "$location", "SettingsFactory", "AtHomeFactory", "AtHomeSelectionsParamsService", "PlanDescriptionFactory", function(i, r, e, t, s, a) {
    i.error = {}, i.settings = {
        scroll: !1
    };
    var n = "whole_bean",
        o = function() {
            i.settings.size = null, i.settings.cadence = null
        };
    i["continue"] = function() {
        var e = i.settings.availableViews[i.settings.productType],
            t = e.indexOf(i.settings.currentView) + 1;
        i.trackSubscriptionStepCompleted(), i.settings.currentView = e[t], i.settings.scroll = !0
    }, i.setSelectedPlan = function() {
        i.error.message = "", i.selectedPlanId = null, t.plan(i.settings.groupName).get({
            product_type: i.settings.productType || n,
            ounces: i.settings.size,
            cadence: i.settings.cadence,
            group_name: i.settings.groupName
        }, function(e) {
            e.error ? i.error.message = e.error : i.selectedPlanId = e.plan_id
        })
    }, i.shouldShowContinue = function() {
        return i.settings.size && "size" === i.settings.currentView || i.settings.productType && "product_type" === i.settings.currentView
    }, i.shouldShowFinalize = function() {
        return i.settings.cadence && i.selectedPlanId && "cadence" === i.settings.currentView
    }, i.trackSubscriptionStepCompleted = function() {
        window.analytics && window.analytics.track("Subscription Step Completed", {
            step_name: i.settings.currentView,
            bag_size: i.settings.size,
            frequency: i.settings.cadence
        })
    }, i.shouldShowPlan = function() {
        return !0
    }, i.$watch("settings.cadence", function(e) {
        e && (i.settings.cadenceName = a.getCadenceName(e), i.setSelectedPlan())
    }), i.$watch("settings.size", function(e) {
        e && (i.settings.sizeName = a.getSizeName(e), i.settings.sizeDescription = a.getSizeDescription(e), i.settings.basePrice = a.getPrice(e)), i.settings.cadence && i.setSelectedPlan()
    }), i.$watch("settings.productType", function(e) {
        e && ("perfectly_ground" === e && o(), i.settings.productTypeName = a.getProductTypeName(e))
    }), i.initialize = function(e, t) {
        i.settings.plan_id = parseInt(e), i.settings.locale = t;
        var n = {
            id: i.settings.plan_id,
            locale: i.settings.locale,
            size: r.search().size,
            days_between_shipments: r.search().days_between_shipments
        };
        s.initialize(n).then(function() {
            a.initialize(n), i.settings = s.settings()
        })
    }
}]), angular.module("subscription").controller("PlanSummaryController", ["$scope", "AtHomeFactory", function(t, n) {
    t.fetchAllotableData = function(e) {
        n.allotable(e).get({}, function(e) {
            t.$parent.allotable = e.allotable
        })
    }
}]), angular.module("subscription").directive("subCustomization", function() {
    return {
        restrict: "A",
        scope: {
            scroll: "="
        },
        link: function(t, n) {
            t.$watch("scroll", function(e) {
                e && ($("html, body").animate({
                    scrollTop: $(n).offset().top - 20
                }, "slow"), t.scroll = !1)
            })
        }
    }
}), angular.module("subscription").directive("subLearnMore", function() {
    return {
        restrict: "A",
        scope: {
            plan: "="
        },
        templateUrl: "shared/learn_more_modal.html",
        link: function(e, t) {
            $(t).on("hidden", function() {
                $.isEmptyObject(e.plan) || (e.plan = null)
            }), e.$watch("plan", function(e) {
                e && $(t).modal()
            })
        }
    }
}), angular.module("subscription").directive("subScroll", function() {
    return {
        restrict: "A",
        scope: {
            scroll: "="
        },
        link: function(t, n) {
            t.$watch("scroll", function(e) {
                e && (window.innerWidth < 767 && $("html, body").animate({
                    scrollTop: $(n).offset().top
                }, "fast"), t.scroll = !1)
            })
        }
    }
}), angular.module("subscription").factory("AtHomeFactory", ["$resource", function(t) {
    var e = {
        allotable: function(e) {
            return t("/api/at_home/" + e + "/learn_more")
        },
        plan: function(e) {
            return t("/api/at_home/" + e)
        },
        plans: function() {
            return t("/api/at_home")
        }
    };
    return e
}]), angular.module("subscription").factory("AtHomeSelectionFactory", ["$resource", function(t) {
    var e = {
        fetchPageSettings: function(e) {
            return t("/api/at_home_selection/" + parseInt(e) + ".json")
        }
    };
    return e
}]), angular.module("subscription").factory("PlanDescriptionFactory", ["SettingsFactory", function(t) {
    var e = {},
        n = {};
    return e.initialize = function(e) {
        return t.getSettings(e).$promise.then(function(e) {
            n = e
        })
    }, e.getSizeName = function(e) {
        if (n.sizeNames) return n.sizeNames[e]
    }, e.getPrice = function(e) {
        if (n.prices) return n.prices[parseInt(e)].base_price
    }, e.getSizeDescription = function(e) {
        if (n.sizeDescriptions) return n.sizeDescriptions[e]
    }, e.getCadenceName = function(e) {
        if (n.cadenceNames) return n.cadenceNames[parseInt(e)]
    }, e.getProductTypeName = function(e) {
        if (n.productTypeNames) return n.productTypeNames[e]
    }, e
}]), angular.module("subscription").factory("SettingsFactory", ["$window", "AtHomeSelectionFactory", function(t, n) {
    var e = {},
        i = null;
    return e.getSettings = function(e) {
        return i || (i = n.fetchPageSettings(e.id).get({
            locale: e.locale,
            size: e.size,
            days_between_shipments: e.days_between_shipments
        }, function(e) {
            if (!e.location) return e;
            t.location = e.location
        })), i
    }, e
}]), angular.module("subscription").service("AtHomeSelectionsParamsService", ["SettingsFactory", "$location", function(t, e) {
    var n = {},
        i = e.search(),
        r = function() {
            if (i.hasOwnProperty("trial") || i.hasOwnProperty("size")) return n.defaultCadence
        },
        s = function() {
            if (i.hasOwnProperty("trial") || i.hasOwnProperty("days_between_shipments")) return n.defaultSize
        };
    this.initialize = function(e) {
        return t.getSettings(e).$promise.then(function(e) {
            n = e
        })
    }, this.isTrial = function() {
        return i.hasOwnProperty("trial")
    }, this.size = function() {
        return i.size || s()
    }, this.daysBetweenShipments = function() {
        return i.days_between_shipments || r()
    }, this.settings = function() {
        return n.trial = this.isTrial(), n.size = this.size(), n.cadence = this.daysBetweenShipments(), n
    }
}]), $(function() {
    $("body.subscription_cancellations").length && $(document).on("click", ".js-cancel-reason", function() {
        $(this).next(".js-cancel-body").slideToggle(), $(this).find(".js-down-carot, .js-up-carot").toggleClass("dn")
    })
}), $(document).ready(function() {
    0 < $("body.admin.subscription_demand_estimations").length && ($("#js-start-date-datepicker").datepicker({
        defaultDate: "+1d",
        minDate: "0",
        maxDate: "+8weeks",
        dateFormat: "yy-mm-dd"
    }), $("#js-end-date-datepicker").datepicker({
        defaultDate: "+1d",
        minDate: "+1d",
        maxDate: "+10weeks",
        dateFormat: "yy-mm-dd"
    }))
}), $(document).ready(function() {
    var e;
    if (0 < $("body.subscription_pauses").length || 0 < $("body.gift_subscription_pauses").length) return $("#js-resume-datepicker").datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        defaultDate: "+1wk",
        minDate: "+1d",
        maxDate: "+8mo",
        dateFormat: "yy-mm-dd"
    }), $("#pause_duration_skip_next_shipment").change(function() {
        return $("#js-pause-subscription").prop("disabled", !1), $("#js-resume-on-input").hide(), $("#js-skip-next-shipment-label").removeClass("b--white").addClass("b--blue"), $("#js-pause-until-label").removeClass("b--blue").addClass("b--white"), $("#js-pause-subscription").val("Skip Next Shipment")
    }), $("#pause_duration_until_date").change(function() {
        return $("#js-resume-on-input").show(), $("#js-pause-until-label").removeClass("b--white").addClass("b--blue"), $("#js-skip-next-shipment-label").removeClass("b--blue").addClass("b--white"), e()
    }), $("input#js-resume-datepicker").change(function() {
        return e()
    }), $("input#js-resume-datepicker").keypress(function(e) {
        return e.stopPropagation(), !1
    }), e = function() {
        var e, t;
        return (t = $("input#js-resume-datepicker").val()) ? (e = moment(t).format("MMMM D"), $("#js-pause-subscription").val("Pause Until " + e), $("#js-pause-subscription").prop("disabled", !1)) : ($("#js-pause-subscription").val("Pause Until\u2026"), $("#js-pause-subscription").prop("disabled", !0))
    }
}), $(document).ready(function() {
    function e() {
        var e = $("input#js-resume-datepicker").val();
        if (e && null !== e && e !== undefined) {
            var t = moment(e).format("MMMM D");
            $("#js-resume-subscription").val("Resume on " + t), $("#js-resume-subscription").prop("disabled", !1)
        } else $("#js-resume-subscription").val("Resume on\u2026"), $("#js-resume-subscription").prop("disabled", !0)
    }(0 < $("body.subscription_unpauses").length || 0 < $("body.gift_subscription_unpauses").length) && ($(".js-unpause-subscription").on("click", function() {
        var e = parseInt($("#subscription_id").attr("value"));
        "undefined" != typeof heap && heap.track("Subscription Unpause", {
            subscription: e
        }), "undefined" != typeof ga && ga("send", {
            hitType: "event",
            eventCategory: "Subscription",
            eventAction: "unpause",
            eventValue: e
        })
    }), $("#js-resume-datepicker").datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        defaultDate: "+1d",
        minDate: "+1d",
        maxDate: "+8mo",
        dateFormat: "yy-mm-dd"
    }), $("#resume_on_now").change(function() {
        $("#js-resume-subscription").prop("disabled", !1), $("#js-resume-on-input").hide(), $("#js-resume-on-date-label").removeClass("b--blue").addClass("b--white"), $("#js-resume-now-label").removeClass("b--white").addClass("b--blue"), $("#js-resume-subscription").val("Resume now")
    }), $("#resume_on_date").change(function() {
        $("#js-resume-on-input").show(), $("#js-resume-on-date-label").removeClass("b--white").addClass("b--blue"), $("#js-resume-now-label").removeClass("b--blue").addClass("b--white"), e()
    }), $("input#js-resume-datepicker").change(function() {
        e()
    }))
}), TermsAndConditions = {
    validate: function() {
        $("form").validate({
            rules: {
                accept_terms: "required"
            },
            messages: {
                accept_terms: "You must agree to the terms and conditions."
            },
            errorPlacement: function(e, t) {
                "accept_terms" == t.attr("name") ? (e.appendTo(t.parent()), e.addClass("wi-100 pt10 bold")) : e.insertAfter(t), $(".js-payment-submit").button("reset").removeAttr("disabled")
            }
        })
    }
}, $(function() {
    $(".js-validate-terms-and-conditions").length && TermsAndConditions.validate()
}), $(document).ready(function() {
    return $("input#variant_netsuite_item_name").on("blur", function(t) {
        if ("jiffy" === $("select#variant_fulfillment_strategy_type").val() || "culinary" === $("select#variant_fulfillment_strategy_type").val()) return this.xhr && this.xhr.abort(), $(t.target).parents(".control-group").removeClass("warning"), void t.target.setCustomValidity("");
        var n = t.target.value;
        return "" !== n ? ($(t.target).parents(".control-group").addClass("warning"), this.xhr = $.getJSON("/api/netsuite_merchandise?sku=" + encodeURIComponent(n), function(e) {
            return $(t.target).parents(".control-group").removeClass("warning"), e[n] ? t.target.setCustomValidity("") : t.target.setCustomValidity("Unable to find an item with this SKU in NetSuite")
        })) : ($(t.target).parents(".control-group").removeClass("warning"), void t.target.setCustomValidity(""))
    }), $("input#variant_sku").trigger("blur"), $("select#variant_fulfillment_strategy_type").on("change", function() {
        return $("input#variant_sku").trigger("blur")
    })
}), VimeoVideoPlayer = {
    loadVideoPlayer: function(e, t, n) {
        var i = {
                id: e,
                responsive: !0,
                autoplay: $(t).data("autoplay"),
                loop: !1
            },
            r = new Vimeo.Player(n, i);
        r.setVolume(.3).then(function() {
            function e() {
                setTimeout(function() {
                    $(t).modal("hide")
                }, 800)
            }
            $(t).modal(), $(t).on("hidden", function() {
                r.pause()
            }), r.on("ended", function() {
                e()
            })
        })["catch"](function() {
            $(".js-play-vimeo-video[data-video-id=" + e + "]").hide()
        })
    },
    setup: function(e) {
        vimeoId = e.attr("data-video-id"), modalClass = e.attr("data-modal"), videoElementId = $(modalClass).find(".js-video").attr("id"), this.loadVideoPlayer(vimeoId, modalClass, videoElementId)
    }
}, $(document).ready(function() {
    $(".js-play-vimeo-video").length && "object" == typeof Vimeo && $(".js-play-vimeo-video").on("click", function(e) {
        e.preventDefault(), VimeoVideoPlayer.setup($(this))
    })
}), $(document).ready(function initWholeBeanCanFaqToggle() {
    0 < $("body.stores-show .js-whole-bean-can-faq").length && $(".js-toggle-accordion").on("click", function r() {
        var e = $(this).closest(".js-accordion"),
            t = e.find(".js-accordion-content"),
            n = e.find(".js-plus"),
            i = e.find(".js-dash");
        t.slideToggle("fast"), n.toggleClass("dib dn"), i.toggleClass("dib dn"), $(".js-accordion-content").not(t).slideUp("fast"), $(".js-dash.dib").not(i).toggleClass("dib dn"), $(".js-plus.dn").not(n).toggleClass("dib dn")
    })
}), YourCoffee = {
    triggerQuery: function(e, t) {
        uri = new URI(window.location), uri.removeSearch(e), t.length ? window.location = uri.addQuery(e, t).toString() : window.location = uri.toString()
    },
    setListeners: function() {
        $(".js-your-coffee-toggle").on("change", function() {
            window.location = $(".js-your-coffee-toggle").find(":selected").val()
        }), $(".js-coffee-history-sort-toggle").on("change", function() {
            YourCoffee.triggerQuery("sort", $(".js-coffee-history-sort-toggle").find(":selected").val())
        }), $(".js-coffee-history-search-form").on("submit", function(e) {
            e.preventDefault(), YourCoffee.triggerQuery("search", $(".js-coffee-history-search-field").val())
        })
    }
}, $(document).ready(function() {
    YourCoffee.setListeners()
});