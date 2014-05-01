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
public class Form_Shanshan {
    public boolean rentCal6(HttpServletRequest request){
        try{
            ArrayList<TableColumns> tc= new ArrayList<TableColumns>();
            tc.add(new TableColumns("String", request.getParameter("HTPHHO_FAMILY_MOVING")));
            tc.add(new TableColumns("Date", request.getParameter("HTPHHO_HQS_INSPECTION_DATE")));
            tc.add(new TableColumns("String", request.getParameter("HTPHHO_FAMILY_PHA_JURISDICTION")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_COST_BILLED")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PHA_CODE_BILLED")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_MONTHLY_HOMEOWNERSHIP_PAYMENT")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_UTLITY_ALLOWANCE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_MONTHLY_MAINTAIN_ALLOWANCE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_MONTHLY_REPAIR_ALLOWANCE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_MONTHLY_CON_ASSESSMENTS")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_MONTHLY_PRINCIPAL_INTEREST")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_GROSS_HOME_EXPENSE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PAYMENT_STANDARD")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_GROSS_PAYMENT_STANDARD")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_TTP")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_HAP")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_TOT_FAMILY_SHARE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_NORMAL_TOT_HAP")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_TOT_NO_ELIGIBLE")));            
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_TOT_NO_FAMILY")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_PRORATION_PERCENTAGE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_PRORATED_HAP")));
            tc.add(new TableColumns("Integer", request.getParameter("HTPHHO_PR_MIXED_TOT_FAMILY_SHARE")));
            new Insert().go("HUD_TENANT_PHA_HOUSEHOLD_HOME_OWNERSHIP_VOUCHERS", tc);         
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
   
    
    public boolean rentCal7(HttpServletRequest request) {        
        try{
            ArrayList<TableColumns> tc= new ArrayList<TableColumns>();
            tc.add(new TableColumns("String", request.getParameter("HTFW_SPECIAL_PROGRAMS")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_FSS_REPORT_CATEGORY")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_FSS_EFFECTIVE_DATE")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PHA_ADMIN_FSS_CONTRACT")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_WtW_REPORT_CATEGORY")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_WtW_EFFECTIVE_DATE")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PHA_WtW_VOUCHER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PHA_WtW_COUNTING_VOUCHER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_GENERAL_INFO")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_CURRENT_EMPLOY_STATUS")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_DATE_CURRENT_EMPLOYMENT")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_BENEFITS_CURRENT_EMPLOYMENT")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_YEARS_COMPLETED_HEAD")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_ASSISTANCE_RECEIVED_FAMILY")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_NO_CHILDREN_SERVICES")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_EDUCATION_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_EDUCATION_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_EDUCATION_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_GED_NEED")));            
            tc.add(new TableColumns("String", request.getParameter("HTFW_GED_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_GED_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HS_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HS_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HS_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PS_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PS_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PS_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_VOCATIONAL_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_VOCATIONAL_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_VOCATIONAL_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_SEARCH_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_SEARCH_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_SEARCH_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_RETENTION_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_RETENTION_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_JOB_RETENTION_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_TRANSPORTATION_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_TRANSPORTATION_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_TRANSPORTATION_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HEALTH_SERVICES_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HEALTH_SERVICES_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HEALTH_SERVICES_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_ALCOHOL_PREVENTION_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_ALCOHOL_PREVENTION_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_ALCOHOL_PREVENTION_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_MENTORING_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_MENTORING_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_MENTORING_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HOME_OWNERSHIP_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HOME_OWNERSHIP_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_HOME_OWNERSHIP_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_IDA_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_IDA_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_IDA_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_CHILD_CARE_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_CHILD_CARE_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_CHILD_CARE_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_NONE_CARE_NEED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_NONE_CARE_NEED_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_NONE_CARE_NEED_SERVICE_PROVIDER")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_FSS_INITIAL_START_DATE")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_FSS_INITIAL_END_DATE")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_FSS_CONTRACT_DATE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTFW_FSS_NO_FAMILY_MEMBERS")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_FSS_FAMILY_SELECTION_PREF")));
            tc.add(new TableColumns("Integer", request.getParameter("HTFW_FSS_CURRENT_ACCOUNT_MONTHLY_CREDIT")));
            tc.add(new TableColumns("Integer", request.getParameter("HTFW_FSS_CURRENT_ACCOUNT_BALANCE")));
            tc.add(new TableColumns("Integer", request.getParameter("HTFW_FSS_AMOUNT_DISBURSED")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_FAMILY_CONTRACT_PARTICIPATION")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_FAMILY_HOMEOWNERSHIP")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_PRIMARY_REASON_EXIT")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_VOUCHER_ISSUED_DATE")));
            tc.add(new TableColumns("Date", request.getParameter("HTFW_LEASE_APPROVAL_REQUEST_DATE")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_WtW_EXIT_INFO")));
            tc.add(new TableColumns("String", request.getParameter("HTFW_FAMILY_HOMEOWNERSHIP")));     
            new Insert().go("HUD_TENANT_FSS_WtW", tc);         
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }     
    }
    
}
