import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';

FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageHome', {nav :'componentNavbar', page: 'pageHome', footer: 'componentFooter' });
  }
});

new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
