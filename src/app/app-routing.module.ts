import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      matcher: (url) => {
        if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
          return {
            consumed: url,
            posParams: {
              username: new UrlSegment(url[0].path.substring(1), {})
            }
          };
        }
        return null;
      },
      component: ProfileComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
