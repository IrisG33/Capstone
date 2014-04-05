/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package DB;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Queries {
    static File propFile = new File("Z:\\Dropbox\\CMU\\Capstone\\code\\Capstone\\conf\\queries.properties");
    private static long lastModified;
    private static Properties properties = null;
    
    private static Properties loadProperties() 
    {
        Properties p = new Properties();
        try {
            lastModified = propFile.lastModified();
            FileInputStream fis = new FileInputStream(propFile);
            p.load(fis);
            fis.close();
            return p;
            } 
        catch (Exception e) 
        {
            System.out.println("Error in loading properties file: " + propFile);
            e.printStackTrace();
            return null;
        }
    }
        public static void checkProps() 
        {
        if (properties == null || propFile.lastModified() > lastModified) {
            properties = loadProperties();
        }
    }
        
        public static String getQuery(String key) 
        {
        checkProps();
        if (properties != null) {
            Object obj = properties.get(key);
            if (obj != null) {
                return ((String) obj).trim();
            }
        }
        return null;
        }
}
