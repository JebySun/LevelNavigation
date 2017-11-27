/**
 * 垂直多级导航菜单
 * 
 * 可配置选项
 * 1.样式定义class
 * 2.展开菜单时，是否关闭同级其他菜单。
 */

function LevelNaviMenu(container, jsonData, openAndClose) {
    this.container = container;
    this.jsonData = jsonData;

    //展开菜单时，是否关闭同级其他菜单。
    this.openAndClose = openAndClose;

    this.build = function() {
        this.createMenuTree(this.container, this.jsonData);
        this.bindEvent();
    };

    this.createMenuTree = function(parentNode, menuData) {
        for (var i=0; i<menuData.length; i++) {
            if (i==0) {
                var ul = $("<ul>").appendTo(parentNode);
                if (parentNode.get(0).tagName == "LI") {
                   ul.hide();
                }
            }
    
            if (menuData[i].children.length>0) {
                var li = $("<li>").appendTo(ul);
                $("<span class='menu-group'>" + menuData[i].menu + "</span>").appendTo(li);
                this.createMenuTree(li, menuData[i].children);  
            } else {
                $("<li class='menu-item'>" + menuData[i].menu + "</li>").appendTo(ul);
            }
        }
    };

    this.bindEvent = function() {
        var clas = this;
        $(".menu-group").bind("click", function() {
            if (clas.openAndClose) {
                $(this).parent().siblings().children("ul").hide();
            }
            $(this).parent().children("ul").toggle();
        });
    };


}
