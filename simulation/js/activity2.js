function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate the heat transfer </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Heat Transfer", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <p style="font-size: 20px; font-weight: 600;">Resistance in parallel</p> <br>
        <h5> Calculate the heat transfer through the composite wall as shown in figure below. Take conductivity of A, B, C, D as 50, 15, 8, 25 w/m-k respectively. </h5>

        <h5>Area of wall = ${act2_area}m<sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T<sub>1</sub> = ${act2_T1}<sup>o</sup>C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; T<sub>2</sub> = ${act2_T2}<sup>o</sup>C</h5>
        <h5>b<sub>1</sub> = ${act2_b1}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b<sub>2</sub> = ${act2_b2}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b<sub>3</sub> = ${act2_b3}m</h5>
        <h5>Find the heat transfer.</h5>
        <br>
        <div class="row">
            <div class="col-6"> <p style='text-align: right;'><img style='width: 70%;' src='./images/activity2_1.png'></p> </div>
            <div class="col-6"> <p style='text-align: left;'><img style='width: 70%;' src='./images/activity2_2.png'></p> </div>
        </div>
        <br>

        <h5>Conductive Resistance of A</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ R_A = \\frac{1}{K_A A} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> k/w 
            
            <button class='btn btn-info std-btn' onclick='verify_cra();' id='btn_cra' style="width:20%">Verify</button>
        </p>

        <div id="act2_crb" style="display: none">
            <h5>Conductive Resistance of B</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_B = \\frac{1}{K_B A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> k/w 
                
                <button class='btn btn-info std-btn' onclick='act2_verify_crb();' id='btn_crb' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="crc" style="display: none">
            <h5>Conductive Resistance of C</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_C = \\frac{1}{K_C A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> k/w 
                
                <button class='btn btn-info std-btn' onclick='verify_crc();' id='btn_crc' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="crd" style="display: none">
            <h5>Conductive Resistance of D</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_D = \\frac{1}{K_D A} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> k/w 
                
                <button class='btn btn-info std-btn' onclick='verify_crd();' id='btn_crd' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="rl" style="display: none">
            <h5>Resistance of Loop</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;'>
                    $$ R_loop = \\frac{R_B R_C}{R_B + R_C} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal14-inp'> <span id='cal14-val-sp'></span> k/w 
                
                <button class='btn btn-info std-btn' onclick='verify_rl();' id='btn_rl' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="totrs" style="display: none">
            <h5>Total Resistance</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;'>
                    $$ R_T = R_A + R_loop + R_O $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal15-inp'> <span id='cal15-val-sp'></span> k/w 
                
                <button class='btn btn-info std-btn' onclick='verify_totrs();' id='btn_totrs' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="ht" style="display: none">
            <h5>Heat Transfer</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;'>
                    $$ Q = \\frac{T_1 - T_2}{R_T} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal16-inp'> <span id='cal16-val-sp'></span> w 
                
                <button class='btn btn-info std-btn' onclick='verify_ht();' id='btn_ht' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    act2_RA = 1 / (act2_KA * act2_area);
    act2_RA = parseFloat(act2_RA.toFixed(2));
    console.log("RA= ", act2_RA);
    act2_RB = 1 / (act2_KB * act2_area);
    act2_RB = parseFloat(act2_RB.toFixed(2));
    console.log("RB= ", act2_RB);
    act2_RC = 1 / (act2_KC * act2_area);
    act2_RC = parseFloat(act2_RC.toFixed(2));
    console.log("RC= ", act2_RC);
    act2_RD = 1 / (act2_KD * act2_area);
    act2_RD = parseFloat(act2_RD.toFixed(2));
    console.log("RD= ", act2_RD);
    act2_Rloop = (act2_RB * act2_RC) / (act2_RB + act2_RC);
    act2_Rloop = parseFloat(act2_Rloop.toFixed(2));
    console.log("RLoop= ", act2_Rloop);
    act2_RT = act2_RA + act2_Rloop + act2_RD;
    act2_RT = parseFloat(act2_RT.toFixed(2));
    console.log("RT= ", act2_RT);
    act2_Q = (act2_T1 - act2_T2) / (act2_RT);
    act2_Q = parseFloat(act2_Q.toFixed(2));
    console.log("Q= ", act2_Q);
}
function verify_cra() {
    let btn = document.getElementById('btn_cra');
    let div = document.getElementById('act2_crb');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(2)), parseFloat(act2_RA.toFixed(2)))) {
        alert('RA value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act2_RA).toFixed(2)}`;
    div.style.display = 'block';
}
function act2_verify_crb() {
    let btn = document.getElementById('btn_crb');
    let div = document.getElementById('crc');
    let inp11 = document.getElementById('cal11-inp');
    let sp11 = document.getElementById('cal11-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(2)), parseFloat(act2_RB.toFixed(2)))) {
        alert('RB value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp11.remove();
    sp11.innerText = `${(act2_RB).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_crc() {
    let btn = document.getElementById('btn_crc');
    let div = document.getElementById('crd');
    let inp12 = document.getElementById('cal12-inp');
    let sp12 = document.getElementById('cal12-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(2)), parseFloat(act2_RC.toFixed(2)))) {
        alert('RC value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp12.remove();
    sp12.innerText = `${(act2_RC).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_crd() {
    let btn = document.getElementById('btn_crd');
    let div = document.getElementById('rl');
    let inp13 = document.getElementById('cal13-inp');
    let sp13 = document.getElementById('cal13-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp13.value).toFixed(2)), parseFloat(act2_RD.toFixed(2)))) {
        alert('RD value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp13.remove();
    sp13.innerText = `${(act2_RD).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_rl() {
    let btn = document.getElementById('btn_rl');
    let div = document.getElementById('totrs');
    let inp14 = document.getElementById('cal14-inp');
    let sp14 = document.getElementById('cal14-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp14.value).toFixed(2)), parseFloat(act2_Rloop.toFixed(2)))) {
        alert('RLoop value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp14.remove();
    sp14.innerText = `${(act2_Rloop).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_totrs() {
    let btn = document.getElementById('btn_totrs');
    let div = document.getElementById('ht');
    let inp15 = document.getElementById('cal15-inp');
    let sp15 = document.getElementById('cal15-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp15.value).toFixed(2)), parseFloat(act2_RT.toFixed(2)))) {
        alert('RT value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp15.remove();
    sp15.innerText = `${(act2_RT).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_ht() {
    let btn = document.getElementById('btn_ht');
    let inp16 = document.getElementById('cal16-inp');
    let sp16 = document.getElementById('cal16-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp16.value).toFixed(2)), parseFloat(act2_Q.toFixed(2)))) {
        alert('Q value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp16.remove();
    sp16.innerText = `${(act2_Q).toFixed(2)}`;
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map