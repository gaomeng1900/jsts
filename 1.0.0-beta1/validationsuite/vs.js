!function e(t,r,a){function l(o,s){if(!r[o]){if(!t[o]){var n="function"==typeof require&&require;if(!s&&n)return n(o,!0);if(i)return i(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[o]={exports:{}};t[o][0].call(d.exports,function(e){var r=t[o][1][e];return l(r?r:e)},d,d.exports,e,t,r,a)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)l(a[o]);return l}({1:[function(e,t,r){"use strict";!function(){function e(e,t){var r=new ol.style.Stroke({color:e,width:1.5}),a=new ol.style.Fill({color:t});return function(e){var t=[new ol.style.Style({stroke:r,fill:a,image:new ol.style.Circle({fill:a,stroke:r,radius:3})})];if(this.getGeometry()instanceof ol.geom.LineString||this.getGeometry()instanceof ol.geom.Polygon||this.getGeometry()instanceof ol.geom.MultiLineString||this.getGeometry()instanceof ol.geom.MultiPolygon){var l=new ol.style.Style({image:new ol.style.RegularShape({fill:new ol.style.Fill({color:"black"}),stroke:new ol.style.Stroke({color:"black",width:1}),points:4,radius:5,radius2:0,angle:Math.PI/4}),geometry:function(e){var t=i.read(e.getGeometry()).getCoordinates().map(function(e){return[e.x,e.y]});return new ol.geom.MultiPoint(t)}});t.push(l)}return t}}function t(e,t,r){y.getProxy().setUrl("../testxml/validate/"+t.data.filename),y.reload(),f.reset()}function r(e,t,r){f.showTestCase(t)}function a(){Ext.create("Ext.Viewport",{padding:10,layout:"fit",items:{title:"JSTS validation suite",items:[p,f]}})}var l=Ext.create("Ext.panel.Panel",{title:"IM result",flex:1,frame:!0,padding:5,showTestResults:function(e,t){var r=e.relate(t);this.update("IM: "+r.toString()+"<br>equals: "+r.isEquals(2,2)+"<br>disjoint: "+r.isDisjoint()+"<br>intersects: "+r.isIntersects()+"<br>touches: "+r.isTouches(2,2)+"<br>crosses: "+r.isCrosses(2,2)+"<br>within: "+r.isWithin()+"<br>contains: "+r.isContains()+"<br>overlaps: "+r.isOverlaps(2,2)+"<br>")},reset:function(){this.update("")}}),i=new jsts.io.olParser,o=new ol.Collection,s=new ol.source.Vector({features:o}),n=new ol.layer.Vector({source:s}),u=new ol.Map({controls:[],layers:[n],view:new ol.View({center:[0,0],zoom:10})}),d=Ext.create("Ext.panel.Panel",{html:'<div id="map" style="width:200px;height:200px"></div>',listeners:{afterrender:function(){u.setTarget("map")}}}),c=Ext.create("Ext.panel.Panel",{html:""}),f=Ext.create("Ext.panel.Panel",{layout:{type:"hbox",align:"stretch"},items:[{title:"Visual",height:200,width:200,layout:"fit",frame:!0,items:d},{title:"Input",padding:5,height:150,width:400,layout:"fit",frame:!0,flex:1,items:c},l],showTestCase:function(t){var r=new jsts.io.WKTReader,a=new jsts.io.WKTWriter,n=r.read(t.data.a),d=r.read(t.data.b);l.showTestResults(n,d),c.update(a.write(n)+"<br><br>"+a.write(d));var f=new ol.Feature({geometry:i.write(n)});f.setStyle(e([0,0,255,.5],[0,0,255,.3]));var m=new ol.Feature({geometry:i.write(d)});m.setStyle(e([255,0,0,.5],[255,0,0,.3])),o.clear(),o.extend([f,m]);var x=u.getView(),y=s.getExtent();x.fit(y,u.getSize()),u.updateSize()},reset:function(){s.clear(),c.update("")}}),m=[[0,"TestRelatePP.xml"],[1,"TestRelatePL.xml"],[2,"TestRelatePA.xml"],[3,"TestRelateLL.xml"],[4,"TestRelateLC.xml"],[5,"TestRelateLA.xml"],[6,"TestRelateAC.xml"],[7,"TestRelateAA.xml"]],x=Ext.create("Ext.data.ArrayStore",{id:0,fields:["id","filename"],data:m});Ext.define("Case",{extend:"Ext.data.Model",proxy:{type:"ajax",reader:"xml"},fields:["desc","a","b"]});var y=Ext.create("Ext.data.Store",{model:"Case",proxy:{type:"ajax",url:"../testxml/validate/TestRelatePP.xml",reader:{type:"xml",record:"case"}},autoLoad:!0}),p=Ext.create("Ext.panel.Panel",{layout:"form",items:[{width:150,xtype:"combo",fieldLabel:"Group",name:"group",ref:"group",store:x,triggerAction:"all",lazyRender:!0,mode:"local",valueField:"id",displayField:"filename",value:0,listeners:{select:t}},{width:450,xtype:"combo",fieldLabel:"Case",name:"case",ref:"../case",store:y,triggerAction:"all",lazyRender:!0,displayField:"desc",listeners:{select:r}}]});Ext.onReady(a)}()},{}]},{},[1]);
