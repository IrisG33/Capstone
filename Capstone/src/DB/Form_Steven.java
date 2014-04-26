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
public class Form_Steven {
    /**
     * 
     * @param request 
     * @return 
     */
    public boolean rentCal4(HttpServletRequest request){
        try{
             ArrayList<TableColumns> tc = new ArrayList<TableColumns>();
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_NO_BEDROOMS")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_FAMILY_MOVING")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_FAMILY_QUALIFY")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_FAMILY_PHA_JURISDICTION")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_COST_BILLED")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_PHA_CODE_BILLED")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_HOUSING_TYPE")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_OWNER_NAME")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_OWNER_TIN/SSN")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHHV_PAYMENT_STANDARD")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_RENT_OWNER")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_UTILITY_ALLOWANCE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_GROSS_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PAYMENT_STANDARD_GROSS_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_TTP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_TOT_HAP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_TOT_FAMILY_SHARE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_HAP_OWNER")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_TENANT_RENT_OWNER")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_UTILITY_REIMBURSEMENT_FAMILY")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_NORMAL_TOTAL_HAP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_TOT_NO_ELIGIBLE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_TOT_NO_FAMILY")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_PRORATION_PERCENTAGE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_PRORATED_TOT_HAP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_MIXED_FAMILY_TTP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_UTILITY_ALLOWANCE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_MIXED_FAMILY_TENANT_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHHV_PR_PRORATED_HAP_OWNER")));
             new Insert().go("HUD_TENANT_PHA_HOUSEHOLD_HCV_VOUCHERS", tc);   
             return true;
        }catch(Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public boolean rentCal5(HttpServletRequest request){
        try{
             ArrayList<TableColumns> tc = new ArrayList<TableColumns>();
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHMR_HAP_CONTRACT_NO")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHMR_MOD_REHAB_SRO_PROGRAM")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHMR_MOD_REHAB_SRO_UNIT")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHMR_OWNER_NAME")));
             tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTPHMR_OWNER_TIN_SSN")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_CURRENT_BASE_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_REHAB_DEBT_SERVICE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_CONTRACT_RENT_OWNER")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_UTILITY_ALLOWANCE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_TTP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_TENANT_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_HAP_OWNER")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_GROSS_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_NORMAL_TOT_HAP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_TOT_NO_ELIGIBLE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_TOT_NO_FAMILY")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_PRORATION_PRCENTAGE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_PRORATION_TOT_HAP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_MIXED_FAMILY_TTP")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_UTILITY_ALLOWANCE")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_MIXED_FAMILY_TENANT_RENT")));
             tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTPHMR_PR_PRORATED_HAP_OWNER")));
             new Insert().go("HUD_TENANT_PHA_HOUSEHOLD_MOD_REHAB", tc);   
             return true;
        }catch(Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public boolean rentCal8(HttpServletRequest request){
        try{
             ArrayList<TableColumns> tc = new ArrayList<TableColumns>();
             String decision = request.getSession().getAttribute("choice");
             if(decision.equals("Yes")){
                 tc.add(new TableColumns("Date", (String)request.getSession().getAttribute("HTFW_FSS_INITIAL_START_DATE")));
                 tc.add(new TableColumns("Date", (String)request.getSession().getAttribute("HTFW_FSS_INITIAL_END_DATE")));
                 tc.add(new TableColumns("Date", (String)request.getSession().getAttribute("HTFW_FSS_CONTRACT_DATE")));
                 tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTFW_FSS_NO_FAMILY_MEMBERS")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_FSS_FAMILY_SELECTION_PREF")));
                 tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTFW_FSS_CURRENT_ACCOUNT_MONTHLY_CREDIT")));
                 tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTFW_FSS_CURRENT_ACCOUNT_BALANCE")));
                 tc.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HTFW_FSS_AMOUNT_DISBURSED")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_FAMILY_CONTRACT_PARTICIPATION")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_FAMILY_HOMEOWNERSHIP")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_PRIMARY_REASON_EXIT")));
             }else if(decision.equals("No")){
                 tc.add(new TableColumns("Date", (String)request.getSession().getAttribute("HTFW_VOUCHER_ISSUED_DATE")));
                 tc.add(new TableColumns("Date", (String)request.getSession().getAttribute("HTFW_LEASE_APPROVAL_REQUEST_DATE")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_WtW_EXIT_INFO")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_FAMILY_HOMEOWNERSHIP")));
                 tc.add(new TableColumns("String", (String)request.getSession().getAttribute("HTFW_PRIMARY_REASON_LEAVING")));
             }       
             new Insert().go("HUD_TENANT_FSS_WtW", tc);   
             return true;
        }catch(Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
