<?php include 'parts/site-header.php';?>

<?php include 'parts/header.php';?>

<div class="container-fluid page-customer" id="wrapper">

    <div id="mog-breadcrumb" class="row mog-breadcrumb nav-height">
        <ul class="list-inline">
            <li><a href="#">John Smith</a></li>
            <li><a href="#">ORDR21892503</a></li>
            <li class="active"><a href="#">London Retro Reggie</a></li>
        </ul>
    </div>

    <div class="left-panel">
        <section class="component component-customer-info row">
            <div class="col-sm-3">
                <div class="user-initials">JS</div>
            </div>

            <div class="col-sm-9">
                <p class="heading1 heading">John Smith</p>

                <div class="row">
                    <div class="col-sm-6">
                        <p>20514048</p>
                        <p><a href="mailto:john.smith@gmail.com">john.smith@gmail.com</a></p>
                        <p><a href="tel:01483561235">01483 561235</a></p>
                    </div>

                    <div class="col-sm-6">
                        <p>15 The Robins</p>
                        <p>Bracknell, Berkshire</p>
                        <p>RG12 8BU</p>
                    </div>
                </div>

                <p class="view-more"><a href="#">View More</a></p>
            </div>

            <div class="btn -edit">Edit Profile</div>
        </section>

        <section class="component component-customer-orders row">
            <h2 class="heading2 heading">
                Orders
                <button class="btn -add">Place Order</button>
            </h2>
            <p class="sub-text">Showing 5 of 18</p>

            <div class="col-xs-12">
                <div class="row component card component-card-order -in"
                     data-pnp-toggle-class
                     data-pnp-target=".order-1"
                     data-pnp-class="-in">

                    <div class="col-sm-7">
                        <p class="order-id heading2">ORDR21892503</p>
                        <p class="sub-text">
                            09 Aug 2017 | Order Reference
                        </p>
                    </div>

                    <div class="col-sm-5 text-right">
                        <span class="status sub-text">In Progress</span>
                        <span class="price">£120.00</span>
                    </div>
                </div>

                <div class="row component component-card-order-info order-1 -in">
                    <header class="shipment">
                        Shipment 1 | Tracking Number
                    </header>

                    <div class="col-xs-12">
                        <div class="row component card component-card-job">
                            <div class="col-xs-4 col-sm-2">
                                <img src="/dist/img/temp/glasses_sm_1.png" class="img"/>
                            </div>

                            <div class="col-xs-8 col-sm-5 text-container">
                                <p class="job-name heading2">London Retro Reggie</p>
                                <p class="sub-text">2168314/23505344</p>
                            </div>

                            <div class="col-sm-5 text-right">
                                <span class="status sub-text">Completed</span>
                                <span class="price">£100.00</span>
                            </div>
                        </div>

                        <div class="row component card component-card-job">
                            <div class="col-xs-4 col-sm-2">
                                <img src="/dist/img/temp/glasses_sm_2.png" class="img"/>
                            </div>

                            <div class="col-xs-8 col-sm-5 text-container">
                                <p class="job-name heading2">Taylor Gunmetal</p>
                                <p class="sub-text">2168314/23505344</p>
                            </div>

                            <div class="col-sm-5 text-right">
                                <span class="status sub-text">Completed</span>
                                <span class="price">£20.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <header class="shipment">
                        Shipment 2 | Tracking Number
                    </header>

                    <div class="col-xs-12">
                        <div class="row component card component-card-job">
                            <div class="col-xs-4 col-sm-2">
                                <img src="/dist/img/temp/glasses_sm_2.png" class="img"/>
                            </div>

                            <div class="col-xs-8 col-sm-5 text-container">
                                <p class="job-name heading2">Scout Charley, Matt Brown</p>
                                <p class="sub-text">2168314/23505344</p>
                            </div>

                            <div class="col-sm-5 text-right">
                                <span class="status sub-text">In Lab</span>
                                <span class="price">£40.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-customer-order">
                    <div class="col-sm-7">
                        <p class="order-id heading2">ORDR21892505</p>
                        <p class="sub-text">
                            17 Apr 2017 | Order Reference
                        </p>
                    </div>

                    <div class="col-sm-5 text-right">
                        <span class="status sub-text">Completed</span>
                        <span class="price">£80.00</span>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-customer-order">
                    <div class="col-sm-7">
                        <p class="order-id heading2">ORDR21892506</p>
                        <p class="sub-text">
                            21 Jan 2017 | Order Reference
                        </p>
                    </div>

                    <div class="col-sm-5 text-right">
                        <span class="status sub-text">Completed</span>
                        <span class="price">£8255.95</span>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-customer-order">
                    <div class="col-sm-7">
                        <p class="order-id heading2">ORDR21892502</p>
                        <p class="sub-text">
                            17 Apr 2017 | Order Reference
                        </p>
                    </div>

                    <div class="col-sm-5 text-right">
                        <span class="status sub-text">Completed</span>
                        <span class="price">£80.00</span>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-customer-order">
                    <div class="col-sm-7">
                        <p class="order-id heading2">ORDR21892506</p>
                        <p class="sub-text">
                            21 Jan 2017 | Order Reference
                        </p>
                    </div>

                    <div class="col-sm-5 text-right">
                        <span class="status sub-text">Completed</span>
                        <span class="price">£8255.95</span>
                    </div>
                </div>
            </div>


            <button class="btn">View More</button>
        </section>

        <section class="component component-customer-prescriptions row">
            <h2 class="heading2 heading">
                Prescriptions
                <button class="btn -add">Add Prescription</button>
            </h2>
            <p class="sub-text">Showing 5 of 7</p>

            <div class="col-xs-12">
                <div class="row component card component-card-prescription -in">

                    <div class="col-sm-10">
                        <p class="prescription-id heading2">John Smith</p>
                        <p class="sub-text">
                            09 Aug 2017 | Reference: July 2017
                        </p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <i class="ion-more actions"></i>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-prescription">

                    <div class="col-sm-10">
                        <p class="prescription-id heading2">Jennifer Smith</p>
                        <p class="sub-text">
                            29 Mar 2017 | Reference: Driving Glasses
                        </p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <i class="ion-more actions"></i>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-prescription">

                    <div class="col-sm-10">
                        <p class="prescription-id heading2">David Smith</p>
                        <p class="sub-text">
                            14 Mar 2017 | Reference: Reading Glasses
                        </p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <i class="ion-more actions"></i>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-prescription">

                    <div class="col-sm-10">
                        <p class="prescription-id heading2">John Smith</p>
                        <p class="sub-text">
                            04 Dec 2015 | Reference: December 2016
                        </p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <i class="ion-more actions"></i>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="row component card component-card-prescription">

                    <div class="col-sm-10">
                        <p class="prescription-id heading2">John Smith</p>
                        <p class="sub-text">
                            03 Sept 2015 | Reference: September 2015
                        </p>
                    </div>

                    <div class="col-sm-2 text-right">
                        <i class="ion-more actions"></i>
                    </div>
                </div>
            </div>

            <button class="btn">View More</button>
        </section>

        <section class="component component-customer-notes row">
            <div class="col-sm-5">
                <h2 class="heading2 heading">
                    All Notes <i class="ion-android-arrow-dropdown"></i>
                </h2>
            </div>

            <?php include 'parts/notes.php'?>

        </section>
    </div>

    <div class="right-panel -dark-inset cust-scroll">
        <a href="#" data-pnp-back class="btn -back"><i class="ion-android-arrow-back"></i> Back</a>

        <section class="component component-order-summary">
            <h2 class="heading1 heading">ORDR21728526</h2>

            <p class="sub-text">
                09 aug 2017 | Order Reference | In Progress
            </p>

            <p class="heading2">£120</p>

            <a href="#" class="actions"><i class="ion-more actions"></i></a>

            <hr>
            <div class="account-balance">
                ACCOUNT BALANCE STUFF, TBC
            </div>
        </section>

        <section class="component component-shipment">
            <header class="shipment-details">
                <p class="heading">Shipment 1 | UPS243752095</p>
                <p>15 The Robins, Bracknell, Berkshire, RG12 8BU <i class="ion-android-arrow-dropdown"></i></p>
                <p>Sent via UPS on 16/04/17 -  Signed for by John Smith</p>
            </header>

            <div class="component component-shipment-job">
                <div class="row summary">
                    <div class="col-xs-4 col-sm-5 image-container">
                        <img src="/dist/img/temp/glasses_lg_1.png" class="img"/>
                    </div>

                    <div class="col-xs-8 col-sm-7 text-container">
                        <p class="job-name heading2">London Retro Reggie</p>
                        <p class="sub-text">2168314/23505344 & Frame details</p>
                        <p class="sub-text"><i class="ion-checkmark-circled"></i> Completed</p>
                        <p class="heading2">£20</p>
                        <a href="#" class="actions"><i class="ion-more actions"></i></a>
                    </div>
                </div>

                <div class="row accordions">
                    <div class="col-xs-12">

                        <div class="accordion">
                            <h3 class="heading heading2 trigger">Addresses</h3>
                            <div class="reveal">
                                <div class="display-table-sm -addresses">
                                    <div>
                                        <div class="address-container">
                                            <p class="sub-text">Billing Address</p>

                                            <p class="heading">Mr John Smith</p>

                                            <p class="address">
                                                9 Richmond Close <br/>
                                                Southwood Lane <br/>
                                                Farnborough <br/>
                                                Hampshire <br/>
                                                GU14 0RH
                                            </p>
                                        </div>

                                        <div class="address-container">
                                            <p class="sub-text">Delivery Address</p>

                                            <p class="heading">Mr Darren Johnson</p>

                                            <p class="address">
                                                30 Stamford Street <br/>
                                                London <br/>
                                                SE1 9LQ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Items</h3>
                            <div class="reveal">
                                TBC
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Prescription</h3>
                            <div class="reveal">

                                <div class="component component-prescription">
                                    <h3 class="heading heading2">John Smith</h3>
                                    <p class="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                    <button class="btn -edit">Change Prescription</button>

                                    <table class="prescription-table table">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>SPH</th>
                                            <th>CYL</th>
                                            <th>Axis</th>
                                            <th>Prism</th>
                                            <th>Base</th>
                                            <th>Near Add</th>
                                            <th>Mono PD</th>
                                            <th>PD</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="right-eye">
                                            <td>R</td>
                                            <td>-3.50</td>
                                            <td>none</td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>63</td>
                                        </tr>
                                        <tr class="left-eye">
                                            <td>L</td>
                                            <td>-3.00</td>
                                            <td>-4.00</td>
                                            <td>145</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div class="extra">
                                        <strong>Extra Information:</strong>
                                        <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Notes</h3>
                            <div class="reveal">
                                <section class="row component-job-notes">
                                    <?php include 'parts/notes.php'?>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="component component-shipment-job">
                <div class="row summary">
                    <div class="col-xs-4 col-sm-5 image-container">
                        <img src="/dist/img/temp/glasses_lg_2.png" class="img"/>
                    </div>

                    <div class="col-xs-8 col-sm-7 text-container">
                        <p class="job-name heading2">Taylor Gun Metal</p>
                        <p class="sub-text">2168314/23505344 & Frame details</p>
                        <p class="sub-text"><i class="ion-checkmark-circled"></i> Completed</p>
                        <p class="heading2">£60</p>
                        <a href="#" class="actions"><i class="ion-more actions"></i></a>
                    </div>
                </div>

                <div class="row accordions">
                    <div class="col-xs-12">

                        <div class="accordion">
                            <h3 class="heading heading2 trigger">Addresses</h3>
                            <div class="reveal">
                                <div class="display-table-sm -addresses">
                                    <div>
                                        <div class="address-container">
                                            <p class="sub-text">Billing Address</p>

                                            <p class="heading">Mr John Smith</p>

                                            <p class="address">
                                                9 Richmond Close <br/>
                                                Southwood Lane <br/>
                                                Farnborough <br/>
                                                Hampshire <br/>
                                                GU14 0RH
                                            </p>
                                        </div>

                                        <div class="address-container">
                                            <p class="sub-text">Delivery Address</p>

                                            <p class="heading">Mr Darren Johnson</p>

                                            <p class="address">
                                                30 Stamford Street <br/>
                                                London <br/>
                                                SE1 9LQ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Items</h3>
                            <div class="reveal">
                                TBC
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Prescription</h3>
                            <div class="reveal">

                                <div class="component component-prescription">
                                    <h3 class="heading heading2">John Smith</h3>
                                    <p class="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                    <button class="btn -edit">Change Prescription</button>

                                    <table class="prescription-table table">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>SPH</th>
                                            <th>CYL</th>
                                            <th>Axis</th>
                                            <th>Prism</th>
                                            <th>Base</th>
                                            <th>Near Add</th>
                                            <th>Mono PD</th>
                                            <th>PD</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="right-eye">
                                            <td>R</td>
                                            <td>-3.50</td>
                                            <td>none</td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>63</td>
                                        </tr>
                                        <tr class="left-eye">
                                            <td>L</td>
                                            <td>-3.00</td>
                                            <td>-4.00</td>
                                            <td>145</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div class="extra">
                                        <strong>Extra Information:</strong>
                                        <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Notes</h3>
                            <div class="reveal">
                                <section class="row component-job-notes">
                                    <?php include 'parts/notes.php'?>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="component component-shipment">
            <header class="shipment-details">
                <p class="heading">Shipment 2 | UPS243752096</p>
                <p>15 The Robins, Bracknell, Berkshire, RG12 8BU <i class="ion-android-arrow-dropdown"></i></p>
                <p>Not Shipped</p>
            </header>

            <div class="component component-shipment-job">
                <div class="row summary">
                    <div class="col-xs-4 col-sm-5 image-container">
                        <img src="/dist/img/temp/glasses_lg_3.png" class="img"/>
                    </div>

                    <div class="col-xs-8 col-sm-7 text-container">
                        <p class="job-name heading2">Scout Charley, Matt Brown</p>
                        <p class="sub-text">2168314/23505344 & Frame details</p>
                        <p class="sub-text">In Lab</p>
                        <p class="heading2">£40</p>
                        <a href="#" class="actions"><i class="ion-more actions"></i></a>
                    </div>
                </div>

                <div class="row accordions">
                    <div class="col-xs-12">

                        <div class="accordion">
                            <h3 class="heading heading2 trigger">Addresses</h3>
                            <div class="reveal">
                                <div class="display-table-sm -addresses">
                                    <div>
                                        <div class="address-container">
                                            <p class="sub-text">Billing Address</p>

                                            <p class="heading">Mr John Smith</p>

                                            <p class="address">
                                                9 Richmond Close <br/>
                                                Southwood Lane <br/>
                                                Farnborough <br/>
                                                Hampshire <br/>
                                                GU14 0RH
                                            </p>
                                        </div>

                                        <div class="address-container">
                                            <p class="sub-text">Delivery Address</p>

                                            <p class="heading">Mr Darren Johnson</p>

                                            <p class="address">
                                                30 Stamford Street <br/>
                                                London <br/>
                                                SE1 9LQ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Items</h3>
                            <div class="reveal">
                                TBC
                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Prescription</h3>
                            <div class="reveal">

                                <div class="component component-prescription">
                                    <h3 class="heading heading2">John Smith</h3>
                                    <p class="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                    <button class="btn -edit">Change Prescription</button>

                                    <table class="prescription-table table">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>SPH</th>
                                            <th>CYL</th>
                                            <th>Axis</th>
                                            <th>Prism</th>
                                            <th>Base</th>
                                            <th>Near Add</th>
                                            <th>Mono PD</th>
                                            <th>PD</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="right-eye">
                                            <td>R</td>
                                            <td>-3.50</td>
                                            <td>none</td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>63</td>
                                        </tr>
                                        <tr class="left-eye">
                                            <td>L</td>
                                            <td>-3.00</td>
                                            <td>-4.00</td>
                                            <td>145</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div class="extra">
                                        <strong>Extra Information:</strong>
                                        <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="accordion">
                            <h3 class="heading heading8 trigger">Notes</h3>
                            <div class="reveal">
                                <section class="row component-job-notes">
                                    <?php include 'parts/notes.php'?>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</div>

<?php include 'parts/footer.php';?>

<?php include 'parts/site-footer.php';?>