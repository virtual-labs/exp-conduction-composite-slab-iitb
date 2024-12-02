let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Conduction through composite slab</h5>
        <p>Learning Objective: Calculate the inside and outside temperature</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate Temperature", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <p style="font-size: 20px; font-weight: 600;">Resistance in series</p> <br>
        <h5> A cold storage room has wall made of ${act1_brick_thickness}m thick layer of brick (k = ${act1_brick_k}W/m-k) on the outside. The middle layer is of ${act1_plastic_thickness}m thick of plastic foam (k = ${act1_plastic_k}W/m-k) and ${act1_wood_thickness}m inside layer wood (k = ${act1_wood_k}W/m-k). The outside and inside convective heat transfer coefficient and temperature are ${act1_outside_conv_heat_transfer_coeff}W/m-k, ${act1_outside_temp}<sup>o</sup>C and ${act1_inside_conv_heat_transfer_coeff}W/m-k, ${act1_inside_temp}<sup>o</sup>C respectively. </h5>
        <h5> 1. Find the heat removed by the refigeration, wall area is ${act1_area}m<sup>2</sup> </h5>
        <h5> 2. Find the temperature of inner and outer surface of the wall. </h5>
        <br>
        <div class="row">
            <div class="col-6"> <p style='text-align: right;'><img style='width: 70%;' src='./images/activity1_1.png'></p> </div>
            <div class="col-6"> <p style='text-align: left;'><img style='width: 70%;' src='./images/activity1_2.png'></p> </div>
        </div>
        <br>

        <h5>Resistance of inside convection</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ R_1 = \\frac{1}{h_1 A} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> k/w 
            
            <button class='btn btn-info std-btn' onclick='verify_ric();' id='btn_ric' style="width:20%">Verify</button>
        </p>
        
        <div id="crw" style="display: none">
            <h5>Conductive Resistance of wood</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ R_2 = \\frac{b_1}{k_1 A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_crw();' id='btn_crw' style="width:20%">Verify</button>
            </p>
        </div>
        
        <div id="crp" style="display: none">
            <h5>Conductive Resistance of plastic foam</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_3 = \\frac{b_2}{k_2 A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_crp();' id='btn_crp' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="crb" style="display: none">
            <h5>Conductive Resistance of brick</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_4 = \\frac{b_3}{k_3 A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_crb();' id='btn_crb' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="roc" style="display: none">
            <h5>Resistance of outside convection</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_5 = \\frac{1}{h_2 A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_roc();' id='btn_roc' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="tr" style="display: none">
            <h5>Total Resistance</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R = R_1 + R_2 + R_3 + R_4 + R_5 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> k/w

                <button class='btn btn-info std-btn' onclick='verify_tr();' id='btn_tr' style="width:20%">Verify</button>
            </p>
        </div>
        
        <div id="q" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Q = \\frac{T_1 - T_6}{R} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_q();' id='btn_q' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="tis" style="display: none">
            <h5>Temperature at inside surface</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Q = \\frac{T_1 - T_2}{R_1} $$
                    $$ T_2 = Q R_1 + T_1 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> <sup>o</sup>C

                <button class='btn btn-info std-btn' onclick='verify_tis();' id='btn_tis' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="tos" style="display: none">
            <h5>Temperature at outside surface</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Q = \\frac{T_5 - T_5}{R_5} $$
                    $$ T_5 = Q R_5 + T_6 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> <sup>o</sup>C

                <button class='btn btn-info std-btn' onclick='verify_tos();' id='btn_tos' style="width:20%">Verify</button>
            </p>
        </div>

    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    act1_R1 = 1 / (act1_inside_conv_heat_transfer_coeff * act1_area);
    act1_R1 = parseFloat(act1_R1.toFixed(7));
    console.log("R1= ", act1_R1);
    act1_R2 = act1_wood_thickness / (act1_wood_k * act1_area);
    act1_R2 = parseFloat(act1_R2.toFixed(7));
    console.log("R2= ", act1_R2);
    act1_R3 = act1_plastic_thickness / (act1_plastic_k * act1_area);
    act1_R3 = parseFloat(act1_R3.toFixed(7));
    console.log("R3= ", act1_R3);
    act1_R4 = act1_brick_thickness / (act1_brick_k * act1_area);
    act1_R4 = parseFloat(act1_R4.toFixed(7));
    console.log("R4= ", act1_R4);
    act1_R5 = 1 / (act1_outside_conv_heat_transfer_coeff * act1_area);
    act1_R5 = parseFloat(act1_R5.toFixed(7));
    console.log("R5= ", act1_R5);
    act1_R = act1_R1 + act1_R2 + act1_R3 + act1_R4 + act1_R5;
    act1_R = parseFloat(act1_R.toFixed(7));
    console.log("R= ", act1_R);
    act1_Q = (act1_inside_temp - act1_outside_temp) / act1_R;
    act1_Q = parseFloat(act1_Q.toFixed(7));
    console.log("Q= ", act1_Q);
    inside_sur_temp = act1_Q * act1_R1 + act1_inside_temp;
    inside_sur_temp = parseFloat(inside_sur_temp.toFixed(7));
    console.log("T2= ", inside_sur_temp);
    outside_sur_temp = act1_Q * act1_R5 + act1_outside_temp;
    outside_sur_temp = parseFloat(outside_sur_temp.toFixed(7));
    console.log("T5= ", outside_sur_temp);
}
function verify_ric() {
    let btn = document.getElementById('btn_ric');
    let div = document.getElementById('crw');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(7)), parseFloat(act1_R1.toFixed(7)))) {
        alert('R1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_R1).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_crw() {
    let btn = document.getElementById('btn_crw');
    let div = document.getElementById('crp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(7)), parseFloat(act1_R2.toFixed(7)))) {
        alert('R2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_R2).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_crp() {
    let btn = document.getElementById('btn_crp');
    let div = document.getElementById('crb');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(7)), parseFloat(act1_R3.toFixed(7)))) {
        alert('R3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_R3).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_crb() {
    let btn = document.getElementById('btn_crb');
    let div = document.getElementById('roc');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(7)), parseFloat(act1_R4.toFixed(7)))) {
        alert('R4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act1_R4).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_roc() {
    let btn = document.getElementById('btn_roc');
    let div = document.getElementById('tr');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(7)), parseFloat(act1_R5.toFixed(7)))) {
        alert('R5 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act1_R5).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_tr() {
    let btn = document.getElementById('btn_tr');
    let div = document.getElementById('q');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(7)), parseFloat(act1_R.toFixed(7)))) {
        alert('R value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act1_R).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_q() {
    let btn = document.getElementById('btn_q');
    let div = document.getElementById('tis');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(7)), parseFloat(act1_Q.toFixed(7)))) {
        alert('Q value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act1_Q).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_tis() {
    let btn = document.getElementById('btn_tis');
    let div = document.getElementById('tos');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(7)), parseFloat(inside_sur_temp.toFixed(7)))) {
        alert('T2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(inside_sur_temp).toFixed(7)}`;
    div.style.display = 'block';
}
function verify_tos() {
    let btn = document.getElementById('btn_tos');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(7)), parseFloat(outside_sur_temp.toFixed(7)))) {
        alert('T5 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(outside_sur_temp).toFixed(7)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map