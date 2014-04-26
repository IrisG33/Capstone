/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DB;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author senthil.dexter
 */
public class Form {
    public boolean form1(HttpServletRequest request){
        try{    
                int totalMembers= Integer.parseInt(request.getParameter("HTH_TOTAL_MEMBERS"));
                for (int num=1; num<=totalMembers; num++){
                    ArrayList<TableColumns> tc= new ArrayList<TableColumns>();                     
                    if(num!=1) tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                    tc.add(new TableColumns("String", request.getParameter("HTH_LAST_NAME"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_FIRST_NAME"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_MIDDLE_INITIAL"+num)));
                    tc.add(new TableColumns("Date", request.getParameter("HTH_DATE_OF_BIRTH"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTH_AGE_EFFECTIVE_DATE"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_SEX"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_RELATION"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_CITIZENSHIP"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_DISABILITY"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_RACE"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_ETHNICITY"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTH_SSN"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTH_ALIEN_REGNO"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTH_COMMSERVICE_OR_SSREQ"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTH_TOTAL_MEMBERS")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_FAMILY_SUBSIDY")));
                    tc.add(new TableColumns("Date", request.getParameter("HTH_EFFECTIVE_DATE")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_FORMER_HEAD_SSN")));
                    
                    tc.add(new TableColumns("Date", request.getParameter("HTH_DATE_WAIT_LIST")));
                    tc.add(new TableColumns("Integer", request.getParameter("HTH_ZIP")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_HOMELESS_AT_ADMIN")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_QUALIFY_LOW_INC_LIMIT")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_ASSISTED_1937_ACT")));
                    tc.add(new TableColumns("String", request.getParameter("HTH_HUD_APPROVED_INCOME")));
                    
                    if(num==1) {
                        String HTH_SNO = new Insert().goAutoIncrement("HUD_TENANT_HOUSEHOLD", tc, "HTH_SNO");
                        request.getSession().setAttribute("HTH_SNO", HTH_SNO);
                        System.out.println("session:"+(String)request.getSession().getAttribute("HTH_SNO"));
                    }
                    else{
                        new Insert().go("HUD_TENANT_HOUSEHOLD_FK", tc);
                    }
                }                
        return true;
        }
        catch(Exception ex){ 
            ex.printStackTrace();
            return false;
        }
    }
    
    public boolean form2(HttpServletRequest request){
        try{
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>();
                tc.add(new TableColumns("String", request.getParameter("HPAD_PHA_CODE")));
                tc.add(new TableColumns("String", request.getParameter("HPAD_AGENCY_NAME")));
                //set the Table name here
                String HPAD_SNO = new Insert().goAutoIncrement("HUD_PHA_AGENCY_DTLS", tc,"HPAD_SNO");    
                ArrayList<TableColumns> tc2= new ArrayList<TableColumns>();    
                tc2.add(new TableColumns("Integer", HPAD_SNO));
                tc2.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_PRGM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_PROJECT_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_BLD_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_BLD_ENT_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_UNIT_NUM")));
                String HPTBD_SNO = new Insert().goAutoIncrement("HUD_PHA_TENANT_BLD_DTLS", tc2,"HPTBD_SNO");
                
                ArrayList<TableColumns> tc3= new ArrayList<TableColumns>();    
                tc3.add(new TableColumns("String", request.getParameter("HPAC_ACTION_TYPE")));
                String HPAC_ACTION_SNO = new Insert().goAutoIncrement("HUD_PHA_ACTION_CODE", tc3,"HPAC_ACTION_SNO");
                
                ArrayList<TableColumns> tc4= new ArrayList<TableColumns>();    
                tc4.add(new TableColumns("Integer", HPAC_ACTION_SNO));
                tc4.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO")));
                tc4.add(new TableColumns("Date", request.getParameter("HTPA_EFFECTIVE_DATE")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_IS_CORRECTED")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_IF_CORRECTED")));
                tc4.add(new TableColumns("Date", request.getParameter("HTPA_ADMISSION_DATE")));
                tc4.add(new TableColumns("Date", request.getParameter("HTPA_PROJEFFECTIVE_DATE_REEXAM")));
                tc4.add(new TableColumns("Date", request.getParameter("HTPA_PROJ_DATE_FLATRATE_UPDATE")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_FSS_PARTICIPATION")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_SPECIAL_PROGRAMS")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_OTHER_SPECIAL_PROGRAMS_1")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_OTHER_SPECIAL_PROGRAMS_2")));
                tc4.add(new TableColumns("String", request.getParameter("HTPA_PHA_USE_ONLY")));
                
                new Insert().go("HUD_TENANT_PHA_ACTION", tc4);
        return true;
        }
        catch(Exception ex){ ex.printStackTrace();
            return false;
        }
    }
    
    public boolean form3(HttpServletRequest request){
        try{
                
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>();    
                tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                tc.add(new TableColumns("Integer", request.getParameter("HTUA_UNIT_APTNO")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_UNIT_NUMBERANDSTREET")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_UNIT_CITY")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_UNIT_STATE")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_UNIT_ZIP")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_IS_MAILING_ADD_SAME")));
                tc.add(new TableColumns("Integer", request.getParameter("HTUA_MAILING_APTNO")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_MAILING_NUMBERANDSTREET")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_MAILING_CITY")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_MAILING_STATE")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_MAILING_ZIP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTUA_BEDROOM_NUMBER")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_ACCESSIBLE_UNIT")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_REQT_ACCESSIBILITY")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_RECV_ACCESSIBILITY")));
                tc.add(new TableColumns("Date", request.getParameter("HTUA_DATE_UNIT_PASSED_HQS")));
                tc.add(new TableColumns("Date", request.getParameter("HTUA_DATE_UNIT_LAST_ANNUAL_HQS")));
                tc.add(new TableColumns("Integer", request.getParameter("HTUA_BUILT_YEAR")));
                tc.add(new TableColumns("String", request.getParameter("HTUA_STRUCTURE_TYPE")));
                new Insert().go("HUD_TENANT_UNIT_ADDRESS", tc);   
        return true;
        }
        catch(Exception ex){ ex.printStackTrace();
            return false;
        }
    }
    public boolean form4(HttpServletRequest request){
        try{
                
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>();    
                tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                tc.add(new TableColumns("String", request.getParameter("HTA_TOTAL_CASH_VALUE_ASSET")));
                tc.add(new TableColumns("String", request.getParameter("HTA_TOTAL_ANTICD_INCOME")));
                tc.add(new TableColumns("Integer", request.getParameter("HTA_PASSBOOK_RATE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTA_IMPUTED_ASSET_INCOME")));
                tc.add(new TableColumns("Integer", request.getParameter("HTA_FINAL_ASSET_INCOME")));
                String HTA_SNO=new Insert().goAutoIncrement("HUD_TENANT_ASSET", tc,"HTHFA_SNO");
                int num=1;
                while (true){
                    if(request.getParameter("HTHFA_FAMILY_MEMBER_NAME"+num)==null) break;                    
                    tc= new ArrayList<TableColumns>();    
                    tc.add(new TableColumns("Integer", HTA_SNO));
                    tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                    tc.add(new TableColumns("String", request.getParameter("HTHFA_FAMILY_MEMBER_NAME"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTHFA_NUMBER"+num)));
                    tc.add(new TableColumns("String", request.getParameter("HTHFA_ASSET_TYPE"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTHFA_ASSET_CASH_VALUE"+num)));
                    tc.add(new TableColumns("Integer", request.getParameter("HTHFA_ANTICIPATED_INCOME"+num)));
                    new Insert().go("HUD_TENANT_HH_FAMILY_ASSET", tc);
                    num++; 
                }

                num=1;
                while (true){
                    if(request.getParameter("HTHFI_FAMILY_MEMBER_NAME"+num)==null) break;                    
                    ArrayList<TableColumns> tc2= new ArrayList<TableColumns>();                     
                    tc2.add(new TableColumns("Integer", HTA_SNO));
                    tc2.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                    tc2.add(new TableColumns("String", request.getParameter("HTHFI_FAMILY_MEMBER_NAME"+num)));
                    tc2.add(new TableColumns("String", request.getParameter("HTHFI_NUMBER"+num)));
                    tc2.add(new TableColumns("String", request.getParameter("HTHFI_INCOME_CODE"+num)));
                    tc2.add(new TableColumns("Integer", request.getParameter("HTHFI_DOLLARS_PER_YEAR"+num)));
                    tc2.add(new TableColumns("Integer", request.getParameter("HTHFI_INCOME_EXCLUSIONS"+num)));
                    tc2.add(new TableColumns("Integer", request.getParameter("HTHFI_INCOME_AFTER_EXCLUSIONS"+num)));
                    new Insert().go("HUD_TENANT_HH_FAMILY_INCOME", tc2);
                    num++; 
                }
                ArrayList<TableColumns> tc2= new ArrayList<TableColumns>();    
                tc2.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTH_SNO"))); 
                tc2.add(new TableColumns("String", request.getParameter("HTI_TOTAL_INCOME_AFTER_EXCLS")));
                tc2.add(new TableColumns("String", request.getParameter("HTI_RESERVED")));
                tc2.add(new TableColumns("Integer", request.getParameter("HTI_TOTAL_ANNUAL_INCOME")));
                new Insert().go("HUD_TENANT_INCOME", tc2);
        return true;
        }
        catch(Exception ex){ ex.printStackTrace();
            return false;
        }
    }


    
    public boolean rentCal2(HttpServletRequest request){
        try{
                
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>(); 
                tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHT_SNO"))); 
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_TTP"))); 
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_UNIT_FLAT_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_INCOME_BASED_CEILING_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_TTP_INCOME_BASED_CEILING_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_UTILITY_ALLOWANCE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_TENANT_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_HOUSE_MAX_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_FAMILY_MAX_SUBSIDY")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_TOT_NUM_ELIGIBLE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_TOT_NUM_FAMILY")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_ELIGIBLE_SUBSIDY")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_MIXED_FAMILY_TTP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_UTILITY_ALLOWANCE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHT_PR_MAX_FAMILY_RENT")));
                tc.add(new TableColumns("String", request.getParameter("HTPHT_RENT_TYPE")));
                new Insert().go("HUD_TENANT_PHA_HOUSEHOLD_TURNKEYIII", tc);   
        return true;
        }
        catch(Exception ex){ ex.printStackTrace();
            return false;
        }
    }
    
    public boolean rentCal3(HttpServletRequest request){
        try{
                
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>(); 
                tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHT_SNO"))); 
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_FAMILY_MOVING"))); 
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_FAMILY_PHA_JURISDICTION")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_COST_BILLED")));
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_HOUSING_TYPE")));
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_OWNER_NAME")));
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_OWNER_TIN_SSN")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_CONTRACT_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_UTILITY_ALLOWANCE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_GROSS_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_TTP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_TOT_HAP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_TENANT_RENT")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_HAP_OWNER")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_TOT_HAP")));
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_PR_TOT_NO_ELIGIBLE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_TOT_NO_FAMILY")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_PRORATION_PERCENTAGE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_PRORATED_TOT_HAP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_MIXED_FAMILY_TTP")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_UTILITY_ALLOWANCE")));
                tc.add(new TableColumns("Integer", request.getParameter("HTPHPV_PR_MIXED_FAMILY_RENT")));
                tc.add(new TableColumns("String", request.getParameter("HTPHPV_PR_PRORATED_HAP")));
                new Insert().go("HUD_TENANT_PHA_HOUSEHOLD_PBC_VOUCHERS", tc);   
        return true;
        }
        catch(Exception ex){ ex.printStackTrace();
            return false;
        }
    }
    
    
    // steven
    public boolean rentCal1(HttpServletRequest request){
    return true;
    }
    

}
