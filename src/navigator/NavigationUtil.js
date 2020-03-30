/**
 * 全局导航控制类
 */
export default class NavigationUtil {
    /**
    * 跳转到指定页面
    * @param params
    * @param page
    */
   static goPage(params,page){
       const navigation = NavigationUtil.navigation;
       if(!navigation){
           console.log('navigation can not be null');
           return;
       }
       navigation.navigate(
           page,
           {
               ...params
           }
       );

   }


   static goToPage(params,page){
       const navigation = params;
       navigation.navigate(page)
   }
   static goToPageWithParams(navigationParam,page,params){
       const navigation = navigationParam;
       navigation.navigate(page,{...params})
   }

   static openDrawer(params){
       const navigation = params;
       navigation.openDrawer();
   }

   static closeDrawer(params) {
       const navigation = params;
       navigation.closeDrawer()
   }
   /**
    * 返回上一页
    * @param navigation
    */
   static resetGoBack(params) {
       const navigation = params;
       navigation.goBack();
   }

   /**
    * 重定向到Login
    * @param navigation
    */
   static resetToLoginPage(params) {
       const {navigation} = params;
       navigation.navigate("LoginPage");
   }
 /**
    * 重定向到首页
    * @param navigation
    */
   static resetToHomePage(params) {
       const {navigation} = params;
       navigation.navigate("AreaPage");
   }
   static goToHomePage() {
       NavigationUtil.navSave.navigate('AreaPage')
   }
   static goToLoginPage () {
       NavigationUtil.navSave.navigate('LoginPage')
   }

}
