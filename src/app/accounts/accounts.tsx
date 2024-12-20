import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomers } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './accounts.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Accounts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const newAccountDialog = useRef<IgrDialog>(null);
  const dropdown = useRef<IgrDropdown>(null);
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('1');
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout accounts-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout header")}>
                <div className={classes("row-layout page-title")}>
                  <div className={classes("row-layout group_3")}>
                    <img src="/src/assets/Accounts%20Icon%20-%20Green.svg" className={classes("image")} />
                  </div>
                  <h6 className={classes("h6")}>
                    <span>Accounts</span>
                  </h6>
                </div>
                <div className={classes("row-layout buttons")}>
                  <IgrButton variant="flat" type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>business</span>
                    </span>
                    <span key={uuid()}>New Account</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                    <span key={uuid()}>Discover companies</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>import_export</span>
                    </span>
                    <span key={uuid()}>Import</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout filters-and-sorting")}>
                <div className={classes("row-layout group_4")}>
                  <IgrSelect outlined="false" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
                    <IgrSelectItem value="1" key="91d6ee0a-20ae-4059-a792-0bac36b17a8d">
                      <span key={uuid()}>My Accounts</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="38f54441-e3fb-467c-b38b-5febb8353251">
                      <span key={uuid()}>All Accounts</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrInput placeholder="Search accounts" outlined="false" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
                <div className={classes("row-layout group_5")}>
                  <IgrButton variant="flat" type="button" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_5")}>
                    <span key={uuid()}>Recently Updated</span>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Name</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Recently Updated</span>
                    </IgrDropdownItem>
                  </IgrDropdown>
                </div>
              </div>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/account-sample`)}>
              <IgrGrid data={northwindCustomers} primaryKey="contactName" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newAccountDialog}>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <h6 className={classes("h6_1")}>
              <span>New Account</span>
            </h6>
            <div className={classes("column-layout group_7")}>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>ACCOUNT INFORMATION</span>
                </p>
                <div className={classes("row-layout group_9")}>
                  <div className={classes("column-layout group_10")}>
                    <IgrInput label="Account Name" outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrSelect outlined="false" label="Type" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="6f8fa7e6-582b-46d9-be56-a6e878879754">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="475d5491-f09e-4361-bc97-2b7e9bbcc192">
                        <span key={uuid()}>Analyst</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="fd521526-e3e2-455d-8f3f-e4338eda6dcd">
                        <span key={uuid()}>Competitor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="0e3d097c-5858-4e01-9097-0cf4a86022f4">
                        <span key={uuid()}>Customer</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="c2eaaba2-2ae2-4f48-a396-9aa3dea5ec03">
                        <span key={uuid()}>Integrator</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="31927e78-a82f-4042-9928-dfacc09a322f">
                        <span key={uuid()}>Investor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="6078d027-e769-4118-9239-067ef1a6370e">
                        <span key={uuid()}>Partner</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="7748ef2b-2ab4-474f-8dc6-7550c4613c93">
                        <span key={uuid()}>Press</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="9" key="c5647d71-74e2-4feb-90cc-b7c458ed6382">
                        <span key={uuid()}>Prospect</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="10" key="a9cab56c-babc-40b6-8af3-04d4baabe8f1">
                        <span key={uuid()}>Reseller</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="11" key="a77f4b2d-507a-42d5-aca8-5254bb681ed5">
                        <span key={uuid()}>Other</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrInput label="Website" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrTextarea label="Description" outlined="false" className={classes("user-input")}></IgrTextarea>
                  </div>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("column-layout group_11")}>
                      <p className={classes("typography__caption text_1")}>
                        <span>Account Owner</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Andrea Silveira</span>
                      </p>
                    </div>
                    <IgrInput label="Parent Account" placeholder="Search Accounts..." outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="tel" label="Phone" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrSelect outlined="false" label="Industry" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="4aee1d5b-9f77-468e-837e-cb8d5d53f363">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="7d86ce14-f6a3-40a0-9205-ee6f5b83535c">
                        <span key={uuid()}>Agriculture</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="492ba552-a994-458f-aed4-e404fa49f275">
                        <span key={uuid()}>Apparel</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="529ebeb2-3650-41c6-9803-14e44dda4ee5">
                        <span key={uuid()}>Banking</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="d1b22908-de6d-4e30-b4c4-5e58e60d364f">
                        <span key={uuid()}>Biotechnology</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="134be461-cdbb-4944-b68c-115ba023b13a">
                        <span key={uuid()}>Chemicals</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="5dfdfeb6-75f4-4239-a2bb-1e0c5d85d557">
                        <span key={uuid()}>Communications</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="8c560f7a-2467-44e9-b0b8-70088f096938">
                        <span key={uuid()}>Construction</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="false" label="Employees" className={classes("user-input")}>
                      <IgrSelectItem value="1" key="cd6f92a0-416f-4b45-94f8-8e599a869b11">
                        <span key={uuid()}>Self Employed</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="a124e56b-ccc2-4dcb-9774-84dadf764638">
                        <span key={uuid()}>1-10</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="c8491eec-41ec-4b3e-a544-c6f7bc3572e0">
                        <span key={uuid()}>11-50</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="b99f38ac-6a03-48f3-86a4-b269b9c16479">
                        <span key={uuid()}>51-250</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="1a024992-316b-483d-9fe9-e8ce9f142681">
                        <span key={uuid()}>+250</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout group_12")}>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>BILLING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="043832d0-f695-4b8a-92b9-0852f1424306">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="ac5b75d2-62eb-477f-abfc-1f2ad6d3f27a">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="d78440bb-e7de-4e03-b515-567bdcd7d559">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="da0a596e-5555-40e5-8833-f97790391e08">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="3872b476-719b-44fc-b595-22fbae6c48a6">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>SHIPPING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="fe1a9c0f-eac8-4b89-aa19-700e88c29dc0">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="71a61132-6e3b-4434-87b7-648deafdf719">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="b04b1f43-0b7a-4211-8030-ea1cab0dfe1e">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="84a25c5b-febf-4c8a-8cf6-7fd4f1ac87a7">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="d3a55deb-fa5c-4ae1-b8fd-548b5623a0ad">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Save</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
