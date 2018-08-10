
import { BodyComponent } from './components/body/body.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { CompleteOrdersComponent } from './components/complete-orders/complete-orders.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

import { AdminComponent } from './components/admin/admin.component';
import { EditpoComponent } from './components/editpo/editpo.component';
import { AddpoComponent } from './components/addpo/addpo.component';
import { TermsofuseComponent } from './components/termsofuse/termsofuse.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes =
[
    {
        path:'',
        component:DashboardComponent,
    },
     {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'termsofuse',
        component:TermsofuseComponent
    },
    {
        path:'addpo',
        component:AddpoComponent
    },
    {
        path:'editpo',
        component:EditpoComponent
    },
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'',
                component:AllOrdersComponent
            },
            {
                path:'completeOrders',
                component:CompleteOrdersComponent
            },
            {
                path:'openOrders',
                component:OpenOrdersComponent
            }
        ]
    },
    {
        path:'status',
        component:StatusComponent
    }
]

    @NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule{}