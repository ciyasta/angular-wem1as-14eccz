import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12 col-sm-6 team">
        

            <kendo-sortable [kendoSortableBinding]="itemsSortable" zone="innerZone"
                activeItemClass="sortable-item active" (dataAdd)="onDragStart(i, $event)" [animation]="true"
                itemClass="sortable-item">
                <ng-template let-item="item">
                    <span>
                        <div class="kendo-sortable">
                            <div class="kendo-sortable-element">
                                <span>
                                    <span class="ng-binding group-value-name">{{item.value}}</span>
                                    <span class="group-value-number" *ngIf="item.isGroup">
                                        ({{item.subFields.length}})
                                    </span>
                                </span>
                            </div>

                        </div>
                    </span>

                    <kendo-sortable emptyText="emptyItemStyle" [emptyItemStyle]="{'min-height': '100px','background-color': '#f7f7f7'}"
                        [kendoSortableBinding]="item.subFields" zone="innerZone" activeItemClass="sortable-item active"
                        (dragStart)="onDragStart(i, $event)" [animation]="true" itemClass="sortable-item-sub"
                        *ngIf="item.isGroup">
                        <ng-template let-item="item">
                            <span>
                                <div class="kendo-sortable-subField">

                                    <div class="kendo-sortable-element">
                                        {{item.value}}
                                    </div>
                                </div>
                            </span>

                        </ng-template>
                    </kendo-sortable>
                </ng-template>
            </kendo-sortable>

        </div>
    </div>
</div>
`,
    styleUrls: ['styles.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
 public itemsSortable: any[] = [
    {
        "id": 85,
        "value": "grp2",
        "isVisible": false,
        "displayOrder": 1,
        "subFields": [
            {
                "id": 86,
                "value": "Australia",
                "isVisible": false,
                "displayOrder": 1,
                "subFields": null,
                "isGroup": false
            },
            {
                "id": 87,
                "value": "Canada",
                "isVisible": false,
                "displayOrder": 2,
                "subFields": null,
                "isGroup": false
            }
        ],
        "isGroup": true
    },
    {
        "id": 88,
        "value": null,
        "isVisible": false,
        "displayOrder": 2,
        "subFields": null,
        "isGroup": false
    },
    {
        "id": 89,
        "value": "China",
        "isVisible": false,
        "displayOrder": 3,
        "subFields": null,
        "isGroup": false
    },
    {
        "id": 90,
        "value": "Germany",
        "isVisible": false,
        "displayOrder": 4,
        "subFields": null,
        "isGroup": false
    },
    {
        "id": 91,
        "value": "United Kingdom",
        "isVisible": false,
        "displayOrder": 5,
        "subFields": null,
        "isGroup": false
    },
    {
        "id": 92,
        "value": "USA",
        "isVisible": false,
        "displayOrder": 6,
        "subFields": null,
        "isGroup": false
    },
     {
        "id": 95,
        "value": "grp2",
        "isVisible": false,
        "displayOrder": 1,
        "subFields": [
            {
                "id": 96,
                "value": "Australia",
                "isVisible": false,
                "displayOrder": 1,
                "subFields": null,
                "isGroup": false
            },
            {
                "id": 97,
                "value": "Canada",
                "isVisible": false,
                "displayOrder": 2,
                "subFields": null,
                "isGroup": false
            }
        ],
        "isGroup": true
    }
];
    
    onDragStart(i, $event){
         console.log(i);
         console.log($event)
      console.log($event.dataItem);
      if($event.dataItem!= undefined && $event.dataItem.isGroup == true)
      {
        return false;
      }
      else{
        return true;
      }

    }
    
}

