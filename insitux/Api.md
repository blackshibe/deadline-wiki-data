# API

The entire API available inside deadline. contents are automatically synchronized with the deadline completion.

# Index

-   [Main](./Main.html)
-   [Getting Started](./GettingStarted.html)
-   [API](./Api.html)
-   [Code Samples](./Samples.html)

# Enum-like strings

```
; MAPS
demo_baseplate
demo_claustrophobic_v3
demo_claustrophobic_v4
dl_shooting_range
dl_afghanistan
dl_shipment
```

```
; LIGHTING PRESETS
blank
foggy
day
spooktober
darkworld
dl_baseplate
dl_builder
demo_claustrophobic_lighting
dl_afghanistan_morning
dl_shipment
```

```
; CALIBERS
45acp_blazer_brass_230gr_fmj
5.45x39_tulammo_60gr_fmj_ta545390
5.56x45_winchester_m855_62gr_fmj-greentip_vm855
7.62x51_federal_american_eagle_xm119cs_175gr_ot
7.62x54r_tulammo_ps_151gr_fbmj_7n1
9x18_mesko_93gr_fmj_mesko9mak-1
9x19_speer_lawman_124gr_tmj_53651
invalid
mili_12g_12x70_9_pellets_00_buck
remington_accutip_12g_275_lead_sabot_slug
pheonix_rising_hellfire_3i_dragons_breath
9x19_federal_ballisticlean_100gr_rht_frangible_bc9nt3
9x19_federal_classic_115gr_hi-shok_jhp_9bp
9x19_remington_umc_115gr_fmj_l9mm3b
9x19_armscor_usa_147gr_fmj_fac9-5n
9x19_piney_mountain_124gr_green_tracer
5.56x45_federal_american_eagle_training_55gr_fmj_xm193blx
5.56x45_novx_copper_pentagon_55gr_mchp_556n55cp
5.56x45_hornady_ss-109_63gr_greentip-ap
5.56x45_cbcdefense_m196_55gr_red_tracer
5.56x45_cbcdefense_sat-ip_62gr_clf_aep-97
7.62x51_fedarm_m62_147gr_red_tracer_cr-762-tr
7.62x51_fedarm_m80-ball_147gr_fmj-lc_cr-762-fmj
7.62x51_cbcdefense_lilac_139gr_ir_tracer
45acp_pmc_230gr_fmj_45a
45acp_stelth_230gr_tmj_tmc-stl
9x18_underwood_115gr_fn_uw721
9x18_hornady_xtp_95gr_jhpfb
9x18_nca_novosibirsk_ppt_gzh_56gr_red_tracer_75-t-181
9x18_underwood_xtreme_penetrator_95gr_sm
5.45x39_hornady_black_60gr_v-max
5.45x39_tulammo_bs_64gr_bmj_7n24
5.45x39_barnaul_bt_55gr_hpspc
7.62x54r_ppu_150gr_sp_pp76254s
7.62x54r_tulammo_t-46_149gr_green_tracer_7t2
45acp_tulammo_230gr_fmj
45acp_ammoinc_230gr_red_tracer_jhp
federal_h1234_game-shok_12x70_150_plts_#4
```

```
; WEAPONS
M4A1
AK74N
UMP45
PP19
MP5
Remington700
MosinNagant
Glock17
Makarov
Vector
Remington870
MP133
```

```
; CAMERA MODES
Default (fallback)
Freecam
Frozen
Tperson
```

# Contents

<div id="__contents__" style="list-style-type: none">

</div>

<script defer>
    fetch("https://raw.githubusercontent.com/phunanon/Insitux/master/integrations/Deadline.json").then((response) => {
        response.text().then((data) => {
            let parsed = JSON.parse(data);
            let doc = document.getElementById("__contents__");
            doc.innerText = "";

            for (i in parsed) {
                let code = "";

                for (other_i in parsed[i].list) {
                    code += parsed[i].list[other_i].directory + "\n";
                    parsed[i].list[other_i].description.forEach((element) => {
                        code += element + "\n";
                    });
                    code += "<br>\n<br/>";
                }

                let list_item = document.createElement("li");
                let title = document.createElement("h1");
                title.innerText = i;
                let description = document.createElement("p");
                description.innerText = parsed[i].description;
                let pre = document.createElement("pre");
                let code_element = document.createElement("code");
                pre.appendChild(code_element);
                code_element.innerHTML = code;

                list_item.appendChild(title);
                list_item.appendChild(description);
                list_item.appendChild(pre);

                doc.appendChild(list_item);
            }
        });
    });
</script>
