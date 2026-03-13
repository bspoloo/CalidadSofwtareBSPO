/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 279.0, "minX": 0.0, "maxY": 4022.0, "series": [{"data": [[0.0, 279.0], [0.1, 279.0], [0.2, 279.0], [0.3, 279.0], [0.4, 279.0], [0.5, 279.0], [0.6, 279.0], [0.7, 279.0], [0.8, 279.0], [0.9, 279.0], [1.0, 300.0], [1.1, 300.0], [1.2, 300.0], [1.3, 300.0], [1.4, 300.0], [1.5, 300.0], [1.6, 300.0], [1.7, 300.0], [1.8, 300.0], [1.9, 300.0], [2.0, 497.0], [2.1, 497.0], [2.2, 497.0], [2.3, 497.0], [2.4, 497.0], [2.5, 497.0], [2.6, 497.0], [2.7, 497.0], [2.8, 497.0], [2.9, 497.0], [3.0, 506.0], [3.1, 506.0], [3.2, 506.0], [3.3, 506.0], [3.4, 506.0], [3.5, 506.0], [3.6, 506.0], [3.7, 506.0], [3.8, 506.0], [3.9, 506.0], [4.0, 511.0], [4.1, 511.0], [4.2, 511.0], [4.3, 511.0], [4.4, 511.0], [4.5, 511.0], [4.6, 511.0], [4.7, 511.0], [4.8, 511.0], [4.9, 511.0], [5.0, 542.0], [5.1, 542.0], [5.2, 542.0], [5.3, 542.0], [5.4, 542.0], [5.5, 542.0], [5.6, 542.0], [5.7, 542.0], [5.8, 542.0], [5.9, 542.0], [6.0, 602.0], [6.1, 602.0], [6.2, 602.0], [6.3, 602.0], [6.4, 602.0], [6.5, 602.0], [6.6, 602.0], [6.7, 602.0], [6.8, 602.0], [6.9, 602.0], [7.0, 676.0], [7.1, 676.0], [7.2, 676.0], [7.3, 676.0], [7.4, 676.0], [7.5, 676.0], [7.6, 676.0], [7.7, 676.0], [7.8, 676.0], [7.9, 676.0], [8.0, 723.0], [8.1, 723.0], [8.2, 723.0], [8.3, 723.0], [8.4, 723.0], [8.5, 723.0], [8.6, 723.0], [8.7, 723.0], [8.8, 723.0], [8.9, 723.0], [9.0, 740.0], [9.1, 740.0], [9.2, 740.0], [9.3, 740.0], [9.4, 740.0], [9.5, 740.0], [9.6, 740.0], [9.7, 740.0], [9.8, 740.0], [9.9, 740.0], [10.0, 884.0], [10.1, 884.0], [10.2, 884.0], [10.3, 884.0], [10.4, 884.0], [10.5, 884.0], [10.6, 884.0], [10.7, 884.0], [10.8, 884.0], [10.9, 884.0], [11.0, 904.0], [11.1, 904.0], [11.2, 904.0], [11.3, 904.0], [11.4, 904.0], [11.5, 904.0], [11.6, 904.0], [11.7, 904.0], [11.8, 904.0], [11.9, 904.0], [12.0, 940.0], [12.1, 940.0], [12.2, 940.0], [12.3, 940.0], [12.4, 940.0], [12.5, 940.0], [12.6, 940.0], [12.7, 940.0], [12.8, 940.0], [12.9, 940.0], [13.0, 983.0], [13.1, 983.0], [13.2, 983.0], [13.3, 983.0], [13.4, 983.0], [13.5, 983.0], [13.6, 983.0], [13.7, 983.0], [13.8, 983.0], [13.9, 983.0], [14.0, 997.0], [14.1, 997.0], [14.2, 997.0], [14.3, 997.0], [14.4, 997.0], [14.5, 997.0], [14.6, 997.0], [14.7, 997.0], [14.8, 997.0], [14.9, 997.0], [15.0, 1017.0], [15.1, 1017.0], [15.2, 1017.0], [15.3, 1017.0], [15.4, 1017.0], [15.5, 1017.0], [15.6, 1017.0], [15.7, 1017.0], [15.8, 1017.0], [15.9, 1017.0], [16.0, 1032.0], [16.1, 1032.0], [16.2, 1032.0], [16.3, 1032.0], [16.4, 1032.0], [16.5, 1032.0], [16.6, 1032.0], [16.7, 1032.0], [16.8, 1032.0], [16.9, 1032.0], [17.0, 1084.0], [17.1, 1084.0], [17.2, 1084.0], [17.3, 1084.0], [17.4, 1084.0], [17.5, 1084.0], [17.6, 1084.0], [17.7, 1084.0], [17.8, 1084.0], [17.9, 1084.0], [18.0, 1170.0], [18.1, 1170.0], [18.2, 1170.0], [18.3, 1170.0], [18.4, 1170.0], [18.5, 1170.0], [18.6, 1170.0], [18.7, 1170.0], [18.8, 1170.0], [18.9, 1170.0], [19.0, 1287.0], [19.1, 1287.0], [19.2, 1287.0], [19.3, 1287.0], [19.4, 1287.0], [19.5, 1287.0], [19.6, 1287.0], [19.7, 1287.0], [19.8, 1287.0], [19.9, 1287.0], [20.0, 1294.0], [20.1, 1294.0], [20.2, 1294.0], [20.3, 1294.0], [20.4, 1294.0], [20.5, 1294.0], [20.6, 1294.0], [20.7, 1294.0], [20.8, 1294.0], [20.9, 1294.0], [21.0, 1305.0], [21.1, 1305.0], [21.2, 1305.0], [21.3, 1305.0], [21.4, 1305.0], [21.5, 1305.0], [21.6, 1305.0], [21.7, 1305.0], [21.8, 1305.0], [21.9, 1305.0], [22.0, 1336.0], [22.1, 1336.0], [22.2, 1336.0], [22.3, 1336.0], [22.4, 1336.0], [22.5, 1336.0], [22.6, 1336.0], [22.7, 1336.0], [22.8, 1336.0], [22.9, 1336.0], [23.0, 1345.0], [23.1, 1345.0], [23.2, 1345.0], [23.3, 1345.0], [23.4, 1345.0], [23.5, 1345.0], [23.6, 1345.0], [23.7, 1345.0], [23.8, 1345.0], [23.9, 1345.0], [24.0, 1406.0], [24.1, 1406.0], [24.2, 1406.0], [24.3, 1406.0], [24.4, 1406.0], [24.5, 1406.0], [24.6, 1406.0], [24.7, 1406.0], [24.8, 1406.0], [24.9, 1406.0], [25.0, 1428.0], [25.1, 1428.0], [25.2, 1428.0], [25.3, 1428.0], [25.4, 1428.0], [25.5, 1428.0], [25.6, 1428.0], [25.7, 1428.0], [25.8, 1428.0], [25.9, 1428.0], [26.0, 1457.0], [26.1, 1457.0], [26.2, 1457.0], [26.3, 1457.0], [26.4, 1457.0], [26.5, 1457.0], [26.6, 1457.0], [26.7, 1457.0], [26.8, 1457.0], [26.9, 1457.0], [27.0, 1482.0], [27.1, 1482.0], [27.2, 1482.0], [27.3, 1482.0], [27.4, 1482.0], [27.5, 1482.0], [27.6, 1482.0], [27.7, 1482.0], [27.8, 1482.0], [27.9, 1482.0], [28.0, 1485.0], [28.1, 1485.0], [28.2, 1485.0], [28.3, 1485.0], [28.4, 1485.0], [28.5, 1485.0], [28.6, 1485.0], [28.7, 1485.0], [28.8, 1485.0], [28.9, 1485.0], [29.0, 1529.0], [29.1, 1529.0], [29.2, 1529.0], [29.3, 1529.0], [29.4, 1529.0], [29.5, 1529.0], [29.6, 1529.0], [29.7, 1529.0], [29.8, 1529.0], [29.9, 1529.0], [30.0, 1530.0], [30.1, 1530.0], [30.2, 1530.0], [30.3, 1530.0], [30.4, 1530.0], [30.5, 1530.0], [30.6, 1530.0], [30.7, 1530.0], [30.8, 1530.0], [30.9, 1530.0], [31.0, 1672.0], [31.1, 1672.0], [31.2, 1672.0], [31.3, 1672.0], [31.4, 1672.0], [31.5, 1672.0], [31.6, 1672.0], [31.7, 1672.0], [31.8, 1672.0], [31.9, 1672.0], [32.0, 1801.0], [32.1, 1801.0], [32.2, 1801.0], [32.3, 1801.0], [32.4, 1801.0], [32.5, 1801.0], [32.6, 1801.0], [32.7, 1801.0], [32.8, 1801.0], [32.9, 1801.0], [33.0, 1819.0], [33.1, 1819.0], [33.2, 1819.0], [33.3, 1819.0], [33.4, 1819.0], [33.5, 1819.0], [33.6, 1819.0], [33.7, 1819.0], [33.8, 1819.0], [33.9, 1819.0], [34.0, 1830.0], [34.1, 1830.0], [34.2, 1830.0], [34.3, 1830.0], [34.4, 1830.0], [34.5, 1830.0], [34.6, 1830.0], [34.7, 1830.0], [34.8, 1830.0], [34.9, 1830.0], [35.0, 1837.0], [35.1, 1837.0], [35.2, 1837.0], [35.3, 1837.0], [35.4, 1837.0], [35.5, 1837.0], [35.6, 1837.0], [35.7, 1837.0], [35.8, 1837.0], [35.9, 1837.0], [36.0, 1847.0], [36.1, 1847.0], [36.2, 1847.0], [36.3, 1847.0], [36.4, 1847.0], [36.5, 1847.0], [36.6, 1847.0], [36.7, 1847.0], [36.8, 1847.0], [36.9, 1847.0], [37.0, 1905.0], [37.1, 1905.0], [37.2, 1905.0], [37.3, 1905.0], [37.4, 1905.0], [37.5, 1905.0], [37.6, 1905.0], [37.7, 1905.0], [37.8, 1905.0], [37.9, 1905.0], [38.0, 1972.0], [38.1, 1972.0], [38.2, 1972.0], [38.3, 1972.0], [38.4, 1972.0], [38.5, 1972.0], [38.6, 1972.0], [38.7, 1972.0], [38.8, 1972.0], [38.9, 1972.0], [39.0, 2001.0], [39.1, 2001.0], [39.2, 2001.0], [39.3, 2001.0], [39.4, 2001.0], [39.5, 2001.0], [39.6, 2001.0], [39.7, 2001.0], [39.8, 2001.0], [39.9, 2001.0], [40.0, 2005.0], [40.1, 2005.0], [40.2, 2005.0], [40.3, 2005.0], [40.4, 2005.0], [40.5, 2005.0], [40.6, 2005.0], [40.7, 2005.0], [40.8, 2005.0], [40.9, 2005.0], [41.0, 2013.0], [41.1, 2013.0], [41.2, 2013.0], [41.3, 2013.0], [41.4, 2013.0], [41.5, 2013.0], [41.6, 2013.0], [41.7, 2013.0], [41.8, 2013.0], [41.9, 2013.0], [42.0, 2017.0], [42.1, 2017.0], [42.2, 2017.0], [42.3, 2017.0], [42.4, 2017.0], [42.5, 2017.0], [42.6, 2017.0], [42.7, 2017.0], [42.8, 2017.0], [42.9, 2017.0], [43.0, 2046.0], [43.1, 2046.0], [43.2, 2046.0], [43.3, 2046.0], [43.4, 2046.0], [43.5, 2046.0], [43.6, 2046.0], [43.7, 2046.0], [43.8, 2046.0], [43.9, 2046.0], [44.0, 2092.0], [44.1, 2092.0], [44.2, 2092.0], [44.3, 2092.0], [44.4, 2092.0], [44.5, 2092.0], [44.6, 2092.0], [44.7, 2092.0], [44.8, 2092.0], [44.9, 2092.0], [45.0, 2163.0], [45.1, 2163.0], [45.2, 2163.0], [45.3, 2163.0], [45.4, 2163.0], [45.5, 2163.0], [45.6, 2163.0], [45.7, 2163.0], [45.8, 2163.0], [45.9, 2163.0], [46.0, 2260.0], [46.1, 2260.0], [46.2, 2260.0], [46.3, 2260.0], [46.4, 2260.0], [46.5, 2260.0], [46.6, 2260.0], [46.7, 2260.0], [46.8, 2260.0], [46.9, 2260.0], [47.0, 2291.0], [47.1, 2291.0], [47.2, 2291.0], [47.3, 2291.0], [47.4, 2291.0], [47.5, 2291.0], [47.6, 2291.0], [47.7, 2291.0], [47.8, 2291.0], [47.9, 2291.0], [48.0, 2298.0], [48.1, 2298.0], [48.2, 2298.0], [48.3, 2298.0], [48.4, 2298.0], [48.5, 2298.0], [48.6, 2298.0], [48.7, 2298.0], [48.8, 2298.0], [48.9, 2298.0], [49.0, 2366.0], [49.1, 2366.0], [49.2, 2366.0], [49.3, 2366.0], [49.4, 2366.0], [49.5, 2366.0], [49.6, 2366.0], [49.7, 2366.0], [49.8, 2366.0], [49.9, 2366.0], [50.0, 2413.0], [50.1, 2413.0], [50.2, 2413.0], [50.3, 2413.0], [50.4, 2413.0], [50.5, 2413.0], [50.6, 2413.0], [50.7, 2413.0], [50.8, 2413.0], [50.9, 2413.0], [51.0, 2459.0], [51.1, 2459.0], [51.2, 2459.0], [51.3, 2459.0], [51.4, 2459.0], [51.5, 2459.0], [51.6, 2459.0], [51.7, 2459.0], [51.8, 2459.0], [51.9, 2459.0], [52.0, 2504.0], [52.1, 2504.0], [52.2, 2504.0], [52.3, 2504.0], [52.4, 2504.0], [52.5, 2504.0], [52.6, 2504.0], [52.7, 2504.0], [52.8, 2504.0], [52.9, 2504.0], [53.0, 2527.0], [53.1, 2527.0], [53.2, 2527.0], [53.3, 2527.0], [53.4, 2527.0], [53.5, 2527.0], [53.6, 2527.0], [53.7, 2527.0], [53.8, 2527.0], [53.9, 2527.0], [54.0, 2559.0], [54.1, 2559.0], [54.2, 2559.0], [54.3, 2559.0], [54.4, 2559.0], [54.5, 2559.0], [54.6, 2559.0], [54.7, 2559.0], [54.8, 2559.0], [54.9, 2559.0], [55.0, 2597.0], [55.1, 2597.0], [55.2, 2597.0], [55.3, 2597.0], [55.4, 2597.0], [55.5, 2597.0], [55.6, 2597.0], [55.7, 2597.0], [55.8, 2597.0], [55.9, 2597.0], [56.0, 2605.0], [56.1, 2605.0], [56.2, 2605.0], [56.3, 2605.0], [56.4, 2605.0], [56.5, 2605.0], [56.6, 2605.0], [56.7, 2605.0], [56.8, 2605.0], [56.9, 2605.0], [57.0, 2606.0], [57.1, 2606.0], [57.2, 2606.0], [57.3, 2606.0], [57.4, 2606.0], [57.5, 2606.0], [57.6, 2606.0], [57.7, 2606.0], [57.8, 2606.0], [57.9, 2606.0], [58.0, 2682.0], [58.1, 2682.0], [58.2, 2682.0], [58.3, 2682.0], [58.4, 2682.0], [58.5, 2682.0], [58.6, 2682.0], [58.7, 2682.0], [58.8, 2682.0], [58.9, 2682.0], [59.0, 2728.0], [59.1, 2728.0], [59.2, 2728.0], [59.3, 2728.0], [59.4, 2728.0], [59.5, 2728.0], [59.6, 2728.0], [59.7, 2728.0], [59.8, 2728.0], [59.9, 2728.0], [60.0, 2741.0], [60.1, 2741.0], [60.2, 2741.0], [60.3, 2741.0], [60.4, 2741.0], [60.5, 2741.0], [60.6, 2741.0], [60.7, 2741.0], [60.8, 2741.0], [60.9, 2741.0], [61.0, 2805.0], [61.1, 2805.0], [61.2, 2805.0], [61.3, 2805.0], [61.4, 2805.0], [61.5, 2805.0], [61.6, 2805.0], [61.7, 2805.0], [61.8, 2805.0], [61.9, 2805.0], [62.0, 2824.0], [62.1, 2824.0], [62.2, 2824.0], [62.3, 2824.0], [62.4, 2824.0], [62.5, 2824.0], [62.6, 2824.0], [62.7, 2824.0], [62.8, 2824.0], [62.9, 2824.0], [63.0, 2835.0], [63.1, 2835.0], [63.2, 2835.0], [63.3, 2835.0], [63.4, 2835.0], [63.5, 2835.0], [63.6, 2835.0], [63.7, 2835.0], [63.8, 2835.0], [63.9, 2835.0], [64.0, 2856.0], [64.1, 2856.0], [64.2, 2856.0], [64.3, 2856.0], [64.4, 2856.0], [64.5, 2856.0], [64.6, 2856.0], [64.7, 2856.0], [64.8, 2856.0], [64.9, 2856.0], [65.0, 2922.0], [65.1, 2922.0], [65.2, 2922.0], [65.3, 2922.0], [65.4, 2922.0], [65.5, 2922.0], [65.6, 2922.0], [65.7, 2922.0], [65.8, 2922.0], [65.9, 2922.0], [66.0, 2943.0], [66.1, 2943.0], [66.2, 2943.0], [66.3, 2943.0], [66.4, 2943.0], [66.5, 2943.0], [66.6, 2943.0], [66.7, 2943.0], [66.8, 2943.0], [66.9, 2943.0], [67.0, 3037.0], [67.1, 3037.0], [67.2, 3037.0], [67.3, 3037.0], [67.4, 3037.0], [67.5, 3037.0], [67.6, 3037.0], [67.7, 3037.0], [67.8, 3037.0], [67.9, 3037.0], [68.0, 3048.0], [68.1, 3048.0], [68.2, 3048.0], [68.3, 3048.0], [68.4, 3048.0], [68.5, 3048.0], [68.6, 3048.0], [68.7, 3048.0], [68.8, 3048.0], [68.9, 3048.0], [69.0, 3075.0], [69.1, 3075.0], [69.2, 3075.0], [69.3, 3075.0], [69.4, 3075.0], [69.5, 3075.0], [69.6, 3075.0], [69.7, 3075.0], [69.8, 3075.0], [69.9, 3075.0], [70.0, 3082.0], [70.1, 3082.0], [70.2, 3082.0], [70.3, 3082.0], [70.4, 3082.0], [70.5, 3082.0], [70.6, 3082.0], [70.7, 3082.0], [70.8, 3082.0], [70.9, 3082.0], [71.0, 3088.0], [71.1, 3088.0], [71.2, 3088.0], [71.3, 3088.0], [71.4, 3088.0], [71.5, 3088.0], [71.6, 3088.0], [71.7, 3088.0], [71.8, 3088.0], [71.9, 3088.0], [72.0, 3157.0], [72.1, 3157.0], [72.2, 3157.0], [72.3, 3157.0], [72.4, 3157.0], [72.5, 3157.0], [72.6, 3157.0], [72.7, 3157.0], [72.8, 3157.0], [72.9, 3157.0], [73.0, 3173.0], [73.1, 3173.0], [73.2, 3173.0], [73.3, 3173.0], [73.4, 3173.0], [73.5, 3173.0], [73.6, 3173.0], [73.7, 3173.0], [73.8, 3173.0], [73.9, 3173.0], [74.0, 3208.0], [74.1, 3208.0], [74.2, 3208.0], [74.3, 3208.0], [74.4, 3208.0], [74.5, 3208.0], [74.6, 3208.0], [74.7, 3208.0], [74.8, 3208.0], [74.9, 3208.0], [75.0, 3290.0], [75.1, 3290.0], [75.2, 3290.0], [75.3, 3290.0], [75.4, 3290.0], [75.5, 3290.0], [75.6, 3290.0], [75.7, 3290.0], [75.8, 3290.0], [75.9, 3290.0], [76.0, 3362.0], [76.1, 3362.0], [76.2, 3362.0], [76.3, 3362.0], [76.4, 3362.0], [76.5, 3362.0], [76.6, 3362.0], [76.7, 3362.0], [76.8, 3362.0], [76.9, 3362.0], [77.0, 3376.0], [77.1, 3376.0], [77.2, 3376.0], [77.3, 3376.0], [77.4, 3376.0], [77.5, 3376.0], [77.6, 3376.0], [77.7, 3376.0], [77.8, 3376.0], [77.9, 3376.0], [78.0, 3380.0], [78.1, 3380.0], [78.2, 3380.0], [78.3, 3380.0], [78.4, 3380.0], [78.5, 3380.0], [78.6, 3380.0], [78.7, 3380.0], [78.8, 3380.0], [78.9, 3380.0], [79.0, 3384.0], [79.1, 3384.0], [79.2, 3384.0], [79.3, 3384.0], [79.4, 3384.0], [79.5, 3384.0], [79.6, 3384.0], [79.7, 3384.0], [79.8, 3384.0], [79.9, 3384.0], [80.0, 3390.0], [80.1, 3390.0], [80.2, 3390.0], [80.3, 3390.0], [80.4, 3390.0], [80.5, 3390.0], [80.6, 3390.0], [80.7, 3390.0], [80.8, 3390.0], [80.9, 3390.0], [81.0, 3402.0], [81.1, 3402.0], [81.2, 3402.0], [81.3, 3402.0], [81.4, 3402.0], [81.5, 3402.0], [81.6, 3402.0], [81.7, 3402.0], [81.8, 3402.0], [81.9, 3402.0], [82.0, 3517.0], [82.1, 3517.0], [82.2, 3517.0], [82.3, 3517.0], [82.4, 3517.0], [82.5, 3517.0], [82.6, 3517.0], [82.7, 3517.0], [82.8, 3517.0], [82.9, 3517.0], [83.0, 3518.0], [83.1, 3518.0], [83.2, 3518.0], [83.3, 3518.0], [83.4, 3518.0], [83.5, 3518.0], [83.6, 3518.0], [83.7, 3518.0], [83.8, 3518.0], [83.9, 3518.0], [84.0, 3603.0], [84.1, 3603.0], [84.2, 3603.0], [84.3, 3603.0], [84.4, 3603.0], [84.5, 3603.0], [84.6, 3603.0], [84.7, 3603.0], [84.8, 3603.0], [84.9, 3603.0], [85.0, 3611.0], [85.1, 3611.0], [85.2, 3611.0], [85.3, 3611.0], [85.4, 3611.0], [85.5, 3611.0], [85.6, 3611.0], [85.7, 3611.0], [85.8, 3611.0], [85.9, 3611.0], [86.0, 3613.0], [86.1, 3613.0], [86.2, 3613.0], [86.3, 3613.0], [86.4, 3613.0], [86.5, 3613.0], [86.6, 3613.0], [86.7, 3613.0], [86.8, 3613.0], [86.9, 3613.0], [87.0, 3648.0], [87.1, 3648.0], [87.2, 3648.0], [87.3, 3648.0], [87.4, 3648.0], [87.5, 3648.0], [87.6, 3648.0], [87.7, 3648.0], [87.8, 3648.0], [87.9, 3648.0], [88.0, 3652.0], [88.1, 3652.0], [88.2, 3652.0], [88.3, 3652.0], [88.4, 3652.0], [88.5, 3652.0], [88.6, 3652.0], [88.7, 3652.0], [88.8, 3652.0], [88.9, 3652.0], [89.0, 3653.0], [89.1, 3653.0], [89.2, 3653.0], [89.3, 3653.0], [89.4, 3653.0], [89.5, 3653.0], [89.6, 3653.0], [89.7, 3653.0], [89.8, 3653.0], [89.9, 3653.0], [90.0, 3720.0], [90.1, 3720.0], [90.2, 3720.0], [90.3, 3720.0], [90.4, 3720.0], [90.5, 3720.0], [90.6, 3720.0], [90.7, 3720.0], [90.8, 3720.0], [90.9, 3720.0], [91.0, 3748.0], [91.1, 3748.0], [91.2, 3748.0], [91.3, 3748.0], [91.4, 3748.0], [91.5, 3748.0], [91.6, 3748.0], [91.7, 3748.0], [91.8, 3748.0], [91.9, 3748.0], [92.0, 3779.0], [92.1, 3779.0], [92.2, 3779.0], [92.3, 3779.0], [92.4, 3779.0], [92.5, 3779.0], [92.6, 3779.0], [92.7, 3779.0], [92.8, 3779.0], [92.9, 3779.0], [93.0, 3791.0], [93.1, 3791.0], [93.2, 3791.0], [93.3, 3791.0], [93.4, 3791.0], [93.5, 3791.0], [93.6, 3791.0], [93.7, 3791.0], [93.8, 3791.0], [93.9, 3791.0], [94.0, 3795.0], [94.1, 3795.0], [94.2, 3795.0], [94.3, 3795.0], [94.4, 3795.0], [94.5, 3795.0], [94.6, 3795.0], [94.7, 3795.0], [94.8, 3795.0], [94.9, 3795.0], [95.0, 3811.0], [95.1, 3811.0], [95.2, 3811.0], [95.3, 3811.0], [95.4, 3811.0], [95.5, 3811.0], [95.6, 3811.0], [95.7, 3811.0], [95.8, 3811.0], [95.9, 3811.0], [96.0, 3841.0], [96.1, 3841.0], [96.2, 3841.0], [96.3, 3841.0], [96.4, 3841.0], [96.5, 3841.0], [96.6, 3841.0], [96.7, 3841.0], [96.8, 3841.0], [96.9, 3841.0], [97.0, 3883.0], [97.1, 3883.0], [97.2, 3883.0], [97.3, 3883.0], [97.4, 3883.0], [97.5, 3883.0], [97.6, 3883.0], [97.7, 3883.0], [97.8, 3883.0], [97.9, 3883.0], [98.0, 3972.0], [98.1, 3972.0], [98.2, 3972.0], [98.3, 3972.0], [98.4, 3972.0], [98.5, 3972.0], [98.6, 3972.0], [98.7, 3972.0], [98.8, 3972.0], [98.9, 3972.0], [99.0, 4022.0], [99.1, 4022.0], [99.2, 4022.0], [99.3, 4022.0], [99.4, 4022.0], [99.5, 4022.0], [99.6, 4022.0], [99.7, 4022.0], [99.8, 4022.0], [99.9, 4022.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 6.0, "series": [{"data": [[600.0, 2.0], [700.0, 2.0], [800.0, 1.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 5.0], [1500.0, 2.0], [1600.0, 1.0], [1800.0, 5.0], [1900.0, 2.0], [2000.0, 6.0], [2100.0, 1.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 4.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 5.0], [3100.0, 2.0], [200.0, 1.0], [3200.0, 2.0], [3300.0, 5.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 6.0], [3700.0, 5.0], [3800.0, 3.0], [3900.0, 1.0], [4000.0, 1.0], [300.0, 1.0], [400.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 71.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 71.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.190000000000005, "minX": 1.7734116E12, "maxY": 9.190000000000005, "series": [{"data": [[1.7734116E12, 9.190000000000005]], "isOverall": false, "label": "Thread Group Laravel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7734116E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 896.0, "minX": 1.0, "maxY": 3387.3333333333335, "series": [{"data": [[2.0, 896.0], [8.0, 2009.4285714285713], [9.0, 2497.857142857143], [10.0, 2564.4285714285716], [11.0, 2636.3333333333335], [3.0, 974.0], [12.0, 3025.25], [13.0, 3084.333333333333], [14.0, 3106.2222222222217], [15.0, 3361.125], [4.0, 1390.4], [16.0, 3387.3333333333335], [1.0, 2459.0], [5.0, 1357.6666666666667], [6.0, 1603.7142857142858], [7.0, 1781.6666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.190000000000005, 2307.4100000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 978.3666666666667, "minX": 1.7734116E12, "maxY": 2481.6666666666665, "series": [{"data": [[1.7734116E12, 2481.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7734116E12, 978.3666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7734116E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2307.4100000000003, "minX": 1.7734116E12, "maxY": 2307.4100000000003, "series": [{"data": [[1.7734116E12, 2307.4100000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7734116E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2304.4900000000002, "minX": 1.7734116E12, "maxY": 2304.4900000000002, "series": [{"data": [[1.7734116E12, 2304.4900000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7734116E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.93, "minX": 1.7734116E12, "maxY": 1.93, "series": [{"data": [[1.7734116E12, 1.93]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7734116E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 279.0, "minX": 1.7734116E12, "maxY": 4022.0, "series": [{"data": [[1.7734116E12, 4022.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7734116E12, 279.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7734116E12, 3713.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7734116E12, 4021.4999999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7734116E12, 2389.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7734116E12, 3810.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7734116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2139.0, "minX": 3.0, "maxY": 2389.5, "series": [{"data": [[4.0, 2389.5], [3.0, 2139.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2136.5, "minX": 3.0, "maxY": 2386.5, "series": [{"data": [[4.0, 2386.5], [3.0, 2136.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7734116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7734116E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7734116E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.7734116E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.7734116E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7734116E12, 0.8333333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7734116E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7734116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7734116E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7734116E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7734116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7734116E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7734116E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

