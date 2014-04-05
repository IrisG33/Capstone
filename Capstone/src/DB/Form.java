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

                ArrayList<TableColumns> tc= new ArrayList<TableColumns>();    
                tc.add(new TableColumns("String", request.getParameter("HPTBD_PHA_CODE")));
                tc.add(new TableColumns("String", request.getParameter("HPTBD_PRGM")));
                tc.add(new TableColumns("String", request.getParameter("HPTBD_PROJECT_NUM")));
                tc.add(new TableColumns("String", request.getParameter("HPTBD_BLD_NUM")));
                tc.add(new TableColumns("String", request.getParameter("HPTBD_BLD_ENT_NUM")));
                tc.add(new TableColumns("String", request.getParameter("HPTBD_UNIT_NUM")));
                int HTH_SNO = new Insert().goAutoIncrement("HUD_PHA_TENANT_BLD_DTLS", tc);
                request.getSession().setAttribute("HTH_SNO", HTH_SNO);
   
                new Insert().go("HUD_TENANT_PHA_ACTION", tc);
        return true;
        }
        catch(Exception ex){
            return false;
        }
    }
    
    public boolean form2(HttpServletRequest request){
        try{
                ArrayList<TableColumns> tc= new ArrayList<TableColumns>();
                tc.add(new TableColumns("String", request.getParameter("HPAD_PHA_CODE")));
                tc.add(new TableColumns("String", request.getParameter("HPAD_AGENCY_NAME")));
                //set the Table name here
                new Insert().go("HUD_PHA_AGENCY_DTLS", tc);
                
                ArrayList<TableColumns> tc2= new ArrayList<TableColumns>();    
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_PHA_CODE")));
                tc2.add(new TableColumns("Integer","1"));
                //tc2.add(new TableColumns("Integer", (String)request.getSession().getAttribute("HPTBD_SNO_HOUSEHOLD")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_PRGM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_PROJECT_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_BLD_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_BLD_ENT_NUM")));
                tc2.add(new TableColumns("String", request.getParameter("HPTBD_UNIT_NUM")));
                int HPTBD_SNO_HOUSEHOLD = new Insert().goAutoIncrement("HUD_PHA_TENANT_BLD_DTLS", tc2);
                
                ArrayList<TableColumns> tc3= new ArrayList<TableColumns>();    
                tc3.add(new TableColumns("String", request.getParameter("HPAC_ACTION_TYPE")));
                int HPAC_ACTION_SNO = new Insert().goAutoIncrement("HUD_PHA_ACTION_CODE", tc3);
                
                ArrayList<TableColumns> tc4= new ArrayList<TableColumns>();    
                tc4.add(new TableColumns("Integer", Integer.toString(HPAC_ACTION_SNO)));
                tc4.add(new TableColumns("Integer", Integer.toString(HPTBD_SNO_HOUSEHOLD)));
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
        catch(Exception ex){
            return false;
        }
    }
}
